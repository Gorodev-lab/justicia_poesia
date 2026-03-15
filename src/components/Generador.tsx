import React, { useRef } from 'react';
import { Loader2 } from 'lucide-react';


interface GeneradorProps {
  imagenPrompt: string;
  setImagenPrompt: (val: string) => void;
  generateImage: () => void;
  imagenLoading: boolean;
  imagenResult: string | null;
  veoPrompt: string;
  setVeoPrompt: (val: string) => void;
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
  generateVideo: () => void;
  veoLoading: boolean;
  veoResult: string | null;
}

function GeneradorBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden -z-10 opacity-5">
      <motion.div 
        style={{ y }}
        className="absolute -inset-[50%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjMDBGRjAwIi8+Cjwvc3ZnPg==')] bg-repeat"
      />
    </div>
  );
}

export function Generador({
  imagenPrompt,
  setImagenPrompt,
  generateImage,
  imagenLoading,
  imagenResult,
  veoPrompt,
  setVeoPrompt,
  selectedFile,
  setSelectedFile,
  generateVideo,
  veoLoading,
  veoResult
}: GeneradorProps) {
  return (
    <motion.div 
      key="generador"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto space-y-16 relative"
    >
      <GeneradorBackground />

      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Sintetizador Visual</h3>
          <p className="text-sm opacity-50 uppercase tracking-widest">Genera imágenes con estética de pigmentos minerales</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text"
            placeholder="Describe la visión (ej: Guerrero huchití cazando...)"
            className="flex-1 bg-[var(--input-bg)] border border-[var(--border)] px-6 py-4 focus:outline-none focus:bg-[var(--accent-soft)] transition-all"
            value={imagenPrompt}
            onChange={(e) => setImagenPrompt(e.target.value)}
          />
          <button 
            onClick={generateImage}
            disabled={imagenLoading}
            className="px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity disabled:opacity-30"
          >
            {imagenLoading ? <Loader2 className="animate-spin" /> : '[ TRAZAR ]'}
          </button>
        </div>
        {imagenResult && (
          <div className="p-6 border border-[var(--border)] bg-[var(--card-bg)] text-sm font-mono whitespace-pre-wrap leading-relaxed">
            {imagenResult}
          </div>
        )}
      </section>

      <div className="h-px bg-[var(--border)] opacity-50" />

      <section className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Animación de la Memoria</h3>
          <p className="text-sm opacity-50 uppercase tracking-widest">Revive el pasado mediante video generativo</p>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="text"
              placeholder="Describe el movimiento..."
              className="flex-1 bg-[var(--input-bg)] border border-[var(--border)] px-6 py-4 focus:outline-none focus:bg-[var(--accent-soft)] transition-all"
              value={veoPrompt}
              onChange={(e) => setVeoPrompt(e.target.value)}
            />
            <label className="cursor-pointer px-6 py-4 border border-[var(--border)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors">
              <input 
                type="file" 
                className="hidden" 
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} 
              />
              <span className="text-xs uppercase font-bold tracking-widest">
                {selectedFile ? '[ IMAGEN LISTA ]' : '[ SUBIR BASE ]'}
              </span>
            </label>
            <button 
              onClick={generateVideo}
              disabled={veoLoading}
              className="px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity disabled:opacity-30"
            >
              {veoLoading ? <Loader2 className="animate-spin" /> : '[ ANIMAR ]'}
            </button>
          </div>
        </div>
        {veoResult && (
          <div className="p-6 border border-[var(--border)] bg-[var(--card-bg)] text-sm font-mono whitespace-pre-wrap leading-relaxed">
            {veoResult}
          </div>
        )}
      </section>
    </motion.div>
  );
}
