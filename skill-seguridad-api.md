# Skills & Best Practices: Prevención de Exposición de API Keys

Este documento establece las normativas y estrategias de seguridad requeridas para evitar la vulnerabilidad y exposición de claves de API (como las de Google Gemini, Mistral, Supabase, etc.) en el proyecto "Justicia Filosófica - El Uchití" y en futuros desarrollos.

## 1. El Problema: Cómo se exponen las API Keys
Las claves de API suelen exponerse por los siguientes descuidos comunes:
- **Subir archivos `.env`, `.env.local` o `config.ts` al control de versiones (Git).**
- **Inyectar claves de API backend directamente en el código del Frontend (React/Vite).**
- **Hacer commits con las claves hardcodeadas en los scripts temporales de pruebas.**
- **Incluir claves en los mensajes de error de la consola o devueltos al cliente.**

## 2. Estrategias de Mitigación y Prevención

### A. Uso estricto de `.gitignore`
Asegúrate de que todos los archivos de variables de entorno estén siempre excluidos en el archivo `.gitignore`.
```gitignore
# Archivos de entorno locales
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

### B. Separación Clara: Backend vs Frontend
- Las API Keys **críticas** y facturables (Gemini, Mistral) **NUNCA** deben llegar al navegador del usuario final.
- El código React (`src/`) solo debe comunicarse con un Backend intermedio (Serverless Functions, Vercel API, Node.js) mediante endpoints relativos o variables públicas de entorno seguras (e.g., `VITE_API_URL`).
- El Backend (`api/index.ts`, `server.ts`) es el único responsable de leer secretos usando `process.env.GEMINI_API_KEY` y realizar la petición al servicio externo.

### C. Configurar Variables de Entorno en el Hosting
En lugar de depender de archivos locales, en entornos de producción (Vercel, Netlify, Render), las API Keys deben ser configuradas exclusivamente mediante el panel de control de entorno de la plataforma ("Settings -> Environment Variables").

### D. Rotación de Claves (Protocolo de Respuesta)
Si sospechas que una clave ha sido expuesta:
1. **Revoca la clave inmediatamente** en el panel del proveedor (ej. Google Cloud Console).
2. **Genera una clave nueva** y regístrala en las variables de entorno locales `.env.local` y de producción.
3. No intentes "limpiar" la clave haciendo un commit inverso en Git, ya que perdurará en el historial. Usa herramientas como BFG Repo-Cleaner o reescribe la historia si fue accidentalmente committeada, pero la revocación es lo único verdaderamente seguro.

### E. Auditoría y Herramientas (Git Hooks)
Considera implementar herramientas como `gitleaks` o usar servicios de escaneo de secretos nativos de GitHub (Secret Scanning) que previenen que el push se complete si detectan cadenas como `AIzaSy...` o `sk-...` en el código.

## 3. Ejemplo de Arquitectura Segura
**Incorrecto (Frontend pidiendo a Gemini directamente):**
```typescript
// En un componente de React (VULNERABLE)
const apiKey = "AIzaSy...vulnerable...";
const result = await fetch(`https://generativelanguage.googleapis.com/...key=${apiKey}`);
```

**Correcto (Delegación a Backend):**
```typescript
// En el componente de React (SEGURO)
const result = await fetch('/api/generate-text', { method: 'POST', body: ... });

// En Vercel / Backend (api/index.ts)
const apiKey = process.env.GEMINI_API_KEY; // Protegido en el servidor
const googleApi = fetch(`https://generativelanguage.googleapis.com/...key=${apiKey}`);
```

## Conclusión
Nunca confíes secretos al cliente. Una API Key expuesta puede generar enormes costos facturados u ocasionar interrupciones por abuso de cuota. Revisa siempre los diffs de tus commits antes de hacer un push.
