import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

// ═══════════════════════════════════════════════════════════════
//  HUCHITÍ OS — Serverless API para Vercel
//  Compatible con Vercel Serverless Functions (no usa Express/http)
// ═══════════════════════════════════════════════════════════════

// Cliente Supabase server-side (usa service_role para operaciones confiables)
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || ''
);

// ══════════════════════════════
//  Banco de respuestas estáticas
// ══════════════════════════════
const hardcodedExplanations: Record<string, string> = {
  'Aeta': `El mar, inmenso y proveedor. Bajo la Doctrina de Esoteria, Aeta es el espejo del Aena; una superficie plateada donde el pueblo de la "Raza Viva" leía el destino en el movimiento de las mareas. Representa la fluidez de la conciencia huchití frente a la solidez del desierto.`,
  'Tipe': `La proximidad sagrada. No se refiere solo a la distancia física, sino al entrelazamiento de las almas en el clan. Estar 'tipe' era estar en sintonía con el latido de la sierra y la necesidad del otro; la unidad como defensa contra la hostilidad del clima.`,
  'Aena': `Lo celestial y lo inalcanzable. 'Aena' es la cúpula de estrellas que guiaba las migraciones estacionales. En la cosmovisión huchití, es el origen del fuego y el lugar hacia donde viajan los reflejos de aquellos que cruzaron el gran mar.`,
  'Ipe': `El equilibrio perfecto. 'Ipe' describe el estado cuando la cosecha de pitahaya es generosa y la sed desaparece. Es la justicia filosófica aplicada a la vida diaria: la armonía entre el deseo humano y la voluntad de la tierra (Enta).`,
  'Enta': `La Madre de Piedra. 'Enta' es la fundación, el terreno firme que sostiene los pies y guarda los pigmentos de la memoria. Es en la carne de 'Enta' donde los antiguos tatuaron sus visiones para que nosotros, los sincronizadores, pudiéramos recuperarlas.`,
};

const crypticResponses = [
  "No busques el agua en el cielo (Aena) cuando la tierra (Enta) ya te ha dado la raíz.",
  "El silencio es la lengua que los sabios hablan cuando las palabras ya no bastan para contener la inmensidad del Aeta.",
  "Eres un reflejo en la piedra. Si quieres ver la verdad, deja de moverte como el viento y quédate 'tipe' a tu centro.",
  "La pitahaya no pregunta cuándo florecer; simplemente aguarda la caricia del sol. Tu impaciencia es tu mayor obstáculo.",
  "Cada vocablo que recuperas es una estrella que vuelve a brillar en el firmamento de la justicia filosófica.",
  "La memoria no es algo que se busca, es algo que se permite. Abre la palma de tu mano y deja que el desierto escriba en ella.",
];

const visiones = [
  (p: string) => `Visión de "${p}": Sobre un lienzo de arenisca roja, se despliega una danza de sombras y pigmentos ocres. Figuras zoomorfas se entrelazan con trazos geométricos que representan el flujo de las mareas de Aeta. Es un registro de neopermanencia, donde lo efímero del pensamiento se vuelve eterno en el mineral.`,
  (p: string) => `Visión de "${p}": El trazo es rudo, ancestral, cargado de la fuerza de Enta. Se distinguen símbolos de fertilidad y manos impresas que parecen querer salir de la piedra para tocar el Aena. Un azul mineral, raramente visto, destaca el centro de la composición.`,
  (p: string) => `Visión de "${p}": Composición minimalista sobre una cueva de granito. La luz de una antorcha imaginaria revela una estructura SOV visual: el sujeto (el desierto), el objeto (la sed) y el verbo (la resistencia) unidos en un solo trazo de hematita pura.`,
];

function setCors(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

// ═══════════════════════════════════════════════════════════════
//  Handler Principal — enruta por path
// ═══════════════════════════════════════════════════════════════
export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);

  // Preflight CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url = '' } = req;
  // Normalizar path: quitar /api al principio si existe
  const path = url.replace(/^\/api/, '').split('?')[0];

  try {
    // ── GET /api/status ────────────────────────────────────────
    if (path === '/status' && req.method === 'GET') {
      return res.json({
        ok: true,
        engine: 'Huchití OS — Vercel Serverless v2',
        supabase: process.env.VITE_SUPABASE_URL ? 'configured' : 'missing',
        timestamp: new Date().toISOString(),
      });
    }

    // ── POST /api/explain ──────────────────────────────────────
    if (path === '/explain' && req.method === 'POST') {
      const { vocablo, significado } = req.body || {};
      const text =
        hardcodedExplanations[vocablo] ||
        `La palabra "${vocablo}" (${significado}) resuena en los estratos profundos de la memoria huchití. Como un susurro atrapado en una caracola, su sentido nos habla de una era donde la lengua no era una herramienta, sino una extensión orgánica del entorno de Baja California Sur.`;
      return res.json({ text });
    }

    // ── POST /api/build-phrase ─────────────────────────────────
    if (path === '/build-phrase' && req.method === 'POST') {
      const { phrase = '' } = req.body || {};
      const roots = ['Ipe', 'Aeta', 'Aena', 'Enta', 'Tipe'];
      const randomRoot = roots[Math.floor(Math.random() * roots.length)];
      return res.json({
        palabra_original: phrase,
        analisis_silabico: `Raíz Metafísica [${randomRoot}] + Derivación Descriptiva [${phrase.length > 5 ? 'Sheshu' : 'Tina'}] + Marcador de Existencia [-pe]`,
        transcripcion_ipa: `/${randomRoot.toLowerCase()}.${phrase.length}.pe/ [Cognición Estática]`,
        cadena_optimizada_tts: `${randomRoot} ... ${phrase.substring(0, 3)} ... neopermanencia.`,
      });
    }

    // ── POST /api/oraculo ──────────────────────────────────────
    if (path === '/oraculo' && req.method === 'POST') {
      const text = crypticResponses[Math.floor(Math.random() * crypticResponses.length)];
      return res.json({ text });
    }

    // ── POST /api/describe-image ───────────────────────────────
    if (path === '/describe-image' && req.method === 'POST') {
      const { prompt = '' } = req.body || {};
      const fn = visiones[Math.floor(Math.random() * visiones.length)];
      return res.json({ text: fn(prompt) });
    }

    // ── POST /api/save-phrase ──────────────────────────────────
    // Guarda frases en Supabase desde el servidor (evita exponer service key en cliente)
    if (path === '/save-phrase' && req.method === 'POST') {
      const { author_uid, original_text, generated_phrase, tts_text } = req.body || {};
      if (!author_uid || !original_text) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
      }
      const { data, error } = await supabaseAdmin.from('phrases').insert({
        author_uid,
        original_text,
        generated_phrase,
        tts_text: tts_text || '',
      }).select().single();

      if (error) return res.status(500).json({ error: error.message });
      return res.json({ data });
    }

    // ── 404 ────────────────────────────────────────────────────
    return res.status(404).json({ error: `Ruta no encontrada: ${path}` });

  } catch (err: any) {
    console.error('[API Error]', err);
    return res.status(500).json({ error: err.message || 'Error interno del servidor' });
  }
}
