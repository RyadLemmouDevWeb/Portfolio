import { motion } from 'framer-motion';
import MaskedText from '../animations/MaskedText';

const competences = [
  {
    title: 'Développement Front-end',
    details: 'HTML/SASS, JavaScript, Tailwind CSS, et expertise React.js / Next.js pour créer des interfaces dynamiques et fluides.',
  },
  {
    title: 'Développement Back-end',
    details: 'Logique serveur avec PHP (Symfony, Laravel) et Node.js (Express). Création d\'API robustes (REST & GraphQL).',
  },
  {
    title: 'Bases de données & Outils',
    details: 'Architecture BDD (MySQL, PostgreSQL, MongoDB), versionning (Git/GitHub), Web Scraping (Puppeteer) et notions Docker CI/CD.',
  },
];

export default function Competences() {
  return (
    <section id="competences" style={{ padding: '4rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <MaskedText>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#d4a373', textAlign: 'center' }}>
          Ce que je peux apporter
        </h2>
      </MaskedText>
      <MaskedText>
        <p style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem', fontSize: '1.1rem', opacity: 0.85 }}>
          En m'intégrant à votre équipe, je souhaite mettre à profit mes compétences techniques et interpersonnelles 
          pour participer activement à la réussite de vos projets web.
        </p>
      </MaskedText>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {competences.map((competence, index) => (
          <motion.article
            key={competence.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
              border: '1px solid rgba(212,163,115,0.45)',
              borderRadius: '16px',
              padding: '1.4rem',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: '0.8rem' }}>{competence.title}</h3>
            <p style={{ margin: 0, lineHeight: '1.55', opacity: 0.9 }}>{competence.details}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
