/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright notice */}
        <div className="font-sans text-[10px] font-medium text-white/50 uppercase tracking-[0.2em]" id="footer-copyright">
          © {currentYear} SHRI HARINI SELVAKUMAR. ALL RIGHTS RESERVED.
        </div>

        {/* Brand identity anchor */}
        <div className="flex gap-6 text-white/30 font-mono text-[9px] uppercase font-semibold tracking-[0.15em]" id="footer-branding">
          <span>PORTFOLIO</span>
          <span>•</span>
          <span>EDITORIAL DESIGN MATRIX</span>
        </div>
      </div>
    </footer>
  );
}
