import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import Form from './component/partial/form.jsx';
import Nav from './component/partial/nav.jsx';
import Accroche from './component/partial/accroche.jsx';
import Services from './component/partial/services.jsx';
import Projet from './component/partial/projet.jsx';
import Presentation from './component/partial/presentation.jsx';
import Competences from './component/partial/competence.jsx';
import Footer from './component/partial/footer.jsx';
import './style/input.scss';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <Nav />
      <main>
        <Accroche />
        <Presentation />
        <Services />
        <Projet />
        <h2 style={{textAlign: 'center', margin: '4rem 0 2rem'}}>Méthode et outils</h2>
        <Competences />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;