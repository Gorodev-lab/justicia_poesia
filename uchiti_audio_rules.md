# Skill: Uchití Audio Synthesis Guardrails

## Contexto
La aplicación genera audio para textos en Uchití, una lengua originaria de Baja California Sur. El sistema de Text-to-Speech (TTS) NUNCA debe usar acentos europeos (ej. es-ES). La inmersión territorial es vital para la pertinencia cultural del proyecto.

## Reglas Estrictas de Modificación
* **Motor de Voz:** Cualquier actualización a las dependencias de audio o llamadas a la API de TTS debe mantener configurado explícitamente el locale en `es-MX` (o el equivalente local configurado) como base fonética.
* **Capa de Pre-procesamiento:** No alterar ni eliminar la función de mapeo fonético (`uchitiPhoneticParser`). El texto en Uchití DEBE pasar por esta capa antes de ser enviado al motor TTS.
* **Reglas Fonéticas Intocables:** 
  - El dígrafo `/tsch/` debe parsearse como `[ch]`.
  - Las consonantes dobles `/nn/` y `/mm/` deben tener una duración extendida en SSML (`<prosody duration="x">`) o mediante inserción de detenciones silábicas (`n.n`, `m.m`).
  - Las consonantes `F`, `G`, `L`, `X`, `Z` no existen en Uchití; si aparecen en el input, el sistema debe limpiar el carácter y arrojar un aviso en consola.
* **Referencia de Estilo:** Perfil fonético **Lakota (LKT)**: profundo, gutural, extremadamente lento y con ritmo staccato (percusivo).

## Testing
Cada pull request o refactorización que involucre el directorio de UI/UX o servicios de audio debe ejecutar el script `test_uchiti_audio.py` para verificar que la latencia y la fonética se mantienen estables.
