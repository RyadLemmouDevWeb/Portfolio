import { motion } from 'framer-motion';
import { FaHtml5, FaNodeJs, FaDocker, FaReact, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiPhp, SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb, SiPuppeteer } from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import Magnetic from '../animations/Magnetic';

export default function Competences() {
  const skills = [
    { icon: <FaReact size={40} />, name: 'React.js' },
    { icon: <SiNextdotjs size={40} />, name: 'Next.js' },
    { icon: <IoLogoJavascript size={40} />, name: 'JavaScript' },
    { icon: <SiTailwindcss size={40} />, name: 'Tailwind' },
    { icon: <SiPhp size={40} />, name: 'PHP (Symfony/Laravel)' },
    { icon: <FaNodeJs size={40} />, name: 'Node.js' },
    { icon: <DiDatabase size={40} />, name: 'MySQL' },
    { icon: <SiPostgresql size={40} />, name: 'PostgreSQL' },
    { icon: <SiMongodb size={40} />, name: 'MongoDB' },
    { icon: <FaGitAlt size={40} />, name: 'Git / GitHub' },
    { icon: <SiPuppeteer size={40} />, name: 'Puppeteer' },
    { icon: <FaDocker size={40} />, name: 'Docker / CI-CD' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="competences-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '2rem',
        maxWidth: '1000px',
        margin: '0 auto 4rem auto'
      }}
    >
      {skills.map((skill, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Magnetic>
            <div 
              className="skill-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '1.5rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '15px',
                width: '100px',
                cursor: 'pointer',
                backdropFilter: 'blur(5px)'
              }}
            >
              <div style={{ color: '#d4a373', marginBottom: '0.5rem' }}>
                {skill.icon}
              </div>
              <p style={{ margin: 0, fontWeight: '500' }}>{skill.name}</p>
            </div>
          </Magnetic>
        </motion.div>
      ))}
    </motion.div>
  );
}