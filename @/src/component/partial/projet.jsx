import React from 'react';
export default function Projet() {
  const def = [
    [
      '1Twitter2Plus',
      'Dans le cadre d’un projet de groupe, nous avons conçu et développé un clone fonctionnel de Twitter en utilisant PHP, MySQL, JavaScript et HTML. Cette plateforme de microblogging permet aux utilisateurs de s’inscrire, se connecter, publier des tweets, liker des publications, et interagir avec une interface responsive. Ce projet nous a permis de collaborer efficacement pour gérer la structure backend avec MySQL, développer des fonctionnalités dynamiques en PHP et JavaScript, et concevoir une interface intuitive en HTML. Vous pouvez consulter le code source dans le lien GitHub ou explorer la maquette.',
      'https://github.com/RyadLemmouDevWeb/1Twitter2Plus',

      './assets/Capture d’écran 2025-03-25 à 10.36.22.png',
    ],
    [
      'MyCinema',
      "Dans le cadre dun projet solo, j'ai concu et développé un site fonctionnel pour un cinema en utilisant PHP, MySql, Javascript et HTML. Ce site permet aux utilisateurs de rechercher quels films ont été diffusé dans le cinema avec des informations sur chacun, aussi il permet de rechercher un utilisateur en fonction de son nom, il permet aussi d'implementer une nouvelle séance de cinema dans la base de donnée. La page d'acceuil utilise une API afin de mettre en avant les affiches de films. Vous pouvez consulter le code source dans le lien Github ou explorez la maquette.",
      'https://github.com/EpitechWebAcademiePromo2026/W-PHP-501-PAR-1-1-mycinema-ryad.lemmou',
      './assets/Capture d’écran 2025-03-24 à 11.41.09.png',
    ],

    [
      'Puissance4',
      'J’ai développé une version interactive du célèbre jeu de stratégie Puissance 4 en JavaScript. Ce projet, réalisé en solo, met en avant mes compétences en algorithmie et en gestion des interactions utilisateur. Le jeu permet à deux joueurs de s’affronter sur une grille personnalisable, avec des fonctionnalités telles que la détection automatique de victoire et la possibilité de relancer une partie à tout moment. Ce projet illustre ma capacité à concevoir des solutions logiques tout en offrant une expérience utilisateur fluide et engageante.',
      'https://github.com/EpitechWebAcademiePromo2026/W-JSC-501-PAR-1-1-puissance4-ryad.lemmou',
      './assets/Capture d’écran 2025-03-25 à 10.43.06.png',
    ],
  ];
  return (
    <div id="Projet">
      <h2>Projets</h2>
      {def.map((projet, index) => (
        <Description props={projet} key={index} />
      ))}
    </div>
  );
}

function Description(projet) {
  console.log(projet);

  return (
    <div className="travail">
      <h2>{projet.props[0]}</h2>
      <p>{projet.props[1]}</p>
      <a id="git" href={projet.props[2]} target="_blank" rel="">
        Voir sur GitHub
      </a>
      <div>
        <img src={projet.props[3]} alt="" className="Img" />
      </div>
    </div>
  );
}
