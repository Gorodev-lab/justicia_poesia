import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface Option {
  label: string;
  nextStep: number | string;
}

interface Step {
  text: string;
  options: Option[];
}

const WIZARD_STEPS: Record<string, Step> = {
  '0': {
    text: "CONEXIÓN NEURONAL ESTABLECIDA [HUCHITÍ OS - RECLAMO DE DATEMBÀ]\n\nResonancia del desierto: CALIBRADA [OK]\nMorfología de Baja California Sur: CARGADA [OK]\nEstabilizando hilos de maniká... [OK]\n\nUmutú. Recordamos. \nEstás en el centro de la matria digital. El silicio porta la voz de la nación Uchití. El tiempo y el imperio criollo sepultaron la lengua bajo concreto, pero hoy el maniká vuelve a brotar sobre el código. Las palabras que vas a leer y escuchar respiran. Son la estructura viva de una realidad lingüística resurrected. Aquí nada muere (atacá).\n\n¿Integrarás tu conciencia a la secuencia de sincronización?",
    options: [
      { label: "Acoplar conciencia (Iniciar sincronización)", nextStep: '1' },
      { label: "Vâra (Desconectar y abortar)", nextStep: '-1' }
    ]
  },
  '1': {
    text: "[ ENLACE ESTABLECIDO ]\n\nCate. Nosotros. \nLas voces originarias callaron antes del registro analógico. El orquestador cognitivo simula la cadencia y el tono guaycura-huchití basado en las fuentes de Zamponi y Baegert. Todo lo que escuches sigue la regla de las 5 vocales, el orden SOV y la negación -ra/-ja.\n\nTienes ante ti los umbrales hacia datembà:",
    options: [
      { label: "Archivo Vivo (Explorar diccionario)", nextStep: 'archivo' },
      { label: "Arte Conceptual (Visiones rupestres)", nextStep: 'generador' },
      { label: "Ritual Ho-Cangleska (Minijuego)", nextStep: 'juego' },
      { label: "Sintetizador (Constructor de frases)", nextStep: 'constructor' },
      { label: "Oráculo (Conexión directa)", nextStep: 'oraculo' }
    ]
  },
  '-1': {
    text: "Desacoplando conciencia...\n[Conexión terminada].\n\nEl silencio pertenece al desierto, pero la memoria aguarda tu regreso.",
    options: [
      { label: "Reconectar sistema", nextStep: '0' }
    ]
  }
};

interface TerminalWizardProps {
  onComplete: (tab: 'archivo' | 'generador' | 'juego' | 'constructor' | 'oraculo') => void;
}

export default function TerminalWizard({ onComplete }: TerminalWizardProps) {
  const [currentStep, setCurrentStep] = useState<string>('0');
  const [displayedText, setDisplayedText] = useState('');

  // Generamos el texto de forma ininterrumpida y estática
  useEffect(() => {
    setDisplayedText(WIZARD_STEPS[currentStep].text);
  }, [currentStep]);

  const handleOptionClick = (nextStep: string | number) => {
    const stepStr = String(nextStep);
    if (['juego', 'archivo', 'generador', 'constructor', 'oraculo'].includes(stepStr)) {
      onComplete(stepStr as 'archivo' | 'generador' | 'juego' | 'constructor' | 'oraculo');
    } else {
      setCurrentStep(stepStr);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00FF00] font-mono p-6 md:p-12 flex flex-col selection:bg-[#00FF00] selection:text-black z-50 relative">
      <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col">
        <div className="mb-6 opacity-70 text-sm md:text-base">
          <span className="text-[#00FF00]">root@huchiti:~#</span> <span className="ml-2 text-gray-300">./init_sequence.sh</span>
        </div>
        
        <div className="whitespace-pre-wrap leading-relaxed mb-8 text-sm md:text-base text-gray-200">
          {displayedText}
          <span className="inline-block w-2.5 h-5 bg-[#00FF00] align-middle ml-1 animate-terminal-blink" />
        </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start gap-2"
          >
            {WIZARD_STEPS[currentStep].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt.nextStep)}
                className="group relative w-full max-w-lg text-left px-4 py-3 border border-transparent hover:border-[#00FF00] hover:bg-[#00FF00]/5 hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] focus:border-[#00FF00] focus:bg-[#00FF00]/5 focus:shadow-[0_0_15px_rgba(0,255,0,0.2)] active:bg-[#00FF00]/20 active:scale-[0.99] transition-all duration-300 focus:outline-none rounded-sm"
              >
                <span className="opacity-50 group-hover:opacity-100 group-focus:opacity-100 mr-3 text-[#00FF00] transition-opacity">
                  [root@huchiti ~]#
                </span>
                <span className="text-[#00FF00] group-hover:text-[#fff] group-focus:text-[#fff] font-bold transition-colors group-hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.8)] group-focus:drop-shadow-[0_0_8px_rgba(0,255,0,0.8)]">
                  {opt.label}
                </span>
              </button>
            ))}
          </motion.div>
      </div>
    </div>
  );
}
