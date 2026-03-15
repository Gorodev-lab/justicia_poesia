import React from 'react';
import { BookOpen, Terminal, Volume2, Loader2 } from 'lucide-react';
import { Vocablo } from '../types';

interface VocabloCardProps {
  item: Vocablo;
  explanation?: string;
  playingId: number | null;
  loadingId: number | null;
  playingExplanationId: number | null;
  playAudio: (item: Vocablo) => void;
  explainContext: (item: Vocablo) => void;
  playExplanation: (id: number, text: string) => void;
}

export const VocabloCard: React.FC<VocabloCardProps> = ({
  item,
  explanation,
  playingId,
  loadingId,
  playingExplanationId,
  playAudio,
  explainContext,
  playExplanation
}) => {
  return (
    <article 
      className="group border p-8 transition-all duration-300 hover:bg-[var(--accent-soft)] relative overflow-hidden"
      style={{ 
        backgroundColor: 'var(--card-bg)', 
        borderColor: 'var(--border)',
      }}
    >
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
        <BookOpen size={120} />
      </div>
      
      <div className="relative z-10 space-y-6">
        <div className="flex items-baseline gap-4">
          <div className="flex items-center gap-3">
            <div className="relative group/word cursor-help">
              <h2 className="text-3xl font-bold text-[var(--accent)] border-b border-dashed border-[var(--accent)] pb-1">
                {item.vocablo}
              </h2>
              <div className="absolute left-0 bottom-full mb-2 opacity-0 group-hover/word:opacity-100 transition-opacity bg-[var(--accent)] text-[var(--bg)] text-xs font-mono px-4 py-3 pointer-events-none whitespace-nowrap z-20 shadow-lg flex flex-col gap-1">
                <span className="font-bold uppercase tracking-widest opacity-70 text-[10px]">Guía Fonética</span>
                <span>Pronunciación: /{item.fonetica}/</span>
              </div>
            </div>
            <button
              onClick={() => playAudio(item)}
              disabled={playingId === item.id}
              className="p-2 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors rounded-full disabled:opacity-30"
              title="Reproducir sonido"
            >
              {playingId === item.id ? <Loader2 className="animate-spin" size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-mono">
            [{item.fonetica}]
          </span>
        </div>
        
        <p className="text-lg leading-relaxed opacity-80">
          {item.significado}
        </p>
        
        {explanation && (
          <div className="mt-8 p-6 border border-[var(--accent)] bg-[var(--accent-soft)] animate-in fade-in zoom-in-95 duration-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 text-[var(--accent)]">
                <Terminal size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Análisis Lingüístico</span>
              </div>
              <button 
                onClick={() => playExplanation(item.id, explanation)}
                disabled={playingExplanationId === item.id}
                className="p-2 hover:bg-[var(--accent)] hover:text-[var(--bg)] text-[var(--accent)] transition-colors disabled:opacity-30"
                title="Escuchar análisis"
              >
                {playingExplanationId === item.id ? <Loader2 className="animate-spin" size={14} /> : <Volume2 size={14} />}
              </button>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              {explanation}
            </p>
          </div>
        )}

        <div className="pt-8 flex gap-4 border-t border-[var(--border)]">
          <button 
            onClick={() => playAudio(item)}
            disabled={playingId === item.id}
            className="flex-1 py-3 border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold disabled:opacity-30"
          >
            {playingId === item.id ? <Loader2 className="animate-spin" size={16} /> : <Volume2 size={16} />}
            [ AUDIO ]
          </button>
          <div className="flex-1 flex items-center gap-3">
            <button 
              onClick={() => explainContext(item)}
              disabled={loadingId === item.id}
              className="flex-1 py-3 border border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold disabled:opacity-30"
            >
              <Terminal size={16} />
              [ ANALIZAR ]
            </button>
            {loadingId === item.id && (
              <Loader2 className="animate-spin text-[var(--accent)] flex-shrink-0" size={20} />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
