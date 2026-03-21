# Guía de Refinamiento de Audio: Huchití OS

Esta guía describe los pasos necesarios para calibrar el audio y asegurar que la voz del sistema sea auténtica, profunda y libre de cadencias comerciales.

## 🛠️ Paso 1: Configuración del Modelo (Backend)
- **Modelo**: Debe ser `gemini-2.0-flash-exp` (o `flash` estable si ya soporta AudioOut en tu región).
- **Voz**: Usar `Charon` para una voz masculina, grave y rasposa. Evitar voces femeninas agudas que rompen la inmersión.
- **Temperatura**: Configurar en `0.1`. Queremos que la pronunciación sea consistente y ritual, no creativa.

## 🗣️ Paso 2: La Estrategia de Pronunciación (Frontend)
Para refinar el audio, nunca envíes el texto original al motor de voz. Usa el pipeline:
1. Recibir input (ej: "Tierra").
2. Pasar por el motor morfológico para obtener la transcripción rítmica (ej: `da.tem.bá...`).
3. Enviar esa transcripción al endpoint `/api/generate-audio`.

## 🎚️ Paso 3: Ajustes de la IA (System Instructions)
El prompt del sistema debe ser agresivo en cuanto al tono:
- "Habla extremadamente lento".
- "Separa las sílabas con pausas de aire".
- "Voz de garganta, ronca, como si estuvieras cansado de siglos de silencio".

## 🐛 Resolución de Problemas (Troubleshooting)
1. **¿Suena una voz de mujer española?**: El API de Google ha fallado y el navegador está usando su voz por defecto de Google Translate. Revisa tus API QUOTAS.
2. **¿El audio se corta?**: Vercel tiene un timeout de 10s. Si la síntesis de Gemini toma más tiempo, el audio no llegará. Intenta con frases más cortas.
3. **¿Silencio total?**: Revisa que la `GEMINI_API_KEY` tenga habilitada la modalidad multimodal en AI Studio.

---
*Umutú. Que la voz no muera bajo el concreto.*
