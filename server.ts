import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Mistral } from '@mistralai/mistralai';

const app = express();
app.use(express.json({ limit: '50mb' }));

// ═══════════════════════════════════════════════════════════════
//  HUCHITÍ OS — Servidor de Desarrollo Local
//  Motor de IA Primario: Google Gemini (gemini-2.0-flash)
//  Motor de IA Fallback: Mistral AI (mistral-small-latest)
//
//  Lógica: Gemini primero. Si falla por cuota (429) o error,
//          cambia automáticamente a Mistral Cloud API.
// ═══════════════════════════════════════════════════════════════

// ---- Configuración de motores AI ----
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY || '';

const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;
const mistral = MISTRAL_API_KEY ? new Mistral({ apiKey: MISTRAL_API_KEY }) : null;

// Estado global del motor activo
let activeEngine: 'gemini' | 'mistral' = GEMINI_API_KEY ? 'gemini' : 'mistral';
let geminiQuotaExhausted = false;
let geminiQuotaResetTimer: ReturnType<typeof setTimeout> | null = null;

/**
 * Marca el motor Gemini como sin cuota y activa Mistral.
 * Reintenta Gemini automáticamente después de 60 segundos.
 */
function switchToMistral(reason: string) {
  if (geminiQuotaExhausted) return; // ya estamos en fallback
  console.warn(`⚠️  [FALLBACK] Gemini → Mistral: ${reason}`);
  geminiQuotaExhausted = true;
  activeEngine = 'mistral';

  // Reintentar Gemini después de 60s (la cuota por minuto suele resetarse)
  if (geminiQuotaResetTimer) clearTimeout(geminiQuotaResetTimer);
  geminiQuotaResetTimer = setTimeout(() => {
    console.log('🔄 [FALLBACK] Reintentando motor Gemini...');
    geminiQuotaExhausted = false;
    activeEngine = GEMINI_API_KEY ? 'gemini' : 'mistral';
  }, 60_000);
}

// ---- Motor Gemini ----
async function callGemini(systemPrompt: string, userPrompt: string, temperature = 0.7): Promise<string> {
  if (!genAI || !GEMINI_API_KEY) throw new Error('GEMINI_NO_KEY');
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
    systemInstruction: systemPrompt,
    generationConfig: { temperature },
  });
  const result = await model.generateContent(userPrompt);
  return result.response.text();
}

// ---- Motor Mistral (Cloud API) ----
async function callMistral(systemPrompt: string, userPrompt: string, temperature = 0.7): Promise<string> {
  if (!mistral || !MISTRAL_API_KEY) {
    throw new Error('MISTRAL_API_KEY no configurada. Agrega MISTRAL_API_KEY a tu .env.local');
  }
  const response = await mistral.chat.complete({
    model: 'mistral-small-latest',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature,
  });
  const text = response.choices?.[0]?.message?.content;
  if (!text || typeof text !== 'string') throw new Error('Mistral no devolvió texto válido');
  return text;
}

/**
 * Motor AI unificado con fallback automático.
 * 1. Intenta Gemini primero (si no está en cooldown de cuota).
 * 2. Si Gemini falla con 429 (cuota) → cambia a Mistral automáticamente.
 * 3. Si ambos fallan → lanza error descriptivo.
 */
async function callAI(systemPrompt: string, userPrompt: string, temperature = 0.7): Promise<{ text: string; engine: string }> {
  // Intentar Gemini si está disponible y no tiene cuota agotada
  if (activeEngine === 'gemini' && genAI && !geminiQuotaExhausted) {
    try {
      const text = await callGemini(systemPrompt, userPrompt, temperature);
      return { text, engine: 'gemini' };
    } catch (err: any) {
      const msg = err.message || '';
      // Detectar error de cuota (429) o rate limit
      if (msg.includes('429') || msg.includes('quota') || msg.includes('rate') || msg.includes('Too Many Requests')) {
        switchToMistral(msg.slice(0, 120));
        // Caer al fallback de Mistral abajo
      } else if (msg === 'GEMINI_NO_KEY') {
        activeEngine = 'mistral'; // No tiene key, cambiar permanentemente
      } else {
        // Error transitorio de Gemini, intentar Mistral
        console.warn(`⚠️  [GEMINI ERROR] ${msg.slice(0, 120)} — intentando Mistral...`);
      }
    }
  }

  // Fallback: Mistral Cloud API
  if (mistral && MISTRAL_API_KEY) {
    const text = await callMistral(systemPrompt, userPrompt, temperature);
    return { text, engine: 'mistral' };
  }

  throw new Error(
    'Ningún motor AI disponible. Configura GEMINI_API_KEY o MISTRAL_API_KEY en .env.local'
  );
}

// ---- CORS ----
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// ====================================================
// ENDPOINT 1: Explicar vocablo huchití
// ====================================================
app.post('/api/explain', async (req, res) => {
  const { vocablo, significado } = req.body;
  try {
    const { text, engine } = await callAI(
      'Lingüista de revitalización huchití (Baja California Sur). Español claro, sin términos coloniales. Máx 3 párrafos.',
      `Explica "${vocablo}" (${significado}). Cubre: origen fonológico en el sistema tetravocálico a/e/i/u, función gramatical en orden SOV, neopermanencia cultural. Sin rodeos.`,
      0.65
    );
    res.json({ text, engine });
  } catch (e: any) {
    console.error('[/api/explain]', e.message);
    res.status(500).json({ error: e.message });
  }
});

// ====================================================
// ENDPOINT 2: Constructor de frases huchití
// ====================================================
app.post('/api/build-phrase', async (req, res) => {
  const { phrase } = req.body;
  try {
    const { text: raw, engine } = await callAI(
      `Fonólogo de lenguas yumanas de Baja California. Reconstruyes huchití con estas reglas fonológicas estrictas:
- Vocales: SOLO a/e/i/u (sin ó/é/á/ú tónicas ibéricas)
- Consonantes permitidas: p t k m n h y w ch (sin f v z ll ñ)
- Morfología: raíz+sufijo descriptivo, orden SOV
- Sílabas abiertas preferidas (CV, CVV)
- Acento llano por defecto
- Cadena TTS: usa puntos como micro-pausas rítmicas (ej: "a.pe-ta... u.ke-na")
Responde SOLO JSON válido, sin bloques de código.`,
      `Procesa: "${phrase}"

{"palabra_original":"${phrase}","analisis_silabico":"[morfemas CV]","transcripcion_ipa":"[IPA sin fonemas ibéricos]","cadena_optimizada_tts":"[fonética rítmica nativa]"}`,
      0.45
    );
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No se obtuvo JSON válido del motor AI');
    const parsed = JSON.parse(jsonMatch[0]);
    res.json({ ...parsed, engine });
  } catch (e: any) {
    console.error('[/api/build-phrase]', e.message);
    res.status(500).json({ error: e.message });
  }
});

// ====================================================
// ENDPOINT 3: Chat oráculo huchití
// ====================================================
app.post('/api/oraculo', async (req, res) => {
  const { messages = [] } = req.body;
  try {
    const history = messages
      .map((m: { role: string; content: string }) => `${m.role === 'user' ? 'Usuario' : 'Oráculo'}: ${m.content}`)
      .join('\n');
    const lastUserMsg = messages.filter((m: { role: string }) => m.role === 'user').pop()?.content || '';

    const { text, engine } = await callAI(
      `Anciano huchití de Baja California Sur. Hablas con cadencia ritual: pausas marcadas, metáforas del desierto/mar/cielo nocturno. Nunca usas modismos ibéricos (no: "vosotros", "pues", "anda"). Intercala ocasionalmente términos huchití clave (Airapí, Apaté, Tammia). Máx 75 palabras.`,
      history ? `${history}\n\n→ "${lastUserMsg}"` : lastUserMsg,
      0.88
    );
    res.json({ text, engine });
  } catch (e: any) {
    console.error('[/api/oraculo]', e.message);
    res.status(500).json({ error: e.message });
  }
});

// ====================================================
// ENDPOINT 4: Generador de descripción de imagen (arte rupestre)
// ====================================================
app.post('/api/describe-image', async (req, res) => {
  const { prompt } = req.body;
  try {
    const { text, engine } = await callAI(
      'Arqueólogo de arte rupestre peninsular. Describes pinturas huchití: pigmentos (ocre, hematita, carbón, caolín), trazos digitales sobre basalto/granito, iconografía costera del golfo. Léxico técnico + poético. Sin clichés precolombinos genéricos.',
      `Visualiza en pintura rupestre huchití: "${prompt}". Describe pigmentos, soportes líticos, trazos, iconos y composición espacial. Máx 150 palabras.`,
      0.78
    );
    res.json({ text, engine });
  } catch (e: any) {
    console.error('[/api/describe-image]', e.message);
    res.status(500).json({ error: e.message });
  }
});

// ====================================================
// ENDPOINT 5: Status
// ====================================================
app.get('/api/status', async (_req, res) => {
  const engines = {
    gemini: GEMINI_API_KEY ? (geminiQuotaExhausted ? 'quota_exhausted' : 'ready') : 'no_key',
    mistral: MISTRAL_API_KEY ? 'ready' : 'no_key',
  };
  res.json({
    ok: true,
    activeEngine,
    engines,
    fallbackActive: geminiQuotaExhausted,
  });
});

// ====================================================
// Arranque del servidor
// ====================================================
const PORT = process.env.PORT || 3002;
createServer(app).listen(PORT, () => {
  console.log(`🏛️  Huchití OS Backend — escuchando en puerto ${PORT}`);
  console.log('');
  console.log('  Motores AI configurados:');
  console.log(`  ├─ Gemini 2.0 Flash: ${GEMINI_API_KEY ? '✅ Listo (primario)' : '❌ Sin key'}`);
  console.log(`  └─ Mistral Small:    ${MISTRAL_API_KEY ? '✅ Listo (fallback)' : '❌ Sin key'}`);
  console.log('');
  console.log(`  Motor activo: ${activeEngine.toUpperCase()}`);
  if (GEMINI_API_KEY && MISTRAL_API_KEY) {
    console.log('  🔄 Fallback automático: Gemini → Mistral (en cuota 429)');
  }
});
