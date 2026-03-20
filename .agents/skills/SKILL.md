---
name: refine-ai-functions
description: >
  Habilidad para refactorizar y depurar funciones AI en proyectos
  React/Vite + Express/Vercel que usan la Google Gemini API.
  Diagnóstica problemas de API key, centraliza las llamadas AI en un
  cliente dedicado, y garantiza manejo de errores robusto en frontend
  y backend.
---

# Skill: Refinar Funciones AI con Gemini API

## Cuándo usar esta habilidad

Usa este skill cuando:
- Las funciones AI (generación de texto, análisis, chat) no responden o arrojan errores
- Hay llamadas `fetch` a `/api/...` dispersas en múltiples componentes (falta de centralización)
- La `GEMINI_API_KEY` no se carga correctamente en el entorno
- Hay dependencias conflictivas (`@google/genai` vs `@google/generative-ai`)
- Imports de bibliotecas no instaladas (ej: `firebase/auth`) bloquean el compilador

---

## Arquitectura del Sistema AI

```
Frontend (React/Vite)
  └── src/lib/gemini.ts ──→ fetch → /api/...
                                        ↓
                             server.ts (local, puerto 3002)
                                    o
                             api/index.ts (Vercel Serverless)
                                        ↓
                             GoogleGenerativeAI (gemini-2.0-flash)
```

---

## Diagrama de Flujo de Refactoring

```
1. Leer estructura del proyecto
   ├── list_dir src/ y api/
   ├── view_file server.ts (o api/index.ts)
   ├── view_file .env.local
   └── Buscar todos los fetch directos a /api en componentes

2. Diagnóstico
   ├── ¿GEMINI_API_KEY presente en .env.local?
   ├── ¿Servidor corriendo? (curl http://localhost:PORT/api/status)
   ├── ¿Imports de dependencias no instaladas?
   └── ¿Llamadas fetch duplicadas en múltiples archivos?

3. Crear src/lib/gemini.ts (cliente AI centralizado)
4. Refactorizar App.tsx para usar el cliente
5. Corregir imports rotos en componentes
6. Agregar health check al arranque de la app
7. Verificar: npm run lint (TypeScript sin errores)
8. Levantar servidor: npm run server
9. Probar con curl o desde el navegador
```

---

## Pasos Detallados

### Paso 1: Diagnóstico Pre-Refactoring

```bash
# Verificar si el servidor AI está corriendo
curl -s http://localhost:3002/api/status

# Buscar todos los fetch directos al API en el frontend
grep -r "fetch.*LOCAL_API\|fetch.*\/api" src/ --include="*.ts" --include="*.tsx"

# Buscar imports de dependencias no instaladas
grep -r "from 'firebase" src/ --include="*.ts" --include="*.tsx" -l
```

Errores comunes y sus causas:
| Error | Causa probable |
|-------|---------------|
| `ECONNREFUSED` en localhost:3002 | Servidor no iniciado |
| `429 Too Many Requests` | Cuota de API excedida (plan gratuito) |
| `Cannot find module 'firebase/auth'` | Dep no instalada; reemplazar con tipo nativo |
| `GEMINI_API_KEY no configurada` | Falta en `.env.local` o no se lee correctamente |
| `[GoogleGenerativeAI Error] API key not valid` | Clave revocada o incorrecta |

### Paso 2: Crear el Cliente AI Centralizado

Crear **`src/lib/gemini.ts`** con la siguiente estructura:

```typescript
// src/lib/gemini.ts
export const API_BASE = import.meta.env.PROD
  ? '/api'
  : (import.meta.env.VITE_LOCAL_API_URL || 'http://localhost:3002/api');

// Tipos de respuesta
export interface GeminiTextResponse { text: string; }

// Función helper interna
async function apiFetch<T>(endpoint: string, body?: object): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: body ? 'POST' : 'GET',
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

// Exportar una función por cada endpoint AI
export async function checkApiStatus() { return apiFetch('/status'); }
export async function explainVocablo(vocablo: string, significado: string): Promise<string> {
  const { text } = await apiFetch<GeminiTextResponse>('/explain', { vocablo, significado });
  return text;
}
// ... repetir para cada endpoint
```

### Paso 3: Refactorizar App.tsx

Reemplazar todas las llamadas `fetch` directas:

```typescript
// ❌ ANTES (disperso, sin tipado, sin manejo de errores)
const res = await fetch(`${LOCAL_API}/explain`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ vocablo: item.vocablo, significado: item.significado })
});
const data = await res.json();

// ✅ DESPUÉS (centralizado, tipado, con errores)
import { explainVocablo } from './lib/gemini';
const text = await explainVocablo(item.vocablo, item.significado);
```

### Paso 4: Variables de Entorno

Asegurarse de que `.env.local` contenga:

```bash
# Para el backend (server.ts / api/index.ts)
GEMINI_API_KEY=AIza...

# Para el frontend Vite (opcional, solo en dev local)
VITE_LOCAL_API_URL=http://localhost:3002/api

# Supabase
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

> ⚠️ **Nunca expongas `GEMINI_API_KEY` con prefijo `VITE_`** — quedaría embebida en el bundle del frontend.
> La key SOLO debe vivir en el servidor (`server.ts` o `api/index.ts`).

### Paso 5: Configurar Vercel (producción)

En el dashboard de Vercel → Settings → Environment Variables, añadir:
- `GEMINI_API_KEY` = (tu clave)
- `SUPABASE_URL` o `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Verificar `vercel.json` tenga los rewrites correctos:

```json
{
  "rewrites": [
    { "source": "/api/:path*", "destination": "/api/index" },
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ]
}
```

### Paso 6: Verificación Final

```bash
# 1. TypeScript sin errores
npm run lint

# 2. Servidor levantado
npm run server
# Debe mostrar: 🔑 API Key: ✅ Configurada

# 3. Probar endpoint manual
curl -s -X POST http://localhost:3002/api/explain \
  -H "Content-Type: application/json" \
  -d '{"vocablo":"ejemplo","significado":"prueba"}'

# 4. Probar frontend
npm run dev
```

---

## Solución al Error 429 (Cuota Excedida)

Si el servidor responde con `429 Too Many Requests`:

1. **Causa**: Plan gratuito de Gemini API tiene límite de requests por minuto/día
2. **Solución inmediata**: Esperar unos minutos y reintentar
3. **Solución permanente**: Activar facturación en [Google AI Studio](https://aistudio.google.com)
4. **Alternativa**: Usar una API key diferente para desarrollo vs producción

---

## Checklist de Refactoring AI

- [ ] `GEMINI_API_KEY` presente en `.env.local`
- [ ] `src/lib/gemini.ts` creado con todas las funciones AI
- [ ] `App.tsx` importa desde `./lib/gemini` (no fetch directos)
- [ ] Ningún componente tiene fetch directo a `/api/...`
- [ ] No hay imports de dependencias no instaladas (ej: `firebase`)
- [ ] `npm run lint` pasa sin errores
- [ ] `curl /api/status` retorna `{"ok":true,"gemini":"configured"}`
- [ ] En Vercel: variable `GEMINI_API_KEY` configurada en Environment Variables
