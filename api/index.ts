import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Mistral } from '@mistralai/mistralai';

// ═══════════════════════════════════════════════════════════════
//  HUCHITÍ OS — Serverless API para Vercel
//  Motor Primario: Google Gemini (gemini-2.0-flash)
//  Motor Fallback: Mistral AI (mistral-small-latest)
//
//  En cada request: Gemini primero. Si 429 → Mistral automático.
// ═══════════════════════════════════════════════════════════════

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY || '';

const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;
const mistral = MISTRAL_API_KEY ? new Mistral({ apiKey: MISTRAL_API_KEY }) : null;

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
    throw new Error('MISTRAL_API_KEY no configurada en variables de entorno de Vercel.');
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
 * Gemini primero → si 429/cuota → Mistral Cloud.
 */
async function callAI(systemPrompt: string, userPrompt: string, temperature = 0.7): Promise<{ text: string; engine: string }> {
  // Intentar Gemini primero
  if (genAI && GEMINI_API_KEY) {
    try {
      const text = await callGemini(systemPrompt, userPrompt, temperature);
      return { text, engine: 'gemini' };
    } catch (err: any) {
      const msg = err.message || '';
      if (msg.includes('429') || msg.includes('quota') || msg.includes('rate') || msg.includes('Too Many Requests')) {
        console.warn(`[FALLBACK] Gemini cuota excedida → Mistral`);
      } else {
        console.warn(`[GEMINI ERROR] ${msg.slice(0, 120)} → intentando Mistral`);
      }
    }
  }

  // Fallback: Mistral Cloud
  if (mistral && MISTRAL_API_KEY) {
    const text = await callMistral(systemPrompt, userPrompt, temperature);
    return { text, engine: 'mistral' };
  }

  throw new Error('Ningún motor AI disponible. Configura GEMINI_API_KEY o MISTRAL_API_KEY.');
}

function setCors(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { url = '' } = req;
  const path = url.replace(/^\/api/, '').split('?')[0];

  try {
    if (path === '/status' && req.method === 'GET') {
      return res.json({
        ok: true,
        engines: {
          gemini: GEMINI_API_KEY ? 'ready' : 'no_key',
          mistral: MISTRAL_API_KEY ? 'ready' : 'no_key',
        },
      });
    }

    if (path === '/explain' && req.method === 'POST') {
      const { vocablo, significado } = req.body || {};
      const { text, engine } = await callAI(
        'Lingüista de revitalización huchití (Baja California Sur). Español claro, sin términos coloniales. Máx 3 párrafos.',
        `Explica "${vocablo}" (${significado}). Cubre: origen fonológico en el sistema tetravocálico a/e/i/u, función gramatical en orden SOV, neopermanencia cultural. Sin rodeos.`,
        0.65
      );
      return res.json({ text, engine });
    }

    if (path === '/build-phrase' && req.method === 'POST') {
      const { phrase = '' } = req.body || {};
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
      if (!jsonMatch) throw new Error('JSON Error');
      return res.json({ ...JSON.parse(jsonMatch[0]), engine });
    }

    if (path === '/oraculo' && req.method === 'POST') {
      const { messages = [] } = req.body || {};
      const history = messages.map((m: any) => `${m.role}: ${m.content}`).join('\n');
      const last = messages.filter((m: any) => m.role === 'user').pop()?.content || '';
      const { text, engine } = await callAI(
        `Anciano huchití de Baja California Sur. Hablas con cadencia ritual: pausas marcadas, metáforas del desierto/mar/cielo nocturno. Nunca usas modismos ibéricos (no: "vosotros", "pues", "anda"). Intercala ocasionalmente términos huchití clave (Airapí, Apaté, Tammia). Máx 75 palabras.`,
        history ? `${history}\n\n→ "${last}"` : last,
        0.88
      );
      return res.json({ text, engine });
    }

    if (path === '/describe-image' && req.method === 'POST') {
      const { prompt = '' } = req.body || {};
      const { text, engine } = await callAI(
        'Arqueólogo de arte rupestre peninsular. Describes pinturas huchití: pigmentos (ocre, hematita, carbón, caolín), trazos digitales sobre basalto/granito, iconografía costera del golfo. Léxico técnico + poético. Sin clichés precolombinos genéricos.',
        `Visualiza en pintura rupestre huchití: "${prompt}". Describe pigmentos, soportes líticos, trazos, iconos y composición espacial. Máx 150 palabras.`,
        0.78
      );
      return res.json({ text, engine });
    }

    return res.status(404).json({ error: 'Not found' });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
