import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="section section-dark experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`experience-item ${exp.current ? 'current' : ''}`}>
              <div className="timeline-marker"></div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="job-title">{exp.position}</h3>
                    <div className="company-info">
                      <span className="company-name">
                        <FaBriefcase className="icon" /> {exp.company}
                      </span>
                      <span className="location">
                        <FaMapMarkerAlt className="icon" /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="date-badge">
                    <FaCalendar className="icon" />
                    <span>{exp.startDate} - {exp.endDate}</span>
                    {exp.current && <span className="current-badge">Current</span>}
                  </div>
                </div>

                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>

                <div className="technologies">
                  <p className="tech-label">Technologies:</p>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
