import { useState } from 'react';
import Form from './component/partial/form.jsx';
import Nav from './component/partial/nav.jsx';
import Accroche from './component/partial/accroche.jsx';
import Projet from './component/partial/projet.jsx';
import Presentation from './component/partial/presentation.jsx';
import './style/input.scss';
import Competences from './component/partial/competence.jsx';
function App() {
  return (
    <>
      <Nav />

      <Accroche />

      <Presentation />

      <Projet />

      <h2>Compétences</h2>

      <Competences />

      <Form />
    </>
  );
}

export default App;
