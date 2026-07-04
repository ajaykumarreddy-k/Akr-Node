import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 
        The nav-tab class provides the inverted corner curves.
        It sits at the top center.
      */}
      <nav className="nav-tab fixed top-0 left-1/2 -translate-x-1/2 w-[98%] max-w-[1400px] bg-zinc-900 z-50 rounded-b-[1.5rem] px-8 py-5 flex justify-between items-center">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="AKR Logo" className="w-8 h-auto object-contain" />
          <span className="font-semibold text-white tracking-tight text-[15px]">AKR Base Template</span>
        </div>

        {/* Middle: Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-400 hover:text-white transition-colors text-[15px] font-medium">Features</a>
          <a href="#faq" className="text-gray-400 hover:text-white transition-colors text-[15px] font-medium">FAQ</a>
          <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-[15px] font-medium">Pricing</a>
        </div>

        {/* Right: Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex bg-white text-black hover:bg-gray-100 transition-colors px-4 py-2.5 rounded-[0.8rem] text-[14px] font-semibold items-center gap-2">
            Download
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-gray-300 focus:outline-none transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed inset-0 z-40 bg-zinc-900 text-white overflow-hidden flex flex-col justify-center px-6"
          >
            <div className="flex flex-col space-y-8 text-3xl font-medium tracking-tight text-center">
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-400 transition-colors">Features</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-400 transition-colors">FAQ</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-gray-400 transition-colors">Pricing</a>
              <div className="mt-8 pt-8 border-t border-white/10 flex justify-center">
                <button className="flex bg-white text-black hover:bg-gray-100 transition-colors px-6 py-4 rounded-xl text-lg font-semibold items-center gap-3">
                  Download
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
