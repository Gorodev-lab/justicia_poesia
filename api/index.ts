import express from 'express';
import { createServer } from 'http';

const app = express();
app.use(express.json({ limit: '50mb' }));

// CORS para el frontend Vite
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// ====================================================
// ENDPOINT 1: Explicar vocablo huchití
// ====================================================
app.post('/api/explain', (req, res) => {
  const { vocablo, significado } = req.body;
  const hardcodedExplanations: Record<string, string> = {
    'Aeta': `El mar, inmenso y proveedor. Bajo la Doctrina de Esoteria, Aeta es el espejo del Aena; una superficie plateada donde el pueblo de la "Raza Viva" leía el destino en el movimiento de las mareas. Representa la fluidez de la conciencia huchití frente a la solidez del desierto.`,
    'Tipe': `La proximidad sagrada. No se refiere solo a la distancia física, sino al entrelazamiento de las almas en el clan. Estar 'tipe' era estar en sintonía con el latido de la sierra y la necesidad del otro; la unidad como defensa contra la hostilidad del clima.`,
    'Aena': `Lo celestial y lo inalcanzable. 'Aena' es la cúpula de estrellas que guiaba las migraciones estacionales. En la cosmovisión huchití, es el origen del fuego y el lugar hacia donde viajan los reflejos de aquellos que cruzaron el gran mar.`,
    'Ipe': `El equilibrio perfecto. 'Ipe' describe el estado cuando la cosecha de pitahaya es generosa y la sed desaparece. Es la justicia filosófica aplicada a la vida diaria: la armonía entre el deseo humano y la voluntad de la tierra (Enta).`,
    'Enta': `La Madre de Piedra. 'Enta' es la fundación, el terreno firme que sostiene los pies y guarda los pigmentos de la memoria. Es en la carne de 'Enta' donde los antiguos tatuaron sus visiones para que nosotros, los sincronizadores, pudiéramos recuperarlas.`,
    'default': `La palabra "${vocablo}" (${significado}) resuena en los estratos profundos de la memoria huchití. Como un susurro atrapado en una caracola, su sentido nos habla de una era donde la lengua no era una herramienta, sino una extensión orgánica del entorno de Baja California Sur.`
  };
  
  const text = hardcodedExplanations[vocablo] || hardcodedExplanations['default'];
  res.json({ text });
});

// ====================================================
// ENDPOINT 2: Constructor de frases
// ====================================================
app.post('/api/build-phrase', (req, res) => {
  const { phrase } = req.body;
  const roots = ["Ipe", "Aeta", "Aena", "Enta", "Tipe"];
  const randomRoot = roots[Math.floor(Math.random() * roots.length)];
  
  const parsed = {
    "palabra_original": phrase,
    "analisis_silabico": `Raíz Metafísica [${randomRoot}] + Derivación Descriptiva [${phrase.length > 5 ? 'Sheshu' : 'Tina'}] + Marcador de Existencia [-pe]`,
    "transcripcion_ipa": `/${randomRoot.toLowerCase()}.${phrase.length}.pe/ [Cognición Estática]`,
    "cadena_optimizada_tts": `${randomRoot} ... ${phrase.substring(0,3)} ... neopermanencia.`
  };
  
  res.json(parsed);
});

// ====================================================
// ENDPOINT 4: Chat oráculo
// ====================================================
app.post('/api/oraculo', (req, res) => {
  const crypticResponses = [
    "No busques el agua en el cielo (Aena) cuando la tierra (Enta) ya te ha dado la raíz.",
    "El silencio es la lengua que los sabios hablan cuando las palabras ya no bastan para contener la inmensidad del Aeta.",
    "Eres un reflejo en la piedra. Si quieres ver la verdad, deja de moverte como el viento y quédate 'tipe' a tu centro.",
    "La pitahaya no pregunta cuándo florecer; simplemente aguarda la caricia del sol. Tu impaciencia es tu mayor obstáculo.",
    "Cada vocablo que recuperas es una estrella que vuelve a brillar en el firmamento de la justicia filosófica.",
    "La memoria no es algo que se busca, es algo que se permite. Abre la palma de tu mano y deja que el desierto escriba en ella."
  ];
  const randomResponse = crypticResponses[Math.floor(Math.random() * crypticResponses.length)];
  res.json({ text: randomResponse });
});

// ====================================================
// ENDPOINT 5: Generador de descripción de imagen
// ====================================================
app.post('/api/describe-image', (req, res) => {
  const { prompt } = req.body;
  const visiones = [
    `Visión de "${prompt}": Sobre un lienzo de arenisca roja, se despliega una danza de sombras y pigmentos ocres. Figuras zoomorfas se entrelazan con trazos geométricos que representan el flujo de las mareas de Aeta. Es un registro de neopermanencia, donde lo efímero del pensamiento se vuelve eterno en el mineral.`,
    `Visión de "${prompt}": El trazo es rudo, ancestral, cargado de la fuerza de Enta. Se distinguen símbolos de fertilidad y manos impresas que parecen querer salir de la piedra para tocar el Aena. Un azul mineral, raramente visto, destaca el centro de la composición.`,
    `Visión de "${prompt}": Composición minimalista sobre una cueva de granito. La luz de una antorcha imaginaria revela una estructura SOV visual: el sujeto (el desierto), el objeto (la sed) y el verbo (la resistencia) unidos en un solo trazo de hematita pura.`
  ];
  const description = visiones[Math.floor(Math.random() * visiones.length)];

  res.json({ text: description });
});

app.get('/api/status', (_req, res) => {
  res.json({ ok: true, engine: 'Hardcoded Demo (Sovereignty Test Mode)' });
});

const PORT = process.env.PORT || 3002;
if (process.env.NODE_ENV !== 'production') {
  createServer(app).listen(PORT, () => {
    console.log(`🏛️  Huchití OS Backend — escuchando en puerto ${PORT}`);
    console.log(`✨ Proveedor: Hardcoded UI/UX Demo Responses activo.`);
  });
}

export default app;
