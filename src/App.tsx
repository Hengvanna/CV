import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { personalInfo, skills, experiences, educations, projects } from './data/resume-data';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(savedDarkMode === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300">
      <div className="relative">
        <div className="absolute inset-0 bg-emerald-500 skew-y-6 -translate-y-1/2 -z-10"></div>
        <Header personalInfo={personalInfo} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero personalInfo={personalInfo} />
      </div>
      <About personalInfo={personalInfo} />
      <Skills skills={skills} />
      <Experience experiences={experiences} />
      <Education educations={educations} />
      <Projects projects={projects} />
      <Contact personalInfo={personalInfo} />
      <Footer personalInfo={personalInfo} />
    </div>
  );
};

export default App;