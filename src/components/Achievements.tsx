/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { awardsData } from '../data';
import { Award, Trophy, CodeXml, GraduationCap } from 'lucide-react';

export default function Achievements() {
  const getIcon = (iconName: string, className: string = 'text-primary') => {
    switch (iconName) {
      case 'Award':
        return <Award size={28} className={className} />;
      case 'Trophy':
        return <Trophy size={28} className={className} />;
      case 'CodeXml':
        return <CodeXml size={28} className={className} />;
      case 'GraduationCap':
        return <GraduationCap size={28} className={className} />;
      default:
        return <Award size={28} className={className} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="achievements" className="py-24 md:py-32 bg-[#080808] dot-grid border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Title */}
        <div className="mb-16">
          <div className="mb-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold block">
              05 / Recognition
            </span>
            <div className="h-[1px] w-8 bg-white/20 mt-3"></div>
          </div>
          <h3 className="font-sans font-light text-3xl md:text-4xl text-white leading-tight">
            Awards &amp; Milestones
          </h3>
        </div>

        {/* 2x2 Grid with hover expansions adhering strictly to 0px sharp corner geometry */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          id="achievements-bento-grid"
        >
          {awardsData.map((award) => (
            <motion.div
              key={award.id}
              variants={cardVariants}
              className="border border-white/10 p-6 bg-[#0a0a0a] flex gap-4 md:gap-6 items-start rounded-none transition-all duration-300 hover:border-primary group"
              id={`achievement-card-${award.id}`}
            >
              {/* Icon slot with transition effect */}
              <div className="p-3 bg-[#0c0c0c] border border-white/10 rounded-none group-hover:border-primary transition-colors">
                {getIcon(award.iconName, 'text-primary scale-95 group-hover:scale-105 transition-transform duration-350')}
              </div>

              <div className="flex-1">
                <h4 className="font-sans font-normal text-lg md:text-xl text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                  {award.title}
                </h4>
                <p className="font-sans font-light text-xs md:text-sm text-white/60 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
