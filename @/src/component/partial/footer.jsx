import { motion } from 'framer-motion';
import { AiFillLinkedin } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';
import { AiOutlineArrowUp } from 'react-icons/ai';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="footer-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.p
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          &copy; 2025 Lemmou Ryad
        </motion.p>
        
        <motion.div 
          className="social-icons"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/RyadLemmouDevWeb"
            target="_blank"
            aria-label="GitHub"
            whileHover={{ 
              scale: 1.2, 
              color: "#d4a373",
              rotate: 5
            }}
            whileTap={{ scale: 0.9 }}
          >
            <DiGithubBadge size={40} />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/ryad-l-34a228157/"
            target="_blank"
            aria-label="LinkedIn"
            whileHover={{ 
              scale: 1.2, 
              color: "#d4a373",
              rotate: -5
            }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillLinkedin size={40} />
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.a 
        id="scrollToTop" 
        href="#Accueil"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.1, 
          backgroundColor: "#d4a373",
          y: -5
        }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { duration: 0.4, delay: 0.5 },
          scale: { duration: 0.4, delay: 0.5 },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <AiOutlineArrowUp size={40} />
      </motion.a>
    </motion.footer>
  );
}
