import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Magnetic from '../animations/Magnetic';

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/assets/logo/Logo_Noir.png');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const body = document.body;
    if (localStorage.getItem('dark-mode') === 'enabled') {
      body.classList.add('dark-mode');
    }
    const updateLogoFromBody = () => {
      const isDark = body.classList.contains('dark-mode') || localStorage.getItem('dark-mode') === 'enabled';
      setLogoSrc(isDark ? '/assets/logo/Logo_Noir.png' : '/assets/logo/Logo_Blanc.png');
    };

    updateLogoFromBody();

    const toggleDarkMode = () => {
      body.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
      updateLogoFromBody();
    };

    const toggle = document.getElementById('darkModeToggle');
    if (toggle) toggle.addEventListener('click', toggleDarkMode);
    return () => {
      if (toggle) toggle.removeEventListener('click', toggleDarkMode);
    };
  }, []);

  const navVariants = {
    visible: { y: 0, opacity: 1, x: "-50%" },
    hidden: { y: -100, opacity: 0, x: "-50%" },
  };

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="island-navbar"
      >
        <div className="nav-content">
          <Magnetic>
            <motion.a href="#accueil" className="nav-logo">
              <img src={logoSrc} alt="Logo Ryad" />
            </motion.a>
          </Magnetic>

          <nav className="nav-links">
            {[
              { label: 'Accueil', href: '#accueil' },
              { label: 'À propos', href: '#apropos' },
              { label: 'Compétences', href: '#competences' },
              { label: 'Réalisations', href: '#projets' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <Magnetic key={item.label}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </Magnetic>
            ))}
          </nav>

          <Magnetic>
            <div className="toggle-container" id="darkModeToggle">
              <div className="toggle-circle"></div>
            </div>
          </Magnetic>

          <motion.button
            className="hamburger-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <span className={mobileMenuOpen ? 'open' : ''}></span>
            <span className={mobileMenuOpen ? 'open' : ''}></span>
            <span className={mobileMenuOpen ? 'open' : ''}></span>
          </motion.button>
        </div>
      </motion.header>

      <motion.div
        className="mobile-menu"
        initial={{ opacity: 0, y: -20, x: "-50%" }}
        animate={mobileMenuOpen ? { opacity: 1, y: 0, x: "-50%" } : { opacity: 0, y: -20, x: "-50%" }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none', position: 'fixed', left: '50%' }}
      >
        <nav className="mobile-nav-links">
          {[
            { label: 'Accueil', href: '#accueil' },
            { label: 'À propos', href: '#apropos' },
            { label: 'Compétences', href: '#competences' },
            { label: 'Réalisations', href: '#projets' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </>
  );
}