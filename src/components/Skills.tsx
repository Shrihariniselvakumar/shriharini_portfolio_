/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { skillCategoriesData } from '../data';
import { Terminal, Layers, Database, BrainCircuit, Wrench, Search, CheckCircle } from 'lucide-react';

export default function Skills() {
  const [skillSearch, setSkillSearch] = useState('');

  // Icon selector maps standard string names to Lucide icons
  const getIcon = (iconName: string, className: string = 'text-primary') => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal size={20} className={className} />;
      case 'Layers':
        return <Layers size={20} className={className} />;
      case 'Database':
        return <Database size={20} className={className} />;
      case 'BrainCircuit':
        return <BrainCircuit size={20} className={className} />;
      case 'Wrench':
        return <Wrench size={20} className={className} />;
      default:
        return <Terminal size={20} className={className} />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#080808] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header section with inline search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <div className="mb-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold block">
                03 / Expertise
              </span>
              <div className="h-[1px] w-8 bg-white/20 mt-3"></div>
            </div>
            <h3 className="font-sans font-light text-3xl md:text-4xl text-white leading-tight">
              Technical Toolkit
            </h3>
          </div>

          {/* Quick skills locator search */}
          <div className="relative w-full md:w-[320px]">
            <span className="absolute left-3 top-3.5 text-white/40">
              <Search size={14} />
            </span>
            <input
              type="text"
              placeholder="FILTER SPECIFIC SKILLS..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="w-full bg-[#0c0c0c] border border-white/10 focus:border-primary px-10 py-3 text-xs text-white outline-none rounded-none placeholder-white/30 font-mono tracking-wider"
              id="skills-filter-input"
            />
          </div>
        </div>

        {/* Bento/Grid Layout for Categories with sharp corners */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6" id="skills-categories-grid">
          {skillCategoriesData.map((category, index) => {
            // Determine if any skills in this category match search filter
            const filteredSkills = category.skills.filter(s => 
              s.toLowerCase().includes(skillSearch.toLowerCase())
            );

            // Hide category fully if search is active and no subskill matches
            if (skillSearch && filteredSkills.length === 0) return null;

            // Make "Tools & Platforms" or other widgets span columns dynamically for structural rhythm
            const spanClass = index === skillCategoriesData.length - 1 
              ? 'md:col-span-12 lg:col-span-8' 
              : index === 0 
                ? 'md:col-span-6 lg:col-span-4' 
                : 'md:col-span-6 lg:col-span-4';

            return (
              <div
                key={category.name}
                className={`border border-white/10 p-6 bg-[#0a0a0a] transition-all duration-300 hover:border-primary group rounded-none flex flex-col justify-between ${spanClass}`}
                id={`skill-cat-card-${category.name.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <div>
                  <h4 className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-white mb-4 flex items-center gap-2">
                    {getIcon(category.iconName, 'text-primary group-hover:scale-110 transition-transform duration-300')}
                    <span>{category.name}</span>
                  </h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const isHighlighted = skillSearch && skill.toLowerCase().includes(skillSearch.toLowerCase());
                      return (
                        <span
                          key={skill}
                          className={`px-3 py-1.5 font-mono text-[10px] tracking-wide font-medium rounded-none border transition-all ${
                            isHighlighted
                              ? 'bg-primary text-white border-primary font-semibold'
                              : 'bg-[#0d0d0d] text-white/70 border-white/10 hover:border-white hover:text-white'
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Counter label inside card */}
                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-mono font-medium text-white/35">
                  <span>METRIC COUNT</span>
                  <span>{category.skills.length} ELEMENTS</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Highlight state */}
        {skillSearch && (
          <div className="mt-8 text-center text-[10px] tracking-[0.15em] font-mono text-white/40 uppercase" id="skills-filter-results-label">
            Highlighting skills matching "{skillSearch}"
          </div>
        )}
      </div>
    </section>
  );
}
