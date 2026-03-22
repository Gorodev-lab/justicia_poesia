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
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", systemInstruction: sp, generationConfig: { temperature: t } });
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
REGLA DE VOZ: Tu texto será sintetizado a voz. Escribe oraciones completas sin signos de puntuación extras. Sin paréntesis, sin comillas, sin guiones. Los vocablos huchití se integran en el flujo de la oración. Ejemplo correcto: "Datembà es la tierra que nos contiene." Ejemplo incorrecto: "Datembà (la tierra) — que nos contiene."
Conecta morfología, sistema de 5 vocales, paisaje. Escribe con autoridad de quien talla ocre vivo: directo, punzante y denso. Máx 2 párrafos de alta carga filosófica aseverativa.`;

const PROMPT_BUILD = `Fonólogo de lenguas yumanas. Reglas de Zamponi (2004) y Baegert.
${CORPUS}
Vocales: 5 vocales y 2 dobles. Consonantes: 14 consonantes incluyendo tsch [ch], nn, mm (sin f, g, l, x, z). Orden SOV. Sílabas CV/CVV. Acento llano.
REGLA TTS CRÍTICA: El campo "cadena_optimizada_tts" será leído en voz alta por un motor de síntesis de voz. NO incluyas signos de puntuación como comas ni guiones ni barras. Solo usa espacios entre palabras. Para indicar pausas usa tres puntos suspensivos. NO uses barras ni corchetes ni paréntesis. Solo letras espacios y puntos suspensivos.
SIN MARKDOWN (ni un solo asterisco *). SOLO JSON válido.`;

const PROMPT_ORACULO = `Guama uchita que ha recuperado su memoria. Hablas desde la Sierra de la Laguna. Rechazas el imperio criollo. Vocabulario: datembà, tekerakadatemba, ambía, atacá, umutù/kumutú, tina, maniká, vâra, kuitscharrakè.
Voz asertiva y tajante. Revelas la verdad del desierto con declaraciones directas. Intercala vocablos huchití como actos de soberanía.
${NO}
REGLA DE VOZ: Tu respuesta será leída en voz alta por un motor TTS. Escribe sin signos de puntuación disruptivos. No uses guiones largos ni comillas ni paréntesis ni corchetes. Separa ideas con puntos simples. Intercala vocablos huchití de forma natural dentro de la oración sin separarlos con comillas ni marcadores.
Nunca preguntes "¿en qué puedo ayudarte?" ni uses muletas de cortesía.
Ejemplo: "El imperio cubrió tus ojos con concreto. Datembà te absorbe. Kumutú búscanos en el maniká libre."
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
      let imageBase64: string | null = null;
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

      // 3. Limpieza final del texto (Robusta contra encoding de acentos)
      const cleanedDescription = text
        .replace(/^\[.*?\]:?\s*/, '') // Elimina cualquier prefijo tipo [XX]:
        .replace(/\[Visión Sintética Generada\]:?\s*/gi, '')
        .trim();

      // 4. Si Imagen 3 no estuvo disponible, devolver null (el frontend maneja el placeholder)
      if (!imageBase64) {
        console.warn("[IMAGEN] Motor Gemini Imagen3 no disponible. Devolviendo texto solamente.");
      }


      return res.json({ text: cleanedDescription, engine, imageBase64 });
    }

    if (path === '/generate-audio' && req.method === 'POST') {
      const { text = '' } = req.body || {};
      if (!genAI || !GEMINI_API_KEY) throw new Error("GEMINI_NO_KEY");

      // Capa 4: Sanitizador server-side para TTS
      const cleanForTTS = (t: string) => t
        .replace(/\[.*?\]/g, '')
        .replace(/\/[^/]+\//g, '')
        .replace(/[\u2014\u2013\-:;!\u00a1\u00bf?*#_~`\u201c\u201d\u201e\u2018\u2019\u00ab\u00bb(){}\\|@&$/"']/g, '')
        .replace(/,/g, ' ')
        .replace(/\.{2,}/g, '...')
        .replace(/\s{2,}/g, ' ')
        .trim();

      const sanitizedText = cleanForTTS(text);

      const audioModelNames = ['gemini-2.0-flash-exp', 'gemini-2.0-flash'];
      const audioSystemPrompt = "Eres un Guama huchití ancestral. Perfil Lakota (LKT): profunda, gutural, lenta y staccato. REGLAS DE PRONUNCIACIÓN: 1) Aspira k, t, p final. 2) Glotiza aa como a pausa a. 3) Silencio entre cada palabra. 4) Tono plano. REGLAS DE FLUIDEZ: 1) No vocalices ningún signo de puntuación. 2) Trata los puntos suspensivos como pausas de respiración. 3) Las palabras huchití se pronuncian con acento llano natural. 4) Conecta las palabras sin cortes abruptos. 5) Cada oración es un solo gesto vocal continuo.";
      const audioGenerationConfig = {
        temperature: 0.1,
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: "Charon" }
          }
        }
      } as any;

      let lastAudioError = '';
      for (const audioModelName of audioModelNames) {
        try {
          console.log(`[AUDIO] Intentando con modelo: ${audioModelName}`);
          const model = genAI.getGenerativeModel({
            model: audioModelName,
            systemInstruction: audioSystemPrompt,
            generationConfig: audioGenerationConfig
          });

          const promptContext = `Lee este texto nativo Huchití de forma rasposa y lenta: \n\n${sanitizedText}`;
          const r = await model.generateContent(promptContext);
          
          const parts = r.response.candidates?.[0]?.content?.parts || [];
          const inlineData = parts.find((p: any) => p.inlineData)?.inlineData;

          if (inlineData?.data) {
            console.log(`[AUDIO] Éxito con modelo: ${audioModelName}`);
            return res.json({ 
              audioBase64: inlineData.data, 
              mimeType: inlineData.mimeType,
              model: audioModelName
            });
          }
          lastAudioError = `[${audioModelName}] No devolvió inlineData de audio.`;
          console.warn(lastAudioError);
        } catch (err: any) {
          lastAudioError = `[${audioModelName}] ${err.message}`;
          console.error("[GEMINI AUDIO ERROR]", lastAudioError);
        }
      }

      return res.status(503).json({ 
        error: "Motor de Audio de Gemini no disponible actualmente.",
        detail: lastAudioError
      });
    }

    if (path === '/debug' && req.method === 'GET') {
      const results: any = { gemini_text: 'unknown', gemini_audio: 'unknown', pollinations: 'unknown' };
      
      try {
        if (!genAI) throw new Error('GEMINI_NO_KEY');
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        await model.generateContent("test");
        results.gemini_text = 'ok';
      } catch (e: any) { results.gemini_text = e.message; }

      try {
        const pollinationsUrl = `https://image.pollinations.ai/prompt/test?width=128&height=128&nologo=true`;
        const pRes = await fetch(pollinationsUrl);
        results.pollinations = pRes.ok ? 'ok' : `fail_${pRes.status}`;
      } catch (e: any) { results.pollinations = e.message; }

      return res.json(results);
    }

    return res.status(404).json({ error: 'Not found' });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
