import { motion } from 'framer-motion';

export const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  distance = 75,
  once = true,
  margin = "-100px"
}) => {
  
  const getInitialState = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -distance };
      case 'right':
        return { opacity: 0, x: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'up':
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getVisibleState = () => {
    switch (direction) {
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'up':
      case 'down':
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={getVisibleState()}
      viewport={{ once, margin }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollScale = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  initialScale = 0.8,
  once = true,
  margin = "-100px"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollStagger = ({ 
  children, 
  staggerDelay = 0.1,
  once = true,
  margin = "-100px"
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
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
};

export const ScrollStaggerItem = ({ children, direction = 'up', distance = 50 }) => {
  const getVariants = () => {
    switch (direction) {
      case 'left':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 }
        };
      case 'up':
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollRotate = ({ 
  children, 
  delay = 0, 
  duration = 0.8,
  rotation = -10,
  once = true,
  margin = "-100px"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: rotation, scale: 0.8 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      viewport={{ once, margin }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};
