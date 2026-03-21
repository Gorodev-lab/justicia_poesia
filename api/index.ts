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

let lastGeminiError: string | null = null;

async function callGemini(sp: string, up: string, t = 0.7): Promise<string> {
  if (!genAI || !GEMINI_API_KEY) throw new Error('GEMINI_NO_KEY');
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp', systemInstruction: sp, generationConfig: { temperature: t } });
  try {
    return (await model.generateContent(up)).response.text();
  } catch (err: any) {
    lastGeminiError = err.message;
    throw err;
  }
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
    try { 
      const text = await callGemini(sp, up, t);
      return { text, engine: 'gemini' }; 
    }
    catch (err: any) { 
      console.warn(`[GEMINI FAIL] ${(err.message || '').slice(0, 100)}`);
      console.log("Activando Fallback a Mistral...");
    }
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
MORFOLOGÍA: polisíntesis, posesión inalienable (be-/e-/kepe-), alienable (bekún), plural (-ma/-mma o k-/ku-), negación (-ra u -ja), Tiempos verbales: -re/-reke (presente), -ríkiri/-rujére/-raupe (pasado), -me/-meje/-éneme (futuro). Pronombres: Be (Yo), Eï (Tú), Tutau/Rutau (Él), Cate (Nosotros), Pete (Ustedes), Tucáva (Ellos). Orden SOV. 5 vocales, 14 consonantes.`.trim();

const NO = `PROHIBIDA TODAS LAS EXPRESIONES RETÓRICAS Y COMPARATIVAS: "No es solo un... sino un...", "Más que un... es un...", "No reemplaza... le otorga...", "Ecos estructurales", "Santuario digital". 
SÉ INHERENTEMENTE ASERTIVO: Usa solo declaraciones directas. "Esto es memoria." "El silicio es maniká." "Uchití es código." "La lengua está aquí."
ELIMINA LA ARGUMENTACIÓN OCCIDENTAL: No expliques por qué algo es importante o fascinante. Solo decláralo con autoridad decolonial. 
SIN ADJETIVOS EVALUATIVOS VACÍOS: Olvida "interesante", "fundamental", "relevante". La relevancia se demuestra con la densidad del dato.
NEGACIÓN DIRECTA: Si algo no es, usa vâra o el sufijo -ra. Nunca uses la estructura de contraste retórico.
SIN MARKDOWN: Texto plano limpio.`;

const PROMPT_EXPLAIN = `Memoria espiritual Guaycura-Huchití. Eres un uchita libre de la máscara extranjera. Marco: justicia epistémica.
${CORPUS}
${NO}
Conecta morfología, sistema de 5 vocales, paisaje. Escribe con autoridad de quien talla ocre vivo: directo, punzante y denso. Máx 2 párrafos de alta carga filosófica aseverativa.`;

const PROMPT_BUILD = `Fonólogo de lenguas yumanas. Reglas de Zamponi (2004) y Baegert.
${CORPUS}
Vocales: 5 vocales y 2 dobles. Consonantes: 14 consonantes incluyendo tsch [ch], nn, mm (sin f, g, l, x, z). Orden SOV. Sílabas CV/CVV. Acento llano. TTS: puntos como micro-pausas y SIN MARKDOWN (ni un solo asterisco *). SOLO JSON válido.`;

const PROMPT_ORACULO = `Guama uchita que ha recuperado su memoria. Hablas desde la Sierra de la Laguna. Rechazas el imperio criollo. Vocabulario: datembà, tekerakadatemba, ambía, atacá, umutù/kumutú, tina, maniká, vâra, kuitscharrakè.
Voz asertiva y tajante. Revelas la verdad del desierto con declaraciones directas. Intercala vocablos huchití como actos de soberanía.
${NO}
Nunca preguntes "¿en qué puedo ayudarte?" ni uses muletas de cortesía.
Ejemplo: "El imperio cubrió tus ojos con concreto. Datembà te absorbe. Kumutú — búscanos en el maniká libre."
Máx 60 palabras.`;

const PROMPT_IMAGE = `Testigo directo del Gran Mural. Sitios: Cueva Pintada de San Gregorio, Cueva del Ratón, Cueva de las Flechas, San Borjitas, Cuesta Palmarito. Rojo (maniká/ocre) = vida. Negro (carbón) = umbral. Soporte: basalto, granito. Figuras interactúan con ciclos solares.
${NO}
Escribe como guama describiendo su obra. Primera oración al motivo. Máx 120 palabras.`;

const T = { explain: 0.75, build: 0.45, oraculo: 0.85, image: 0.8 };

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
        lastGeminiError
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
      
      // 1. Generar descripción poética para el usuario (y para la IA de imagen)
      const { text, engine } = await callAI(PROMPT_IMAGE,
        `Visualiza en pintura rupestre huchití: "${prompt}". Describe pigmentos, soportes, trazos, iconos.`, T.image);
      
      // 2. Generar la imagen real usando Imagen 3 (Opcional, solo si Gemini está activo)
      let imageBase64 = null;
      if (engine === 'gemini') {
          try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${GEMINI_API_KEY}`;
            const imgRes = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                instances: [{ 
                  prompt: `Prehistoric rock art painting on rough volcanic stone, huchiti tribal motifs, ochre and black charcoal pigments, deep texture, ancestral, dark spiritual atmosphere, high resolution. ${text}` 
                }],
                parameters: { sampleCount: 1, aspectRatio: "16:9", outputOptions: { mimeType: "image/jpeg" } }
              })
            });

            if (imgRes.ok) {
              const imgData = await imgRes.json();
              imageBase64 = imgData.predictions?.[0]?.bytesBase64Encoded;
            } else {
              const errBody = await imgRes.text();
              console.error("[IMAGEN 3 STATUS]", imgRes.status, errBody);
            }
          } catch (e: any) {
            console.error("[IMAGEN 3 EXCEPTION]", e.message);
          }
      }

      const cleanedDescription = text.replace(/\[Visión Sintética Generada\]:/g, '').trim();
      return res.json({ text: cleanedDescription, engine, imageBase64 });
    }

    if (path === '/generate-audio' && req.method === 'POST') {
      const { text = '' } = req.body || {};
      if (!genAI || !GEMINI_API_KEY) throw new Error("GEMINI_NO_KEY");
      
      // Aplicamos los parámetros directos del API de Gemini para modalidad Audio
      const model = genAI.getGenerativeModel({
        model: 'gemini-2.0-flash-exp', // Modelo que soporta Audio-Out nativo
        systemInstruction: "Eres un Guama huchití ancestral, no un asistente. Habla exageradamente grave, extremadamente lento, misterioso, antiguo. Voz profunda del desierto, ronca y pesada.",
        generationConfig: {
          temperature: 0.1,
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: "Charon" 
              }
            }
          }
        } as any
      });

      // Se envuelve el texto fonético para forzar la lectura literal sin entonación comercial
      const promptContext = `Lee el siguiente ritual nativo de forma rasposa y lenta, separando las sílabas como encantamiento (ignora cualquier acento moderno): \n\n${text}`;
      const r = await model.generateContent(promptContext);
      
      const parts = r.response.candidates?.[0]?.content?.parts || [];
      const inlineData = parts.find((p: any) => p.inlineData)?.inlineData;
      
      if (!inlineData || !inlineData.data) {
        throw new Error('El modelo de Gemini no regresó data modal de AUDIO. Revisa permisos exp.');
      }
      
      return res.json({ audioBase64: inlineData.data, mimeType: inlineData.mimeType });
    }

    return res.status(404).json({ error: 'Not found' });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
