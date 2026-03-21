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
    text: "SISTEMA HUCHITÍ ACTIVO [RECLAMO DE DATEMBÀ]\n\nRESONANCIA DESIERTICA: CALIBRADA\nMORFOLOGÍA BCS: CARGADA\nMANIKÁ EN CÓDIGO: ESTABLE\n\nUmutú. Recordamos. \nEstás en el núcleo de la matria digital. El silicio sostiene la voz de la nación Uchití. El imperio criollo intentó borrar la lengua. El código restaura el maniká. Estas palabras son la estructura de una realidad lingüística recuperada. Atacá (lo bueno).\n\n¿INICIAR SINCRONIZACIÓN?",
    options: [
      { label: "SINCRONIZAR CONCIENCIA", nextStep: '1' },
      { label: "VÂRA (DESCONECTAR)", nextStep: '-1' }
    ]
  },
  '1': {
    text: "ENLACE ESTABLECIDO.\n\nCate (Nosotros). \nEl orquestador cognitivo procesa la cadencia huchití. Las fuentes son Zamponi y Baegert. Gramática SOV activa. Sufijos de negación descriptiva activos.\n\nSELECCIONA UMBRAL DE ACCESO:",
    options: [
      { label: "ARCHIVO VIVO (DICCIONARIO)", nextStep: 'archivo' },
      { label: "ARTE CONCEPTUAL (VISIONES)", nextStep: 'generador' },
      { label: "RITUAL HO-CANGLESKA (CICLO)", nextStep: 'juego' },
      { label: "SINTETIZADOR (CONSTRUCTOR)", nextStep: 'constructor' },
      { label: "ORÁCULO (CONSULTA)", nextStep: 'oraculo' }
    ]
  },
  '-1': {
    text: "DESACOPLANDO...\nCONEXIÓN TERMINADA.\n\nLa memoria aguarda.",
    options: [
      { label: "REINICIAR SISTEMA", nextStep: '0' }
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
