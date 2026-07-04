import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="hero-gradient w-full relative min-h-[85vh] pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden">
      <div className="max-w-[80rem] mx-auto w-full relative z-10 flex flex-col items-center text-center mt-12 md:mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white text-5xl md:text-6xl lg:text-[5.5rem] font-semibold tracking-tight leading-[1.05] mb-12 max-w-5xl text-balance mx-auto"
        >
          Build extraordinary products with effortless speed.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12 font-light"
        >
          The ultimate premium SaaS starter template. Combining striking editorial design with production-ready architecture. Ready for your next big launch.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="w-full sm:w-auto rounded-full px-8 text-base h-14 bg-[#111] hover:bg-black text-white border border-transparent">
            Get Started Now
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 text-base h-14 border-black/10 text-slate-800 hover:bg-black/5 bg-transparent">
            View Documentation
          </Button>
        </motion.div>
      </div>

      {/* Product Screenshot Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-[80rem] mx-auto w-full mt-32 relative z-10"
      >
        <div className="aspect-video w-full rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
          <p className="text-gray-400 font-medium tracking-wide">Product Screenshot Placeholder</p>
        </div>
      </motion.div>
    </section>
  );
}
