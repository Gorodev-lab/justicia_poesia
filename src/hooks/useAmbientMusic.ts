import { useEffect, useRef, useState } from 'react';

export function useAmbientMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const noiseSrcRef = useRef<AudioBufferSourceNode | null>(null);

  const toggleMusic = () => {
    if (isPlaying) {
      // Fade out and stop
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 2);
        setTimeout(() => {
          oscillatorsRef.current.forEach(osc => {
            try { osc.stop(); } catch(e){}
          });
          oscillatorsRef.current = [];
          if (noiseSrcRef.current) {
            try { noiseSrcRef.current.stop(); } catch(e){}
            noiseSrcRef.current = null;
          }
          if (audioCtxRef.current?.state === 'running') {
            audioCtxRef.current.suspend();
          }
          setIsPlaying(false);
        }, 2000);
      } else {
         setIsPlaying(false);
      }
    } else {
      // Start playing
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.setTargetAtTime(0.15, ctx.currentTime, 3); // Fade in
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Drone 1 (Deep base)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.value = 55; // A1

      // Drone 2 (Detuned for beating effect)
      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.value = 55.5; 

      // High harmonic (mystical)
      const osc3 = ctx.createOscillator();
      osc3.type = 'sine';
      osc3.frequency.value = 110; // A2
      const gain3 = ctx.createGain();
      gain3.gain.value = 0.05;
      osc3.connect(gain3);
      gain3.connect(masterGain);

      // Filter for the drones to make them muffled/ambient
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 300;

      // Slow LFO for the filter to create movement
      const filterLfo = ctx.createOscillator();
      filterLfo.type = 'sine';
      filterLfo.frequency.value = 0.05; // Very slow
      const filterLfoGain = ctx.createGain();
      filterLfoGain.gain.value = 100;
      filterLfo.connect(filterLfoGain);
      filterLfoGain.connect(filter.frequency);
      filterLfo.start();

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(masterGain);

      osc1.start();
      osc2.start();
      osc3.start();

      // Wind noise
      const bufferSize = ctx.sampleRate * 2; // 2 seconds
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noiseSrc = ctx.createBufferSource();
      noiseSrc.buffer = noiseBuffer;
      noiseSrc.loop = true;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.value = 400;
      noiseFilter.Q.value = 0.5;

      // LFO for wind sweeping
      const windLfo = ctx.createOscillator();
      windLfo.type = 'sine';
      windLfo.frequency.value = 0.1; // Slow sweep
      const windLfoGain = ctx.createGain();
      windLfoGain.gain.value = 300;
      windLfo.connect(windLfoGain);
      windLfoGain.connect(noiseFilter.frequency);
      windLfo.start();

      const noiseVol = ctx.createGain();
      noiseVol.gain.value = 0.02; // Keep wind subtle

      noiseSrc.connect(noiseFilter);
      noiseFilter.connect(noiseVol);
      noiseVol.connect(masterGain);
      noiseSrc.start();

      oscillatorsRef.current = [osc1, osc2, osc3, filterLfo, windLfo];
      noiseSrcRef.current = noiseSrc;
      setIsPlaying(true);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return { isPlaying, toggleMusic };
}
