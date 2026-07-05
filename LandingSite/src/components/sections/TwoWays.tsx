import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function TwoWays() {
  const [copied, setCopied] = useState(false);
  const [pkgManager, setPkgManager] = useState<'npm' | 'bun'>('npm');
  
  const getCommand = () => pkgManager === 'npm' ? 'npm create akr' : 'bun create akr';
  
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header reveal
    gsap.fromTo([headlineRef.current, textRef.current], 
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }
    );
  }, { scope: sectionRef });

  const handleCopy = () => {
    navigator.clipboard.writeText(getCommand());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={sectionRef} id="two-ways" className="bg-black border-t border-white/20 text-white relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="p-8 md:p-16 border-b border-white/20 overflow-hidden">
          <h2 ref={headlineRef} className="text-5xl md:text-8xl font-extrabold uppercase tracking-tighter leading-[0.9] mb-6">
            TWO WAYS TO USE AKR
          </h2>
          <p ref={textRef} className="text-xl md:text-2xl font-medium max-w-3xl text-gray-400 leading-relaxed">
            Choose the approach that fits your workflow. Both deliver the same high-quality foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-16 bg-black">
          {/* npm Card */}
          <div ref={card1Ref} className="bg-[#111111] border border-white/10 rounded-3xl p-10 md:p-14 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-[#037cf9] font-bold text-sm tracking-wide rounded-full mb-8">
                FOR DEVELOPERS
              </span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
                The npm package
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-8 font-medium">
                A robust, production-ready React starter template. Pre-configured with Vite, Tailwind v4, TypeScript strict mode, and Framer Motion. Just run the install command and start building your product immediately.
              </p>
            </div>
            
            <div>
              {/* Package Manager Toggle */}
              <div className="flex gap-1 mb-3 bg-black/50 p-1 w-fit rounded-lg border border-white/5">
                <button 
                  onClick={() => setPkgManager('npm')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${pkgManager === 'npm' ? 'bg-[#111] text-white shadow-sm border border-white/10' : 'text-gray-500 hover:text-white border border-transparent'}`}
                >
                  npm
                </button>
                <button 
                  onClick={() => setPkgManager('bun')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${pkgManager === 'bun' ? 'bg-[#111] text-white shadow-sm border border-white/10' : 'text-gray-500 hover:text-white border border-transparent'}`}
                >
                  bun
                </button>
              </div>

              <div className="bg-black border border-white/10 rounded-2xl p-4 md:p-5 font-mono text-sm md:text-base text-gray-300 flex items-center justify-between shadow-inner">
                <div className="flex items-center overflow-x-auto whitespace-nowrap">
                  <span className="text-[#037cf9] mr-3">$</span> {getCommand()}
                </div>
                <button 
                  onClick={handleCopy}
                  className="text-gray-500 hover:text-white hover:bg-white/10 p-2 flex-shrink-0 rounded-lg transition-colors ml-4"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* AI Skill Card */}
          <div ref={card2Ref} className="bg-[#111111] border border-white/10 rounded-3xl p-10 md:p-14 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <span className="inline-block px-4 py-1.5 bg-purple-500/10 text-purple-400 font-bold text-sm tracking-wide rounded-full mb-8">
                FOR TEAMS
              </span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
                The AI skill[Testing Making it better]
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-12 font-medium">
                Automate your landing page creation. The Akr AI skill understands our design system and generates fully responsive, perfectly styled sections directly in your codebase. It's like having an expert frontend engineer on call.
              </p>
            </div>
            
            <a href="https://github.com/ajaykumarreddy-k/Akr-Node/tree/main/Skill-Perfection" target="_blank" rel="noopener noreferrer" className="w-full bg-white hover:bg-gray-100 text-black rounded-2xl p-5 text-base md:text-lg font-bold flex justify-between items-center transition-colors shadow-sm">
              <span>Download Skill Folder</span>
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
