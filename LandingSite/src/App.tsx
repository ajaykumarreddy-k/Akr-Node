import React from 'react';
import "./index.css";
import logo from "../logo.png";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { TwoWays } from "./components/sections/TwoWays";
import { Features } from "./components/sections/Features";
import { CtaBanner } from "./components/sections/CtaBanner";
import { SmoothScroll } from "./components/layout/SmoothScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Docs } from "./pages/Docs";

export function App() {
  const [currentHash, setCurrentHash] = React.useState(window.location.hash);

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
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-[#037cf9] selection:text-white">
        <Navbar />
        
        <main className="relative">
          {/* Sticky Logo that stays until footer */}
          <div className="absolute inset-0 pointer-events-none z-40 hidden md:block">
            <div className="sticky top-8 left-8 w-fit">
              <img src={logo} alt="Akr Logo" className="h-48 md:h-64 w-auto object-contain pointer-events-auto drop-shadow-2xl" />
            </div>
          </div>
          
          {isDocs ? (
            <Docs />
          ) : (
            <>
              <Hero />
              <TwoWays />
              <Features />
              <CtaBanner />
            </>
          )}
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
