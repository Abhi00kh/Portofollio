import { useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Navbar from './Navbar';
import './App.css';
import About from './About';
import Project from './Project';
import Footer from './Footer';
import Skills from './Skills';
import './index.css';
import Certifications from './certification';
import Contact from './contact';


export default function App() {
  return (
    <div>
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
      <SpeedInsights />
    </div>
  );
}