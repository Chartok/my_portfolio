import './Global.scss'
import React, { useState } from 'react';
import Header from './components/Header';
import Project from './pages/Projects';
import About from './pages/About';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

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
      </main>
      <Footer />
    </div>
  );
}
