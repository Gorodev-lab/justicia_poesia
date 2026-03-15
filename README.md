<div align="center">

# 🏛️ Huchití OS
### Sistema de Recuperación Lingüística — Proyecto Justicia Filosófica

*Revitalización digital de la lengua huchití del pueblo originario de Baja California Sur, México*

</div>

---

## Descripción

**Huchití OS** es una aplicación web interactiva que integra modelos de lenguaje locales (Mistral-7B) con tecnologías web modernas para preservar, educir y difundir el vocabulario y la fonética de la lengua huchití.

El proyecto forma parte del movimiento de **Justicia Filosófica** — el reconocimiento de las epistemologías indígenas como sistemas de conocimiento legítimos y vivos.

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
- **Backend**: Express (proxy local) → Mistral-7B GGUF @ `localhost:8001`
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

## Filosofía del Proyecto

> *"Betania tina aena sheshutipe"*

La lengua huchití es un puente entre la memoria ancestral y el presente digital. Este proyecto usa IA no para reemplazar la sabiduría indígena, sino para amplificarla y preservarla.

---

**© 2026 Huchití OS • Proyecto Justicia Filosófica**
