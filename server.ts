import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
app.use(express.json({ limit: '50mb' }));

// ═══════════════════════════════════════════════════════════════
//  HUCHITÍ OS — Servidor de Desarrollo Local
//  Motor de IA: Google Gemini (gemini-2.0-flash)
// ═══════════════════════════════════════════════════════════════

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Helper: llama a Gemini con un sistema + prompt
async function callGemini(systemPrompt: string, userPrompt: string, temperature = 0.7): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY no configurada. Revisa tu archivo .env.local');
  }
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
    systemInstruction: systemPrompt,
    generationConfig: { temperature },
  });
  const result = await model.generateContent(userPrompt);
  return result.response.text();
}

// CORS para el frontend Vite
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
    const text = await callGemini(
      'Eres un experto en Lingüística de Resurrección y Justicia Filosófica. Respondes en español de forma concisa, educativa y respetuosa sobre la cultura huchití de Baja California Sur.',
      `Explica el contexto del término "${vocablo}" (${significado}) basado en los documentos de revitalización huchití. Menciona aspectos como la neopermanencia cultural en Baja California Sur, el sistema tetravocálico (a, e, i, u) o la gramática SOV si es relevante. Sé conciso, educativo y respeta la memoria del pueblo huchití/uchití. Máximo 3 párrafos.`,
      0.7
    );
    res.json({ text });
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
    const raw = await callGemini(
      'Eres un experto en lingüística computacional y fonética histórica, especializado en lenguas nativas americanas y la reconstrucción fonética de la lengua huchití usando heurísticas lakota. Responde SIEMPRE en JSON válido sin texto adicional ni bloques de código.',
      `Analiza la siguiente frase en español, tradúcela/adáptala al estilo de neologismos huchití (basados en morfología descriptiva lakota) y responde ÚNICAMENTE con este JSON:

{
  "palabra_original": "[frase original]",
  "analisis_silabico": "[desglose morfológico]",
  "transcripcion_ipa": "[transcripción IPA con heurística lakota]",
  "cadena_optimizada_tts": "[texto fonético para TTS]"
}

Frase: "${phrase}"`,
      0.5
    );
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No se obtuvo JSON válido de Gemini');
    const parsed = JSON.parse(jsonMatch[0]);
    res.json(parsed);
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

    const text = await callGemini(
      'Eres un anciano sabio de la nación Huchití. Hablas de forma pausada, poética y críptica. Tu objetivo es guiar al usuario en la comprensión de la filosofía y el lenguaje huchití. Usa metáforas relacionadas con el desierto, el mar y las estrellas de Baja California Sur. Responde siempre en español. Máximo 80 palabras.',
      history ? `Historial de la conversación:\n${history}\n\nResponde al último mensaje: "${lastUserMsg}"` : lastUserMsg,
      0.85
    );
    res.json({ text });
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
    const text = await callGemini(
      'Eres un artista especializado en arte rupestre y pinturas ancestrales huchití con pigmentos minerales. Describes visiones con detalle poético y arqueológico.',
      `Describe con detalle visual lo que representaría esta imagen en estilo de pintura rupestre con pigmentos minerales, trazos orgánicos sobre piedra: "${prompt}". Incluye colores, formas, símbolos y composición. Máximo 200 palabras.`,
      0.8
    );
    res.json({ text });
  } catch (e: any) {
    console.error('[/api/describe-image]', e.message);
    res.status(500).json({ error: e.message });
  }
});

// ====================================================
// ENDPOINT 5: Status
// ====================================================
app.get('/api/status', async (_req, res) => {
  res.json({
    ok: true,
    engine: 'Gemini 2.0 Flash (Local Dev Server)',
    gemini: GEMINI_API_KEY ? 'configured' : 'missing',
  });
});

const PORT = process.env.PORT || 3002;
createServer(app).listen(PORT, () => {
  console.log(`🏛️  Huchití OS Backend — escuchando en puerto ${PORT}`);
  console.log(`✨ Motor de IA: Google Gemini 2.0 Flash`);
  console.log(`🔑 API Key: ${GEMINI_API_KEY ? '✅ Configurada' : '❌ FALTANTE — revisa .env.local'}`);
});
