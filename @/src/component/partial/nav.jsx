import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScroll';

export default function Nav() {
  const { scrollDirection, isScrolled } = useScrollDirection();
  const controls = useAnimationControls();

  useEffect(() => {
    const body = document.body;

    if (localStorage.getItem('dark-mode') === 'enabled') {
      body.classList.add('dark-mode');
    }

    const toggleDarkMode = () => {
      body.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
      } else {
        localStorage.setItem('dark-mode', 'disabled');
      }
    };

    const toggle = document.getElementById('darkModeToggle');
    toggle.addEventListener('click', toggleDarkMode);

    return () => {
      toggle.removeEventListener('click', toggleDarkMode);
    };
  }, []);

  useEffect(() => {
    controls.start({
      y: "0%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={controls}
      className={isScrolled ? 'scrolled' : ''}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled 
          ? document.body.classList.contains('dark-mode')
            ? "rgba(45, 55, 72, 0.95)"
            : "rgba(255, 255, 255, 0.95)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(212, 163, 115, 0.2)" : "none",
        boxShadow: isScrolled ? "0 2px 20px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease"
      }}
    >
      <div id="head">
        <motion.nav 
          className={`navbar ${isScrolled ? 'compact' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img
            id="logo"
            src="./assets/Logo_R_2-removebg-preview.png"
            alt="logo du site"
            className={isScrolled ? 'compact' : ''}
            initial={{ rotate: -180, scale: 0.5 }}
            animate={{ rotate: 0, scale: isScrolled ? 0.8 : 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ rotate: 5, scale: isScrolled ? 0.9 : 1.1 }}
          />
          
          <motion.a 
            href="#Accueil" 
            className="nav-link"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{ y: -2, color: "#d4a373" }}
          >
            Accueil
          </motion.a>
          
          <motion.a 
            href="#À Propos" 
            className="nav-link"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            whileHover={{ y: -2, color: "#d4a373" }}
          >
            À Propos
          </motion.a>
          
          <motion.a 
            href="#Projet" 
            className="nav-link dropdown-toggle"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            whileHover={{ y: -2, color: "#d4a373" }}
          >
            Projet
          </motion.a>
          
          <motion.a 
            href="#Contact" 
            className="nav-link"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            whileHover={{ y: -2, color: "#d4a373" }}
          >
            Contact
          </motion.a>

          <motion.div 
            className="toggle-container" 
            id="darkModeToggle"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="toggle-circle"></div>
          </motion.div>
        </motion.nav>
      </div>
    </motion.header>
  );
}
