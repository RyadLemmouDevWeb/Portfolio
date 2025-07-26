import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, ScrollScale, ScrollStagger, ScrollStaggerItem } from '../animations/ScrollAnimations';

export default function APropos() {
  const competences = [
    'JavaScript', 'React', 'PHP', 'MySQL', 'HTML/CSS', 'SCSS', 'Git', 'Framer Motion'
  ];

  return (
    <section id="À Propos">
      <ScrollReveal direction="up" delay={0.2}>
        <h2>À Propos de Moi</h2>
      </ScrollReveal>

      <ScrollReveal direction="left" delay={0.4}>
        <p>
          Passionné par le développement web, je crée des expériences digitales 
          modernes et interactives. Mon expertise s'étend du front-end au back-end, 
          avec une attention particulière portée à l'expérience utilisateur et aux animations.
        </p>
      </ScrollReveal>

      <ScrollScale delay={0.6}>
        <div className="competences-container">
          <h3>Mes Compétences</h3>
          <ScrollStagger staggerDelay={0.1}>
            <div className="competences-grid">
              {competences.map((competence, index) => (
                <ScrollStaggerItem key={index} direction="up">
                  <motion.div 
                    className="competence-item"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "#d4a373",
                      color: "white"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {competence}
                  </motion.div>
                </ScrollStaggerItem>
              ))}
            </div>
          </ScrollStagger>
        </div>
      </ScrollScale>

      <ScrollReveal direction="right" delay={0.8}>
        <div className="philosophy">
          <h3>Ma Philosophie</h3>
          <p>
            Je crois que chaque ligne de code doit avoir un but et chaque animation 
            doit améliorer l'expérience utilisateur. Mon objectif est de créer des 
            interfaces à la fois belles et fonctionnelles.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
