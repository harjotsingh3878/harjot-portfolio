import React from 'react';
import './About.css';

const About = ({ personalData }) => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p className="about-description">
            {personalData.summary}
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <h3>9+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="highlight-item">
              <h3>20+</h3>
              <p>Technologies</p>
            </div>
            <div className="highlight-item">
              <h3>Full Stack</h3>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
