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
    'Aeta': `El mar, inmenso y proveedor. Para el pueblo de la "Raza Viva", Aeta no era solo agua, sino el final del horizonte adonde retornan los antiguos. Su fonética profunda evoca el golpear de las olas contra el Cabo.`,
    'Tipe': `Cerca o proximidad. Es el hilo invisible que ataba su concepción comunitaria en el desierto; la supervivencia en la península exigía que el linaje siempre se mantuviera 'tipe', cohesionado y dispuesto.`,
    'Aena': `Arriba o en lo alto. Señalar el 'Aena' era dirigir la mirada hacia los astros, donde reposan los mitos y las estrellas que marcaban las estaciones de recolección de pitahayas en el árido sur.`,
    'Ipe': `Bueno o próspero. Representaba un equilibrio, no material, sino espiritual con la Madre Tierra. Una marea abundante o encontrar refugio en la sierra de la Laguna era considerado 'ipe'.`,
    'Enta': `La tierra o terreno firme. Un concepto central ya que el espacio físico dictaba el desplazamiento nómada y ofrecía los pigmentos para pintar su memoria rupestre y su cosmogonía en cuevas recónditas.`,
    'default': `La palabra "${vocablo}" evoca un eco de los ancestros. Como una huella en el polvo del desierto de Baja California, su raíz nos recuerda que la antigua nación huchití habitó armónicamente con la tierra 'enta' y el mar 'aeta', antes de que su voz fuera silenciada.`
  };
  
  const text = hardcodedExplanations[vocablo] || hardcodedExplanations['default'];
  res.json({ text });
});

// ====================================================
// ENDPOINT 2: Constructor de frases
// ====================================================
app.post('/api/build-phrase', (req, res) => {
  const { phrase } = req.body;
  
  const parsed = {
    "palabra_original": phrase,
    "analisis_silabico": `Base [${phrase.substring(0,2)}] + sufijo de movimiento [-ta] + clasificador de esencia [-pe]`,
    "transcripcion_ipa": `/ʔi.pe.ta.na/ [heurística aplicada]`,
    "cadena_optimizada_tts": "Ípe taána... betánia énta."
  };
  
  res.json(parsed);
});

// ====================================================
// ENDPOINT 4: Chat oráculo
// ====================================================
app.post('/api/oraculo', (req, res) => {
  const crypticResponses = [
    "La marea siempre borra la huella, pero la arena recuerda el peso del paso.",
    "Buscas respostas en las hojas del cardón, pero la verdadera sed se sacia escuchando el viento.",
    "El fuego nunca muere frente al mar; solo se esconde en la memoria de la piedra.",
    "El lenguaje de los antiguos no se habla, se camina descalzo sobre la sierra roja.",
    "Cuando la pitahaya florece de noche, la verdad se asoma. Tu tiempo aún es semilla.",
    "Lo que tú llamas silencio, nosotros lo llamamos el eco eterno de la tierra (Enta)."
  ];
  const randomResponse = crypticResponses[Math.floor(Math.random() * crypticResponses.length)];
  res.json({ text: randomResponse });
});

// ====================================================
// ENDPOINT 5: Generador de descripción de imagen
// ====================================================
app.post('/api/describe-image', (req, res) => {
  const { prompt } = req.body;
  const description = `Visión invocada por "${prompt}": 
  
En la rugosa superficie de roca calcárea, emerge una composición trazada con rojo hematita y carbón vegetal. En el centro, figuras estilizadas y antropomorfas con brazos alzados hacia el cielo claman al desierto. Las líneas fluyen ágiles e interconectadas, imitando el vaivén del horizonte y evocando una escena atemporal de ceremonia y profunda conexión con lo inefable. Restos de polvo ocre revelan la devoción del artista olvidado.`;

  res.json({ text: description });
});

app.get('/api/status', (_req, res) => {
  res.json({ ok: true, gemini: false, hardcoded_demo: true });
});

const PORT = process.env.PORT || 3002;
if (process.env.NODE_ENV !== 'production') {
  createServer(app).listen(PORT, () => {
    console.log(`🏛️  Huchití OS Backend — escuchando en puerto ${PORT}`);
    console.log(`✨ Proveedor: Hardcoded UI/UX Demo Responses activo.`);
  });
}

export default app;
