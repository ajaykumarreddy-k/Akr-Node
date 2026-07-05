import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = elementsRef.current?.children;
    if (elements) {
      gsap.fromTo(elements,
        { 
          y: 60, 
          opacity: 0,
          scale: 0.9 
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.05,
          ease: "back.out(1.5)"
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="features" className="bg-[#f4f4f0] text-black relative border-t border-black/10 py-16 md:py-32 overflow-hidden z-20">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-widest uppercase text-gray-400">
            Everything you need. <span className="text-[#037cf9]">Nothing you don't.</span>
          </h2>
        </div>

        {/* The massive inline typography collage */}
        <div ref={elementsRef} className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-8 text-center leading-none">
          
          <span className="text-5xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter">REACT 19</span>
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="h-12 md:h-28 w-auto object-contain hover:rotate-180 transition-transform duration-1000" alt="React" />
          
          <span className="text-5xl md:text-[6rem] lg:text-[8rem] font-serif italic lowercase tracking-tight text-gray-600">& vite</span>
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" className="h-12 md:h-28 w-auto object-contain hover:scale-110 transition-transform duration-300" alt="Vite" />

          <span className="text-5xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter">TAILWIND</span>
          
          <span className="text-5xl md:text-[6rem] lg:text-[8rem] font-serif italic lowercase tracking-tight text-gray-600">v4</span>
          
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="h-12 md:h-24 w-auto object-contain transform rotate-3 hover:rotate-0 transition-transform" alt="Tailwind CSS" />

          <span className="text-5xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter">TYPESCRIPT</span>
          
          <span className="text-5xl md:text-[6rem] lg:text-[8rem] font-serif italic lowercase tracking-tight text-gray-600">strict</span>

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="h-10 md:h-20 w-auto object-contain rounded-lg md:rounded-2xl shadow-sm" alt="TypeScript" />

          <span className="text-5xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter">FRAMER</span>

          {/* Minimalist bars */}
          <div className="flex gap-2 mx-2 hover:rotate-12 transition-transform duration-500">
            <div className="h-10 md:h-20 w-3 md:w-6 bg-black rounded-full transform rotate-12"></div>
            <div className="h-10 md:h-20 w-3 md:w-6 bg-black rounded-full transform -rotate-6"></div>
          </div>

          <span className="text-5xl md:text-[6rem] lg:text-[8rem] font-serif italic lowercase tracking-tight text-gray-600">motion</span>

          <span className="text-5xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter">DEVELOPER</span>
          
          <span className="text-5xl md:text-[6rem] lg:text-[8rem] font-serif italic lowercase tracking-tight text-gray-600">first</span>
          
          <span className="text-5xl md:text-[6rem] lg:text-[8rem] font-serif italic lowercase tracking-tight text-gray-600">instant</span>
          
          <span className="text-5xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter text-[#037cf9]">DEPLOY</span>

          <svg viewBox="0 0 1155 1000" className="h-10 md:h-16 w-auto fill-black" xmlns="http://www.w3.org/2000/svg">
            <path d="M577.3 0L1154.6 1000H0L577.3 0Z" />
          </svg>

        </div>
      </div>
    </section>
  );
}
