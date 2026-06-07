/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll Spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'achievements', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial trigger
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full bg-surface border-b border-white/10 sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="font-sans font-bold text-lg text-primary uppercase tracking-[0.1em] hover:opacity-80 transition-opacity"
          id="navbar-brand"
        >
          SHRI HARINI SELVAKUMAR
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-8 items-center" id="navbar-links">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={`font-sans text-[11px] uppercase tracking-[0.2em] font-medium transition-all hover:opacity-100 ${
                  isActive 
                    ? 'text-primary opacity-100 font-semibold' 
                    : 'text-white/60 hover:text-white'
                }`}
                id={`nav-${item.id}`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary focus:outline-none"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-white/10 px-8 py-6 flex flex-col gap-4 animate-fadeIn" id="mobile-nav-menu">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={`font-sans text-xs uppercase tracking-[0.2em] font-medium py-2 transition-all ${
                  isActive ? 'text-primary' : 'text-white/60'
                }`}
                id={`mobile-nav-${item.id}`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
