import { useEffect, useState } from 'react';
import logo from '../logo.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out border-b ${
        isScrolled ? 'shadow-md border-gray-100' : 'border-transparent'
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 h-[100px] flex items-center justify-between">
        
        {/* Logo (Left) */}
        <div className="flex-shrink-0 w-48">
          <a href="#" className="block mt-2">
            <img src={logo} alt="AKR Logo" className="h-12 w-auto rounded-lg" />
          </a>
        </div>

        {/* Main Navigation (Center) */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-12 mt-1">
          <a href="#" className="text-xs font-semibold uppercase tracking-widest text-black hover:text-brand-copper transition-colors duration-300">Collections</a>
          <a href="#" className="text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-black transition-colors duration-300">Lifestyle</a>
          <a href="#" className="text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-black transition-colors duration-300">Boutique</a>
          <a href="#" className="text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-black transition-colors duration-300">Journal</a>
        </nav>

        {/* Right Icons (Refined thin strokes) */}
        <div className="flex items-center space-x-7 w-48 justify-end text-black">
          <button className="hover:text-brand-copper transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <button className="hover:text-brand-copper transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </button>
          <button className="hover:text-brand-copper transition-colors relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
           <button className="text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
