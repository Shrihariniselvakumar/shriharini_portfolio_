/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { Project } from '../types';
import { Github, Star, Award, ArrowUpRight, Search, SlidersHorizontal, Info } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const cats = ['All'];
    projectsData.forEach(p => {
      // Collect base categorizations
      if (p.isSpotlight) {
        if (!cats.includes('Spotlight / Award-winning')) {
          cats.push('Spotlight / Award-winning');
        }
      } else {
        if (!cats.includes(p.category) && p.category !== 'Project Spotlight Award') {
          cats.push(p.category);
        }
      }
    });
    // Add custom ones just in case or keep clean
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (selectedCategory === 'All') return matchesSearch;
      if (selectedCategory === 'Spotlight / Award-winning') {
        return (project.isSpotlight || project.category.includes('Spotlight')) && matchesSearch;
      }
      return project.category === selectedCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#050505] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section title left rail */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="mb-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold block">
                02 / Selected Projects
              </span>
              <div className="h-[1px] w-8 bg-white/20 mt-3"></div>
            </div>
            <h3 className="font-sans font-light text-3xl md:text-4xl text-white leading-tight">
              Innovative solutions through data and code.
            </h3>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <span className="absolute left-3 top-3.5 text-white/40">
              <Search size={14} />
            </span>
            <input
              type="text"
              placeholder="SEARCH PROJECTS OR SKILLS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0c0c0c] border border-white/10 focus:border-primary px-10 py-3 text-xs text-white outline-none rounded-none placeholder-white/30 font-mono tracking-wider"
              id="projects-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3.5 text-[10px] tracking-widest uppercase font-medium text-white/50 hover:text-primary"
                id="clear-projects-search"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips/Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar" id="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] rounded-none border transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-primary text-white border-primary animate-pulse-subtle'
                  : 'bg-transparent text-white/60 border-white/10 hover:border-white hover:text-white'
              }`}
              id={`filter-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          id="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              // Custom spotlight element
              if (project.isSpotlight) {
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="border border-primary bg-[#0d0d0d] text-white p-8 md:col-span-2 flex flex-col md:flex-row justify-between relative overflow-hidden group rounded-none"
                    id={`project-card-${project.id}`}
                  >
                    {/* Glowing Accent lines inside */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rotate-45 transform translate-x-12 -translate-y-12"></div>
                    
                    <div className="md:w-2/3 z-10 flex flex-col justify-between">
                      <div>
                        <div className="mb-4">
                          <span className="bg-[#1a1a1a] text-primary border border-primary/20 px-3 py-1 font-mono text-[9px] uppercase font-bold tracking-[0.15em] inline-flex items-center gap-1.5 rounded-none">
                            <Award size={10} className="text-primary animate-pulse" />
                            {project.year} — SPOTLIGHT AWARD
                          </span>
                        </div>
                        <h4 className="font-serif italic font-light text-3xl md:text-4xl mb-4 text-white leading-tight">
                          {project.title}
                        </h4>
                        <p className="font-sans font-light text-sm text-white/70 leading-relaxed mb-6 max-w-xl">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6 md:mb-0">
                        {project.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[9px] tracking-[0.1em] uppercase rounded-none text-white/75"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:w-1/4 flex items-end justify-end z-10">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="border border-white/15 bg-white/5 px-5 py-3 text-[10px] tracking-[0.2em] text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-sans uppercase font-medium flex items-center gap-2 rounded-none"
                        id={`project-github-${project.id}`}
                      >
                        <Github size={14} /> <span>GitHub Repo</span> <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </motion.div>
                );
              }

              // Standard Cards with Level 1 default and Level 2 hover effect, with hard 90 degree sharp corners
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  className="border border-white/10 bg-[#080808] p-6 flex flex-col justify-between group hover:border-primary transition-all duration-300 rounded-none relative"
                  id={`project-card-${project.id}`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-mono text-[9px] text-white/40 uppercase tracking-[0.15em] font-medium">
                        {project.year} — {project.category}
                      </span>
                      <span className="text-white/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>

                    <h4 className="font-sans font-normal text-lg md:text-xl text-white mb-3 tracking-tight group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h4>

                    <p className="font-sans font-light text-xs md:text-sm text-white/60 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="border border-white/5 bg-[#0d0d0d] px-2 py-0.5 font-mono text-[9px] tracking-[0.1em] uppercase rounded-none text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="font-sans text-[10px] uppercase tracking-[0.15em] font-semibold flex items-center gap-1.5 text-white/60 hover:text-primary transition-colors duration-200"
                      id={`project-github-${project.id}`}
                    >
                      <Github size={12} /> <span>GitHub Repo</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="md:col-span-2 text-center py-12 border border-dashed border-white/10 bg-[#080808]/50 rounded-none">
              <span className="text-white/40 uppercase tracking-[0.15em] font-mono text-xs block mb-2">No matching projects found</span>
              <p className="text-white/60 font-sans text-sm">Try adjusting your filters or search query.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
