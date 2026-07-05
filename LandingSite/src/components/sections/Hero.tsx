import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui/Button';
import { Copy, Check } from 'lucide-react';
import img0 from "../../../0.png";
import logo from "../../../logo.png";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const img0Ref = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Parallax floating images
    gsap.to(img0Ref.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: -150,
      rotate: 15,
      scale: 1.1,
    });
  }, { scope: containerRef });

  const handleCopy = () => {
    navigator.clipboard.writeText('npm create akr');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#037cf9] overflow-hidden flex flex-col justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center md:text-left mt-16 md:mt-0">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-[#037cf9] font-bold text-sm mb-8 shadow-sm"
        >
          Open Source · MIT
        </motion.div>

        {/* Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
        >
          Build production-ready<br className="hidden md:block" /> React websites in minutes.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 font-medium mb-10 max-w-2xl"
        >
          The developer-first ecosystem: a production-ready npm starter and an AI coding skill that builds the "Akr way."
        </motion.p>


        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 md:justify-start justify-center"
        >
          <Button onClick={handleCopy} className="w-full sm:w-auto gap-2 group">
            {copied ? <Check size={20} /> : <Copy size={20} className="text-gray-500 group-hover:text-black transition-colors" />}
            npm create akr
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto" onClick={() => window.open('https://github.com/ajaykumarreddy-k/Akr-Node/tree/main/Skill-Perfection', '_blank')}>
            Add Akr Skill
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center justify-center md:justify-start gap-6 text-white/70 font-semibold text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span> Lightning Fast
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🛠️</span> Production Ready
          </div>
        </motion.div>
      </div>

      {/* Decorative Assets */}
      <div className="absolute bottom-8 right-8 z-20 hover:scale-105 transition-transform duration-300 hidden md:block">
        <img ref={img0Ref} src={img0} alt="Sticker Icons" className="h-32 md:h-48 object-contain" />
      </div>
    </section>
  );
}
