import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Header />
      <Hero personalData={portfolioData.personal} />
      <About personalData={portfolioData.personal} />
      <Experience experiences={portfolioData.experience} />
      <Skills skills={portfolioData.skills} />
      <Education education={portfolioData.education} />
      <Contact personalData={portfolioData.personal} />
      <Footer />
    </Router>
  );
}

export default App;
