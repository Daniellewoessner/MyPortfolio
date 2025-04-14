import React from 'react';
import '../styles/SkillSection.css';


function SkillsSection() {
  const skills = [
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'TypeScript', icon: 'fas fa-code' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Git', icon: 'fab fa-git-alt' }
  ];

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">
              <i className={skill.icon}></i>
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;