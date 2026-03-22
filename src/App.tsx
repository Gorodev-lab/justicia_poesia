import { useState, useMemo, useEffect } from 'react';
import { Loader2, Moon, Sun, Terminal, LogIn, LogOut, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Minijuego from './components/Minijuego';
import TerminalWizard from './components/TerminalWizard';
import { supabase } from './supabase';
import { useAmbientMusic } from './hooks/useAmbientMusic';
import { Vocablo, SavedPhrase } from './types';
import { ARCHIVO_VIVO } from './constants';
import { VocabloCard } from './components/VocabloCard';
import { Generador } from './components/Generador';
import { ConstructorFrases } from './components/ConstructorFrases';
import { Oraculo } from './components/Oraculo';
import {
  checkApiStatus,
  explainVocablo,
  buildHuchitiPhrase,
  consultarOraculo,
  describeImage,
  generateNativeAudioEndpoint
} from './lib/gemini';

console.log("HUCHITI_V2_ACTIVE [APP]");
export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [explanation, setExplanation] = useState<{ [key: number]: string }>({});
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [playingExplanationId, setPlayingExplanationId] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState<'archivo' | 'generador' | 'juego' | 'constructor' | 'oraculo'>('archivo');
  const [showWizard, setShowWizard] = useState(true);
  
  // Auth state de Supabase
  const [session, setSession] = useState<any>(null);
  const [savedPhrases, setSavedPhrases] = useState<SavedPhrase[]>([]);

  const { isPlaying: isMusicPlaying, toggleMusic } = useAmbientMusic();

  // Oraculo Live states (ahora conversacional)
  const [isLiveActive, setIsLiveActive] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState<string[]>([]);
  const [oraculoMessages, setOraculoMessages] = useState<{role: string, content: string}[]>([]);

  // Constructor state
  const [phraseInput, setPhraseInput] = useState('');
  const [phraseResult, setPhraseResult] = useState('');
  const [phraseTtsText, setPhraseTtsText] = useState('');
  const [playingPhraseText, setPlayingPhraseText] = useState<string | null>(null);
  const [isPhraseLoading, setIsPhraseLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  // Generador states
  const [veoPrompt, setVeoPrompt] = useState('');
  const [veoResult, setVeoResult] = useState<string | null>(null);
  const [veoLoading, setVeoLoading] = useState(false);
  const [imagenPrompt, setImagenPrompt] = useState('');
  const [imagenResult, setImagenResult] = useState<string | null>(null);
  const [imagenBase64, setImagenBase64] = useState<string | null>(null);
  const [imagenLoading, setImagenLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isApiHealthy, setIsApiHealthy] = useState(true);

  // 0. Verificar estado del backend AI al arrancar
  useEffect(() => {
    checkApiStatus()
      .then(status => {
        const hasAnyEngine = Object.values(status.engines || {}).some(v => v === 'ready');
        setIsApiHealthy(status.ok && hasAnyEngine);
      })
      .catch(() => setIsApiHealthy(false));
  }, []);

  // 1. Supabase Auth Listener
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  // 2. Traer frases guardadas de Supabase
  useEffect(() => {
    if (!session?.user) {
      setSavedPhrases([]);
      return;
    }

    const fetchPhrases = async () => {
      const { data, error } = await supabase
        .from('phrases')
        .select('*')
        .eq('author_uid', session.user.id)
        .order('created_at', { ascending: false });
      if (!error && data) {
        setSavedPhrases(data.map(d => ({
          id: d.id,
          authorUid: d.author_uid,
          originalText: d.original_text,
          generatedPhrase: d.generated_phrase,
          ttsText: d.tts_text,
          createdAt: d.created_at
        })));
      }
    };
    fetchPhrases();

    // Tiempo real con Supabase
    const channel = supabase.channel('schema-db-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'phrases' }, () => {
        fetchPhrases();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [session]);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // ---- Capa 1: Sanitizador de Puntuación para TTS ----
  const sanitizeForTTS = (text: string): string => {
    return text
      .replace(/\[.*?\]/g, '')
      .replace(/\/[^/]+\//g, '')
      .replace(/^(Original|Composición|IPA|Cadena TTS|ANÁLISIS|SÍNTESIS):?\s*/gm, '')
      .replace(/[\u2014\u2013\-:;!\u00a1\u00bf?*#_~`\u201c\u201d\u201e\u2018\u2019\u00ab\u00bb(){}\\|@&$/"']/g, '')
      .replace(/,/g, ' ')
      .replace(/\.{2,}/g, '...')
      .replace(/\s{2,}/g, ' ')
      .replace(/\n{2,}/g, '\n')
      .trim();
  };

  // ---- Capa 2: Pre-procesamiento Fonético (Uchití Audio Rules v3 - Perfil LKT) ----
  const uchitiPhoneticParser = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/tsch/g, 'ch')
      .replace(/tsh/g, 'ch')
      .replace(/nn/g, 'n.n')
      .replace(/mm/g, 'm.m')
      .replace(/([aeiou])\1/g, '$1.$1')
      .replace(/k(\s|$|\.)/g, 'kh$1')
      .replace(/t(\s|$|\.)/g, 'th$1')
      .replace(/p(\s|$|\.)/g, 'ph$1')
      .replace(/[fglxz]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  // ---- Funciones de SpeechSynthesis Nativas (Reemplazan TTS de Gemini) ----
  const speakText = async (rawText: string, voiceNamePattern: string, onStart: () => void, onEnd: () => void) => {
    // Capa 1: Sanitizar puntuación -> Capa 2: Reglas fonéticas huchití
    const sanitized = sanitizeForTTS(rawText);
    const text = uchitiPhoneticParser(sanitized);
    
    // Si pasamos la bandera 'Gemini-Guama', disparamos la Estrategia 2 (Audio Nativo Alta Calidad)
    if (voiceNamePattern === 'Gemini-Guama') {
      try {
        onStart();
        const dataUri = await generateNativeAudioEndpoint(text);
        const audio = new window.Audio(dataUri);
        audio.onended = onEnd;
        audio.onerror = () => {
          console.warn("Fallo en Audio Nativo Gemini. Ejecutando Fallback.");
          fallbackNativeSpeak(text, onStart, onEnd);
        };
        await audio.play();
        return;
      } catch (e: any) {
        console.warn("Gemini Audio indisponible:", e.message);
        fallbackNativeSpeak(text, onStart, onEnd);
        return;
      }
    }
    
    // Si no, caemos al Fallback tradicional Ibérico/Navegador
    fallbackNativeSpeak(text, onStart, onEnd);
  };

  const fallbackNativeSpeak = (text: string, onStart: () => void, onEnd: () => void) => {
    if (!window.speechSynthesis) return onEnd();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-MX';
    utterance.rate = 0.45; // Cadencia ceremonial extremadamente lenta (referencia LKT)
    utterance.pitch = 0.4; // Tono grave y resonante
    
    const voices = window.speechSynthesis.getVoices();
    // Priorizar voces graves
    const voice = voices.find(v => (v.name.includes('Male') || v.name.includes('Google español')) && v.lang.includes('es'))
               || voices.find(v => v.lang.includes('es'));
    if (voice) utterance.voice = voice;

    utterance.onstart = onStart;
    utterance.onend = onEnd;
    utterance.onerror = onEnd;

    window.speechSynthesis.speak(utterance);
  };

  const playAudio = async (item: Vocablo) => {
    speakText(item.vocablo, 'Google', () => setPlayingId(item.id), () => setPlayingId(null));
  };

  const playExplanation = async (id: number, text: string) => {
    speakText(text, 'Sabina', () => setPlayingExplanationId(id), () => setPlayingExplanationId(null));
  };

  // ---- Oraculo (Live API convertido a chat de texto con TTS) ----
  const startLiveSession = async () => {
    setIsLiveActive(true);
    setLiveTranscript(["[SISTEMA]: ENLACE ESTABLECIDO. EL ORÁCULO PROCESA CONSULTAS. ENTRADA DE DATOS ABIERTA."]);
    setOraculoMessages([]);
  };

  const stopLiveSession = () => {
    setIsLiveActive(false);
    window.speechSynthesis.cancel();
    setLiveTranscript(prev => [...prev, "[SISTEMA]: Conexión terminada."]);
  };

  // Envía un mensaje al Oráculo Huchití (chat conversacional con Gemini)
  const sendToOraculo = async (text: string) => {
    const newMessage = { role: 'user', content: text };
    const newContext = [...oraculoMessages, newMessage];
    setOraculoMessages(newContext);
    setLiveTranscript(prev => [...prev, `[TÚ]: ${text}`]);

    try {
      const responseText = await consultarOraculo(newContext);
      
      setOraculoMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
      setLiveTranscript(prev => [...prev, `[ORÁCULO]: ${responseText}`]);
      
      // Auto leer respuesta del Oráculo en su voz natural nativa profunda
      speakText(responseText, 'Gemini-Guama', () => {}, () => {});
    } catch (e: any) {
      console.error('[sendToOraculo]', e.message);
      setLiveTranscript(prev => [...prev, `[SISTEMA]: Error de cognición — ${e.message}`]);
    }
  };

  // ---- Generador y Explicador (via cliente AI centralizado) ----
  const explainContext = async (item: Vocablo) => {
    setLoadingId(item.id);
    try {
      const text = await explainVocablo(item.vocablo, item.significado);
      setExplanation(prev => ({ ...prev, [item.id]: text }));
    } catch (error: any) {
      console.error('[explainContext]', error.message);
      setIsApiHealthy(false);
      setExplanation(prev => ({ ...prev, [item.id]: `[ERROR] ${error.message}` }));
    } finally {
      setLoadingId(null);
    }
  };

  const buildPhrase = async () => {
    if (!phraseInput) return;
    setIsPhraseLoading(true);
    try {
      const jsonResponse = await buildHuchitiPhrase(phraseInput);
      
      const formattedResult = `[ ANÁLISIS MORFOLÓGICO ]\nOriginal: ${jsonResponse.palabra_original}\n\n[ SÍNTESIS HUCHITÍ ]\nComposición: ${jsonResponse.analisis_silabico}\nIPA: /${jsonResponse.transcripcion_ipa}/\n\n[ CADENA TTS ]\n${jsonResponse.cadena_optimizada_tts}`;
      
      setPhraseResult(formattedResult);
      if (jsonResponse.cadena_optimizada_tts) {
        setPhraseTtsText(jsonResponse.cadena_optimizada_tts);
        playPhraseAudio(jsonResponse.cadena_optimizada_tts);
      }

      if (session?.user) {
        await supabase.from('phrases').insert({
          author_uid: session.user.id,
          original_text: phraseInput,
          generated_phrase: formattedResult,
          tts_text: jsonResponse.cadena_optimizada_tts || ''
        });
      }
    } catch (error: any) {
      console.error('[buildPhrase]', error.message);
      setPhraseResult(`[ERROR] Fallo en la sinapsis del motor morfológico: ${error.message}`);
    } finally {
      setIsPhraseLoading(false);
    }
  };

  const playPhraseAudio = (text: string) => {
    speakText(text, 'Gemini-Guama', () => setPlayingPhraseText(text), () => setPlayingPhraseText(null));
  };

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
    } else {
      setIsRecording(true);
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (!SpeechRecognition) return setIsRecording(false);
      
      const recognition = new SpeechRecognition();
      recognition.lang = 'es-MX';
      recognition.onresult = (e: any) => {
        const t = e.results[0][0].transcript;
        setPhraseInput(prev => prev ? `${prev} ${t}` : t);
      };
      recognition.onend = () => setIsRecording(false);
      recognition.start();
    }
  };

  const generateImage = async () => {
    if (!imagenPrompt) return;
    setImagenLoading(true);
    setImagenBase64(null); // Reset previous image
    try {
      const res = await fetch('/api/describe-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: imagenPrompt }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      
      setImagenResult(data.text);
      if (data.imageBase64) {
        setImagenBase64(data.imageBase64);
      }
    } catch (error: any) {
      console.error('[generateImage]', error.message);
      setImagenResult(`[ERROR] ${error.message}`);
    } finally {
      setImagenLoading(false);
    }
  };

  const generateVideo = async () => {
    if (!veoPrompt && !selectedFile) return;
    setVeoLoading(true);
    try {
      if (selectedFile) {
        setVeoResult(`[Análisis Qwen-VL de Archivo]: Procesamiento simulado para rediseño sin acceso GPU directo... \n(En producción apuntar a puerto :8002)`);
      } else {
        const text = await describeImage(`Formato de Guion Audiovisual: ${veoPrompt}`);
        setVeoResult(`[Narrativa Audiovisual Generada]:\n\n${text}`);
      }
    } catch (error: any) {
      console.error('[generateVideo]', error.message);
      setVeoResult(`[ERROR] ${error.message}`);
    } finally {
      setVeoLoading(false);
    }
  };

  // Tema Visual
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const filteredResults = useMemo(() => {
    return ARCHIVO_VIVO.filter(item => 
      item.vocablo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.significado.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

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
    <div className="min-h-screen transition-colors duration-500 relative overflow-x-hidden">
      <div className="grain-overlay" />
      
      {!isApiHealthy && (
        <div className="bg-[var(--accent)] text-[var(--bg)] border-b border-[var(--accent)] p-2 text-center text-[10px] font-bold uppercase tracking-[0.3em] fixed top-0 left-0 right-0 z-[60] animate-pulse">
          [ MODO SOBERANÍA ACTIVO: ARCHIVO HISTÓRICO CARGADO ]
        </div>
      )}

      {/* Header */}
      <header className={`max-w-5xl mx-auto px-6 pt-12 pb-8 relative z-10 border-b border-[var(--border)] mb-8 ${!isApiHealthy && 'mt-8'}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[var(--accent)] text-[var(--bg)] flex items-center justify-center">
              <Terminal size={32} />
            </div>
            <div className="space-y-1">
              <h1 className="text-4xl font-bold tracking-tighter">
                HUCHITÍ EN CÓDIGO
              </h1>
              <p className="text-xs uppercase tracking-[0.2em] font-medium opacity-70">
                PROYECTO DATEMBÀ: RECUPERACIÓN ACTIVA
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 bg-[var(--card-bg)] p-2 border border-[var(--border)]">
            {['archivo', 'generador', 'juego', 'constructor', 'oraculo'].map((tab, i) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-2 text-sm font-bold transition-all capitalize ${activeTab === tab ? 'bg-[var(--accent)] text-[var(--bg)]' : 'opacity-50 hover:opacity-100 hover:bg-[var(--accent-soft)]'}`}
              >
                [{i+1}] {tab === 'generador' ? 'Arte Conceptual' : tab}
              </button>
            ))}
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

            {session ? (
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono opacity-70 border border-[var(--border)] px-3 py-1">
                  {session.user.email}
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
            imagenBase64={imagenBase64}
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
            user={session?.user || null}
            savedPhrases={savedPhrases}
          />
        )}

        {activeTab === 'oraculo' && (
          <Oraculo
            liveTranscript={liveTranscript}
            isLiveActive={isLiveActive}
            startLiveSession={startLiveSession}
            stopLiveSession={stopLiveSession}
            sendToOraculo={sendToOraculo}
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
            © 2026 Huchití OS • Sistema de Recuperación Local
          </p>
          <p className="text-sm">
            "Betania tina aena sheshutipe" — {session ? 'Sincronizado' : 'Modo Standalone'}
          </p>
        </div>
      </footer>
    </div>
  );
}