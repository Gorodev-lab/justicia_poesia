import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Globe, Laptop, Camera, Car, Volume2, CheckCircle2, RotateCcw, Loader2 } from 'lucide-react';
import { GoogleGenAI, Modality } from "@google/genai";
import { pcmToWav } from '../utils/audio';

interface Concept {
  id: string;
  neologismo: string;
  significado: string;
  icon: React.ElementType;
  color: string;
}

const CONCEPTS: Concept[] = [
  { id: 'telefono', neologismo: 'Mázawóyake', significado: 'Teléfono Móvil', icon: Smartphone, color: '#3b82f6' },
  { id: 'internet', neologismo: 'Wóslolyewíkhaŋ', significado: 'Internet / Red', icon: Globe, color: '#8b5cf6' },
  { id: 'computadora', neologismo: 'Mázanasu', significado: 'Computadora', icon: Laptop, color: '#10b981' },
  { id: 'camara', neologismo: 'Nážičhaičhú', significado: 'Cámara', icon: Camera, color: '#f59e0b' },
  { id: 'auto', neologismo: 'Iyéčhiŋkiŋyaŋke', significado: 'Automóvil', icon: Car, color: '#ef4444' },
];

export default function Minijuego() {
  const [placedItems, setPlacedItems] = useState<string[]>([]);
  const [shuffledConcepts, setShuffledConcepts] = useState<Concept[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [flashingId, setFlashingId] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    resetGame();
  }, []);

  const resetGame = () => {
    setPlacedItems([]);
    setShuffledConcepts([...CONCEPTS].sort(() => Math.random() - 0.5));
  };

  const audioCtxRef = React.useRef<AudioContext | null>(null);

  const playTone = (type: 'correct' | 'incorrect') => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) return;
        audioCtxRef.current = new AudioContextClass();
      }
      
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      if (type === 'correct') {
        // Tono corto y resonante (tipo campana de confirmación)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime); // A5
        
        const osc2 = ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1760, ctx.currentTime); // A6
        
        const gain2 = ctx.createGain();
        osc2.connect(gain2);
        gain2.connect(ctx.destination);

        // Envolvente principal
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        
        // Envolvente secundaria (armónico)
        gain2.gain.setValueAtTime(0, ctx.currentTime);
        gain2.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.01);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        
        osc.start();
        osc2.start();
        osc.stop(ctx.currentTime + 0.4);
        osc2.stop(ctx.currentTime + 0.4);
      } else {
        // Tono sutil y grave para error (tipo toque en madera)
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);
        
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      }
    } catch (e) {
      console.error("Audio error:", e);
    }
  };

  const playGeminiAudio = async (text: string, id: string) => {
    if (playingAudioId) return;
    setPlayingAudioId(id);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text }] }],
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
          setPlayingAudioId(null);
        };
        
        await audio.play();
      } else {
        setPlayingAudioId(null);
      }
    } catch (error) {
      console.error("Error playing audio:", error);
      setPlayingAudioId(null);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: { point: { x: number, y: number } }, conceptId: string) => {
    // Ocultar temporalmente el elemento arrastrado para ver qué hay debajo
    const target = event.target as HTMLElement;
    const originalVisibility = target.style.visibility;
    const originalPointerEvents = target.style.pointerEvents;
    
    target.style.visibility = 'hidden';
    target.style.pointerEvents = 'none';
    
    const dropTarget = document.elementFromPoint(info.point.x, info.point.y);
    
    target.style.visibility = originalVisibility;
    target.style.pointerEvents = originalPointerEvents;
    
    const dropzoneId = dropTarget?.closest('[data-dropzone]')?.getAttribute('data-dropzone');
    
    if (dropzoneId === conceptId) {
      setPlacedItems(prev => [...prev, conceptId]);
      setFlashingId(conceptId);
      setTimeout(() => setFlashingId(null), 600);
      playTone('correct');
    } else if (dropzoneId) {
      playTone('incorrect');
    }
  };

  const isGameComplete = placedItems.length === CONCEPTS.length;

  if (!isClient) return null;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-[var(--card-bg)] border border-[var(--border)] relative overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">[ HO-CANGLESKA ]</h2>
        <p className="text-sm opacity-60 uppercase tracking-widest">El Círculo de las Voces</p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center justify-center min-h-[400px]">
        
        {/* Dropzones (Circle) */}
        <div className="relative w-80 h-80 flex-shrink-0">
          <div className="absolute inset-0 border-4 border-dashed border-[var(--border)] opacity-20" />
          
          {CONCEPTS.map((concept, index) => {
            const angle = (index * 360) / CONCEPTS.length;
            const radius = 140;
            const x = Math.sin((angle * Math.PI) / 180) * radius;
            const y = -Math.cos((angle * Math.PI) / 180) * radius;
            const isPlaced = placedItems.includes(concept.id);
            const isFlashing = flashingId === concept.id;
            const Icon = concept.icon;

            return (
              <div
                key={`drop-${concept.id}`}
                data-dropzone={concept.id}
                className={`absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10 flex items-center justify-center transition-all duration-300 ${
                  isFlashing ? 'bg-[var(--accent)] text-[var(--bg)] scale-125 shadow-[0_0_30px_var(--accent)] brightness-150' :
                  isPlaced ? 'bg-[var(--accent)] text-[var(--bg)] scale-110' : 'bg-[var(--bg)] border border-[var(--border)] opacity-50'
                }`}
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                {isPlaced ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex flex-col items-center"
                  >
                    <Icon size={24} />
                  </motion.div>
                ) : (
                  <Icon size={24} className="opacity-40" />
                )}
              </div>
            );
          })}
          
          {/* Center piece */}
          <div className="absolute top-1/2 left-1/2 w-24 h-24 -ml-12 -mt-12 bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center">
            {isGameComplete ? (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <CheckCircle2 size={40} className="text-[var(--accent)]" />
              </motion.div>
            ) : (
              <div className="w-4 h-4 bg-[var(--accent)] animate-pulse" />
            )}
          </div>
        </div>

        {/* Draggable Items */}
        <div className="flex flex-wrap justify-center gap-4 w-full md:w-80">
          <AnimatePresence>
            {!isGameComplete && shuffledConcepts.map((concept) => {
              if (placedItems.includes(concept.id)) return null;

              return (
                <motion.div
                  key={`drag-${concept.id}`}
                  drag
                  dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                  dragElastic={0.2}
                  dragSnapToOrigin={true}
                  onDragEnd={(e, info) => handleDragEnd(e, info, concept.id)}
                  whileHover={{ scale: 1.05 }}
                  whileDrag={{ scale: 1.1, zIndex: 50 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="cursor-grab active:cursor-grabbing px-6 py-4 bg-[var(--bg)] border border-[var(--accent)] flex items-center gap-3 touch-none"
                >
                  <button 
                    onPointerDown={(e) => {
                      e.stopPropagation();
                      playGeminiAudio(concept.neologismo, concept.id);
                    }}
                    className="p-2 -ml-2 hover:bg-[var(--accent-soft)] transition-colors"
                    disabled={playingAudioId === concept.id}
                    title="Escuchar pronunciación"
                  >
                    {playingAudioId === concept.id ? (
                      <Loader2 size={18} className="text-[var(--accent)] animate-spin" />
                    ) : (
                      <Volume2 size={18} className="text-[var(--accent)]" />
                    )}
                  </button>
                  <span className="font-bold text-lg text-[var(--accent)]">{concept.neologismo}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {isGameComplete && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6 p-6 border border-[var(--accent)] bg-[var(--accent-soft)]"
            >
              <h3 className="text-2xl font-bold text-[var(--accent)]">[ CÍRCULO COMPLETADO ]</h3>
              <p className="text-sm opacity-80 leading-relaxed font-mono">
                Has conectado las voces con sus significados. Esta asociación visual-auditiva fortalece la memoria sin necesidad de traducción.
              </p>
              <button
                onClick={resetGame}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--bg)] font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity"
              >
                <RotateCcw size={16} />
                [ REINICIAR CICLO ]
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
