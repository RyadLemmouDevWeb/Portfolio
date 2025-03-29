import { useEffect } from 'react';

export default function Nav() {
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

  return (
    <header>
      <div id="head">
        <nav className="navbar">
          <img
            id="logo"
            src="src/assets/Logo_R_2-removebg-preview.png"
            alt="logo du site"
          />
          <a href="#Accueil" className="nav-link">
            Accueil
          </a>
          <a href="#À Propos" className="nav-link">
            À Propos
          </a>
          <a href="#Projet" className="nav-link dropdown-toggle">
            Projet
          </a>
          <a href="#Contact" className="nav-link">
            Contact
          </a>

          <div className="toggle-container" id="darkModeToggle">
            <div className="toggle-circle"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
