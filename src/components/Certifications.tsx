/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { certificationsData } from '../data';
import { Search, GraduationCap, Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('All');

  const providerGroups = useMemo(() => {
    const groups = ['All'];
    certificationsData.forEach(cert => {
      let label = 'Other';
      if (cert.provider.includes('Simplilearn')) {
        label = 'Simplilearn';
      } else if (cert.provider.includes('Infosys')) {
        label = 'Infosys Springboard';
      } else if (cert.provider.includes('Forage')) {
        label = 'Forage Simulations';
      } else if (cert.provider.includes('freeCodeCamp')) {
        label = 'freeCodeCamp';
      }

      if (!groups.includes(label)) {
        groups.push(label);
      }
    });
    return groups;
  }, []);

  const filteredCertifications = useMemo(() => {
    return certificationsData.filter(cert => {
      const matchesSearch = 
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.provider.toLowerCase().includes(searchQuery.toLowerCase());

      if (selectedProvider === 'All') return matchesSearch;
      if (selectedProvider === 'Simplilearn') {
        return cert.provider.includes('Simplilearn') && matchesSearch;
      }
      if (selectedProvider === 'Infosys Springboard') {
        return cert.provider.includes('Infosys') && matchesSearch;
      }
      if (selectedProvider === 'Forage Simulations') {
        return cert.provider.includes('Forage') && matchesSearch;
      }
      if (selectedProvider === 'freeCodeCamp') {
        return cert.provider.includes('freeCodeCamp') && matchesSearch;
      }
      
      // 'Other'
      const isKnown = 
        cert.provider.includes('Simplilearn') ||
        cert.provider.includes('Infosys') ||
        cert.provider.includes('Forage') ||
        cert.provider.includes('freeCodeCamp');
      return !isKnown && matchesSearch;
    });
  }, [selectedProvider, searchQuery]);

  return (
    <section id="certifications" className="py-24 md:py-32 bg-[#050505] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-4 self-start">
            <div className="mb-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold block">
                06 / Continuous Learning
              </span>
              <div className="h-[1px] w-8 bg-white/20 mt-3"></div>
            </div>
            <h3 className="font-sans font-light text-3xl md:text-4xl text-white leading-tight mb-6">
              Certifications
            </h3>
            <p className="font-serif italic font-light text-sm text-white/60 leading-relaxed mb-8">
              A record of completed credentials, bootcamp programs, and professional mock simulations demonstrating continuous upskilling.
            </p>

            {/* Quick search */}
            <div className="relative w-full mb-6">
              <span className="absolute left-3 top-3.5 text-white/40">
                <Search size={14} />
              </span>
              <input
                type="text"
                placeholder="SEARCH CREDENTIALS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0c0c0c] border border-white/10 focus:border-primary px-10 py-3 text-xs text-white outline-none rounded-none placeholder-white/30 font-mono tracking-wider"
                id="certifications-search"
              />
            </div>

            {/* Provider Filter Chips Column */}
            <div className="flex flex-wrap lg:flex-col gap-1.5" id="certifications-provider-filters">
              {providerGroups.map((group) => (
                <button
                  key={group}
                  onClick={() => setSelectedProvider(group)}
                  className={`px-3 py-2 text-left text-[10px] font-mono tracking-[0.15em] uppercase rounded-none border transition-all duration-250 ${
                    selectedProvider === group
                      ? 'bg-primary text-white border-primary'
                      : 'bg-transparent text-white/60 border-white/10 hover:border-white hover:text-white'
                  }`}
                  id={`cert-group-${group.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: List of items with hover shifts */}
          <div className="lg:col-span-8">
            <div className="border border-white/10 bg-[#080808] rounded-none overflow-hidden" id="certifications-list">
              <AnimatePresence mode="popLayout">
                {filteredCertifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col sm:flex-row justify-between sm:items-center p-5 border-b border-white/5 last:border-b-0 group hover:bg-[#0c0c0c] transition-colors duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-[#f27d26]/70 shrink-0 mt-0.5 group-hover:text-primary transition-colors">
                        <GraduationCap size={16} />
                      </span>
                      <span className="font-sans font-normal text-sm md:text-base text-white tracking-tight leading-snug transition-colors">
                        {cert.title}
                      </span>
                    </div>
                    
                    <span className="font-mono text-[9px] sm:text-[10px] text-white/40 uppercase font-medium tracking-[0.1em] self-start sm:self-center bg-[#0c0c0c] sm:bg-transparent px-2 py-0.5 sm:p-0 rounded-none mt-2 sm:mt-0">
                      {cert.provider}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredCertifications.length === 0 && (
                <div className="text-center py-12 px-6" id="certifications-empty-state">
                  <span className="text-white/40 uppercase tracking-[0.15em] font-mono text-xs block mb-1">No matching credentials</span>
                  <p className="text-white/60 font-sans text-sm">Please refine your search or filter tags.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
