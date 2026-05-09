import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function MaskedText({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const animation = {
    initial: { y: "100%" },
    enter: { 
      y: "0", 
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] }
    }
  };

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div variants={animation} initial="initial" animate={isInView ? "enter" : ""}>
        {children}
      </motion.div>
    </div>
  );
}