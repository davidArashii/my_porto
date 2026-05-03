import React from 'react';
import './Education.css';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="heading-md text-center">Education & Achievement</h2>
        
        <div className="education-grid fade-in">
          <div className="card edu-card">
            <div className="edu-icon">
              <GraduationCap size={32} />
            </div>
            <div className="edu-content">
              <span className="badge">Bachelor's Degree</span>
              <h3 className="edu-title">Information Systems</h3>
              <p className="edu-university">Universitas Islam Negeri Raden Intan Lampung</p>
              <div className="edu-details">
                <span className="gpa text-gradient">GPA: 3.70</span>
              </div>
              <p className="edu-desc">
                Focused on software engineering, database design, and mobile application development. Passed with distinction, showcasing strong problem-solving and technical skills.
              </p>
            </div>
          </div>
          

        </div>
        
        <div className="footer-credits">
          <p>© {new Date().getFullYear()} David Riyan Kurniawan.</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
