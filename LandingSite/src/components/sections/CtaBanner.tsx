import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img3 from '../../../3.png';

gsap.registerPlugin(ScrollTrigger);

export function CtaBanner() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Stagger text and buttons
    const textElements = textRef.current?.children;
    if (textElements) {
      gsap.fromTo(textElements,
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out"
        }
      );
    }

    // Parallax floating sticker
    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y: -100,
      rotate: -15,
      scale: 1.1,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#037cf9] text-white relative overflow-hidden z-20">
      <div className="max-w-[87.5rem] mx-auto p-12 pr-40 md:p-24 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">

        <div ref={textRef} className="md:w-2/3 max-w-2xl">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tight leading-[1.1] mb-8">
            Stop rebuilding<br />
            the same page.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium leading-relaxed max-w-xl">
            Get your product to market faster with a battle-tested foundation that scales with your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 hover:scale-105 shadow-xl shadow-black/10 transition-all duration-300 w-full sm:w-auto text-center">
              Home Page
            </button>
            <button onClick={() => window.location.hash = 'docs'} className="bg-black/20 text-white border border-white/20 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-black/30 hover:border-white/40 transition-all duration-300 w-full sm:w-auto text-center">
              Documentation Page
            </button>
          </div>
        </div>

        {/* Sticker on the right side */}
        <div className="md:w-1/3 flex justify-center md:justify-end items-center mt-12 md:mt-0 relative">
          <img ref={imgRef} src={img3} alt="Sticker" className="w-full max-w-[300px] lg:max-w-[400px] object-contain drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
