---
description: skill-audio-nativa
---
# Solución Definitiva: Erradicar el Acento "Español Ibérico" del Sistema TTS

## El Problema Actual
Si el audio del "Oráculo" o del "Constructor de Frases" sigue sonando con un acento "Español Ibérico" comercial (el clásico "cantadito" europeo o robótico genérico), se debe a dos razones fundamentales:

1. **Fallback del Navegador (`window.speechSynthesis`)**: Cuando la API de Gemini Audio falla (por límites de la cuota de la capa gratuita, o porque la llave de *Google AI Studio* no soporta formalmente la salida multimodal de `gemini-2.0-flash-exp` en esa región), el código de `App.tsx` hace un "fallback" a la API nativa de voz de tu dispositivo. En muchos sistemas operativos (especialmente Linux o algunos Androids), la voz predeterminada en español es **`es-ES` (Español de España)**, sin importar que en código le digamos que queremos `es-MX`.
2. **Fonemas Latinos asimilados**: Los motores TTS convencionales están forzados a leer las vocales y consonantes como español moderno estándar, porque no tienen mapas fonéticos para lenguas originarias extintas.

## Estrategia de Reparación Aislada (El Fix)

Para asegurar que un acento ancestral rústico, gutural y rasposo sea 100% garantizado en CUALQUIER dispositivo, debemos abandonar dependencias locales del sistema operativo y utilizar una "API de clonación o de Síntesis Directa por Servidor".

### Paso 1: Migrar a un Motor TTS de Servidor Garantizado (ElevenLabs o Google TTS Server)
La única manera de imponer el acento:
* **Mejor Opción (Bajo Costo/Gratis, Estándar)**: Integrar `@google-cloud/text-to-speech` directamente en Vercel `api/index.ts`. Esto requiere subir un archivo `google-credentials.json` a las variables de entorno de Vercel (distinto a Gemini). Podemos forzar la voz `es-US-Journey-D` (una voz profunda y áspera) y bajar su Pitch usando `SSML`.
* **Opción Cinematográfica (Premium)**: Crear una cuenta en **ElevenLabs**. Clonar la voz de un hablante mayor (ej. un anciano Seri o de Baja California). ElevenLabs te dará un `VoiceID`. En un solo endpoint de Vercel mandaríamos llamar este ID cada que el Oráculo hable. El acento ibérico es imposible en esta configuración.

### Paso 2: SSML y Escritura Fonética Agresiva
Si usamos un motor Cloud, debemos pasarle el texto convertido a "SSML" (Speech Synthesis Markup Language):
```xml
<speak>
  <prosody rate="slow" pitch="-4st">
    U.mu.tú.
    <break time="800ms"/>
    Da.tem.bá.
  </prosody>
</speak>
```
El motor pronunciará esto grave (`pitch="-4st"`), sumamente lento (`rate="slow"`) y haciendo pausas de silencio absoluto de casi 1 segundo entre los vocablos, eliminando la cadencia rápida y "parlanchina" artificial del español.

### Paso 3: El Archivo de Refactorización (`App.tsx`)
Reemplazaremos la función completa:
```typescript
const fallbackNativeSpeak = (text: string, onStart: () => void, onEnd: () => void) => {
  // BORRAR window.speechSynthesis
  // ENVIAR texto directamente a /api/elevenlabs o /api/cloud-tts
}
```

## Acción Requerida
Si deseas erradicar la voz ibérica **hoy**, confírmalo y daremos de baja el fallback del navegador nativo en `App.tsx`, y reescribiremos el backend para conectarnos a una de las APIs de servidor especializadas, usando fonética extrema dictada por el corpus.
