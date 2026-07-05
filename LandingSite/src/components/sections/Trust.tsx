import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Trust() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal animation
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(marqueeRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "power3.out"
    });

    // Infinite Marquee setup
    const marqueeContent = marqueeRef.current?.querySelector('.marquee-content') as HTMLElement;
    if (marqueeContent) {
      // Duplicate content for smooth infinite loop
      marqueeContent.innerHTML += marqueeContent.innerHTML;

      gsap.to(marqueeContent, {
        xPercent: -50,
        ease: "none",
        duration: 30,
        repeat: -1
      });
    }
  }, { scope: sectionRef });

  const logos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framer/framer-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-black text-white border-t border-white/10 overflow-hidden relative">
      <div className="max-w-[87.5rem] mx-auto px-8 mb-16 md:mb-24 text-center">
        <h3 ref={titleRef} className="text-xl md:text-3xl font-medium tracking-wide text-gray-400">
          Trusted by developers at world-class teams
        </h3>
      </div>

      <div ref={marqueeRef} className="w-full relative flex overflow-hidden">
        {/* Fades on the edges for a premium look */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="marquee-content flex gap-20 md:gap-40 items-center min-w-max px-10">
          {logos.map((src, i) => (
            <div key={i} className="w-16 md:w-24 h-16 md:h-24 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-125 transition-all duration-500 cursor-pointer">
              <img src={src} alt="Logo" className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
