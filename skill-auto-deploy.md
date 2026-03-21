# Skill & Regla de Negocio: Auto-Deployment Continuo (CI/CD)

Este documento instruye al sistema, la IA y al equipo de desarrollo sobre la regla universal obligatoria al finalizar cada tarea exitosa.

## La Directiva 
"Cada que se realice un cambio efectivo, se hace commit, push a origin main y redeploy".

No deben dejarse archivos intermedios, pruebas o ramas colgadas de manera permanente sin integrar a no ser que sea intencionalmente instruido. Este flujo de Integración y Despliegue Continuo mantiene a Vercel sirviendo la última versión del Huchití OS sin retrasos.

## Flujo Operativo Estándar Terminal

Al concluir la resolución del problema y comprobar su viabilidad, el Asistente AI debe ejecutar inmediatamente los comandos de terminal correspondientes a este ciclo:

1. **Añadir la evidencia**: 
   `git add .`
2. **Empaquetar semánticamente el estado**: 
   `git commit -m "chore/feat/fix: descripción técnica concisa y cultural"`
3. **Enviar a Nube (Redeploy Vercel Automático)**:
   `git push origin main`

### Despliegue (Redeploy)
El ecosistema del proyecto (Next.js alojado de Node a Vercel) confía en el _webhook_ del repositorio. Al detectar el push a la rama `main`, Vercel iniciará e invalidará silenciosamente el caché antiguo sin necesidad de un comando de `Vercel CLI`, asegurando la visibilidad del avance de cara al público global.

*Se ha aprovisionado además un archivo Workflow interno para el Agente que automatizará este proceso al ser provocado.*
