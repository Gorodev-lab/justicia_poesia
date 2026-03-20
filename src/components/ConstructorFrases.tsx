import React, { useState } from 'react';
import { Loader2, Mic, MicOff, PenTool, Volume2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SavedPhrase } from '../types';

// Tipo mínimo de usuario compatible con Supabase Auth (sin depender de Firebase)
interface SupabaseUser {
  id: string;
  email?: string;
}

interface ConstructorFrasesProps {
  phraseInput: string;
  setPhraseInput: (val: string) => void;
  isRecording: boolean;
  toggleRecording: () => void;
  buildPhrase: () => void;
  isPhraseLoading: boolean;
  phraseResult: string | null;
  phraseTtsText: string | null;
  playPhraseAudio: (text: string) => void;
  playingPhraseText: string | null;
  user: SupabaseUser | null;
  savedPhrases: SavedPhrase[];
}

export function ConstructorFrases({
  phraseInput,
  setPhraseInput,
  isRecording,
  toggleRecording,
  buildPhrase,
  isPhraseLoading,
  phraseResult,
  phraseTtsText,
  playPhraseAudio,
  playingPhraseText,
  user,
  savedPhrases
}: ConstructorFrasesProps) {
  return (
    <motion.div 
      key="constructor"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Constructor de Frases</h3>
        <p className="text-sm opacity-50 uppercase tracking-widest">Sintetizador de neologismos descriptivos</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <textarea 
            placeholder="Escribe una frase en español o usa el micrófono..."
            className="w-full bg-[var(--input-bg)] border border-[var(--border)] px-6 py-4 pr-16 focus:outline-none focus:bg-[var(--accent-soft)] transition-all min-h-[120px] resize-none"
            value={phraseInput}
            onChange={(e) => setPhraseInput(e.target.value)}
          />
          <button
            onClick={toggleRecording}
            className={`absolute right-4 bottom-4 p-3 rounded-full transition-colors ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-[var(--accent-soft)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)]'}`}
            title={isRecording ? "Detener grabación" : "Dictar por voz"}
          >
            {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
          </button>
        </div>
        <button 
          onClick={buildPhrase}
          disabled={isPhraseLoading || !phraseInput}
          className="py-4 bg-[var(--accent)] text-[var(--bg)] font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity disabled:opacity-30"
        >
          {isPhraseLoading ? <Loader2 className="animate-spin mx-auto" /> : '[ SINTETIZAR FRASE ]'}
        </button>
      </div>
      
      {phraseResult && (
        <div className="p-6 border border-[var(--border)] bg-[var(--accent-soft)] animate-in fade-in duration-500">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 text-[var(--accent)]">
              <PenTool size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Resultado de Síntesis</span>
            </div>
            {phraseTtsText && (
              <button 
                onClick={() => playPhraseAudio(phraseTtsText)}
                disabled={playingPhraseText === phraseTtsText}
                className="p-2 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors disabled:opacity-50"
                title="Escuchar pronunciación"
              >
                {playingPhraseText === phraseTtsText ? <Loader2 size={16} className="animate-spin" /> : <Volume2 size={16} />}
              </button>
            )}
          </div>
          <div className="whitespace-pre-wrap text-sm leading-relaxed opacity-90 font-mono">
            {phraseResult}
          </div>
        </div>
      )}

      {user && savedPhrases.length > 0 && (
        <div className="mt-12 space-y-4">
          <h4 className="text-lg font-bold border-b border-[var(--border)] pb-2">[ REGISTRO PERSONAL ]</h4>
          <div className="space-y-4">
            {savedPhrases.map((phrase) => (
              <div key={phrase.id} className="p-4 border border-[var(--border)] bg-[var(--card-bg)]">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-xs opacity-50">ORIGINAL: {phrase.originalText}</p>
                  {phrase.ttsText && (
                    <button 
                      onClick={() => playPhraseAudio(phrase.ttsText)}
                      disabled={playingPhraseText === phrase.ttsText}
                      className="p-1.5 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors disabled:opacity-50"
                      title="Escuchar pronunciación"
                    >
                      {playingPhraseText === phrase.ttsText ? <Loader2 size={14} className="animate-spin" /> : <Volume2 size={14} />}
                    </button>
                  )}
                </div>
                <div className="whitespace-pre-wrap text-sm font-mono text-[var(--accent)]">
                  {phrase.generatedPhrase}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
