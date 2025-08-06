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

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h1>Skills & Technologies</h1>
        <h2>
          I'm constantly learning and expanding my skill set. Here are the technologies
          I work with regularly.
        </h2>
        <br />
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="experience-stats">
          <div className="stat">
            <h4>Fresher</h4>
            <p>Entry Level</p>
          </div>
          <div className="stat">
            <h4>5+</h4>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h4>Learning</h4>
            <p>Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
