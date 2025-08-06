import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hospital Management System using Hyperledger Fabric",
      description: "A secure and decentralized hospital management platform leveraging Hyperledger Fabric blockchain for patient data privacy, access control, and transparent record management.",
      technologies: ["React", "Node.js", "Hyperledger Fabric", "Blockchain"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: null
    },
    {
      id: 2,
      title: "LSTM and Transformer Model Classification for Stock Market",
      description: "A machine learning project implementing LSTM and Transformer models to classify and predict stock market trends using historical data and technical indicators.",
      technologies: ["Python", "TensorFlow", "Keras", "LSTM", "Transformers"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: null
    },
    {
      id: 3,
      title: "NLP for Customer Review Classification",
      description: "A natural language processing solution for classifying customer reviews into sentiment categories, utilizing advanced text preprocessing and machine learning algorithms.",
      technologies: ["Python", "NLTK", "scikit-learn", "Pandas", "NLP"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: null
    },
    {
      id: 4,
      title: "Navigation System for the Elderly",
      description: "An accessible navigation system designed to assist elderly users with real-time directions, voice guidance, and user-friendly interfaces for safe and independent travel.",
      technologies: ["React Native", "Google Maps API", "Accessibility", "Mobile"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: null
    },
    {
      id: 5,
      title: "Task Management System",
      description: "A productivity tool for organizing, tracking, and collaborating on tasks with features like deadlines, notifications, and team management.",
      technologies: ["React", "Firebase", "Material-UI"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: null
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-description">
          Here are some of the projects I've worked on. Each project represents a unique challenge 
          and showcases different aspects of my development skills.
        </p>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} />
                ) : (
                  <div className="image-placeholder">
                    <span>Project Screenshot</span>
                  </div>
                )}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} className="btn secondary" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.liveUrl} className="btn primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
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
