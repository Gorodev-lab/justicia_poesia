import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';

// ═══════════════════════════════════════════════════════════════
//  HUCHITÍ OS — Serverless API para Vercel
//  Motor de IA: Google Gemini (gemini-2.0-flash)
// ═══════════════════════════════════════════════════════════════

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || ''
);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function callGemini(systemPrompt: string, userPrompt: string, temperature = 0.7): Promise<string> {
  if (!GEMINI_API_KEY) throw new Error('GEMINI_API_KEY no configurada.');
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
    systemInstruction: systemPrompt,
    generationConfig: { temperature },
  });
  const result = await model.generateContent(userPrompt);
  return result.response.text();
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
      return res.json({ ok: true, engine: 'Gemini 2.0 Flash', gemini: !!GEMINI_API_KEY });
    }

    if (path === '/explain' && req.method === 'POST') {
      const { vocablo, significado } = req.body || {};
      const text = await callGemini(
        'Eres un experto en Lingüística de Resurrección y Justicia Filosófica. Respondes en español de forma solemne y respetuosa sobre la cultura huchití.',
        `Explica el término "${vocablo}" (${significado}). Máximo 3 párrafos.`,
        0.7
      );
      return res.json({ text });
    }

    if (path === '/build-phrase' && req.method === 'POST') {
      const { phrase = '' } = req.body || {};
      const raw = await callGemini(
        'Eres un experto en fonética ritual huchití. Creas neologismos basados en morfología descriptiva.',
        `Analiza esta frase: "${phrase}". Crea una fonética rítmica para TTS usando puntos para pausas (ej: "A.ee-ta... i.pe-na"). Responde ÚNICAMENTE:
{
  "palabra_original": "${phrase}",
  "analisis_silabico": "[desglose]",
  "transcripcion_ipa": "[ipa]",
  "cadena_optimizada_tts": "[FONÉTICA RÍTMICA]"
}`,
        0.5
      );
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error('JSON Error');
      return res.json(JSON.parse(jsonMatch[0]));
    }

    if (path === '/oraculo' && req.method === 'POST') {
      const { messages = [] } = req.body || {};
      const history = messages.map((m: any) => `${m.role}: ${m.content}`).join('\n');
      const last = messages.filter((m: any) => m.role === 'user').pop()?.content || '';
      const text = await callGemini(
        'Eres un anciano sabio Huchití. Hablas de forma rítmica, pausada y ritualística. Usa metáforas del desierto.',
        history ? `Contexto:\n${history}\n\nPregunta: ${last}` : last,
        0.85
      );
      return res.json({ text });
    }

    if (path === '/describe-image' && req.method === 'POST') {
      const { prompt = '' } = req.body || {};
      const text = await callGemini(
        'Eres un artista de arte rupestre. Describes visiones con pigmentos minerales.',
        `Describe visualmente: "${prompt}".`,
        0.8
      );
      return res.json({ text });
    }

    return res.status(404).json({ error: 'Not found' });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
