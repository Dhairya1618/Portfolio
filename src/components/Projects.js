import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hospital Management System using Hyperledger Fabric",
      description: "A secure and decentralized hospital management platform leveraging Hyperledger Fabric blockchain for patient data privacy, access control, and transparent record management.",
      technologies: ["React", "Node.js", "Hyperledger Fabric", "Blockchain"],
      githubUrl: "https://github.com/Dhairya1618/Hyperledger_HealthInsurance.git",
      liveUrl: "#",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "🏥"
    },
    {
      id: 2,
      title: "LSTM and Transformer Model Classification for Stock Market",
      description: "A machine learning project implementing LSTM and Transformer models to classify and predict stock market trends using historical data and technical indicators.",
      technologies: ["Python", "TensorFlow", "Keras", "LSTM", "Transformers"],
      githubUrl: "https://link.springer.com/chapter/10.1007/978-3-031-95099-5_9#Abs1",
      liveUrl: "#",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "📊"
    },
    {
      id: 3,
      title: "NLP for Customer Review Classification",
      description: "A natural language processing solution for classifying customer reviews into sentiment categories, utilizing advanced text preprocessing and machine learning algorithms.",
      technologies: ["Python", "NLTK", "scikit-learn", "Pandas", "NLP"],
      githubUrl: "https://github.com/ReevaShenoy/Sentiment-Analysis.git",
      liveUrl: "#",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "💬"
    },
    {
      id: 4,
      title: "Navigation System for the Elderly",
      description: "An accessible navigation system designed to assist elderly users with real-time directions, voice guidance, and user-friendly interfaces for safe and independent travel.",
      technologies: ["React Native", "Google Maps API", "Accessibility", "Mobile"],
      githubUrl: "https://github.com/Dhairya1618/Inclusive-Design-for-Public-Transportation.git",
      liveUrl: "#",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      icon: "🗺️"
    },
    {
      id: 5,
      title: "Task Management System",
      description: "A productivity tool for organizing, tracking, and collaborating on tasks with features like deadlines, notifications, and team management.",
      technologies: ["PHP", "Material-UI", "HTML", "CSS", "Javascript"],
      githubUrl: "https://github.com/Dhairya1618/Task-Management-System.git",
      liveUrl: "#",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      icon: "✅"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-description">
          Here are some of the projects I've worked on. Each project represents a unique
          challenge and showcases different aspects of my development skills.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={`project-${project.id}`}>
              <div
                className="project-header"
                style={{ background: project.gradient }}
              >
                <div className="project-number">0{project.id}</div>
                <div className="project-icon">{project.icon}</div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={`${project.id}-tech-${index}`} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-links-spacer"></div>
              <div className="project-links">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={project.githubUrl === "#" ? "" : "github-link"}
                  disabled={project.githubUrl === "#"}
                >
                  GitHub
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
