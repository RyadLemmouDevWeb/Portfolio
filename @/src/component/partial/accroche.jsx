import { motion } from 'framer-motion';

export default function Accroche() {
  return (
    <>
      <motion.section 
        id="Accueil"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          id="information"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            id="identité"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.img
              id="photo"
              src="./assets/2025-01-22 - LEMMOU -Ryad - 2025-01-22T15_45_33.482Z - Photo_Cool_1.jpg"
              alt="photo de moi"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              initial={{ rotate: -5, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
          </motion.div>
          <motion.div 
            id="info"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              LEMMOU RYAD
            </motion.h1>
            <motion.h2 
              id="accroche"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Développeur Web
            </motion.h2>
            <motion.a
              className="cv"
              download="CV Ryad Lemmou.pdf"
              href="src/assets/CV Ryad Lemmou (1).pdf"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#b8865b",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Téléchargez Mon CV
            </motion.a>
          </motion.div>
          <div id="l'accroche"></div>
        </motion.div>
      </motion.section>
    </>
  );
}
