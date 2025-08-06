import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Message sent! (This is a demo - implement server-side handling)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-description">
          I'm always interested in new opportunities and collaborations. 
          Feel free to reach out if you'd like to work together!
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <div className="contact-item">
              <strong>Email:</strong> dhairya.bk2204@gmail.com
            </div>
            <div className="contact-item">
              <strong>Phone:</strong> +971543638605
            </div>
            <div className="contact-item">
              <strong>Location:</strong> Sharjah, UAE
            </div>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
