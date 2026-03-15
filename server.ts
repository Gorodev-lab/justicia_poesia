import express from 'express';
import { createServer } from 'http';

const app = express();
app.use(express.json({ limit: '50mb' }));

// --- Configuración del modelo local ---
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

// --- Helper: llamada al endpoint de Mistral local ---
async function callMistral(messages: { role: string; content: string }[], options: {
  max_tokens?: number;
  temperature?: number;
  response_format?: { type: string };
} = {}) {
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
    const err = await response.text();
    throw new Error(`Mistral error ${response.status}: ${err}`);
  }
  const data = await response.json() as any;
  return data.choices[0].message.content as string;
}

// ====================================================
// ENDPOINT 1: Explicar vocablo huchití
// POST /api/explain
// { vocablo: string, significado: string }
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
    const text = await callMistral(messages, { max_tokens: 512, temperature: 0.7 });
    res.json({ text });
  } catch (e: any) {
    console.error('[/api/explain]', e.message);
    res.status(500).json({ error: e.message });
  }
});

// ====================================================
// ENDPOINT 2: Constructor de frases (análisis morfológico)
// POST /api/build-phrase
// { phrase: string }
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

    const raw = await callMistral(messages, {
      max_tokens: 512,
      temperature: 0.5,
      response_format: { type: 'json_object' }
    });

    // Extrae JSON aunque Mistral envuelva con markdown
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No se obtuvo JSON válido de Mistral');
    const parsed = JSON.parse(jsonMatch[0]);
    res.json(parsed);
  } catch (e: any) {
    console.error('[/api/build-phrase]', e.message);
    res.status(500).json({ error: e.message });
  }
});

// ====================================================
// ENDPOINT 3: Transcribir audio (fallback a texto)
// POST /api/transcribe
// { audioBase64: string, mimeType: string }
// Nota: Mistral-7B no procesa audio → devuelve placeholder
// ====================================================
app.post('/api/transcribe', async (req, res) => {
  // Mistral GGUF no tiene ASR nativo; devolvemos un mensaje informativo
  // para que el usuario sepa que debe usar la STT nativa del navegador
  res.json({ text: '[Transcripción: usa el campo de texto directamente]' });
});

// ====================================================
// ENDPOINT 4: Chat oráculo (conversación textual)
// POST /api/oraculo
// { messages: [{role, content}] }
// ====================================================
app.post('/api/oraculo', async (req, res) => {
  const { messages } = req.body;
  try {
    const systemMsg = {
      role: 'system',
      content: 'Eres un anciano sabio de la nación Huchití. Hablas de forma pausada, poética y críptica. Tu objetivo es guiar al usuario en la comprensión de la filosofía y el lenguaje huchití. Usa metáforas relacionadas con el desierto, el mar y las estrellas. Responde siempre en español.'
    };
    const chatMessages = [systemMsg, ...messages];
    const text = await callMistral(chatMessages, { max_tokens: 400, temperature: 0.85 });
    res.json({ text });
  } catch (e: any) {
    console.error('[/api/oraculo]', e.message);
    res.status(500).json({ error: e.message });
  }
});

// ====================================================
// ENDPOINT 5: Generador de descripción de imagen
// POST /api/describe-image
// { prompt: string }
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
    const text = await callMistral(messages, { max_tokens: 350, temperature: 0.8 });
    res.json({ text });
  } catch (e: any) {
    console.error('[/api/describe-image]', e.message);
    res.status(500).json({ error: e.message });
  }
});

// ====================================================
// ENDPOINT 6: Estado del servidor y modelos activos
// GET /api/status
// ====================================================
app.get('/api/status', async (_req, res) => {
  try {
    const r = await fetch(`${MISTRAL_BASE_URL}/models`);
    const data = await r.json() as any;
    res.json({ ok: true, models: data.data?.map((m: any) => m.id) ?? [] });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

const PORT = 3002;
createServer(app).listen(PORT, () => {
  console.log(`🏛️  Huchití OS Backend — escuchando en http://localhost:${PORT}`);
  console.log(`🤖 Modelo activo: Mistral-7B @ ${MISTRAL_BASE_URL}`);
});
