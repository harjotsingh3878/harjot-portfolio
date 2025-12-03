import React from 'react';
import './Skills.css';

const Skills = ({ skills }) => {
  const skillCategories = [
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'Databases', items: skills.databases },
    { title: 'Testing', items: skills.testing },
    { title: 'Cloud & DevOps', items: skills.cloudDevOps },
    { title: 'Tools & Platforms', items: skills.tools },
    { title: 'Methodologies', items: skills.methodologies }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.items.map((skill, skillIdx) => (
                  <span key={skillIdx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
