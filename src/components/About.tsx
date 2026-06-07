/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { statsData } from '../data';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[#080808] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Section title left rail */}
          <div className="md:col-span-4 block">
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold block">
                01 / About Me
              </span>
              <div className="h-[1px] w-8 bg-white/20 mt-3"></div>
            </div>
            <h3 className="font-sans font-light text-3xl md:text-4xl text-white leading-snug tracking-tight">
              Passionate about turning data into actionable insights.
            </h3>
          </div>

          {/* About description and stats grid right Rail */}
          <div className="md:col-span-8">
            <p className="font-serif italic font-light text-lg md:text-xl text-white/75 leading-relaxed mb-12">
              AI &amp; Data Science graduate with 3+ internships and 7 end-to-end projects spanning machine learning, REST APIs, and real-time dashboards. Proficient in Python, FastAPI, and Scikit-learn, with hands-on experience deploying ML models and building data-driven applications. Eager to contribute to production-ready AI or backend systems in a collaborative engineering environment.
            </p>

            {/* Structured Stats Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-3 gap-6 md:gap-8 border-t border-white/10 pt-10"
              id="about-stats-grid"
            >
              <motion.div variants={itemVariants} className="flex flex-col">
                <div className="font-sans font-light text-5xl md:text-6xl text-white leading-none tracking-tighter mb-3">
                  {statsData.projects}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
                  PROJECTS
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col">
                <div className="font-sans font-light text-5xl md:text-6xl text-white leading-none tracking-tighter mb-3">
                  {statsData.internships}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
                  INTERNSHIPS
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col">
                <div className="font-sans font-light text-5xl md:text-6xl text-primary leading-none tracking-tighter mb-3">
                  {statsData.gpa}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
                  GPA STATUS
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
