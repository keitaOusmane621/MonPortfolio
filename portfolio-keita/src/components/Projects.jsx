import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Terminé': return 'status-completed';
      case 'En cours': return 'status-in-progress';
      case 'En validation': return 'status-validation';
      default: return '';
    }
  };

  return (
    <section id="projets" className="section projects">
      <div className="container">
        <h2 className="section-title">Projets Réalisés</h2>
        <div className="projects-grid">
          {portfolioData.projects.map(project => (
            <div key={project.id} className="project-card">
              <span className={`project-status ${getStatusClass(project.status)}`}>
                {project.status}
              </span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;