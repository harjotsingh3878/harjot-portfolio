import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import ExperienceComponent from '../components/Experience';
import Projects from '../components/Projects';
import SkillsComponent from '../components/Skills';
import EducationComponent from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { portfolioData } from '../data';

export default function Home() {
  return (
    <>
      <Header />
      <Hero personalData={portfolioData.personal} />
      <About personalData={portfolioData.personal} />
      <ExperienceComponent experiences={portfolioData.experience} />
      <Projects projects={portfolioData.projects} />
      <SkillsComponent skills={portfolioData.skills} />
      <EducationComponent education={portfolioData.education} />
      <Contact personalData={portfolioData.personal} />
      <Footer />
    </>
  );
}
