/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Link as LinkIcon, Code2, Download, ExternalLink } from 'lucide-react';

interface HeroProps {
  onDownloadResumeClick: () => void;
}

export default function Hero({ onDownloadResumeClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section 
      id="hero" 
      className="relative dot-grid py-24 md:py-32 border-b border-white/10 bg-[#050505] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Info Bio Block */}
        <motion.div 
          className="md:col-span-7 flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-[10px] font-mono font-medium tracking-[0.15em] uppercase rounded-none mb-8"
          >
            <span className="w-2 h-2 bg-primary animate-pulse"></span>
            ACTIVE ENGINEERING PORTFOLIO — 2026
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-sans font-light text-5xl md:text-7xl lg:text-[80px] text-white leading-[0.9] tracking-tighter uppercase mb-8"
            id="hero-name"
          >
            SHRI HARINI<br/>
            <span className="text-primary font-normal">SELVAKUMAR</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="font-serif italic font-light text-xl md:text-2xl text-white/90 leading-relaxed tracking-tight mb-6"
            id="hero-tagline"
          >
            AI &amp; Data Science Graduate | Python Developer | AI-ML Engineer | Data scientist| Software Development
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="font-sans font-light text-sm md:text-base text-white/60 max-w-2xl leading-relaxed mb-10"
            id="hero-description"
          >
            I build data-driven applications and machine learning systems that solve real problems.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center mb-10"
            id="hero-primary-actions"
          >
            <a 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-opacity-90 text-white px-8 py-4 font-sans text-[11px] uppercase tracking-[0.3em] font-medium rounded-none border border-primary transition-all flex items-center gap-2"
              id="hero-view-projects"
            >
              View Projects
            </a>
            <button 
              onClick={onDownloadResumeClick}
              className="border border-white/20 text-white hover:bg-white hover:text-black hover:border-white px-8 py-4 font-sans text-[11px] uppercase tracking-[0.3em] font-medium rounded-none transition-all flex items-center gap-2"
              id="hero-download-resume"
            >
              <Download size={14} /> Download Resume
            </button>
          </motion.div>

          {/* Social Profiles and contact shortcuts */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-6 items-center border-t border-white/10 pt-8 w-full"
            id="hero-socials"
          >
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:text-primary font-sans text-[10px] uppercase tracking-[0.15em] font-medium flex items-center gap-2 transition-colors duration-200"
              id="hero-linkedin-link"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Shrihariniselvakumar" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:text-primary font-sans text-[10px] uppercase tracking-[0.15em] font-medium flex items-center gap-2 transition-colors duration-200"
              id="hero-github-link"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:shrihariniselvakumar@gmail.com" 
              className="text-white hover:text-primary font-sans text-[10px] uppercase tracking-[0.15em] font-medium flex items-center gap-2 transition-colors duration-200"
              id="hero-email-link"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Avatar Image Block */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-80 h-80 border border-white/15 p-2 bg-[#0c0c0c] transition-glow hover:border-primary"
            id="profile-img-container"
          >
            <img 
              alt="Shri Harini Selvakumar" 
              className="w-full h-full object-cover grayscale brightness-90 contrast-[1.05] hover:grayscale-0 hover:brightness-100 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpvcTiu1__zn64pnz62kZlfUTR1RXwBQBYdGn5Ur8ZNdp2PilYnPmtWpVOVFQ5th6J-k2Csp4slUpxDN1qUJwrv5NuQe-PrtMsg1X646qtyCRmvvOshBYS-RaSVPif7g8K8igTL66RA_Mjhv-Fo812m-mmJaybM7wR9wbUPYMHBsgk65AyCMawNkPUGAxNrVHA7id_YMiEbsZWgpIiS0lUg39-1uYNOIKTP3c5WpBocAV2Q5wAHwmFaNgzRtj0MFe0guwy6qe62AY"
              referrerPolicy="no-referrer"
              id="profile-img"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
