import { useState } from 'react';
import { Mic, MicOff, Send } from 'lucide-react';
import { motion } from 'motion/react';

interface OraculoProps {
  liveTranscript: string[];
  isLiveActive: boolean;
  startLiveSession: () => void;
  stopLiveSession: () => void;
  sendToOraculo: (text: string) => void;
}

export function Oraculo({
  liveTranscript,
  isLiveActive,
  startLiveSession,
  stopLiveSession,
  sendToOraculo
}: OraculoProps) {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    sendToOraculo(inputText);
    setInputText('');
  };
  return (
    <motion.div 
      key="oraculo"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Oráculo Uchití</h3>
        <p className="text-sm opacity-50 uppercase tracking-widest">Conexión neuronal en tiempo real (Live API)</p>
      </div>
      
      <div className="p-8 border border-[var(--border)] bg-[var(--card-bg)] min-h-[400px] flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 mb-6 font-mono text-sm">
          {liveTranscript.length === 0 ? (
            <div className="opacity-50 text-center mt-20">
              [ ESPERANDO INICIALIZACIÓN DE ENLACE ]
            </div>
          ) : (
            liveTranscript.map((line, i) => (
              <div key={i} className={`${line.startsWith('[SISTEMA]') ? 'text-yellow-500' : 'text-[var(--accent)]'}`}>
                {line}
              </div>
            ))
          )}
        </div>
        
        <div className="flex flex-col border-t border-[var(--border)] pt-6 gap-4">
          {isLiveActive && (
            <div className="flex gap-2">
              <input 
                type="text"
                placeholder="Transmite tu pregunta..."
                className="flex-1 bg-[var(--input-bg)] border border-[var(--border)] px-4 py-3 focus:outline-none focus:bg-[var(--accent-soft)] transition-all font-mono text-sm"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                className="px-6 bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 flex items-center justify-center font-bold"
              >
                <Send size={18} />
              </button>
            </div>
          )}

          <div className="flex justify-center mt-2">
            <button
              onClick={isLiveActive ? stopLiveSession : startLiveSession}
              className={`flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all ${
                isLiveActive 
                  ? 'bg-red-500/20 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white' 
                  : 'bg-[var(--accent)] text-[var(--bg)] hover:opacity-90'
              }`}
            >
              {isLiveActive ? (
                <>
                  <MicOff size={18} />
                  [ CORTAR ENLACE ]
                </>
              ) : (
                <>
                  <Mic size={18} />
                  [ INICIAR ENLACE NEURONAL ]
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
