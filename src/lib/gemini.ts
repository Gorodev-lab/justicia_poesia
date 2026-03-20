// ═══════════════════════════════════════════════════════════════
//  HUCHITÍ OS — Cliente AI Centralizado
//  Motor Primario: Google Gemini 2.0 Flash
//  Motor Fallback: Mistral AI (mistral-small-latest)
//  Todos los llamados AI del frontend pasan por aquí.
// ═══════════════════════════════════════════════════════════════

/**
 * URL base de la API según entorno.
 * - En producción (Vercel): usa /api (rutas serverless).
 * - En desarrollo local: usa VITE_LOCAL_API_URL o localhost:3002.
 */
export const API_BASE = import.meta.env.PROD
  ? '/api'
  : (import.meta.env.VITE_LOCAL_API_URL || 'http://localhost:3002/api');

/**
 * Tipo base para las respuestas de texto del motor AI.
 */
export interface AITextResponse {
  text: string;
  engine?: string; // 'gemini' | 'mistral'
}

/**
 * Tipo para la respuesta del constructor de frases.
 */
export interface PhraseBuildResponse {
  palabra_original: string;
  analisis_silabico: string;
  transcripcion_ipa: string;
  cadena_optimizada_tts: string;
  engine?: string;
}

/**
 * Llama al endpoint /api/status para verificar que el backend AI esté activo.
 */
export async function checkApiStatus(): Promise<{ ok: boolean; activeEngine?: string; engines: Record<string, string> }> {
  const res = await fetch(`${API_BASE}/status`);
  if (!res.ok) throw new Error(`Status HTTP ${res.status}`);
  return res.json();
}

/**
 * Explica un vocablo huchití usando el motor AI activo.
 */
export async function explainVocablo(vocablo: string, significado: string): Promise<string> {
  const res = await fetch(`${API_BASE}/explain`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ vocablo, significado }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  const data: AITextResponse = await res.json();
  return data.text;
}

/**
 * Sintetiza una frase en huchití a partir de texto en español.
 */
export async function buildHuchitiPhrase(phrase: string): Promise<PhraseBuildResponse> {
  const res = await fetch(`${API_BASE}/build-phrase`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phrase }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

/**
 * Envía mensajes al Oráculo Huchití (chat conversacional con Gemini).
 */
export async function consultarOraculo(
  messages: Array<{ role: string; content: string }>
): Promise<string> {
  const res = await fetch(`${API_BASE}/oraculo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  const data: AITextResponse = await res.json();
  return data.text;
}

/**
 * Genera una descripción de arte rupestre huchití a partir de un prompt.
 */
export async function describeImage(prompt: string): Promise<string> {
  const res = await fetch(`${API_BASE}/describe-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  const data: AITextResponse = await res.json();
  return data.text;
}
