import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxImage({ src, alt, className }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] 
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <div ref={ref} style={{ overflow: 'hidden', height: '100%', width: '100%', position: 'relative' }}>
      <motion.img 
        src={src} 
        alt={alt}
        className={className}
        style={{ 
          y, 
          scale,
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }} 
      />
    </div>
  );
}