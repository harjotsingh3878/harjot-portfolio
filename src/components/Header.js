import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <span className="logo-text">Harjot Singh</span>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="#experience" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link to="#skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="#education" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
