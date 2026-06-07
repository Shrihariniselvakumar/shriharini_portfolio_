/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary-container selection:text-primary leading-normal relative">
      {/* Top Navbar */}
      <Header />

      {/* Main Single Page Layout contents */}
      <main>
        {/* Landing/Hero Section */}
        <Hero onDownloadResumeClick={() => setIsResumeOpen(true)} />

        {/* 01 / About Me Section */}
        <About />

        {/* 02 / Selected Projects Showcase & Filters */}
        <Projects />

        {/* 03 / Technical Toolkit Categorized Bento Grid */}
        <Skills />

        {/* 04 / Journey Professional Timeline */}
        <Experience />

        {/* 05 / Recognition Awards & Milestones */}
        <Achievements />

        {/* 06 / Continuous Learning Credentials & Bootcamps */}
        <Certifications />

        {/* 07 / Connect Interactive Secure Submission Form */}
        <Contact />
      </main>

      {/* Footer copyright */}
      <Footer />

      {/* Print-Ready Resume / CV Viewer modal overlay */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal 
            isOpen={isResumeOpen} 
            onClose={() => setIsResumeOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
