# Skills & Best Practices: Actualización del Corpus Huchití

Este documento almacena los conocimientos y prácticas recomendadas para actualizar el corpus lingüístico y cultural en el proyecto "Justicia Filosófica - El Uchití". 
Esto garantiza que la IA, tanto en frontend como en backend, provea respuestas correctas, sincronizadas y culturalmente respetuosas.

## Problema resuelto
El marco del proyecto almacena la configuración y reglas ("system prompts") en dos lugares separados:
1. El archivo del Frontend: `src/lib/corpus.ts`
2. El archivo del Backend (Vercel serverless): `api/index.ts`

Al añadir nueva información al proyecto (por ejemplo, el documento "El Uchití.docx"), era insuficiente únicamente agregar el archivo de texto a la carpeta. Era necesario procesar y transformar estos hallazgos (e.g. nuevas 5 vocales y 14 consonantes, formas verbales `-reke`, plurales en `k-/` `ku-`) e inyectarlas en los "System Prompts" de ambos contextos.

## Workflow para Actualizar el Corpus
Si se agregan nuevos extractos lingüísticos:
1. **Extraer el texto real**: Convertir archivos PDF/DOCX a texto plano e incorporarlos a la base de conocimiento (`Rescate Cultural Huchití_ Corpus Digital.txt`).
2. **Actualizar el Frontend**: 
   - Editar `src/lib/corpus.ts` y modificar `CORPUS_LEXICO`, `MORFOLOGÍA OPERATIVA` y las `REGLAS FONOLÓGICAS`.
3. **Actualizar el Backend (Vercel API)**: 
   - Editar `api/index.ts`
   - Buscar y modificar la constante `CORPUS`.
   - Modificar las variables de prompts (`PROMPT_EXPLAIN`, `PROMPT_BUILD`) asegurándose que usen las reglas fonológicas exactas (por ejemplo: `Vocales: 5 vocales y 2 dobles`).
4. **Desplegar / Sincronizar**: Una vez que las fuentes están alineadas, los modelos **Gemini** y **Mistral** usarán de base esta información centralizada en sus llamadas de completado.

## Reglas Lingüísticas Confirmadas a Mantener (Baegert / Pimentel)
- **Pronombres Personales**: Be (Yo), Eï (Tú), Tutau/Rutau (Él), Cate (Nosotros), Pete (Ustedes), Tucáva (Ellos).
- **Tiempos Verbales**: -re/-reke (Presente), -ríkiri/-rujére/-raupe (Pasado), -me/-meje/-éneme (Futuro).
- **Fonología**: 5 vocales, 2 dobles. 14 consonantes (no se permiten f, g, l, x, z), incluye tsch [ch], nn, mm.
- **Plural**: Formado por los prefijos `k-` o `ku-`.
- **Negación**: Formado por los sufijos `-ra` o `-ja`.
- **Modo y Orden**:  Carencia de subjuntivos y pasivos, orden básico de oración "Sujeto Objeto Verbo" (SOV).

## Estrategia de Expansión Multimedia (Audio, Imagen, Video)
Contamos con dos API Keys integradas (Google Gemini y Mistral AI). Para llevar a este corpus de texto a un estado audiovisual sin añadir llaves extra, esta es la delegación estratégica para el backend (`api/index.ts`):

### 1. Generación de Imágenes (Arte Rupestre y Entornos)
**Delegación: Google Gemini API (Modelo: `imagen-3.0-generate-001`)**
- **Implementación**: El actual SDK de Node (`@google/generative-ai`) soporta generación usando el mismo API Key actual.
- **Ruta Backend (`/api/describe-image`)**: Se debe actualizar el endpoint para generar directamente la imagen `Buffer` o `base64`. Mistral debe ser usado primero para redactar el prompt enriquecido (traduciendo la idea a conceptos rupestres precisos) y luego pasar la orden pulida al modelo _Imagen 3_ de Google.

### 2. Síntesis de Audio Nativo
**Delegación: Google Gemini 2.0 Flash (Modalidad Audio-Out)**
- **Implementación**: La versión `gemini-2.0-flash` tiene soporte multimodal nativo bidireccional. Permite configurar `responseModalities: ["AUDIO"]` para recibir audio PCM o Base64 directamente de regreso.
- **Estrategia Fonológica**: Se pasará la `cadena_optimizada_tts` (rompanizada al estilo estacato en Japonés `ja-JP` mental como se dicta en `tts_strategy_huchiti.md`) directo al Gemini junto a un `systemInstruction` que instruya a la voz comportarse como una entidad rasposa o susurrante del desierto.

### 3. Generación de Video
**Delegación: Ecosistema Vertex/Google (Modelo: _Veo 2_)**
- **Implementación**: Mediante la llave de Google, podemos tener acceso a la generación de Video (Veo), ya sea de forma directa por la API o como fall-back al SDK de VertexAI. 
- **Flujo**: 
  1. El cliente interactúa con el **Oráculo** operado por **Mistral** (por su rapidez).
  2. Mistral diseña un _guion secuencial visual_.
  3. El endpoint backend de Vercel llama a la API de video generativo de Google enviando el guion escrito, y devuelve la URL o blob MP4 a la interfaz de react (fase "Arte Conceptual").

### En resumen:
- **Mistral API**: Será el orquestador cognitivo principal, refinando prompts multimedia, manejando rápidamente toda la lógica abstracta SOV y sirviendo de guionista.
- **Gemini 2.0 API**: Se utilizará estrictamente como el **Motor de Renderizado Multimodal** (generando el Audio crudo de la lengua, las fotos con _Imagen 3_ y las ráfagas visuales con _Veo 2_).

## Implementación Técnica Directa (Con la llave actual de Gemini)

Para ejecutar esta estrategia **con los recursos actuales en `api/index.ts`** sin necesidad de añadir licencias extra, reemplaza los flujos text-to-text actuales con los siguientes bloques arquitectónicos en las rutas `/api/describe-image` y `/api/build-phrase`:

### A) Generación de Arte Rupestre (Imagen 3) vía HTTP Rest
El SDK básico de Node de `@google/generative-ai` actualmente enfoca sus métodos directos a los modelos de chat (Flash/Pro). Para usar `Imagen-3` con tu misma llave API, debes ejecutar un `fetch` a la REST API de Google en el endpoint `/predict`:

```typescript
// Insertar en api/index.ts para usar con /api/describe-image
async function generateImagen3(optimizedPrompt: string): Promise<string> {
  const url = \`https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=\${process.env.GEMINI_API_KEY}\`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [{ prompt: optimizedPrompt }],
      parameters: { 
        sampleCount: 1, 
        aspectRatio: "16:9", // Orientación dramática
        outputOptions: { mimeType: "image/jpeg" } 
      }
    })
  });
  if (!response.ok) throw new Error("Fallo en Imagen 3");
  const data = await response.json();
  // Devuelve el base64 de la imagen que react mostrará como <img src="data:image/jpeg;base64,...">
  return data.predictions[0].bytesBase64Encoded; 
}
```

### B) Generación de Síntesis Uchití Auténtica (Audio Out)
Con la llegada de `gemini-2.0-flash`, la API Text-to-Audio está nativamente embebida. Se sobreescribe la configuración para solicitar un objeto `inlineData` de tipo Audio en lugar de texto:

```typescript
// Insertar en api/index.ts para reemplazar el SpeechSynthesis (Navegador)
async function generateNativeAudio(ttsReadyText: string): Promise<string> {
  // Asegurarse de usar la versión soporte de audio, como gemini-2.0-flash
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    // Sobrecarga modal crucial para forzar la salida de voz
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: {
            // Voces disponibles: Puck, Charon, Kore, Fenrir, Aoede
            voiceName: "Charon" // Voz profunda, dramática, menos "ibérica"
          }
        }
      }
    }
  });

  const prompt = \`Pronuncia escrupulosamente esto como un canto ritual nómada: \${ttsReadyText}\`;
  const result = await model.generateContent(prompt);
  
  // Extraemos la primera parte como PCM Base64 para el frontend
  const candidate = result.response.candidates?.[0];
  const audioPart = candidate?.content.parts.find(p => p.inlineData);
  
  if (!audioPart || !audioPart.inlineData) throw new Error("Audio no generado");
  
  // Devuelve la cadena base64 del audio PCM. React la reproduce con AudioContext o <audio>
  return audioPart.inlineData.data;
}
```
