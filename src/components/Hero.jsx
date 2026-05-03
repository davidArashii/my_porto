import React from 'react';
import './Hero.css';
import { ChevronRight, Gitlab, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <div className="badge-wrapper">
            <span className="badge">Available for Work</span>
          </div>
          
          <h1 className="heading-lg">
            Hi, I'm <span className="text-gradient">David Riyan Kurniawan</span>. <br />
            Lead Mobile Developer.
          </h1>
          
          <p className="hero-subtitle">
            Specializing in building high-performance <strong>Flutter</strong> applications 
            for Android & iOS. Turning complex ideas into elegant, 
            scalable mobile experiences.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work <ChevronRight size={18} />
            </a>
            <a href="mailto:davidriyankurniawan@gmail.com" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <a href="https://www.linkedin.com/in/davidriyankurniawan/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/davidArashii" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://gitlab.com/davidArashii" target="_blank" rel="noreferrer" aria-label="GitLab">
              <Gitlab size={20} />
            </a>
            <a href="mailto:davidriyankurniawan@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
