import React from 'react';
import "./index.css";
import logo from "../logo.png";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { TwoWays } from "./components/sections/TwoWays";
import { Features } from "./components/sections/Features";
import { FAQ } from "./components/sections/FAQ";
import { CtaBanner } from "./components/sections/CtaBanner";
import { SmoothScroll } from "./components/layout/SmoothScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Docs } from "./pages/Docs";
import { Preloader } from "./components/ui/Preloader";

export function App() {
  const [currentHash, setCurrentHash] = React.useState(window.location.hash);
  const [isPreloading, setIsPreloading] = React.useState(true);

  React.useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      setCurrentHash(newHash);
      if (newHash === '' || newHash === '#docs') {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  React.useEffect(() => {
    // Refresh ScrollTrigger after DOM updates to fix footer animations on route change
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timeout);
  }, [currentHash]);

  const isDocs = currentHash.startsWith("#docs");

  return (
    <>
      {isPreloading && <Preloader onComplete={() => setIsPreloading(false)} />}
      
      <div className={`${isPreloading ? 'h-screen overflow-hidden' : ''}`}>
        <SmoothScroll>
          <div className="min-h-screen bg-black text-white font-sans selection:bg-[#037cf9] selection:text-white">
        <Navbar />
        
        <main className="relative">
          {/* Global Dynamic Logo */}
          {!isDocs && (
            <div className="absolute inset-0 pointer-events-none z-40">
              {/* Becomes sticky at exactly 1399px */}
              <div className="absolute min-[1399px]:sticky top-4 left-4 min-[1399px]:top-8 min-[1399px]:left-8 w-fit pointer-events-auto transition-all duration-300">
                <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}>
                  <img 
                    src={logo} 
                    alt="Akr Logo" 
                    className="w-auto object-contain drop-shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer min-[1399px]:rounded-3xl h-20 sm:h-28 min-[1468px]:h-[clamp(7rem,12vw,16rem)]" 
                  />
                </a>
              </div>
            </div>
          )}
          
          {isDocs ? (
            <Docs />
          ) : (
            <>
              <Hero />
              <TwoWays />
              <Features />
              <FAQ />
              <CtaBanner />
            </>
          )}
        </main>

          <Footer />
        </div>
      </SmoothScroll>
    </div>
    </>
  );
}

export default App;
