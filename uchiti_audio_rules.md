# Skill: Huchití Audio Synthesis Guardrails

## Contexto
La aplicación genera audio para textos en Huchití, una lengua originaria de Baja California Sur. El sistema de Text-to-Speech (TTS) NUNCA debe usar acentos europeos (ej. es-ES). La inmersión territorial es innegociable.

## Reglas Estrictas de Modificación
* **Motor de Voz:** Cualquier actualización a las dependencias de audio o llamadas a la API de TTS debe mantener configurado explícitamente el locale en `es-MX`.
* **Capa de Pre-procesamiento:** No alterar ni eliminar la función de mapeo fonético (`uchitiPhoneticParser`). El texto en Huchití DEBE pasar por esta capa antes de ser enviado al motor TTS.
* **Reglas Fonéticas Intocables:** 
  - El dígrafo `/tsch/` debe parsearse como `[ch]`.
  - Las consonantes dobles `/nn/` y `/mm/` deben tener una duración extendida (ej: `n.n` o `m.m`).
  - Las consonantes `F`, `G`, `L`, `X`, `Z` no existen en Huchití; el parser debe limpiar estos caracteres.
  - El tono debe seguir el perfil **Lakota (LKT)**: grave, resonante, percusivo (staccato) y muy lento.
  - El acento NO debe ser prosódico español (fuerte en la penúltima), sino equilibrado y glotal.

## Referencia Fonética Externa
* [Lakota (LKT) - Global Recordings](https://globalrecordings.net/es/language/lkt): Este es el estándar de oro para la cadencia y profundidad vocal del Guama Huchití. El agente DEBE escuchar o emular este carácter rítmico.
