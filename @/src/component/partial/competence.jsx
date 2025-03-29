import { FaHtml5 } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiPhp } from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import { FaDocker } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { FaTrello } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';

export default function Competences() {
  const skills = [
    [<FaHtml5 size={40} />, 'HTML'],
    [<FaSass size={40} />, 'SASS'],
    [<IoLogoJavascript size={40} />, 'JS'],
    [<SiPhp size={40} />, 'PHP'],
    [<DiDatabase size={40} />, 'SQL'],
    [<FaDocker size={40} />, 'DOCKER'],
    [<RiTailwindCssFill size={40} />, 'TAILWIND'],
    [<FaReact size={40} />, 'REACT'],
    [<FaTrello size={40} />, 'TRELLO'],
    [<FaFigma size={40} />, 'FIGMA'],
  ];

  return (
    <div className="competences-container">
      {/* <h2>Compétences</h2> */}
      {skills.map((array, index) => (
        <Description key={index} props={array} />
      ))}
    </div>
  );
}

function Description({ props }) {
  console.log(props);

  return (
    <div className="skills">
      <p>{props[0]}</p>
      <p>{props[1]}</p>
    </div>
  );
}
