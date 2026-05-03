import React from 'react';
import './Skills.css';
import { Code2, Database, Layout, Server, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: <Layout size={24} />,
      skills: ['Flutter', 'Dart', 'Android', 'iOS', 'Clean Architecture', 'MVVM', 'MVC', 'GetX', 'Provider', 'BLoC Pattern']
    },
    {
      title: 'Backend & Services',
      icon: <Server size={24} />,
      skills: ['REST API', 'Firebase', 'Supabase']
    },
    {
      title: 'Tools & Others',
      icon: <Code2 size={24} />,
      skills: ['Git', 'GitLab', 'GitHub Actions', 'CI/CD', 'Unit Testing', 'Postman', 'Trello', 'Asana', 'Agile/Scrum', 'Figma']
    },
    {
      title: 'Leadership & Professional',
      icon: <Users size={24} />,
      skills: [
        'Leadership & Mentoring',
        'End-to-End Feature Ownership',
        'Tech Decision Making',
        'Cross-functional Collaboration',
        'Business to Tech Translation',
        'Business Impact Focus'
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="heading-md text-center">Technical Skills</h2>
        
        <div className="skills-grid fade-in">
          {skillCategories.map((category, index) => (
            <div key={index} className="card skill-card">
              <div className="skill-header">
                <div className="skill-icon">
                  {category.icon}
                </div>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
