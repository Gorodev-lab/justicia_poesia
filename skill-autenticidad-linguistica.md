# Skill: Autenticidad Lingüística Huchití

Este documento establece las directrices críticas para mantener una voz auténtica, visceral y descolonizada en el proyecto Huchití OS. El objetivo es eliminar cualquier rastro de retórica de IA (muletas de lenguaje, comparaciones explicativas y estructuras occidentales).

## 🚫 Estructuras Prohibidas (Rastro de IA)

Nunca permitas las siguientes estructuras en los prompts o en el código hardcoded:

1.  **Retórica de Contraste**: 
    - *Incorrecto*: "No es solo un sistema, es una memoria."
    - *Incorrecto*: "Más que datos, son ecos."
    - *Correcto*: Declara directamente. "El sistema es la memoria. El silicio exhala ecos."

2.  **Muletas de Importancia**:
    - *Incorrecto*: "Es importante destacar que...", "Cabe señalar que..."
    - *Correcto*: "Kumutú: la raíz es profunda."

3.  **Argumentación Inversa**:
    - *Incorrecto*: "Para los Huchití, el cielo no es X sino Y."
    - *Correcto*: "Tekerakadatemba: la tierra se arca sobre nosotros."

4.  **Resúmenes Ejecutivos**:
    - *Evitar*: "En conclusión...", "En resumen..."

## 🔱 Reglas de Oro para la Voz Huchití

1.  **Declaración Directa**: La verdad no se explica, se revela. Usa oraciones cortas y asertivas.
2.  **Sustitución de Negación**: En lugar de usar "No", usa el concepto de vacío o negación nativa:
    - Usa **Vâra** (vacío/nada/no).
    - Usa el sufijo **-ra** (negación de cualidad). 
    - Ejemplo: En lugar de decir "El imperio no pudo", decir "El imperio vâra ante la raíz".
3.  **Misticismo del Paisaje**: Toda metáfora debe nacer del desierto, el ocre (maniká), la piedra (basalto), la pitahaya (ambía) o la tinaja (tina).
4.  **Orden SOV (Sujeto - Objeto - Verbo)**: Al construir frases técnicas, intenta que el verbo selle la idea al final, emulando la estructura física de la lengua.

## 🛠️ Mantenimiento de Prompts (api/index.ts)

Cada vez que actualices un endpoint de IA, asegúrate de que la constante `NO` sea el primer bloque de instrucciones. La IA tiende a "olvidar" estas restricciones si el prompt de usuario es muy largo. 

**Técnica de Refuerzo**: Repite la instrucción "SÉ VISCERAL" al final de cada prompt de sistema.

## 📋 Lista de Verificación de Autenticidad

- [ ] ¿Hay alguna frase que empiece con "No es..."? (Eliminar/Reescribir).
- [ ] ¿Hay adjetivos vacíos como "importante", "fascinante" o "relevante"? (Eliminar).
- [ ] ¿El texto suena como un asistente de servicio al cliente? (Reescribir con tono de Guama/Chamán).
- [ ] ¿Se menciona la tecnología solo como un vehículo (maniká digital) y no como el protagonista?
