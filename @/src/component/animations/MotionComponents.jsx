import { motion } from 'framer-motion';

export const FadeInUp = ({ children, delay = 0, duration = 0.6 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const FadeInUpOnView = ({ children, delay = 0, duration = 0.6 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({ children, delay = 0, duration = 0.6 }) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({ children, delay = 0, duration = 0.6 }) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const ZoomIn = ({ children, delay = 0, duration = 0.6 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const RotateIn = ({ children, delay = 0, duration = 0.8 }) => (
  <motion.div
    initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
    animate={{ opacity: 1, rotate: 0, scale: 1 }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const FloatingAnimation = ({ children }) => (
  <motion.div
    animate={{ 
      y: [0, -10, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

export const TypewriterText = ({ text, delay = 0 }) => {
  const letters = Array.from(text);
  
  return (
    <motion.span>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + index * 0.05
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const StaggerContainer = ({ children, staggerDelay = 0.1 }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay
        }
      }
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
  >
    {children}
  </motion.div>
);
