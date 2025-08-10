import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & Mobile",
      skills: ["React", "React Native", "JavaScript", "HTML5", "CSS3", "Material-UI", "Tailwind CSS"]
    },
    {
      title: "Machine Learning & AI", 
      skills: ["Python", "TensorFlow", "Keras", "LSTM", "Transformers", "scikit-learn", "NLTK", "Pandas"]
    },
    {
      title: "Blockchain",
      skills: ["Hyperledger Fabric", "Node.js", "Smart Contracts", "Solidity"]
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "REST APIs", "SQL", "PostgreSQL", "MySQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "Google Maps API", "Linux", "Agile/Scrum"]
    }
  ];

  const certifications = [
    {
      title: "CEH",
      description: "Certified Ethical Hacker",
      status: "Certified"
    },
    {
      title: "Google Cloud",
      description: "Cloud Fundamentals",
      status: "Certified"
    },
    {
      title: "Tihan IIT Hyderabad",
      description: "Certificate Program",
      status: "In Progress"
    }
  ];

  const stats = [
    {
      number: "Fresher",
      label: "Entry Level"
    },
    {
      number: "5+",
      label: "Projects Completed"
    },
    {
      number: "Learning",
      label: "Technologies"
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-description">
          I'm constantly learning and expanding my skill set. Here are the technologies
          I work with regularly.
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="certifications-title">Certifications</h3>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <h4>{cert.title}</h4>
              <p>{cert.description}</p>
              <span className={`status ${cert.status.toLowerCase().replace(' ', '-')}`}>
                {cert.status}
              </span>
            </div>
          ))}
        </div>

        <div className="experience-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat">
              <h4>{stat.number}</h4>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
