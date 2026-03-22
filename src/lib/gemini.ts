// ═══════════════════════════════════════════════════════════════
//  UCHITÍ OS — Cliente AI Centralizado
//  Motor Primario: Google Gemini 2.0 Flash
//  Motor Fallback: Mistral AI (mistral-small-latest)
//  Todos los llamados AI del frontend pasan por aquí.
// ═══════════════════════════════════════════════════════════════

/**
 * URL base de la API ahora compatible y nativa con el Router de Next.js.
 * Independientemente del entorno (Dev o Prod), la ruta es simple y uniforme.
 */
export const API_BASE = '/api';

/**
 * Tipo base para las respuestas de texto del motor AI.
 */
export interface AITextResponse {
  text: string;
  engine?: string; // 'gemini' | 'mistral'
  imageBase64?: string;
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
 * Explica un vocablo uchití usando el motor AI activo.
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
 * Sintetiza una frase en uchití a partir de texto en español.
 */
export async function buildUchitiPhrase(phrase: string): Promise<PhraseBuildResponse> {
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
 * Envía mensajes al Oráculo Uchití (chat conversacional con Gemini).
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
 * Genera una descripción de arte rupestre uchití a partir de un prompt.
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

export async function generateNativeAudioEndpoint(text: string): Promise<string> {
  const res = await fetch(`${API_BASE}/generate-audio`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) {
    throw new Error(`HTTP Error en Audio TTS: ${res.status}`);
  }
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return `data:${data.mimeType || 'audio/wav'};base64,${data.audioBase64}`;
}
