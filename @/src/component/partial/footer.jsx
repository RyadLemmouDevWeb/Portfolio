import { motion } from 'framer-motion';
import { AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';
import Magnetic from '../animations/Magnetic';

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', padding: '1.9rem 1rem', position: 'relative', marginTop: '1.1rem' }}>
      <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
        <p style={{ color: '#fff', margin: 0, textAlign: 'center', maxWidth: '700px', lineHeight: '1.6' }}>
          Actuellement à la recherche d'une alternance en développement web.<br />
          École ISCOD.
        </p>

        <a href="mailto:contact.ryad.dev@gmail.com" style={{ color: '#d4a373', textDecoration: 'none', fontWeight: 700 }}>
          ryad.lemmou.94@gmail.com
        </a>
        
        <div className="social-icons" style={{ display: 'flex', gap: '2rem' }}>
          <Magnetic>
            <a href="https://github.com/RyadLemmouDevWeb" target="_blank" aria-label="GitHub">
              <DiGithubBadge size={40} color="#fff" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://www.linkedin.com/in/ryad-l-34a228157/" target="_blank" aria-label="LinkedIn">
              <AiFillLinkedin size={40} color="#fff" />
            </a>
          </Magnetic>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
          &copy; 2026 Lemmou Ryad. Tous droits réservés.
        </p>

        <div style={{ position: 'absolute', right: '3rem', bottom: '2rem' }}>
            <Magnetic>
                <motion.a 
                  href="#accueil"
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: '50px', 
                        height: '50px', 
                        borderRadius: '50%', 
                        background: '#d4a373',
                        color: 'white',
                        cursor: 'pointer'
                    }}
                >
                    <AiOutlineArrowUp size={24} />
                </motion.a>
            </Magnetic>
        </div>
      </div>
    </footer>
  );
}