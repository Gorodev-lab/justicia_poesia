import express from 'express';
import { createServer } from 'http';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
app.use(express.json({ limit: '50mb' }));

// --- Configuración de modelos ---
// Preferimos Gemini (online) para despliegues como Vercel y para "hardcodear" respuestas coherentes.
// Mantenemos la estructura de Mistral como fallback local si es necesario.
const GENAI_API_KEY = process.env.VITE_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(GENAI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

const MISTRAL_BASE_URL = 'http://localhost:8001/v1';
const MODEL_ID = '/home/gorops/models/Mistral-7B-Instruct-v0.3-Q4_K_M.gguf';

// CORS para el frontend Vite
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// --- Helper: decidir qué modelo usar ---
async function callAI(messages: { role: string; content: string }[], options: any = {}) {
  if (GENAI_API_KEY) {
    try {
      // Prompt dinámico basado en el historial de mensajes
      const prompt = messages.map(m => `${m.role}: ${m.content}`).join('\n');
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (e) {
      console.error('Gemini error, falling back to Mistral (if reachable):', e);
    }
  }

  // Fallback a Mistral Local
  const body = {
    model: MODEL_ID,
    messages,
    max_tokens: options.max_tokens ?? 1024,
    temperature: options.temperature ?? 0.7,
    ...(options.response_format ? { response_format: options.response_format } : {}),
  };

  const response = await fetch(`${MISTRAL_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Mistral error ${response.status}`);
  }
  const data = await response.json() as any;
  return data.choices[0].message.content as string;
}

// ====================================================
// ENDPOINT 1: Explicar vocablo huchití
// ====================================================
app.post('/api/explain', async (req, res) => {
  const { vocablo, significado } = req.body;
  try {
    const messages = [
      {
        role: 'system',
        content: 'Eres un experto en Lingüística de Resurrección y Justicia Filosófica. Respondes en español de forma concisa, educativa y respetuosa sobre la cultura huchití de Baja California Sur.'
      },
      {
        role: 'user',
        content: `Explica el contexto del término "${vocablo}" (${significado}) basado en los documentos de revitalización huchití. Menciona aspectos como la neopermanencia cultural en Baja California Sur, el sistema tetravocálico (a, e, i, u) o la gramática SOV si es relevante. Sé conciso, educativo y respeta la memoria del pueblo huchití/uchití. Máximo 3 párrafos.`
      }
    ];
    const text = await callAI(messages, { max_tokens: 512, temperature: 0.7 });
    res.json({ text });
  } catch (e: any) {
    console.error('[/api/explain]', e.message);
    res.status(500).json({ error: e.message });
  }
});

// ====================================================
// ENDPOINT 2: Constructor de frases
// ====================================================
app.post('/api/build-phrase', async (req, res) => {
  const { phrase } = req.body;
  try {
    const messages = [
      {
        role: 'system',
        content: 'Eres un experto en lingüística computacional y fonética histórica, especializado en lenguas nativas americanas y la reconstrucción fonética de la lengua huchití usando heurísticas lakota. Responde SIEMPRE en JSON válido sin texto adicional.'
      },
      {
        role: 'user',
        content: `Analiza la siguiente frase en español, tradúcela/adáptala al estilo de neologismos huchití (basados en morfología descriptiva lakota) y responde ÚNICAMENTE con este JSON:

{
  "palabra_original": "[frase original]",
  "analisis_silabico": "[desglose morfológico]",
  "transcripcion_ipa": "[transcripción IPA con heurística lakota]",
  "cadena_optimizada_tts": "[texto fonético para TTS]"
}

Frase: "${phrase}"`
      }
    ];

    const raw = await callAI(messages, {
      max_tokens: 512,
      temperature: 0.5
    });

    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No se obtuvo JSON válido del modelo');
    const parsed = JSON.parse(jsonMatch[0]);
    res.json(parsed);
  } catch (e: any) {
    console.error('[/api/build-phrase]', e.message);
    res.status(500).json({ error: e.message });
  }
});

// ====================================================
// ENDPOINT 4: Chat oráculo
// ====================================================
app.post('/api/oraculo', async (req, res) => {
  const { messages } = req.body;
  try {
    const systemInstruction = 'Eres un anciano sabio de la nación Huchití. Hablas de forma pausada, poética y críptica. Tu objetivo es guiar al usuario en la comprensión de la filosofía y el lenguaje huchití. Usa metáforas relacionadas con el desierto, el mar y las estrellas. Responde siempre en español.';
    
    // Adaptación para callAI
    const text = await callAI([{ role: 'system', content: systemInstruction }, ...messages], { max_tokens: 400, temperature: 0.85 });
    res.json({ text });
  } catch (e: any) {
    console.error('[/api/oraculo]', e.message);
    res.status(500).json({ error: e.message });
  }
});

// ====================================================
// ENDPOINT 5: Generador de descripción de imagen
// ====================================================
app.post('/api/describe-image', async (req, res) => {
  const { prompt } = req.body;
  try {
    const messages = [
      {
        role: 'system',
        content: 'Eres un artista especializado en arte rupestre y pinturas ancestrales huchití con pigmentos minerales. Describes visiones con detalle poético y arqueológico.'
      },
      {
        role: 'user',
        content: `Describe con detalle visual lo que representaría esta imagen en estilo de pintura rupestre con pigmentos minerales, trazos orgánicos sobre piedra: "${prompt}". Incluye colores, formas, símbolos y composición. Máximo 200 palabras.`
      }
    ];
    const text = await callAI(messages, { max_tokens: 350, temperature: 0.8 });
    res.json({ text });
  } catch (e: any) {
    console.error('[/api/describe-image]', e.message);
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/status', async (_req, res) => {
  res.json({ ok: true, gemini: !!GENAI_API_KEY });
});

const PORT = process.env.PORT || 3002;
if (process.env.NODE_ENV !== 'production') {
  createServer(app).listen(PORT, () => {
    console.log(`🏛️  Huchití OS Backend — escuchando en puerto ${PORT}`);
    console.log(`✨ Proveedor: ${GENAI_API_KEY ? 'Gemini (Online)' : 'Mistral (Local Fallback)'}`);
  });
}

export default app;
