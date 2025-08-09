import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
            <p>Built with React.js and passion for clean code.</p>
          </div>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/dhairya-katkoriya-559b341b9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Dhairya1618" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
