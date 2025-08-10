import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="greeting">👋 Hello, I'm</div>
            <h1>Dhairya Katkoriya</h1>
            <h2>Frontend Developer & AI Enthusiast</h2>
            <p>
              I'm a creative frontend developer specializing in building visually stunning and highly interactive web applications. My passion lies in blending beautiful user experiences with the power of machine learning, bringing intelligent features to the browser. I enjoy exploring the latest technologies and transforming innovative ideas into seamless digital solutions.
            </p>
            <div className="highlight-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2024</span>
                <span className="stat-label">Graduate</span>
              </div>
            </div>
            <div className="cta-buttons">
              <a href="#projects" className="btn primary">View My Work</a>
              <a href="#contact" className="btn secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative background elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default About;
