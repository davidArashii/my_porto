import React from 'react';
import './Projects.css';
import { ExternalLink, Github, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Transellia (Featured)',
      description: 'A comprehensive digital solution for MSMEs, designed to track transactions and manage stock seamlessly. Features include Firebase integration, advanced state management, and simple financial reporting.',
      role: 'Main Developer (UI & Backend Integration)',
      tags: ['Flutter', 'Firebase', 'BLoC', 'REST API'],
      featured: true,
      icon: <Smartphone size={24} />
    },
    {
      title: 'Jobify',
      description: 'A modern job portal application allowing users to browse listings, submit applications, and track their interview process.',
      role: 'Mobile Developer',
      tags: ['Flutter', 'REST API', 'Provider'],
      featured: false,
      icon: <Smartphone size={24} />
    },
    {
      title: 'Weather Apps',
      description: 'Real-time weather application with geolocation capabilities, detailed forecasts, and interactive maps.',
      role: 'Mobile Developer',
      tags: ['Flutter', 'OpenWeatherAPI', 'Geolocation'],
      featured: false,
      icon: <Smartphone size={24} />
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="heading-md">Project Showcase</h2>
        
        <div className="projects-grid fade-in">
          {projects.map((project, index) => (
            <div key={index} className={`card project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-top">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-links">
                  <a href="#" aria-label="Github Link"><Github size={20} /></a>
                  <a href="#" aria-label="External Link"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="project-title">
                {project.title}
                {project.featured && <span className="featured-badge">Highlights</span>}
              </h3>
              
              <p className="project-role">{project.role}</p>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
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
