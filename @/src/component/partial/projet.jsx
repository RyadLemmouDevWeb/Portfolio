import React from 'react';
import { motion } from 'framer-motion';
import Carousel from './Carousel';
import MaskedText from '../animations/MaskedText';
import Magnetic from '../animations/Magnetic';

export default function Projet() {
  const projets = [
    {
      title: 'Felembo',
      type: 'Client réel',
      description: "Lancement e-commerce Shopify avec reprise d'une dette technique et optimisation du tunnel de conversion.",
      highlights: [
        'Plan de redirections 301 pour préserver les QR codes imprimés',
        'Migration de domaine et maintien du routage e-mail sans interruption',
        "Custom Liquid & Regex pour formulaires internationaux",
      ],
      githubUrl: 'https://felembo.com',
      ctaLabel: 'Voir le site',
      images: [
        '/assets/screenshots_projects/felembo/Felembo_Accueil.png',
        '/assets/screenshots_projects/felembo/Felembo_Accueil_2.png',
        '/assets/screenshots_projects/felembo/Felembo_PRO.png',
        '/assets/screenshots_projects/felembo/Felembo_Produits.png',
      ]
    },
    {
      title: 'E-commerce Mangalaxy',
      type: 'Plateforme e-commerce',
      description: 'Boutique en ligne dédiée au manga avec frontend React, backend Symfony et paiement Stripe.',
      highlights: [
        'Catalogue produits, panier et commandes',
        'Espace admin : gestion produits, catégories, commandes',
        'Paiement sécurisé via Stripe avec gestion des avis et newsletter',
      ],
      githubUrl: 'https://github.com/RyadLemmouDevWeb/E-commerce',
      ctaLabel: 'Voir le projet',
      images: [
        '/assets/screenshots_projects/mangalaxy/Mangalaxy_Accueil.png',
        '/assets/screenshots_projects/mangalaxy/Mangalaxy_Boutique.png',
        '/assets/screenshots_projects/mangalaxy/Mangalaxy_Produits.png',
        '/assets/screenshots_projects/mangalaxy/Mangalaxy_Panier.png',
        '/assets/screenshots_projects/mangalaxy/Mangalaxy_Paiement.png',
        '/assets/screenshots_projects/mangalaxy/Mangalaxy_Compte.png',
      ]
    },
    {
      title: 'Manga Tracker',
      type: 'Projet personnel',
      description: 'Application de suivi manga avec intégration AniList, statistiques, scraping et notifications Discord.',
      highlights: [
        'Suivi des mangas en cours, terminés et liste de lecture',
        'Détection de nouveaux chapitres avec notifications Discord',
        'Stack Next.js + MySQL avec scraping et scheduler',
      ],
      githubUrl: 'https://github.com/RyadLemmouDevWeb/Manga-Tracker',
      ctaLabel: 'Voir sur GitHub',
      images: [
        '/assets/screenshots_projects/manga_tracker/Manga_Tracker_Accueil.png',
        '/assets/screenshots_projects/manga_tracker/Manga_Tracker_Suivi.png',
        '/assets/screenshots_projects/manga_tracker/Manga_Tracker_Liste_Lecture.png',
        '/assets/screenshots_projects/manga_tracker/Manga_Tracker_Stats.png',
        '/assets/screenshots_projects/manga_tracker/Manga_Tracker_Terminé.png',
      ]
    }
    ,
    {
      title: 'Spotify Like',
      type: 'Application fullstack',
      description: "Application inspirée de Spotify avec frontend React/Vite et API Express/MySQL sécurisée par JWT.",
      highlights: [
        'Player global (play/pause, navigation pistes, dock persistant)',
        'Bibliothèque locale privée (uploads MP3, covers, recherche locale)',
        'Hardening backend avec helmet, CORS allowlist, rate limiting et validation',
      ],
      githubUrl: 'https://github.com/RyadLemmouDevWeb/Spotify_Like',
      ctaLabel: 'Voir le projet',
      images: [
        '/assets/screenshots_projects/spotify/Spotify_Accueil.png',
        '/assets/screenshots_projects/spotify/Spotify_Albums.png',
        '/assets/screenshots_projects/spotify/Spotify_Artistes.png',
        '/assets/screenshots_projects/spotify/Spotify_Genres.png',
        '/assets/screenshots_projects/spotify/Spotify_Recherche.png',
        '/assets/screenshots_projects/spotify/Spotify_Local_Albums.png',
      ]
    },
    {
      title: 'Test Technique Trustia',
      type: 'Application Django',
      description: "Application web Django de gestion de produits et de facturation avec validations métier.",
      highlights: [
        'Liste produits paginée avec recherche par nom',
        'Factures multi-lignes avec calcul automatique des totaux',
        'Blocage back-end des produits périmés et tests métier',
      ],
      githubUrl: 'https://github.com/RyadLemmouDevWeb/Test_Technique_Trustia',
      ctaLabel: 'Voir le repository',
      images: [
        '/assets/screenshots_projects/trustia/Trustia_Produits.png',
        '/assets/screenshots_projects/trustia/Trustia_Form_Produits.png',
        '/assets/screenshots_projects/trustia/Trustia_Form_Facture.png',
        '/assets/screenshots_projects/trustia/Trustia_Facture.png',
      ]
    }
  ];

  return (
    <section id="projets" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <MaskedText>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#d4a373' }}>Réalisations</h2>
      </MaskedText>
      <MaskedText>
        <p style={{ marginBottom: '4rem', maxWidth: '760px', lineHeight: '1.7', opacity: 0.85 }}>
          Quelques réalisations client et projets personnels autour de cas métier concrets :
          e-commerce, facturation, suivi applicatif et automatisation.
        </p>
      </MaskedText>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
        {projets.map((projet, index) => (
          <ProjectCard key={index} projet={projet} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ projet, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="project-card"
      style={{ 
        display: 'grid', 
        gridTemplateColumns: index % 2 === 0 ? '1fr 1.5fr' : '1.5fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}
    >
      <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
        <MaskedText>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '0.6rem' }}>{projet.title}</h3>
        </MaskedText>

        <p
          style={{
            display: 'inline-block',
            marginTop: 0,
            marginBottom: '0.9rem',
            padding: '0.28rem 0.75rem',
            borderRadius: '999px',
            border: '1px solid rgba(212,163,115,0.6)',
            color: '#d4a373',
            fontSize: '0.88rem',
            fontWeight: 700,
          }}
        >
          {projet.type}
        </p>
        
        <MaskedText>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem', opacity: 0.8 }}>
            {projet.description}
          </p>
        </MaskedText>

        <ul style={{ marginTop: '-0.8rem', marginBottom: '1.7rem', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
          {projet.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Magnetic>
          <motion.a 
            href={projet.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-block',
              padding: '1rem 2rem',
              border: '1px solid #d4a373',
              borderRadius: '30px',
              color: '#d4a373',
              textDecoration: 'none',
              fontWeight: '600'
            }}
            whileHover={{ backgroundColor: '#d4a373', color: '#fff' }}
          >
            {projet.ctaLabel}
          </motion.a>
        </Magnetic>
      </div>

      <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
         <Carousel images={projet.images} projectName={projet.title} />
      </div>
    </motion.div>
  );
}