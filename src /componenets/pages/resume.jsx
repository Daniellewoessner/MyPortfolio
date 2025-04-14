import React from 'react';
import '../../styles/Resume.css'; // Assuming you have a CSS file for styling

function Resume() {
  const frontEndSkills = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Bootstrap'
  ];
  
  const backEndSkills = [
    'Node.js', 'Express', 'PostgreSQL', 'API Integration'
  ];
  
  const toolsSkills = [
    'Git', 'GitHub', 'npm', 'VS Code'
  ];

  return (
    <div className="resume-page">
      <section className="resume-header">
        <h1>Resume</h1>
        <a href="/resume.pdf" download className="download-btn">
          <i className="fas fa-download"></i> Download Resume
        </a>
      </section>
      
      <section className="resume-content">
        <div className="resume-section">
          <h2>Skills</h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Front-End</h3>
              <ul>
                {frontEndSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Back-End</h3>
              <ul>
                {backEndSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <ul>
                {toolsSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="resume-section">
          <h2>Education</h2>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Full Stack Web Development Bootcamp</h3>
              <span className="resume-date">2023 - Present</span>
            </div>
            <p className="resume-location">Coding Bootcamp Program</p>
            <p>Intensive program focusing on full stack web development skills including HTML, CSS, JavaScript, React, Node.js, and database management.</p>
          </div>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Psychology Degree</h3>
              <span className="resume-date">Prior Education</span>
            </div>
            <p className="resume-location">University Program</p>
            <p>Specialized in working with children on the autism spectrum, developing strong communication and problem-solving skills.</p>
          </div>
        </div>
        
        <div className="resume-section">
          <h2>Projects</h2>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Weather AI</h3>
              <a href="https://weatherai-ucpm.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                View Project <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
            <p>An AI-powered weather application providing intelligent weather forecasts and insights.</p>
            <p><strong>Technologies:</strong> React, JavaScript, Weather APIs, AI Integration</p>
          </div>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Vehicle Builder</h3>
              <a href="https://github.com/Daniellewoessner/Vehicle-Builder" target="_blank" rel="noopener noreferrer" className="project-link">
                View Project <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
            <p>An application that allows users to customize and build their own virtual vehicles.</p>
            <p><strong>Technologies:</strong> JavaScript, HTML/CSS, Local Storage</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;