/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { experiencesData } from '../data';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export default function Experience() {
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
    hidden: { opacity: 0, x: -15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#050505] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section title */}
        <div className="mb-16">
          <div className="mb-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold block">
              04 / Journey
            </span>
            <div className="h-[1px] w-8 bg-white/20 mt-3"></div>
          </div>
          <h3 className="font-sans font-light text-3xl md:text-4xl text-white leading-tight">
            Professional Experience
          </h3>
        </div>

        {/* Timeline Line Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative border-l border-white/10 ml-4 pl-8 md:pl-12"
          id="experience-timeline"
        >
          {experiencesData.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              variants={itemVariants}
              className="mb-12 last:mb-0 relative"
              id={`timeline-item-${exp.id}`}
            >
              {/* Timeline Bullet Anchor - Sharp 0px styled box aligned perfectly */}
              <div className="absolute -left-[36.5px] top-2.5 w-[9px] h-[9px] bg-primary border border-[#050505]"></div>

              <div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[9px] text-white/40 font-semibold uppercase tracking-[0.15em] bg-[#0c0c0c] px-3 py-1 rounded-none border border-white/10 mb-3">
                  <Calendar size={10} className="text-primary" />
                  {exp.period}
                </span>
                
                <h4 className="font-sans font-light text-xl md:text-2xl text-white tracking-tight mt-1">
                  {exp.company}
                </h4>
                
                <p className="font-serif italic font-light text-sm text-primary tracking-wide mt-1 mb-4">
                  {exp.role}
                </p>

                <p className="font-sans font-light text-xs md:text-sm text-white/60 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
