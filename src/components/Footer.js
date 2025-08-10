import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>Dhairya Katkoriyat</p>
            <p>&copy; 2024 All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:dhairya.bk2204@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
