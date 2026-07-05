import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Magnetic } from '../ui/Magnetic';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const copyNpm = () => {
    navigator.clipboard.writeText('npm create akr');
    setIsOpen(false);
  };

  const downloadSkill = () => {
    window.open('https://github.com/ajaykumarreddy-k/Akr-Node/tree/main/Skill-Perfection', '_blank');
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 md:top-8 md:right-8 z-50 flex items-center bg-[#111111] shadow-2xl rounded-full p-1 md:p-1.5 border border-white/10"
    >
      {/* Active Highlighted Section (Dropdown) */}
      <div className="relative">
        <Magnetic>
          <button
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
            className="flex items-center gap-1.5 md:gap-2 bg-[#037cf9] text-white px-4 py-2 md:px-5 md:py-2.5 font-bold text-xs md:text-sm cursor-pointer hover:bg-blue-600 transition-colors rounded-full"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" /><path d="M12 3a9 9 0 0 1 9-9H3a9 9 0 0 1 9-9Z" />
            </svg>
            <span>Install</span>
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </Magnetic>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full mt-2 left-0 w-48 bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col z-50"
            >
              <button onClick={copyNpm} className="px-4 py-3 text-left text-sm font-semibold text-white hover:bg-white/10 transition-colors flex items-center gap-2 w-full">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                Copy npm create
              </button>
              <div className="h-[1px] bg-white/5 w-full" />
              <button onClick={downloadSkill} className="px-4 py-3 text-left text-sm font-semibold text-[#037cf9] hover:bg-[#037cf9]/10 transition-colors flex items-center gap-2 w-full">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                Download Skill
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Other Links */}
      <div className="flex items-center gap-3 px-3 md:gap-6 md:px-8 text-white/70 text-xs md:text-sm font-medium">
        <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} className="hover:text-white transition-colors">Home</a>
        <a href="#docs" className="hover:text-white transition-colors">Docs</a>
        <a href="#features" className="hover:text-white transition-colors hidden sm:block">Features</a>
      </div>
    </motion.nav>
  );
}
