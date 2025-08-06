import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1>Hi, I'm  <span className="highlight">Dhairya Katkoriya</span></h1>
            <h2>Frontend Developer with Machine Learning Projects</h2>
            <p>
              I'm a creative frontend developer specializing in building visually stunning and highly interactive web applications. 
              My passion lies in blending beautiful user experiences with the power of machine learning, bringing intelligent features to the browser. 
              I enjoy exploring the latest technologies and transforming innovative ideas into seamless digital solutions. 
              With a strong foundation in both design and AI, I strive to make the web smarter, more engaging, and accessible to everyone.
            </p>
            <div className="cta-buttons">
              <button 
                className="btn primary" 
                onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}
              >
                View My Work
              </button>
              <button 
                className="btn secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>Your Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
