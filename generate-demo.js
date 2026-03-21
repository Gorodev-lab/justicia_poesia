import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
if (!GEMINI_API_KEY) {
  console.error("No se encontró GEMINI_API_KEY");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function generateTestingAudio() {
  console.log("Generando ejemplo de Audio con Gemini 2.0 Flash...");
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash", // O -exp
      generationConfig: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {
              voiceName: "Charon"
            }
          }
        }
      }
    });

    const textToSpeak = "Umutú. Be uchita... datembà. Nosotros recordamos a los que caminaron antes.";
    const result = await model.generateContent(`Pronuncia lentamente y con tono grave, misterioso y pausado este texto: ${textToSpeak}`);
    
    // Obteniendo base64 de la respuesta
    const parts = result.response.candidates[0]?.content?.parts || [];
    const inlineData = parts.find(p => p.inlineData)?.inlineData;
    
    if (inlineData && inlineData.data) {
      const audioBuffer = Buffer.from(inlineData.data, 'base64');
      fs.writeFileSync('ejemplo_audio_uchiti.wav', audioBuffer);
      console.log("Audio generado exitosamente: ejemplo_audio_uchiti.wav");
    } else {
      console.log("No se pudo extraer data de audio");
      console.log(JSON.stringify(parts, null, 2));
    }
  } catch (error) {
    console.error("Error generando audio:", error.message);
  }
}

async function generateTestingImage() {
  console.log("Generando ejemplo de Imagen (Arte Rupestre) con Imagen 3...");
  const prompt = "Pintura rupestre auténtica en una cueva de Baja California Sur sobre basalto ocre, pintura hecha con pigmento rojo hematita silueteando a un chamán guama de la cultura Guaycura, con pigmento negro carbón marcando la dualidad.";
  
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${GEMINI_API_KEY}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instances: [{ prompt: prompt }],
        parameters: { sampleCount: 1, aspectRatio: "16:9", outputOptions: { mimeType: "image/jpeg" } }
      })
    });
    
    const data = await response.json();
    if (data.predictions && data.predictions[0] && data.predictions[0].bytesBase64Encoded) {
      const buffer = Buffer.from(data.predictions[0].bytesBase64Encoded, 'base64');
      fs.writeFileSync('ejemplo_arte_rupestre.jpg', buffer);
      console.log("Imagen generada exitosamente: ejemplo_arte_rupestre.jpg");
    } else {
      console.error("Error al extraer imagen", JSON.stringify(data));
    }
  } catch (error) {
    console.error("Error generando imagen:", error.message);
  }
}

async function run() {
  await generateTestingAudio();
  await generateTestingImage();
}

run();
