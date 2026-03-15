import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ParallaxImage({ src, alt }: { src: string, alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="border border-[var(--border)] p-2 animate-in fade-in duration-700">
      <div className="overflow-hidden relative h-[400px] md:h-[600px] w-full">
        <motion.img 
          style={{ y }}
          src={src} 
          alt={alt} 
          className="w-full h-[120%] object-cover absolute -top-[10%] left-0" 
        />
      </div>
    </div>
  );
}
