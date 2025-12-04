'use client';

import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {currentYear} Harjot Singh. All rights reserved.</p>
        <p>Built with React | Designed with ❤️</p>
        <button className="back-to-top" onClick={scrollToTop} title="Back to top" aria-label="Back to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
