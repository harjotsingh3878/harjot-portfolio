import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ personalData }) => {
  const scrollToSection = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm {personalData.name}</h1>
          <p className="hero-subtitle">{personalData.title}</p>
          <p className="hero-description">
            9+ years of experience building scalable, high-performance web applications using React, Node.js, TypeScript, and Redux.
          </p>

          <div className="hero-cta">
            <button className="btn-primary">Download Resume</button>
            <button className="btn-secondary">View My Work</button>
          </div>

          <div className="social-links">
            <a href="https://github.com/harjotsingh3878" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/harjotsingh3878/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${personalData.email}`} title="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar">
            <div className="avatar-placeholder">HS</div>
          </div>
        </div>
      </div>

      <button className="scroll-indicator" onClick={scrollToSection}>
        <FaArrowDown />
      </button>
    </section>
  );
};

export default Hero;
