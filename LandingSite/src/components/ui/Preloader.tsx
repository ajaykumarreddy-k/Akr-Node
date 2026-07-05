import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Easing function for smoother progress (easeOutCubic)
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const duration = 2000; // 2 seconds to load
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const rawProgress = currentStep / steps;
      const easedProgress = easeOut(rawProgress) * 100;

      setProgress(Math.min(easedProgress, 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        // Small delay at 100% before triggering exit animation
        setTimeout(() => setIsExiting(true), 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-black text-white overflow-hidden origin-top"
          initial={{ y: 0 }}
          exit={{
            y: "-100vh",
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Top Left Brand Name */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-lg md:text-xl font-semibold tracking-tight"
            >
              Akr
            </motion.div>
          </div>

          {/* Full-Width Loading Bar */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[2px] bg-white/10 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Bottom Right Counter */}
          <div className="absolute bottom-4 right-6 md:bottom-8 md:right-10 flex items-baseline">
            <div className="text-[20vw] md:text-[12vw] leading-[0.8] font-light tracking-tighter">
              {Math.floor(progress)}
            </div>
            <div className="text-4xl md:text-6xl font-light mb-2 md:mb-4 ml-1 md:ml-2">
              %
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
