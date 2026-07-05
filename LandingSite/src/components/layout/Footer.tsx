import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img2 from '../../../2.png';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    // Massive graphic rotates and scales up smoothly as footer enters
    gsap.fromTo(imgRef.current, 
      { rotation: 15, scale: 0.8, yPercent: 20 },
      {
        rotation: 0,
        scale: 1,
        yPercent: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1
        }
      }
    );

    // Headline staggers in
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });

    // CTA scales up
    gsap.from(ctaRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 60%",
      },
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)"
    });
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} id="footer" className="bg-black text-white h-screen w-full relative overflow-hidden flex flex-col justify-between">
      {/* Right Side Image (Brutalist massive graphic style) */}
      <div className="absolute right-0 top-0 bottom-0 w-[60%] md:w-1/2 flex justify-end items-end pointer-events-none z-20 overflow-visible">
        <img ref={imgRef} src={img2} alt="Signpost" className="w-auto h-[120%] md:h-[130%] object-contain object-right origin-bottom-right translate-y-[25%]" />
      </div>

      {/* Top Section */}
      <div className="p-8 md:p-16 relative z-10">
        <h2 ref={textRef} className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold tracking-tighter uppercase leading-[0.85] max-w-[60%]">
          GET NODE<br />
          MODULE<br />
          AND SKILL
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col justify-end flex-grow relative z-10 pb-16 px-8 md:px-16">
        <a ref={ctaRef} href="#" className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tight uppercase hover:text-[#037cf9] transition-colors inline-block w-fit origin-left">
          TODAY →
        </a>
      </div>

      {/* Brutalist Thin Bottom Strip */}
      <div className="border-t border-white/20 min-h-[4rem] py-4 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 text-xs md:text-sm font-semibold uppercase tracking-wider relative z-30 bg-black pointer-events-auto gap-4">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-center md:text-left">
          <span>AKR © {new Date().getFullYear()}</span>
          <span className="text-white/30 hidden md:inline">|</span>
          <span className="text-[#037cf9]">Developer: Ajay kumar reddy K</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <a href="https://github.com/ajaykumarreddy-k" target="_blank" rel="noopener noreferrer" className="hover:text-[#037cf9] transition-colors">GITHUB</a>
          <a href="https://www.linkedin.com/in/ajay-kumar-reddy-krishnareddy-gari-a4885b282/" target="_blank" rel="noopener noreferrer" className="hover:text-[#037cf9] transition-colors">LINKEDIN</a>
          <a href="https://ajaykumarreddykrishnareddygari-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#037cf9] transition-colors">PORTFOLIO</a>
        </div>
      </div>
    </footer>
  );
}
