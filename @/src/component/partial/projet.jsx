import React from 'react';
import { motion } from 'framer-motion';
import Carousel from './Carousel';
import { scrollVariants, cardVariants, titleVariants } from '../animations/variants';
import '../../style/carousel.scss';

export default function Projet() {
  const def = [
    {
      title: '1Twitter2Plus',
      description: 'Dans le cadre d\'un projet de groupe, nous avons conçu et développé un clone fonctionnel de Twitter en utilisant PHP, MySQL, JavaScript et HTML. Cette plateforme de microblogging permet aux utilisateurs de s\'inscrire, se connecter, publier des tweets, liker des publications, et interagir avec une interface responsive. Ce projet nous a permis de collaborer efficacement pour gérer la structure backend avec MySQL, développer des fonctionnalités dynamiques en PHP et JavaScript, et concevoir une interface intuitive en HTML. Vous pouvez consulter le code source dans le lien GitHub ou explorer la maquette.',
      githubUrl: 'https://github.com/RyadLemmouDevWeb/1Twitter2Plus',
      images: [
        '/assets/Twitter1.png',
        '/assets/Twitter2.png',
        '/assets/Twitter3.png',
        '/assets/Twitter4.png',
        '/assets/Twitter5.png',
        '/assets/Twitter6.png',
        '/assets/Twitter7.png'
      ]
    },
    {
      title: 'MyCinema',
      description: "Dans le cadre d'un projet solo, j'ai conçu et développé un site fonctionnel pour un cinéma en utilisant PHP, MySQL, JavaScript et HTML. Ce site permet aux utilisateurs de rechercher quels films ont été diffusés dans le cinéma avec des informations sur chacun, aussi il permet de rechercher un utilisateur en fonction de son nom, il permet aussi d'implémenter une nouvelle séance de cinéma dans la base de données. La page d'accueil utilise une API afin de mettre en avant les affiches de films. Vous pouvez consulter le code source dans le lien GitHub ou explorez la maquette.",
      githubUrl: 'https://github.com/RyadLemmouDevWeb/My_Cinema',
      images: [
        "/assets/Cinema1.png",
        "/assets/Cinema2.png",
        "/assets/Cinema3.png",
        "/assets/Cinema4.png"
      ]
    },
    {
      title: 'Puissance4',
      description: 'J\'ai développé une version interactive du célèbre jeu de stratégie Puissance 4 en JavaScript. Ce projet, réalisé en solo, met en avant mes compétences en algorithmie et en gestion des interactions utilisateur. Le jeu permet à deux joueurs de s\'affronter sur une grille personnalisable, avec des fonctionnalités telles que la détection automatique de victoire et la possibilité de relancer une partie à tout moment. Ce projet illustre ma capacité à concevoir des solutions logiques tout en offrant une expérience utilisateur fluide et engageante.',
      githubUrl: 'https://github.com/RyadLemmouDevWeb/Puissance-4',
      images: [
        '/assets/Puissance4_1.png',
        '/assets/Puissance4_2.png',
        '/assets/Puissance4_3.png',
        '/assets/Puissance4_4.png'
      ]
    }
  ];

  return (
    <motion.div 
      id="Projet"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scrollVariants}
    >
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        Projets
      </motion.h2>
      {def.map((projet, index) => (
        <Description projet={projet} key={index} index={index} />
      ))}
    </motion.div>
  );
}

function Description({ projet, index }) {
  return (
    <motion.div 
      className="travail"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2 }}
      whileHover="hover"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projet.title}
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {projet.description}
      </motion.p>
      
      <motion.a 
        id="git" 
        href={projet.githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: 0.6 }}
        whileHover={{ 
          scale: 1.05,
          backgroundColor: "#b8865b",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        Voir sur GitHub
      </motion.a>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Carousel images={projet.images} projectName={projet.title} />
      </motion.div>
    </motion.div>
  );
}
