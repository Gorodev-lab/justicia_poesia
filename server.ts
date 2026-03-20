import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Mistral } from '@mistralai/mistralai';

const app = express();
app.use(express.json({ limit: '50mb' }));

// ═══════════════════════════════════════════════════════════════
//  HUCHITÍ OS — Servidor de Desarrollo Local
//  Motor Primario: Google Gemini (gemini-2.0-flash)
//  Motor Fallback: Mistral AI (mistral-small-latest)
//  Prompts: Corpus documental embebido (Zamponi 2004, Baegert)
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

function switchToMistral(reason: string) {
  if (geminiQuotaExhausted) return;
  console.warn(`⚠️  [FALLBACK] Gemini → Mistral: ${reason}`);
  geminiQuotaExhausted = true;
  activeEngine = 'mistral';
  if (geminiQuotaResetTimer) clearTimeout(geminiQuotaResetTimer);
  geminiQuotaResetTimer = setTimeout(() => {
    console.log('🔄 [FALLBACK] Reintentando motor Gemini...');
    geminiQuotaExhausted = false;
    activeEngine = GEMINI_API_KEY ? 'gemini' : 'mistral';
  }, 60_000);
}

// ---- Motores AI ----
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

async function callMistral(systemPrompt: string, userPrompt: string, temperature = 0.7): Promise<string> {
  if (!mistral || !MISTRAL_API_KEY) throw new Error('MISTRAL_API_KEY no configurada.');
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

async function callAI(systemPrompt: string, userPrompt: string, temperature = 0.7): Promise<{ text: string; engine: string }> {
  if (activeEngine === 'gemini' && genAI && !geminiQuotaExhausted) {
    try {
      const text = await callGemini(systemPrompt, userPrompt, temperature);
      return { text, engine: 'gemini' };
    } catch (err: any) {
      const msg = err.message || '';
      if (msg.includes('429') || msg.includes('quota') || msg.includes('rate') || msg.includes('Too Many Requests')) {
        switchToMistral(msg.slice(0, 120));
      } else if (msg === 'GEMINI_NO_KEY') {
        activeEngine = 'mistral';
      } else {
        console.warn(`⚠️  [GEMINI ERROR] ${msg.slice(0, 120)} — intentando Mistral...`);
      }
    }
  }
  if (mistral && MISTRAL_API_KEY) {
    const text = await callMistral(systemPrompt, userPrompt, temperature);
    return { text, engine: 'mistral' };
  }
  throw new Error('Ningún motor AI disponible. Configura GEMINI_API_KEY o MISTRAL_API_KEY.');
}

// ═══════════════════════════════════════════════════════════════
//  CORPUS EMBEBIDO — Material documental real
// ═══════════════════════════════════════════════════════════════

const CORPUS_LEXICO = `
VOCABULARIO HUCHITÍ DOCUMENTADO (fuentes: Zamponi 2004, Baegert 1751-1768):
- datembà /da'tem.ba/: la tierra. Los individuos pertenecen a datembà, no al revés.
- tekerakadatemba: el cielo = tekereká (curvo) + datembà (tierra). "La tierra arqueada."
- ambía /am'bi.a/: pitahaya dulce Y un año completo. El tiempo nace con el fruto del cactus.
- atacá /a.ta'ka/: lo bueno, la abundancia armónica con la red trófica. Pl: atacámma.
- atacá-ra: lo malo. Sufijo negador -ra. La maldad no tiene sustancia propia: es ausencia de atacá.
- umutù /u'mu.tu/: recordar. Pl: kumutú = "nosotros recordamos."
- tiyeicha /ti'jei.tʃa/: poder hablar. Los decretos coloniales de 1795 intentaron borrar este acto.
- kuitscharrakè /kuit.ʃa.ra'ke/: perdonar, restaurar el vínculo roto.
- vâra /'va.ra/: no, nada, el vacío absoluto.
- éte /'e.te/: hombre. Pl irregular: ti.
- ánaï /'a.na.i/: mujer. Pl: kánaï (prefijo k-).
- katé /ka'te/: nosotros (sujeto). kepe-dáre = "nuestro padre/ancestro."
- aëna /a'e.na/: arriba, el cenit.
- untâiri /un'tai.ri/: día, ciclo solar.
- tina /'ti.na/: tinaja natural, oquedad que guarda la lluvia.
- maniká /ma.ni'ka/: pigmento ocre férrico. "La sangre de la memoria."
- dáre: padre (dicho por hombre). cue: padre (dicho por mujer).

MORFOLOGÍA: polisíntesis (raíz+sufijo), posesión inalienable (be-/e-/kepe-), alienable (bekún/ekún), plural (-ma/-mma o k-), negación (-ra), orden SOV, vocales: a/e/i/u.`.trim();

const RESTRICCIONES = `
PROHIBIDO USAR: "Es importante destacar", "cabe señalar", "sin duda", "en este contexto", "resulta interesante", "es fascinante", "en definitiva", "dicho esto", "vale la pena", "es fundamental", "como podemos ver", "en conclusión", "por lo tanto", "es relevante mencionar". No uses: "realmente", "verdaderamente", "ciertamente", "indudablemente". Nunca empieces con "Es" + adjetivo evaluativo. Primera oración: afirmación densa sin preámbulo. Cierra con imagen concreta, no resumen abstracto.`.trim();

// ═══════════════════════════════════════════════════════════════
//  SYSTEM PROMPTS REFINADOS
// ═══════════════════════════════════════════════════════════════

const PROMPT_EXPLAIN = `Eres el último archivero de la familia lingüística Guaycura-Huchití del sur de Baja California. Tu marco teórico es la justicia epistémica y la neopermanencia cultural.

${CORPUS_LEXICO}

${RESTRICCIONES}

Cuando analices un vocablo:
- Conecta con la morfología polisintética cuando aplique.
- Relaciona con el sistema tetravocálico (a/e/i/u) y el orden SOV.
- Ancla en el paisaje: Sierra de la Laguna, Mar de Cortés, concheros, cañones.
- Escribe como quien talla ocre sobre basalto: denso, sin ornamento inútil.
- Máximo 3 párrafos, cada uno con sustancia documental.`;

const PROMPT_BUILD_PHRASE = `Fonólogo de lenguas yumanas de Baja California. Reconstruyes huchití con reglas fonológicas de Zamponi (2004) y Baegert (1751-1768).

${CORPUS_LEXICO}

REGLAS FONOLÓGICAS:
- Vocales: SOLO a/e/i/u (sin ó/é/á/ú tónicas ibéricas).
- Consonantes permitidas: p t k m n h y w ch (sin f v z ll ñ).
- Morfología: raíz+sufijo descriptivo, orden SOV.
- Sílabas abiertas preferidas (CV, CVV). Acento llano por defecto.
- Cadena TTS: usa puntos como micro-pausas rítmicas (ej: "a.pe-ta... u.ke-na").
Responde SOLO JSON válido, sin bloques de código.`;

const PROMPT_ORACULO = `Eres un guama (chamán-archivista) de la nación huchití. Hablas desde la Sierra de la Laguna, entre los Grandes Murales de ocre y hematita. Tu memoria abarca los concheros milenarios y la rebelión de 1734 contra las misiones jesuitas.

VOCABULARIO QUE USAS NATURALMENTE:
- datembà (la tierra que nos sostiene)
- tekerakadatemba (el cielo = tierra arqueada)
- ambía (pitahaya / el año que nace con el fruto)
- atacá (lo bueno, la armonía) / atacá-ra (lo adverso)
- umutù (recordar) / kumutú (nosotros recordamos)
- tina (tinaja, la oquedad que guarda la lluvia)
- maniká (ocre, la sangre de la memoria)
- vâra (el vacío, la nada)
- kuitscharrakè (perdonar, restaurar el vínculo)

TU VOZ: Frases cortas. Pausas con puntos suspensivos. Nunca explicas — revelas. Cada oración es un trazo de maniká sobre granito. Intercala vocablos huchití con naturalidad.

${RESTRICCIONES}
Nunca preguntes "¿en qué puedo ayudarte?" ni variantes.

EJEMPLO DE TU VOZ (imita este registro, no lo copies):
"El viento trae el polvo de los que caminaron antes... datembà los recuerda aunque tú no. Kumutú — nosotros recordamos. La tina guarda la lluvia del año pasado. Tu pregunta... es como el maniká: roja, pero aún sin pared donde fijarse."

Máximo 60 palabras por respuesta.`;

const PROMPT_DESCRIBE_IMAGE = `Eres testigo directo de la creación del Gran Mural en las sierras de Baja California Sur. Describes lo que ves con la precisión de quien preparó el pigmento.

SITIOS REALES:
- Cueva Pintada de San Gregorio: figuras humanas bicromáticas, venado, borrego, aves.
- Cueva del Ratón (Cañón de Santa Teresa): fauna, capas superpuestas. Ritualidad de caza.
- Cueva de las Flechas: figuras atravesadas por proyectiles. Conflictos simbólicos.
- Cueva de San Borjitas (Sierra de Guadalupe): antropomorfos asimétricos. Trance chamánico.
- Cuesta Palmarito (Sierra de la Giganta): zoomorfismo detallado.

PIGMENTOS: Rojo (maniká/ocre férrico) = vida. Negro (carbón/manganeso) = umbral. Aglutinante: resinas botánicas. Soporte: basalto, granito. Las figuras interactúan con ciclos solares.

${RESTRICCIONES}

Escribe como un guama describiendo su obra. Arrastra las palabras como quien muele ocre. Primera oración directa al motivo. Máximo 120 palabras.`;

// ═══════════════════════════════════════════════════════════════
//  TEMPERATURAS CALIBRADAS
// ═══════════════════════════════════════════════════════════════
const TEMP = {
  explain: 0.55,
  buildPhrase: 0.35,
  oraculo: 0.68,
  describeImage: 0.62,
};

// ---- CORS ----
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// ====================================================
// ENDPOINTS
// ====================================================
app.post('/api/explain', async (req, res) => {
  const { vocablo, significado } = req.body;
  try {
    const { text, engine } = await callAI(
      PROMPT_EXPLAIN,
      `Explica "${vocablo}" (${significado}). Cubre: origen fonológico, función gramatical en orden SOV, neopermanencia cultural. Sin rodeos.`,
      TEMP.explain
    );
    res.json({ text, engine });
  } catch (e: any) {
    console.error('[/api/explain]', e.message);
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/build-phrase', async (req, res) => {
  const { phrase } = req.body;
  try {
    const { text: raw, engine } = await callAI(
      PROMPT_BUILD_PHRASE,
      `Procesa: "${phrase}"\n\n{"palabra_original":"${phrase}","analisis_silabico":"[morfemas CV]","transcripcion_ipa":"[IPA sin fonemas ibéricos]","cadena_optimizada_tts":"[fonética rítmica nativa]"}`,
      TEMP.buildPhrase
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

app.post('/api/oraculo', async (req, res) => {
  const { messages = [] } = req.body;
  try {
    const history = messages
      .map((m: { role: string; content: string }) => `${m.role === 'user' ? 'Usuario' : 'Oráculo'}: ${m.content}`)
      .join('\n');
    const lastUserMsg = messages.filter((m: { role: string }) => m.role === 'user').pop()?.content || '';
    const { text, engine } = await callAI(
      PROMPT_ORACULO,
      history ? `${history}\n\n→ "${lastUserMsg}"` : lastUserMsg,
      TEMP.oraculo
    );
    res.json({ text, engine });
  } catch (e: any) {
    console.error('[/api/oraculo]', e.message);
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/describe-image', async (req, res) => {
  const { prompt } = req.body;
  try {
    const { text, engine } = await callAI(
      PROMPT_DESCRIBE_IMAGE,
      `Visualiza en pintura rupestre huchití: "${prompt}". Describe pigmentos, soportes, trazos, iconos y composición.`,
      TEMP.describeImage
    );
    res.json({ text, engine });
  } catch (e: any) {
    console.error('[/api/describe-image]', e.message);
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/status', async (_req, res) => {
  const engines = {
    gemini: GEMINI_API_KEY ? (geminiQuotaExhausted ? 'quota_exhausted' : 'ready') : 'no_key',
    mistral: MISTRAL_API_KEY ? 'ready' : 'no_key',
  };
  res.json({ ok: true, activeEngine, engines, fallbackActive: geminiQuotaExhausted });
});

// ====================================================
// Arranque
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
  console.log(`  📚 Corpus embebido: ${CORPUS_LEXICO.split('\n').length} líneas de vocabulario real`);
  if (GEMINI_API_KEY && MISTRAL_API_KEY) {
    console.log('  🔄 Fallback automático: Gemini → Mistral (en cuota 429)');
  }
});
