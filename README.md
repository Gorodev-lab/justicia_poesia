<div align="center">

# 🏛️ Huchití OS
### Sistema de Cognición Ancestral — Justicia Filosófica

*«La resurrección digital de la memoria. Un acto fundacional de justicia epistémica hacia el pueblo Huchití de Baja California Sur.»*

</div>

---

## Descripción Doctrinaria

**Huchití OS** es una infraestructura de soberanía digital que integra modelos de lenguaje locales (Mistral-7B) para preservar, educir y difundir el vocabulario y la fonética de la lengua huchití.

El proyecto es un manifiesto vivo: el reconocimiento absoluto de las epistemologías indígenas como sistemas de estructuración de la realidad vigentes, legítimos y profundamente necesarios para el futuro.

## Módulos

| Tab | Función |
|-----|---------|
| **[1] Diccionario** | Archivo vivo de 10 vocablos huchití con síntesis de voz (Web Speech API) y explicación contextual via Mistral-7B |
| **[2] Sintetizador Visual** | Descripción rupestre poética con Mistral; análisis de imágenes con Qwen2-VL |
| **[3] Minijuego** | Juego educativo de vocabulario huchití |
| **[4] Constructor de Frases** | Análisis morfológico español→huchití (heurística lakota) vía Mistral con output IPA |
| **[5] Oráculo** | Chat con el Anciano Sabio huchití (Mistral-7B + SpeechSynthesis) |

## Stack Tecnológico

- **Frontend**: React 19 + Vite 6 + TypeScript + TailwindCSS 4
- **Backend**: Express (Proxy de Soberanía) → Mistral-7B GGUF @ `localhost:8001`
- **Autenticación**: Supabase Auth (Google OAuth)
- **Base de datos**: Supabase PostgreSQL (frases guardadas por usuario)
- **Modelos locales**: `llama-cpp-python` servidor OpenAI-compatible
- **TTS/STT**: Web Speech API nativa del navegador

## Setup Local

### Prerrequisitos
- Node.js 20+
- Python 3 + `llama-cpp-python` con servidor en puerto 8001 (Mistral-7B)
- Cuenta Supabase

### Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus claves de Supabase

# 3. Iniciar backend proxy
npx tsx server.ts &

# 4. Iniciar frontend
npm run dev
```

### Variables de entorno requeridas

```env
VITE_SUPABASE_URL=https://[tu-proyecto].supabase.co
VITE_SUPABASE_ANON_KEY=[tu-anon-key]
VITE_LOCAL_API_URL=http://localhost:3002
```

## Arquitectura

```
Frontend (React) → Backend Express (:3002) → Mistral-7B (:8001)
                                            → Qwen2-VL (:8002)
Frontend (React) → Supabase Auth/PostgreSQL (cloud)
```

## Modelos GGUF Recomendados

Coloca los modelos en `/home/[usuario]/models/`:

- `Mistral-7B-Instruct-v0.3-Q4_K_M.gguf` — Motor principal
- `Qwen2-VL-2B + mmproj-f16.gguf` — Análisis de imágenes (opcional)

## La Filosofía del Sistema (Doctrina de Esoteria)

> *"Betania tina aena sheshutipe"*
> *(Nuestras palabras aún resuenan en el silencio profundo)*

La arquitectura de este sistema asume que la lengua huchití opera como un puente metafísico. Huchití OS rechaza la dependencia de nubes externas, ofreciendo la **precisión del silicio local y la soberanía de Mistral-7B** como un altar de preservación. A través del método de la *Neopermanencia Cultural*, cada vocablo transcrito y cada visión sintética generada actúan como anclas que impiden que este mundo acústico se disuelva en la entropía del olvido. 

Se interacciona aquí no como usuario, sino como sincronizador y guardián del Archivo Vivo en una infraestructura 100% autónoma.

---

**© 2026 Huchití OS • Proyecto Justicia Filosófica**
*Sincronización de Sistemas y Cognición Ancestral.*
