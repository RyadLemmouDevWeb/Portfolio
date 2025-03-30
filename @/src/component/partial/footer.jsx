import { AiFillLinkedin } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';
import { AiOutlineArrowUp } from 'react-icons/ai';
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2025 Lemmou Ryad</p>
        <div className="social-icons">
          <a
            href="https://github.com/RyadLemmouDevWeb"
            target="_blank"
            aria-label="GitHub"
          >
            <DiGithubBadge size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/ryad-l-34a228157/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size={40} />
          </a>
        </div>
      </div>
      <a id="scrollToTop" href="#Accueil">
        <AiOutlineArrowUp size={40} />
      </a>
    </footer>
  );
}
