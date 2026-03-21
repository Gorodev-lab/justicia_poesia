# Skill & Best Practice: Migración Limpia de Vite o CRA a Next.js (Optimización UX y Móvil)

Este documento guarda la memoria de cómo refactorizar un proyecto heredado (por ejemplo `Vite` o `Create React App`) a la arquitectura de sistema de `Next.js` cuando se requiera o "sea necesario", particularmente para solucionar problemas de renderizado, optimizar UX en dispositivos móviles, lograr fluidez de "Native App feeling" y colapsar la brecha entre Backend y Frontend.

## Pasos Universales para la Migración Sin Fricción

### 1. Actualización de Dependencias Core
Antes de mover carpetas, inyectamos el App Router de Next.js conservando temporalmente los artefactos y configuraciones existentes de React.

```bash
npm install next@latest react@latest react-dom@latest
# Si usas Tailwind v4:
npm install @tailwindcss/postcss@latest postcss@latest
```
En el `package.json`, reescribimos los "scripts" vitales:
```json
"dev": "next dev",
"build": "next build",
"start": "next start"
```

### 2. Estructura de Directorios a Next.js (App Router y Pages)
En vez de tratar de destrozar los componentes que ya existen en `src/`, generamos envoltorios en una nueva carpeta `app/`:

*   **`app/layout.tsx` (El Esqueleto y UX Móvil Avanzado)**: Aquí centralizamos la inyección del viewport para que la aplicación deje de comportarse erráticamente en el celular (típico zoom automático o overflows). Se añade la directiva `userScalable: false` de Next.js Metadata, y la importación del CSS global (`globals.css`).
*   **`app/page.tsx` (El Punto de Entrada "Client-Side")**: Para no romper el estado, `useState`  y contextos pre-existentes de tu app (como en `src/App.tsx`), creamos esta página como **Client Component** (con la orden `"use client";` arriba) y renderizamos internamente el componente `<App />` viejo. Agregamos tácticas de *safe hydration* (`useEffect` de mounted status) para que el SSR no colisione con el estado del navegador.
*   **Limpiar el pasado**: El archivo `index.html` viejo de Vite ya se puede desechar de ser necesario, ya que `layout.tsx` lo ha superado. Reubicar `src/index.css` hacia `app/globals.css`.

### 3. Fusión del Backend (Vercel Serverless Functions a Next.js)
Si teníamos nuestra lógica api aglomerada y empaquetada en un folder `/api/` en la raíz (estilo Vercel puro)... 

No hay que reprogramar los enrutadores! Usamos `Pages API Catch-All`:
*   Crea una ruta en `pages/api/[...catchall].ts`.
*   Importa el antiguo _handler_ (`import handler from '../../api/index'; export default handler;`).
*   Next.js absorberá automáticamente las llamadas front-end a `/api/*` sin que rompas o recodifiques un solo endpoint.

### 4. Corrección de Bugs de Scroll (UX) en Celulares
En Apps tipo SPAs migradas:
Nunca envolver el div maestro en la clase de Tailwind `overflow-hidden`, porque rompe el evento touch de *panning* o desplazamiento vertical nativo de iOS y Android. Reemplaza siempre con **`overflow-x-hidden min-h-screen`**.

### 5. Adaptar Variables de Estado del Empaquetador Antiguo
En clientes Vite, se usa `import.meta.env.PROD` para discriminar URLs en Fetch APIS. Al consolidar todo bajo un mismo techo (con React Server Functions o Route Handlers nativos de Next.js), estas condiciones mueren.
Simplemente sustituir con URLs absolutas a nivel root: `export const API_BASE = '/api';`. Esto funciona unificadamente en servidor de desarrollo y producción en Next.js.
