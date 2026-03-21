# Skill: Configuración Multimodal (Audio e Imagen)

Este documento detalla los requerimientos técnicos y pasos manuales para habilitar las capacidades de generación visual y auditiva de Google dentro de Huchití OS.

## 🎨 Parte 1: Google Imagen 3

Para que el **Sintetizador Visual** funcione nativamente, el API Key debe estar autorizada para el modelo de renderizado térmico y rupestre.

### Pasos en Google AI Studio:
1.  **Entorno**: Accede a [aistudio.google.com](https://aistudio.google.com).
2.  **Modelo**: Localiza `imagen-3.0-generate-001`.
3.  **Habilitación**: Si el modelo no aparece en tu lista desplegable, es posible que necesites solicitar acceso o usar una cuenta con facturación activa (aunque esté en capa gratuita).
4.  **Endpoint API**: El sistema usa el endpoint de predicción REST:
    `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict`

## 🎙️ Parte 2: Audio Nativo (Modalidad Multimodal)

El audio profundo del Guama utiliza la capacidad de salida de audio de Gemini 2.0.

### Pasos Técnicos:
- **Modelo Requerido**: `gemini-2.0-flash-exp`.
- **Configuración de Respuesta**: El backend debe solicitar explícitamente `responseModalities: ["AUDIO"]`.
- **Voces Seguras**: El sistema está configurado para usar `Charon`. Si deseas una voz más suave, puedes cambiar a `Kore` en `api/index.ts`.

## 🛠️ Diagnóstico de Errores Comunes

| Error | Causa | Solución |
| :--- | :--- | :--- |
| **Status 403 / 404** | El API Key no tiene acceso al modelo. | Verificar permisos en AI Studio. |
| **Timeout 10s** | Vercel corta la conexión antes de que Imagen 3 termine. | Optimizar el prompt o subir a Vercel Pro. |
| **Fallback a Mistral** | Gemini 2.0 falló y el sistema activó el motor de texto puro. | Revisar cuotas de Google (Rate Limits). |

---
*Umutú: La memoria visual es tan sagrada como la palabra.*
