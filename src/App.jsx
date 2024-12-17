import { useState } from 'react';
import Navbar from './Navbar';
import './App.css';
import About from './About';
import Project from './Project';
import Footer from './Footer';
import Skills from './Skills';
import './index.css';
import Certifications from './certification';
import Contact from './contact';

function App() {
  return (
    <>
      <Navbar />
      <section id="/">
        {/* Home content */}
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="resume">
        {/* Resume content */}
      </section>
      <section>
        <Footer />
      </section>
      <section hidden id="contact">
        {/* Contact content */}
      
        <Contact/>

      </section>
    </>
  );
}

export default App;