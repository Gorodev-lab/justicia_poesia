# Estrategia de Síntesis de Voz Auténtica para el Uchití

El sistema actual utiliza la API nativa del navegador (`window.speechSynthesis`) forzando la etiqueta `es-MX`. Sin embargo, esto hace que el motor de voz lea el texto aplicando los ritmos, entonación ibérica o mestiza (curva de entonación típicamente descendente o cantada), y fonología propia del español (como vibrantes dobles, asimilación de sonidos, etc.).

Para generar un audio que verdaderamente suene como un **lenguaje nativo autóctono** (basado en el documento *El Uchití.docx*), se debe abandonar la dependencia del español y abordar la síntesis desde tres frentes: **Manipulación Fonética, Motor TTS en la Nube con SSML y Cambio Funcional**.

## Fases de la Estrategia

### 1. Sustitución Táctica del Motor Lector (Idioma Base)
Dado que las vocales del Uchití están muy definidas, y las consonantes carecen de /f/, /g/, /l/, /x/, y /z/, además de preferir la estructura C-V (Consonante-Vocal):
- **Evitar usar `lang = 'es-MX'`**: El motor del español intentará leer las palabras con la gramática espacial hispana.
- **Alternativa A (Motor Japonés - Romaji)**: El japonés tiene una estructura silábica estricta (CV, Vocales de a/i/u/e/o) y carece de muchos sonidos occidentales. Si se reescriben los vocablos huchitíes simulando una pronunciación romaji y se usa `lang = 'ja-JP'`, la voz evitará por completo los enlaces y asimilaciones españolas, resultando en un tono estacato mucho más cercano a lo que se describe de las lenguas originarias conservadas.
- **Alternativa B (SSML Avanzado con Google Cloud TTS)**: Pasar del entorno cliente a un entorno en la nube usando llamadas a API (por ejemplo `ElevenLabs` o `Google Cloud Text-to-Speech`).
  - Google Cloud TTS permite usar la etiqueta `<phoneme alphabet="ipa" ph="...">`. De este modo, no le decimos a la IA *qué* letras leer, sino *cómo colocar el tracto vocal*.

### 2. Cadena Optimizada TTS (Gemini Proxy)
Actualmente Gemini devuelve un objeto con `cadena_optimizada_tts`. Debemos actualizar el System Prompt para que esta cadena esté "mal escrita" sintáctica pero "bien escrita" fonéticamente para hackear la pronunciación:
*   **Abreviación del staccato**: El Uchití no enlaza las palabras como el español ("sinalefa"). Para evitar esto en cualquier motor, el AI debe insertar puntos o guiones: `te.ke.ra.ka - da.tem.bà.`
*   **Tratamiento de Consonantes Dobles**: El documento de Pimentel menciona el uso constante de `/tsch/ [ch]`, y las dobles `/nn/` y `/mm/`. En un motor de texto a voz, para forzar el sonido prolongado de una nasal, se deben separar: `an - na`, `am - ma`.

### 3. Alteración Modulada de la Prosodia en el App
Si decidimos mantener el `SpeechSynthesis` actual gratuito (sin costos de Nube API), debemos adaptar cómo se dispara el sonido nativamente en `src/App.tsx`:
```javascript
const utterance = new SpeechSynthesisUtterance(textoOptimizado);
// Usar un motor que sea más "monocorde"
utterance.lang = 'es-US'; // O 'ja-JP' en texto fonético
utterance.pitch = 0.3;    // Grave y profundo (como chamanismo en caverna)
utterance.rate = 0.6;     // Pausado, marcando las dobles vocales U-E
```

### 4. La Estrategia Definitiva: "Voice Cloning" de un Hablante Originario Real
La solución cultural e históricamente más certera a mediano plazo:
- Extraer una muestra de audio de un hablante de una lengua originaria actual de México (preferentemente yumanos del norte o grupos seris con fisonomía desértica) o incluso de actores de doblaje que representen el acento deseado sin entonaciones europeas.
- Alimentar esta muestra de voz de 20 segundos a un sistema como **ElevenLabs API**.
- Enlazar la aplicación (`build-phrase`) para que pida la síntesis directamente a la clonación y regrese un `.mp3` al cliente. De esta forma, cada frase en Uchití será hablada por una entidad cuya prosodia, micro-pausas y resonancias están completamente exentas de la herencia lingüística colonial ibérica.

## Siguiente Acción Inmediata Sugerida
Refinar el prompt de `cadena_optimizada_tts` en el backend para que devuelva una ortografía "hacker" que obligue a `window.speechSynthesis` a cortar y arrastrar las sílabas, eliminando el cantado mestizo convencional.
