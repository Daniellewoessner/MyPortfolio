import React from 'react';
import '../styles/Projectcard.css'; // Adjust the path as necessary

function ProjectCard({ title, image, link, alt, description, github }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={alt} />
        <div className="project-overlay">
          <div className="project-links">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default ProjectCard;