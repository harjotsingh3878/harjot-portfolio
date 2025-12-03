import React from 'react';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education = ({ education }) => {
  return (
    <section id="education" className="section section-dark education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <h3>{edu.program}</h3>
                <p className="school-name">
                  <strong>{edu.school}</strong>
                </p>
                <div className="education-meta">
                  <span>
                    <FaMapMarkerAlt className="icon" /> {edu.location}
                  </span>
                  <span>
                    <FaCalendar className="icon" /> {edu.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
