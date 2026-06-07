/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { X, Printer, Copy, CheckCircle, FileText } from 'lucide-react';
import { experiencesData, projectsData, certificationsData, statsData } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const markdownResume = `
# SHRI HARINI SELVAKUMAR
**AI & Data Science Graduate | Python Developer | AI-ML Engineer | Data Scientist**

- Phone: +91 6383873213
- Email: shrihariniselvakumar@gmail.com
- GitHub: https://github.com/Shrihariniselvakumar
- Location: Tamil Nadu, India
- GPA: 8.06

---

## PROFESSIONAL SUMMARY
AI & Data Science graduate with 3+ internships and 7 end-to-end projects spanning machine learning, REST APIs, and real-time dashboards. Proficient in Python, FastAPI, and Scikit-learn, with hands-on experience deploying ML models and building data-driven applications. Eager to contribute to production-ready AI or backend systems in a collaborative engineering environment.

---

## WORK EXPERIENCE
${experiencesData.map(exp => `
### ${exp.role} | ${exp.company}
*Period: ${exp.period}*
- ${exp.description}
`).join('')}

---

## PROJECTS
${projectsData.map(proj => `
### ${proj.title} (${proj.category})
- Description: ${proj.description}
- Technologies: ${proj.tags.join(', ')}
- Source: ${proj.github}
`).join('')}

---

## CERTIFICATIONS
${certificationsData.map(cert => `- ${cert.title} — ${cert.provider}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(markdownResume).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 overflow-y-auto print:p-0 print:bg-white print:relative print:z-0">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#080808] border border-white/15 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-none shadow-2xl overflow-hidden print:border-none print:shadow-none print:max-h-none print:w-full"
        id="resume-modal-container"
      >
        {/* Header - hide on print */}
        <div className="flex justify-between items-center px-6 py-4 bg-[#0a0a0a] border-b border-white/10 text-white rounded-none print:hidden">
          <span className="font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-white/50 flex items-center gap-2">
            <FileText size={14} className="text-primary animate-pulse" /> PRINT-READY CV ARCHIVE
          </span>
          
          <div className="flex gap-3 items-center">
            <button 
              onClick={handleCopyMarkdown}
              className="text-white hover:text-primary font-sans text-[9px] uppercase tracking-[0.15em] font-semibold flex items-center gap-1.5 transition-all border border-white/10 px-3 py-1.5 bg-white/5 rounded-none cursor-pointer"
              id="copy-markdown-resume"
            >
              {copied ? <CheckCircle size={12} className="text-primary" /> : <Copy size={12} />}
              <span>{copied ? 'Copied!' : 'Copy Markdown'}</span>
            </button>
            
            <button 
              onClick={handlePrint}
              className="text-white hover:text-primary font-sans text-[9px] uppercase tracking-[0.15em] font-semibold flex items-center gap-1.5 transition-all border border-white/10 px-3 py-1.5 bg-white/5 rounded-none cursor-pointer"
              id="trigger-print-resume"
            >
              <Printer size={12} /> <span>Print CV</span>
            </button>

            <button 
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors p-1 cursor-pointer"
              aria-label="Close modal"
              id="close-resume-modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Outer Scroll Area - hide scrollbar on print */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-white text-zinc-900 print:overflow-visible print:p-0">
          
          {/* Printable Sheet */}
          <div className="max-w-3xl mx-auto space-y-8 print:space-y-6" id="printable-resume-sheet">
            
            {/* Main Header */}
            <div className="text-center md:text-left border-b border-zinc-200 pb-6">
              <h2 className="font-sans font-light text-3xl md:text-4xl text-zinc-900 leading-tight uppercase tracking-tight">
                Shri Harini <span className="text-[#f27d26] font-bold">Selvakumar</span>
              </h2>
              <p className="font-sans text-xs uppercase tracking-widest font-semibold text-zinc-500 mt-2">
                AI &amp; Data Science Graduate | Software Engineer | AI-ML Developer
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mt-4 text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                <span>Phone: +91 6383873213</span>
                <span>Email: shrihariniselvakumar@gmail.com</span>
                <span>GitHub: github.com/Shrihariniselvakumar</span>
                <span>Location: Tamil Nadu, India</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h3 className="font-sans font-bold text-[10px] uppercase tracking-[0.15em] text-[#f27d26] border-b border-zinc-150 pb-1.5">
                Professional Profile
              </h3>
              <p className="font-sans text-xs md:text-sm text-zinc-700 leading-relaxed font-light">
                AI &amp; Data Science graduate with 3+ internships and 7 end-to-end projects spanning machine learning, REST APIs, and real-time dashboards. Proficient in Python, FastAPI, and Scikit-learn, with hands-on experience deploying ML models and building data-driven applications. Eager to contribute to production-ready AI or backend systems in a collaborative engineering environment. Cumulative GPA of 8.06.
              </p>
            </div>

            {/* Practical Work Experience */}
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-[10px] uppercase tracking-[0.15em] text-[#f27d26] border-b border-zinc-150 pb-1.5">
                Professional Experience
              </h3>
              
              <div className="space-y-5">
                {experiencesData.map(exp => (
                  <div key={exp.id} className="text-xs md:text-sm">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start font-semibold text-zinc-800">
                      <span>{exp.role} &mdash; {exp.company}</span>
                      <span className="font-mono text-[10px] font-medium text-zinc-400 mt-0.5 uppercase tracking-wider">{exp.period}</span>
                    </div>
                    <p className="font-sans text-xs text-zinc-600 leading-relaxed mt-2 font-light">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Projects Section */}
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-[10px] uppercase tracking-[0.15em] text-[#f27d26] border-b border-zinc-150 pb-1.5">
                Key Technical Projects
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectsData.map(proj => (
                  <div key={proj.id} className="text-xs border border-zinc-100 p-4 bg-zinc-50/50">
                    <h4 className="font-bold text-zinc-800 uppercase tracking-tight mb-1">{proj.title}</h4>
                    <span className="font-mono text-[9px] bg-zinc-100 px-1.5 py-0.5 rounded-none font-semibold text-[#f27d26] uppercase inline-block mb-3.5">
                      {proj.category}
                    </span>
                    <p className="text-zinc-600 leading-relaxed font-light">{proj.description}</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {proj.tags.map(t => (
                        <span key={t} className="text-[9px] text-zinc-400 font-mono font-medium lowercase">#{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualifications & continuous upskilling */}
            <div className="space-y-3">
              <h3 className="font-sans font-bold text-[10px] uppercase tracking-[0.15em] text-[#f27d26] border-b border-zinc-150 pb-1.5">
                Certifications &amp; Upskilling
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-disc pl-4 text-xs text-zinc-700">
                {certificationsData.slice(0, 8).map(cert => (
                  <li key={cert.id} className="leading-snug font-light">
                    <span className="font-semibold text-zinc-800">{cert.title}</span> &mdash; <span className="text-zinc-500 text-[10px] uppercase font-mono">{cert.provider}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Actions bar at bottom - hide on print */}
        <div className="px-6 py-4 bg-[#0a0a0a] border-t border-white/10 flex justify-end gap-3 rounded-none print:hidden">
          <button 
            onClick={onClose}
            className="border border-white/10 px-6 py-2.5 font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-none cursor-pointer"
            id="close-resume-bottom"
          >
            Close Viewer
          </button>
        </div>

      </motion.div>
    </div>
  );
}
