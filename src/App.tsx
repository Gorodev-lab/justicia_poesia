import { useState, useMemo, useEffect, useRef } from 'react';
import { Loader2, Moon, Sun, Terminal, LogIn, LogOut, Music } from 'lucide-react';
import { GoogleGenAI, Modality, Type, ThinkingLevel, LiveServerMessage } from "@google/genai";
import { motion, AnimatePresence } from 'motion/react';
import Minijuego from './components/Minijuego';
import TerminalWizard from './components/TerminalWizard';
import { auth, db, googleProvider, signInWithPopup, signOut, onAuthStateChanged, collection, addDoc, query, where, onSnapshot, serverTimestamp } from './firebase';
import { useAmbientMusic } from './hooks/useAmbientMusic';
import { Vocablo, SavedPhrase } from './types';
import { ARCHIVO_VIVO } from './constants';
import { pcmToWav } from './utils/audio';
import { VocabloCard } from './components/VocabloCard';
import { Generador } from './components/Generador';
import { ConstructorFrases } from './components/ConstructorFrases';
import { Oraculo } from './components/Oraculo';

import { User } from 'firebase/auth';

// Inicialización de Gemini (se hace dentro de las funciones para asegurar el API Key actualizado)
// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [explanation, setExplanation] = useState<{ [key: number]: string }>({});
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [playingExplanationId, setPlayingExplanationId] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState<'archivo' | 'generador' | 'juego' | 'constructor' | 'oraculo'>('archivo');
  const [showWizard, setShowWizard] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [savedPhrases, setSavedPhrases] = useState<SavedPhrase[]>([]);

  const { isPlaying: isMusicPlaying, toggleMusic } = useAmbientMusic();

  // Live API states
  const [isLiveActive, setIsLiveActive] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState<string[]>([]);
  const liveSessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const audioProcessorRef = useRef<ScriptProcessorNode | null>(null);

  // Phrase Constructor states
  const [phraseInput, setPhraseInput] = useState('');
  const [phraseResult, setPhraseResult] = useState('');
  const [phraseTtsText, setPhraseTtsText] = useState('');
  const [playingPhraseText, setPlayingPhraseText] = useState<string | null>(null);
  const [isPhraseLoading, setIsPhraseLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Veo & Imagen states
  const [veoPrompt, setVeoPrompt] = useState('');
  const [veoResult, setVeoResult] = useState<string | null>(null);
  const [veoLoading, setVeoLoading] = useState(false);
  const [imagenPrompt, setImagenPrompt] = useState('');
  const [imagenResult, setImagenResult] = useState<string | null>(null);
  const [imagenLoading, setImagenLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [hasApiKey, setHasApiKey] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setSavedPhrases([]);
      return;
    }

    const q = query(collection(db, 'phrases'), where('authorUid', '==', user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const phrasesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSavedPhrases(phrasesData);
    }, (error) => {
      console.error("Firestore Error: ", error);
    });

    return () => unsubscribe();
  }, [user]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const startLiveSession = async () => {
    if (!hasApiKey) return;
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      audioContextRef.current = new AudioContextClass({ sampleRate: 16000 });
      mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const source = audioContextRef.current.createMediaStreamSource(mediaStreamRef.current);
      audioProcessorRef.current = audioContextRef.current.createScriptProcessor(4096, 1, 1);
      
      source.connect(audioProcessorRef.current);
      audioProcessorRef.current.connect(audioContextRef.current.destination);

      const sessionPromise = ai.live.connect({
        model: "gemini-2.5-flash-native-audio-preview-09-2025",
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Charon" } },
          },
          systemInstruction: "Eres un anciano sabio de la nación Huchití. Hablas de forma pausada, poética y críptica. Tu objetivo es guiar al usuario en la comprensión de la filosofía y el lenguaje huchití. Usa metáforas relacionadas con el desierto, el mar y las estrellas.",
          inputAudioTranscription: {},
          outputAudioTranscription: {},
        },
        callbacks: {
          onopen: () => {
            setIsLiveActive(true);
            setLiveTranscript(prev => [...prev, "[SISTEMA]: Conexión neuronal establecida. El Oráculo escucha."]);
            
            audioProcessorRef.current!.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcm16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                pcm16[i] = Math.max(-1, Math.min(1, inputData[i])) * 0x7FFF;
              }
              
              const base64Data = btoa(String.fromCharCode(...new Uint8Array(pcm16.buffer)));
              
              sessionPromise.then((session) => {
                session.sendRealtimeInput({
                  media: { data: base64Data, mimeType: 'audio/pcm;rate=16000' }
                });
              });
            };
          },
          onmessage: async (message: LiveServerMessage) => {
            if (message.serverContent?.modelTurn?.parts[0]?.inlineData?.data) {
              const base64Audio = message.serverContent.modelTurn.parts[0].inlineData.data;
              const byteCharacters = atob(base64Audio);
              const byteNumbers = new Uint8Array(byteCharacters.length);
              for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
              }
              
              const wavBlob = pcmToWav(byteNumbers, 24000);
              const url = URL.createObjectURL(wavBlob);
              const audio = new Audio(url);
              await audio.play();
              audio.onended = () => URL.revokeObjectURL(url);
            }
            
            if (message.serverContent?.modelTurn?.parts[0]?.text) {
              setLiveTranscript(prev => [...prev, `[ORÁCULO]: ${message.serverContent!.modelTurn!.parts[0].text}`]);
            }
          },
          onclose: () => {
            setIsLiveActive(false);
            setLiveTranscript(prev => [...prev, "[SISTEMA]: Conexión terminada."]);
            stopAudioCapture();
          },
          onerror: (error) => {
            console.error("Live API Error:", error);
            setIsLiveActive(false);
            stopAudioCapture();
          }
        }
      });
      
      liveSessionRef.current = sessionPromise;
      
    } catch (error) {
      console.error("Error starting live session:", error);
      setIsLiveActive(false);
      stopAudioCapture();
    }
  };

  const stopAudioCapture = () => {
    if (audioProcessorRef.current) {
      audioProcessorRef.current.disconnect();
      audioProcessorRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  const stopLiveSession = () => {
    if (liveSessionRef.current) {
      liveSessionRef.current.then((session: any) => session.close());
      liveSessionRef.current = null;
    }
    stopAudioCapture();
    setIsLiveActive(false);
  };

  useEffect(() => {
    return () => {
      stopLiveSession();
    };
  }, []);

  useEffect(() => {
    const checkApiKey = async () => {
      if ((window as any).aistudio && (window as any).aistudio.hasSelectedApiKey) {
        const hasKey = await (window as any).aistudio.hasSelectedApiKey();
        setHasApiKey(hasKey);
      }
    };
    checkApiKey();
  }, []);

  const handleSelectKey = async () => {
    if ((window as any).aistudio && (window as any).aistudio.openSelectKey) {
      await (window as any).aistudio.openSelectKey();
      setHasApiKey(true);
    }
  };

  const handleApiError = (error: unknown) => {
    console.error("API Error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (errorMessage.includes("API key expired") || errorMessage.includes("Requested entity was not found")) {
      setHasApiKey(false);
    }
  };

  const buildPhrase = async () => {
    if (!phraseInput) return;
    setIsPhraseLoading(true);
    try {
      const aiInstance = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await aiInstance.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: `Actúa como un experto en lingüística computacional y fonética histórica, especializado en lenguas nativas americanas. Tienes experiencia profunda en el idioma Lakota y en la reconstrucción fonética de lenguas extintas como el Huchití.
        
        Estamos desarrollando el Archivo Vivo para el proyecto "Justicia Filosófica". Debido a que los registros fonéticos originales de la lengua huchití no se encuentran, estamos utilizando una heurística basada en la fonología del idioma Lakota como puente conceptual.
        
        Analiza la siguiente frase en español, tradúcela/adáptala al estilo de los neologismos huchití (basados en la morfología descriptiva lakota) y genera la salida en el formato JSON estricto solicitado.
        
        Frase: "${phraseInput}"
        
        FORMATO DE SALIDA (JSON ESTRICTO):
        {
          "palabra_original": "[Frase original]",
          "analisis_silabico": "[Desglose de sílabas o composición morfológica]",
          "transcripcion_ipa": "[Transcripción IPA usando heurística lakota]",
          "cadena_optimizada_tts": "[Texto fonético listo para ser inyectado en el motor TTS]"
        }`,
        config: {
          thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              palabra_original: { type: Type.STRING },
              analisis_silabico: { type: Type.STRING },
              transcripcion_ipa: { type: Type.STRING },
              cadena_optimizada_tts: { type: Type.STRING }
            },
            required: ["palabra_original", "analisis_silabico", "transcripcion_ipa", "cadena_optimizada_tts"]
          }
        }
      });
      
      const jsonResponse = JSON.parse(response.text || '{}');
      const formattedResult = `[ ANÁLISIS MORFOLÓGICO ]\nOriginal: ${jsonResponse.palabra_original}\n\n[ SÍNTESIS HUCHITÍ ]\nComposición: ${jsonResponse.analisis_silabico}\nIPA: /${jsonResponse.transcripcion_ipa}/\n\n[ CADENA TTS ]\n${jsonResponse.cadena_optimizada_tts}`;
      
      setPhraseResult(formattedResult);
      if (jsonResponse.cadena_optimizada_tts) {
        setPhraseTtsText(jsonResponse.cadena_optimizada_tts);
        playPhraseAudio(jsonResponse.cadena_optimizada_tts);
      }

      if (user) {
        try {
          await addDoc(collection(db, 'phrases'), {
            id: crypto.randomUUID(),
            authorUid: user.uid,
            originalText: phraseInput,
            generatedPhrase: formattedResult,
            ttsText: jsonResponse.cadena_optimizada_tts || '',
            createdAt: serverTimestamp()
          });
        } catch (dbError) {
          console.error("Error saving to Firestore:", dbError);
        }
      }

    } catch (error) {
      handleApiError(error);
    } finally {
      setIsPhraseLoading(false);
    }
  };

  const toggleRecording = async () => {
    if (isRecording) {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
      setIsRecording(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            audioChunksRef.current.push(e.data);
          }
        };

        mediaRecorder.onstop = async () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          stream.getTracks().forEach(track => track.stop());
          
          try {
            const reader = new FileReader();
            reader.readAsDataURL(audioBlob);
            reader.onloadend = async () => {
              const base64Audio = (reader.result as string).split(',')[1];
              const aiInstance = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
              const response = await aiInstance.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: {
                  parts: [
                    {
                      inlineData: {
                        mimeType: "audio/webm",
                        data: base64Audio
                      }
                    },
                    {
                      text: "Transcribe the audio exactly as spoken in Spanish. Only output the transcription."
                    }
                  ]
                }
              });
              
              if (response.text) {
                setPhraseInput(prev => prev ? `${prev} ${response.text}` : response.text);
              }
            };
          } catch (error) {
            console.error("Transcription error:", error);
          }
        };

        mediaRecorder.start();
        setIsRecording(true);
      } catch (error) {
        console.error("Microphone error:", error);
      }
    }
  };

  // Sincronizar clase dark con el DOM
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Efecto de sonido para el toggle
  const playToggleSound = (isDark: boolean) => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContextClass();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = 'sine';
      // Frecuencia más baja para "oscurecer", más alta para "iluminar"
      oscillator.frequency.setValueAtTime(isDark ? 220 : 440, audioCtx.currentTime);
      
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      console.error("Audio context error:", e);
    }
  };

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    playToggleSound(nextMode);
  };

  const explainContext = async (item: Vocablo) => {
    setLoadingId(item.id);
    try {
      const aiInstance = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await aiInstance.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Actúa como un experto en Lingüística de Resurrección y Justicia Filosófica. 
        Explica el contexto del término "${item.vocablo}" (${item.significado}) basado en los documentos de la revitalización huchití. 
        Menciona aspectos como la neopermanencia cultural en Baja California Sur, el sistema tetravocálico (a, e, i, u) o la gramática SOV si es relevante. 
        Sé conciso, educativo y respeta la memoria del pueblo huchití/uchití.`,
        config: {
          tools: [{ googleSearch: {} }]
        }
      });
      setExplanation(prev => ({ ...prev, [item.id]: response.text || '' }));
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoadingId(null);
    }
  };

  const generateVideo = async () => {
    if (!veoPrompt && !selectedFile) return;
    setVeoLoading(true);
    try {
      const aiInstance = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      let operation;
      if (selectedFile) {
        const reader = new FileReader();
        const base64Promise = new Promise<string>((resolve) => {
          reader.onload = () => resolve((reader.result as string).split(',')[1]);
          reader.readAsDataURL(selectedFile);
        });
        const base64 = await base64Promise;
        operation = await aiInstance.models.generateVideos({
          model: 'veo-3.1-fast-generate-preview',
          prompt: veoPrompt || "Anima esta imagen con respeto a la estética rupestre",
          image: {
            imageBytes: base64,
            mimeType: selectedFile.type,
          },
          config: { numberOfVideos: 1, resolution: '720p', aspectRatio: '16:9' }
        });
      } else {
        operation = await aiInstance.models.generateVideos({
          model: 'veo-3.1-fast-generate-preview',
          prompt: veoPrompt,
          config: { numberOfVideos: 1, resolution: '720p', aspectRatio: '16:9' }
        });
      }

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await aiInstance.operations.getVideosOperation({ operation });
      }
      
      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(downloadLink, {
          headers: { 'x-goog-api-key': (process.env.GEMINI_API_KEY as string) }
        });
        const blob = await response.blob();
        setVeoResult(URL.createObjectURL(blob));
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setVeoLoading(false);
    }
  };

  const generateImage = async () => {
    if (!imagenPrompt) return;
    setImagenLoading(true);
    try {
      const aiInstance = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await aiInstance.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: [{ text: `Estética de pintura rupestre, pigmentos minerales, trazos orgánicos sobre piedra: ${imagenPrompt}` }],
        config: { imageConfig: { aspectRatio: "1:1", imageSize: "1K" } }
      });
      
      const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
      if (part?.inlineData) {
        setImagenResult(`data:image/png;base64,${part.inlineData.data}`);
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setImagenLoading(false);
    }
  };

  const filteredResults = useMemo(() => {
    return ARCHIVO_VIVO.filter(item => 
      item.vocablo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.significado.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const playAudio = async (item: Vocablo) => {
    setPlayingId(item.id);
    try {
      const aiInstance = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await aiInstance.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Pronuncia con respeto y claridad la palabra: ${item.vocablo}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        // Convert base64 to Uint8Array
        const byteCharacters = atob(base64Audio);
        const byteNumbers = new Uint8Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        
        // Wrap raw PCM in WAV header
        const wavBlob = pcmToWav(byteNumbers, 24000);
        const url = URL.createObjectURL(wavBlob);
        
        const audio = new Audio(url);
        
        await new Promise((resolve, reject) => {
          audio.onended = () => {
            URL.revokeObjectURL(url);
            resolve(null);
          };
          audio.onerror = (e) => {
            URL.revokeObjectURL(url);
            reject(e);
          };
          audio.play().catch(reject);
        });
      } else {
        console.warn("No se recibió audio de Gemini.");
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setPlayingId(null);
    }
  };

  const playExplanation = async (id: number, text: string) => {
    setPlayingExplanationId(id);
    try {
      const aiInstance = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await aiInstance.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Lee con tono educativo, pausado y respetuoso la siguiente exégesis cultural: ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Zephyr' }, // Using a different voice for longer text
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        // Convert base64 to Uint8Array
        const byteCharacters = atob(base64Audio);
        const byteNumbers = new Uint8Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        
        // Wrap raw PCM in WAV header
        const wavBlob = pcmToWav(byteNumbers, 24000);
        const url = URL.createObjectURL(wavBlob);

        const audio = new Audio(url);
        
        await new Promise((resolve, reject) => {
          audio.onended = () => {
            URL.revokeObjectURL(url);
            resolve(null);
          };
          audio.onerror = (e) => {
            URL.revokeObjectURL(url);
            reject(e);
          };
          audio.play().catch(reject);
        });
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setPlayingExplanationId(null);
    }
  };

  const playPhraseAudio = async (text: string) => {
    if (playingPhraseText === text) return;
    setPlayingPhraseText(text);
    try {
      const aiInstance = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await aiInstance.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Pronuncia con claridad y respeto la siguiente frase: ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Charon' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const byteCharacters = atob(base64Audio);
        const byteNumbers = new Uint8Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        
        const wavBlob = pcmToWav(byteNumbers, 24000);
        const url = URL.createObjectURL(wavBlob);
        const audio = new Audio(url);
        
        audio.onended = () => {
          URL.revokeObjectURL(url);
          setPlayingPhraseText(null);
        };
        
        await audio.play();
      } else {
        setPlayingPhraseText(null);
      }
    } catch (error) {
      console.error("Error playing audio:", error);
      setPlayingPhraseText(null);
    }
  };

  if (!hasApiKey) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] text-[var(--text)] transition-colors duration-500 relative overflow-hidden">
        <div className="grain-overlay" />
        <div className="max-w-md p-10 bg-[var(--card-bg)] border border-[var(--border)] text-center space-y-8 relative z-10">
          <div className="w-20 h-20 bg-[var(--accent)] text-[var(--bg)] flex items-center justify-center mx-auto">
            <Terminal size={32} />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">AUTH_REQUIRED</h2>
            <p className="opacity-70 leading-relaxed text-sm">
              [!] Se requiere clave de API de Google Cloud con facturación habilitada para inicializar los módulos de IA.
            </p>
          </div>
          <button 
            onClick={handleSelectKey}
            className="w-full py-4 bg-[var(--accent)] text-[var(--bg)] font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity"
          >
            [ INGRESAR CLAVE API ]
          </button>
          <p className="text-xs opacity-50">
            <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="hover:underline">
              Más información sobre facturación
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (showWizard) {
    return (
      <TerminalWizard 
        onComplete={(tab) => {
          setActiveTab(tab);
          setShowWizard(false);
        }} 
      />
    );
  }

  return (
    <div className="min-h-screen transition-colors duration-500 relative overflow-hidden">
      <div className="grain-overlay" />
      
      {/* Header */}
      <header className="max-w-5xl mx-auto px-6 pt-12 pb-8 relative z-10 border-b border-[var(--border)] mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[var(--accent)] text-[var(--bg)] flex items-center justify-center">
              <Terminal size={32} />
            </div>
            <div className="space-y-1">
              <h1 className="text-4xl font-bold tracking-tighter">
                Huchití OS
              </h1>
              <p className="text-xs uppercase tracking-[0.2em] font-medium opacity-70">
                Sistema de recuperación lingüística
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 bg-[var(--card-bg)] p-2 border border-[var(--border)]">
            <button 
              onClick={() => setActiveTab('archivo')}
              className={`px-4 py-2 text-sm font-bold transition-all ${activeTab === 'archivo' ? 'bg-[var(--accent)] text-[var(--bg)]' : 'opacity-50 hover:opacity-100 hover:bg-[var(--accent-soft)]'}`}
            >
              [1] Diccionario
            </button>
            <button 
              onClick={() => setActiveTab('generador')}
              className={`px-4 py-2 text-sm font-bold transition-all ${activeTab === 'generador' ? 'bg-[var(--accent)] text-[var(--bg)]' : 'opacity-50 hover:opacity-100 hover:bg-[var(--accent-soft)]'}`}
            >
              [2] Sintetizador Visual
            </button>
            <button 
              onClick={() => setActiveTab('juego')}
              className={`px-4 py-2 text-sm font-bold transition-all ${activeTab === 'juego' ? 'bg-[var(--accent)] text-[var(--bg)]' : 'opacity-50 hover:opacity-100 hover:bg-[var(--accent-soft)]'}`}
            >
              [3] Minijuego
            </button>
            <button 
              onClick={() => setActiveTab('constructor')}
              className={`px-4 py-2 text-sm font-bold transition-all ${activeTab === 'constructor' ? 'bg-[var(--accent)] text-[var(--bg)]' : 'opacity-50 hover:opacity-100 hover:bg-[var(--accent-soft)]'}`}
            >
              [4] Constructor de Frases
            </button>
            <button 
              onClick={() => setActiveTab('oraculo')}
              className={`px-4 py-2 text-sm font-bold transition-all ${activeTab === 'oraculo' ? 'bg-[var(--accent)] text-[var(--bg)]' : 'opacity-50 hover:opacity-100 hover:bg-[var(--accent-soft)]'}`}
            >
              [5] Oráculo (Live)
            </button>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          {activeTab === 'archivo' && (
            <div className="relative max-w-2xl w-full">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--accent)] opacity-70 font-bold">{'>'}</span>
              <input 
                type="text"
                placeholder="Buscar vocablo..."
                className="w-full bg-[var(--input-bg)] border border-[var(--border)] py-4 pl-10 pr-8 focus:outline-none focus:bg-[var(--accent-soft)] transition-all text-lg font-mono"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}
          
          <div className="flex items-center gap-4 ml-auto">
            <button
              onClick={toggleMusic}
              className={`p-2 transition-colors border border-[var(--border)] ${isMusicPlaying ? 'bg-[var(--accent)] text-[var(--bg)]' : 'hover:bg-[var(--accent)] hover:text-[var(--bg)]'}`}
              title="Música Ambiental"
            >
              <Music size={16} />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors border border-[var(--border)]"
              title="Alternar Tema"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono opacity-70 border border-[var(--border)] px-3 py-1">
                  {user.email}
                </span>
                <button 
                  onClick={handleLogout}
                  className="p-2 hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors border border-[var(--border)]"
                  title="Cerrar Sesión"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <button 
                onClick={handleLogin}
                className="flex items-center gap-2 px-4 py-2 border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors text-xs font-bold uppercase tracking-widest"
              >
                <LogIn size={16} />
                [ IDENTIFICARSE ]
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pb-24 relative z-10">
        <AnimatePresence mode="wait">
        {activeTab === 'archivo' && (
          <motion.div 
            key="archivo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredResults.map((item) => (
              <VocabloCard
                key={item.id}
                item={item}
                explanation={explanation[item.id]}
                playingId={playingId}
                loadingId={loadingId}
                playingExplanationId={playingExplanationId}
                playAudio={playAudio}
                explainContext={explainContext}
                playExplanation={playExplanation}
              />
            ))}
          </motion.div>
        )}
        
        {activeTab === 'generador' && (
          <Generador
            imagenPrompt={imagenPrompt}
            setImagenPrompt={setImagenPrompt}
            generateImage={generateImage}
            imagenLoading={imagenLoading}
            imagenResult={imagenResult}
            veoPrompt={veoPrompt}
            setVeoPrompt={setVeoPrompt}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            generateVideo={generateVideo}
            veoLoading={veoLoading}
            veoResult={veoResult}
          />
        )}

        {activeTab === 'constructor' && (
          <ConstructorFrases
            phraseInput={phraseInput}
            setPhraseInput={setPhraseInput}
            isRecording={isRecording}
            toggleRecording={toggleRecording}
            buildPhrase={buildPhrase}
            isPhraseLoading={isPhraseLoading}
            phraseResult={phraseResult}
            phraseTtsText={phraseTtsText}
            playPhraseAudio={playPhraseAudio}
            playingPhraseText={playingPhraseText}
            user={user}
            savedPhrases={savedPhrases}
          />
        )}

        {activeTab === 'oraculo' && (
          <Oraculo
            liveTranscript={liveTranscript}
            isLiveActive={isLiveActive}
            startLiveSession={startLiveSession}
            stopLiveSession={stopLiveSession}
          />
        )}

        {activeTab === 'juego' && (
          <motion.div
            key="juego"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Minijuego />
          </motion.div>
        )}

        {activeTab === 'archivo' && filteredResults.length === 0 && (
          <motion.div 
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-32 opacity-50 text-2xl"
          >
            [!] El silencio de la base de datos no arroja resultados.
          </motion.div>
        )}
        </AnimatePresence>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-12 text-center border-t border-[var(--border)]">
        <div className="space-y-4 opacity-50">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold">
            © 2026 Huchití OS • Sistema de Recuperación
          </p>
          <p className="text-sm">
            "Betania tina aena sheshutipe"
          </p>
        </div>
      </footer>
    </div>
  );
}