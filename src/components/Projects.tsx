'use client';

import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Project } from '../types/portfolio';
import './Projects.css';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Recent work and personal projects</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link demo-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <FaGithub /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
