import MaskedText from '../animations/MaskedText';

export default function Presentation() {
  return (
    <div id="apropos" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <MaskedText>
        <h2 style={{ fontSize: '2rem', lineHeight: '1.4', marginBottom: '2rem' }}>
          Prêt à m'investir dans vos projets avec l'ISCOD.
        </h2>
      </MaskedText>
      
      <MaskedText>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'inherit', opacity: 0.9 }}>
          Je suis Ryad Lemmou, étudiant en développement web à l'ISCOD. Je suis actuellement
          à la recherche d'une alternance pour mettre en pratique mes compétences et contribuer 
          à la réussite de vos projets. J'ai hâte de m'intégrer à une équipe dynamique pour 
          concevoir des expériences web fiables, utiles et modernes.
        </p>
      </MaskedText>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        <div style={{ border: '1px solid rgba(212,163,115,0.35)', borderRadius: '12px', padding: '1rem' }}>
          <p style={{ margin: 0, fontWeight: 700, color: '#d4a373' }}>Objectif</p>
          <p style={{ marginBottom: 0 }}>Trouver une alternance stimulante au sein d'une équipe web.</p>
        </div>
        <div style={{ border: '1px solid rgba(212,163,115,0.35)', borderRadius: '12px', padding: '1rem' }}>
          <p style={{ margin: 0, fontWeight: 700, color: '#d4a373' }}>Formation</p>
          <p style={{ marginBottom: 0 }}>École ISCOD, axée sur les compétences pratiques en développement web.</p>
        </div>
        <div style={{ border: '1px solid rgba(212,163,115,0.35)', borderRadius: '12px', padding: '1rem' }}>
          <p style={{ margin: 0, fontWeight: 700, color: '#d4a373' }}>Engagement</p>
          <p style={{ marginBottom: 0 }}>Motivation, esprit d'équipe et volonté d'apprendre au quotidien.</p>
        </div>
      </div>
    </div>
  );
}