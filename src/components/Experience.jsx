import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Lead Mobile Developer',
      company: 'Scaleocean',
      period: 'Nov 2025 - Present',
      description: 'Guiding the mobile engineering team, architecting complex applications using Flutter and BLoC, and ensuring high-quality, scalable code delivery.'
    },
    {
      role: 'Mobile Developer',
      company: 'PT HES Cipta Kreasi',
      period: 'Jun 2024 - Nov 2025',
      description: 'Developed and optimized mobile applications, implemented robust API integrations, and actively contributed to architectural decisions.'
    },
    {
      role: 'Junior Mobile Developer',
      company: 'Thinkspedia',
      period: 'Jan 2024 - May 2024',
      description: 'Assisted in building responsive UI components, managing application state, and resolving bugs in a fast-paced agile environment.'
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="heading-md">Work Experience</h2>
        
        <div className="timeline fade-in">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-period badge">{exp.period}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
