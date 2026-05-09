import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Accroche() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rotateImage = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <section 
      ref={containerRef}
      id="accueil" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        overflow: 'hidden',
        position: 'relative',
        padding: '2rem'
      }}
    >
      <div id="information" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', zIndex: 1, maxWidth: '1200px', width: '100%' }}>
        
        <motion.div 
          id="identité"
          style={{ y: yImage, rotate: rotateImage, flex: '0 0 auto' }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        >
          <img
            id="photo"
            src="./assets/photo/2025-01-22 - LEMMOU -Ryad - 2025-01-22T15_45_33.482Z - Photo_Cool_1.jpg"
            alt="Ryad Lemmou"
            style={{ 
                width: '350px', 
                height: 'auto',
                aspectRatio: '3/4',
                objectFit: 'cover', 
                borderRadius: '15px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                border: '2px solid #ddd'
            }}
          />
        </motion.div>

        <motion.div 
          id="info"
          style={{ y: yText, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: '1 1 auto' }}
        >
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            style={{ lineHeight: '1', margin: 0, color: '#d4a373', fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            À la recherche d'une alternance en développement web.
          </motion.h1>
          
          <motion.h2 
            id="accroche"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{ fontWeight: '300', margin: '1rem 0', fontSize: 'clamp(1rem, 2vw, 1.35rem)', maxWidth: '580px', lineHeight: '1.6' }}
          >
            Étudiant à l'ISCOD, je recherche un contrat d'alternance avec un rythme de 4 jours en entreprise et 1 jour à l'école. Motivé et passionné par la conception de sites et d'applications modernes.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}
          >
            <motion.a
              className="cv"
              href="./assets/CV_Lemmou_Ryad_ISCOD.pdf"
              download
              whileHover={{ scale: 1.05, backgroundColor: "#b8865b" }}
              whileTap={{ scale: 0.95 }}
            >
              Télécharger mon CV
            </motion.a>
            <motion.a
              href="#projets"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.9rem 1.4rem',
                borderRadius: '12px',
                border: '1px solid #d4a373',
                textDecoration: 'none',
                color: '#d4a373',
                fontWeight: 600,
              }}
            >
              Voir les réalisations
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}