import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Resume from './components/Resume'; 

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main>
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Project />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'resume' && <Resume />} 
      </main>
      <Footer />
    </div>
  );
}
