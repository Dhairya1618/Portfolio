import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-description">
          I'm always interested in new opportunities and collaborations.
          Feel free to reach out if you'd like to work together!
        </p>
        <div className="contact-content">
          <div className="contact-info-centered">
            <h3>Let's Connect</h3>
            <div className="contact-details">
              <div className="contact-item">
                <strong>📧 Email:</strong> 
                <a href="mailto:dhairya.bk2204@gmail.com">dhairya.bk2204@gmail.com</a>
              </div>
              <div className="contact-item">
                <strong>📱 Phone:</strong> 
                <a href="tel:+971543638605">+971543638605</a>
              </div>
              <div className="contact-item">
                <strong>📍 Location:</strong> Sharjah, UAE
              </div>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="mailto:dhairya.bk2204@gmail.com" className="social-link">
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
