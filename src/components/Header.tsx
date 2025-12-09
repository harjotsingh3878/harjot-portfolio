'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container header-content">
        <button className="logo" onClick={() => scrollToSection('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <span className="logo-text">Harjot Singh</span>
        </button>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit' }}>Home</button>
          <button onClick={() => scrollToSection('about')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit' }}>About</button>
          <button onClick={() => scrollToSection('experience')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit' }}>Experience</button>
          <button onClick={() => scrollToSection('projects')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit' }}>Projects</button>
          <button onClick={() => scrollToSection('skills')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit' }}>Skills</button>
          <button onClick={() => scrollToSection('education')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit' }}>Education</button>
          <button onClick={() => scrollToSection('contact')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit' }}>Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
