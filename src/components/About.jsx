import React from 'react';
import './About.css';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Users size={24} />,
      title: 'Team Leadership',
      desc: 'Proven track record in guiding mobile development teams toward delivering high-quality products.'
    },
    {
      icon: <Zap size={24} />,
      title: 'High Performance',
      desc: 'Focused on optimizing app performance, smooth animations, and clean state management.'
    },
    {
      icon: <Target size={24} />,
      title: 'Scalable Architecture',
      desc: 'Implementing BLoC pattern and robust architecture for enterprise-grade applications.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="heading-md">About Me</h2>
        
        <div className="about-grid">
          <div className="about-text fade-in">
            <p>
              With over 1+ years of intense, hands-on experience in building high-performance 
              mobile applications, I have transitioned from a dedicated Mobile Developer 
              to a <strong>Lead Team Mobile Developer</strong>.
            </p>
            <p>
              My journey is defined by a relentless pursuit of technical excellence 
              and a passion for creating seamless user experiences. I specialize in 
              <strong> Flutter</strong>, architecting scalable solutions with <strong>BLoC</strong>, 
              intricate API integrations, and steering teams through complex project lifecycles.
            </p>
            <p>
              Beyond writing clean code, I focus on empowering my team, fostering strong 
              collaboration, and bridging the gap between design and engineering to deliver 
              products that not only function flawlessly but also delight users.
            </p>
          </div>

          <div className="about-highlights fade-in" style={{ animationDelay: '0.2s' }}>
            {highlights.map((item, index) => (
              <div key={index} className="card highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <div>
                  <h3 className="highlight-title">{item.title}</h3>
                  <p className="highlight-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
