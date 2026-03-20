import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Mistral } from '@mistralai/mistralai';

// ═══════════════════════════════════════════════════════════════
//  HUCHITÍ OS — Serverless API para Vercel
//  Motor Primario: Google Gemini (gemini-2.0-flash)
//  Motor Fallback: Mistral AI (mistral-small-latest)
//  Prompts: Corpus documental embebido (Zamponi 2004, Baegert)
// ═══════════════════════════════════════════════════════════════

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY || '';

const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;
const mistral = MISTRAL_API_KEY ? new Mistral({ apiKey: MISTRAL_API_KEY }) : null;

async function callGemini(sp: string, up: string, t = 0.7): Promise<string> {
  if (!genAI || !GEMINI_API_KEY) throw new Error('GEMINI_NO_KEY');
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash', systemInstruction: sp, generationConfig: { temperature: t } });
  return (await model.generateContent(up)).response.text();
}

async function callMistral(sp: string, up: string, t = 0.7): Promise<string> {
  if (!mistral || !MISTRAL_API_KEY) throw new Error('MISTRAL_NO_KEY');
  const r = await mistral.chat.complete({ model: 'mistral-small-latest', messages: [{ role: 'system', content: sp }, { role: 'user', content: up }], temperature: t });
  const text = r.choices?.[0]?.message?.content;
  if (!text || typeof text !== 'string') throw new Error('Mistral sin texto');
  return text;
}

async function callAI(sp: string, up: string, t = 0.7): Promise<{ text: string; engine: string }> {
  if (genAI && GEMINI_API_KEY) {
    try { return { text: await callGemini(sp, up, t), engine: 'gemini' }; }
    catch (err: any) { console.warn(`[FALLBACK] ${(err.message || '').slice(0, 80)} → Mistral`); }
  }
  if (mistral && MISTRAL_API_KEY) return { text: await callMistral(sp, up, t), engine: 'mistral' };
  throw new Error('Sin motor AI disponible.');
}

// ═══════════════════════════════════════════════════════════════
//  CORPUS Y PROMPTS (idénticos al servidor local)
// ═══════════════════════════════════════════════════════════════

const CORPUS = `
VOCABULARIO HUCHITÍ DOCUMENTADO (Zamponi 2004, Baegert 1751-1768):
- datembà /da'tem.ba/: la tierra. Los individuos pertenecen a datembà, no al revés.
- tekerakadatemba: el cielo = tekereká (curvo) + datembà (tierra). "La tierra arqueada."
- ambía /am'bi.a/: pitahaya dulce Y un año completo. El tiempo nace con el fruto del cactus.
- atacá /a.ta'ka/: lo bueno, abundancia armónica. atacá-ra: lo malo (sufijo negador -ra).
- umutù /u'mu.tu/: recordar. kumutú = "nosotros recordamos."
- tiyeicha: poder hablar. Los decretos de 1795 intentaron borrar este acto.
- kuitscharrakè: perdonar, restaurar el vínculo roto.
- vâra: no, nada, el vacío absoluto.
- éte: hombre (pl: ti). ánaï: mujer (pl: kánaï).
- katé: nosotros. kepe-dáre: "nuestro padre/ancestro."
- aëna: arriba, el cenit. untâiri: día, ciclo solar.
- tina: tinaja natural. maniká: pigmento ocre. dáre/cue: padre (según género del emisor).
MORFOLOGÍA: polisíntesis, posesión inalienable (be-/e-/kepe-), alienable (bekún), plural (-ma/-mma o k-), negación (-ra), orden SOV, vocales: a/e/i/u.`.trim();

const NO = `PROHIBIDO: "Es importante destacar", "cabe señalar", "sin duda", "resulta interesante", "es fascinante", "en definitiva", "vale la pena", "como podemos ver", "en conclusión", "por lo tanto". Sin adverbios vacíos. Primera oración densa. Cierra con imagen concreta.`;

const PROMPT_EXPLAIN = `Último archivero de la familia Guaycura-Huchití. Marco: justicia epistémica, neopermanencia.
${CORPUS}
${NO}
Conecta morfología polisintética, sistema tetravocálico, paisaje (Sierra de la Laguna, Mar de Cortés). Escribe como quien talla ocre sobre basalto. Máx 3 párrafos documentales.`;

const PROMPT_BUILD = `Fonólogo de lenguas yumanas. Reglas de Zamponi (2004) y Baegert.
${CORPUS}
Vocales: SOLO a/e/i/u. Consonantes: p t k m n h y w ch. Orden SOV. Sílabas CV/CVV. Acento llano. TTS: puntos como micro-pausas. SOLO JSON válido.`;

const PROMPT_ORACULO = `Guama (chamán-archivista) huchití. Hablas desde la Sierra de la Laguna. Vocabulario natural: datembà, tekerakadatemba, ambía, atacá, umutù/kumutú, tina, maniká, vâra, kuitscharrakè.
Frases cortas. Pausas con puntos suspensivos. Nunca explicas — revelas. Intercala vocablos huchití naturalmente.
${NO}
Nunca preguntes "¿en qué puedo ayudarte?"
Ejemplo: "El viento trae el polvo de los que caminaron antes... datembà los recuerda aunque tú no. Kumutú — nosotros recordamos."
Máx 60 palabras.`;

const PROMPT_IMAGE = `Testigo directo del Gran Mural. Sitios: Cueva Pintada de San Gregorio, Cueva del Ratón, Cueva de las Flechas, San Borjitas, Cuesta Palmarito. Rojo (maniká/ocre) = vida. Negro (carbón) = umbral. Soporte: basalto, granito. Figuras interactúan con ciclos solares.
${NO}
Escribe como guama describiendo su obra. Primera oración al motivo. Máx 120 palabras.`;

const T = { explain: 0.55, build: 0.35, oraculo: 0.68, image: 0.62 };

function setCors(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const path = (req.url || '').replace(/^\/api/, '').split('?')[0];

  try {
    if (path === '/status' && req.method === 'GET') {
      return res.json({
        ok: true,
        engines: { gemini: GEMINI_API_KEY ? 'ready' : 'no_key', mistral: MISTRAL_API_KEY ? 'ready' : 'no_key' },
      });
    }

    if (path === '/explain' && req.method === 'POST') {
      const { vocablo, significado } = req.body || {};
      const { text, engine } = await callAI(PROMPT_EXPLAIN,
        `Explica "${vocablo}" (${significado}). Cubre: origen fonológico, función gramatical SOV, neopermanencia cultural.`, T.explain);
      return res.json({ text, engine });
    }

    if (path === '/build-phrase' && req.method === 'POST') {
      const { phrase = '' } = req.body || {};
      const { text: raw, engine } = await callAI(PROMPT_BUILD,
        `Procesa: "${phrase}"\n{"palabra_original":"${phrase}","analisis_silabico":"[morfemas CV]","transcripcion_ipa":"[IPA]","cadena_optimizada_tts":"[fonética rítmica]"}`, T.build);
      const m = raw.match(/\{[\s\S]*\}/);
      if (!m) throw new Error('JSON Error');
      return res.json({ ...JSON.parse(m[0]), engine });
    }

    if (path === '/oraculo' && req.method === 'POST') {
      const { messages = [] } = req.body || {};
      const history = messages.map((m: any) => `${m.role}: ${m.content}`).join('\n');
      const last = messages.filter((m: any) => m.role === 'user').pop()?.content || '';
      const { text, engine } = await callAI(PROMPT_ORACULO,
        history ? `${history}\n\n→ "${last}"` : last, T.oraculo);
      return res.json({ text, engine });
    }

    if (path === '/describe-image' && req.method === 'POST') {
      const { prompt = '' } = req.body || {};
      const { text, engine } = await callAI(PROMPT_IMAGE,
        `Visualiza en pintura rupestre huchití: "${prompt}". Describe pigmentos, soportes, trazos, iconos.`, T.image);
      return res.json({ text, engine });
    }

    return res.status(404).json({ error: 'Not found' });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
