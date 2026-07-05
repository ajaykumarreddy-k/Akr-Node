import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../logo.png';

export function Docs() {
  const [activeSection, setActiveSection] = useState('docs-getting-started');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' }); // Offset to trigger when section is in upper middle of viewport

    const sections = document.querySelectorAll('section[id^="docs-"]');
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Top Logo - Scrolls away on mobile/tablet, becomes sticky at 1399px */}
      <div className="absolute inset-0 pointer-events-none z-50">
        <div className="absolute min-[1399px]:sticky top-6 left-6 md:top-8 md:left-10 w-fit pointer-events-auto transition-all duration-300">
          <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo(0, 0); }} className="block group w-fit transition-transform hover:scale-[1.02]">
            <img src={logo} alt="Akr Logo" className="h-16 md:h-24 w-auto object-contain drop-shadow-2xl" />
          </a>
        </div>
      </div>

      <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto h-full">

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-40 pb-12">
            <div className="flex items-center gap-3 mb-6">
              <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo(0, 0); }} className="text-gray-400 hover:text-white transition-colors group" title="Back to Home">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
              </a>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider m-0">Documentation</h3>
            </div>
            <nav className="flex flex-col gap-3">
              <a href="#docs-getting-started" onClick={(e) => { e.preventDefault(); document.getElementById('docs-getting-started')?.scrollIntoView({ behavior: 'smooth' }); }} className={`font-medium pl-4 transition-colors ${activeSection === 'docs-getting-started' ? 'text-[#037cf9] border-l-2 border-[#037cf9]' : 'text-gray-400 hover:text-white border-l-2 border-transparent hover:border-gray-500'}`}>Getting Started</a>
              <a href="#docs-installation" onClick={(e) => { e.preventDefault(); document.getElementById('docs-installation')?.scrollIntoView({ behavior: 'smooth' }); }} className={`font-medium pl-4 transition-colors ${activeSection === 'docs-installation' ? 'text-[#037cf9] border-l-2 border-[#037cf9]' : 'text-gray-400 hover:text-white border-l-2 border-transparent hover:border-gray-500'}`}>Installation</a>
              <a href="#docs-core-concepts" onClick={(e) => { e.preventDefault(); document.getElementById('docs-core-concepts')?.scrollIntoView({ behavior: 'smooth' }); }} className={`font-medium pl-4 transition-colors ${activeSection === 'docs-core-concepts' ? 'text-[#037cf9] border-l-2 border-[#037cf9]' : 'text-gray-400 hover:text-white border-l-2 border-transparent hover:border-gray-500'}`}>Core Concepts</a>
              <a href="#docs-components" onClick={(e) => { e.preventDefault(); document.getElementById('docs-components')?.scrollIntoView({ behavior: 'smooth' }); }} className={`font-medium pl-4 transition-colors ${activeSection === 'docs-components' ? 'text-[#037cf9] border-l-2 border-[#037cf9]' : 'text-gray-400 hover:text-white border-l-2 border-transparent hover:border-gray-500'}`}>Components</a>
              <a href="#docs-api-reference" onClick={(e) => { e.preventDefault(); document.getElementById('docs-api-reference')?.scrollIntoView({ behavior: 'smooth' }); }} className={`font-medium pl-4 transition-colors ${activeSection === 'docs-api-reference' ? 'text-[#037cf9] border-l-2 border-[#037cf9]' : 'text-gray-400 hover:text-white border-l-2 border-transparent hover:border-gray-500'}`}>API Reference</a>
            </nav>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 bg-[#111] border border-white/10 p-8 md:p-12 rounded-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Akr Ecosystem and Node.js Framework Documentation</h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Welcome to the Akr ecosystem. My tools are designed to help you build lightning-fast, premium React applications without the boilerplate.
            </p>

            <div className="space-y-12">
              <section id="docs-getting-started" className="pt-8 -mt-8">
                <h2 className="text-2xl font-bold mb-4 text-white">Quick Setup</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Start a new project instantly using my CLI. I fully support both <code className="bg-black text-[#037cf9] px-2 py-1 rounded">npm</code> and <a href="https://bun.sh/" target="_blank" rel="noopener noreferrer" className="text-[#037cf9] hover:underline font-semibold">bun</a> for fast package management. This sets up a <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-[#037cf9] hover:underline font-semibold">React</a> environment optimized for both speed and AI Engine Optimization (AEO). For more details on what's included, check out our <a href="/#features" className="text-white hover:text-[#037cf9] transition-colors underline decoration-white/30 font-semibold">Features section</a>.
                </p>
                <div className="bg-black border border-white/10 p-6 rounded-2xl font-mono text-sm text-gray-300">
                  <div className="mb-2 text-gray-500"># Using npm</div>
                  <div><span className="text-[#037cf9]">$</span> npm create akr</div>
                  
                  <div className="mt-4 mb-2 text-gray-500"># Using bun</div>
                  <div><span className="text-[#037cf9]">$</span> bun create akr</div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">The AKR Philosophy</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  I believe in cinematic design, developer productivity, and extreme performance. Every component in my library is built from the ground up to support smooth scrolling, micro-animations, and robust dark-mode aesthetics using <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-[#037cf9] hover:underline font-semibold">Tailwind CSS</a> and <a href="https://framer.com/motion/" target="_blank" rel="noopener noreferrer" className="text-[#037cf9] hover:underline font-semibold">Framer Motion</a>. This ensures your site feels premium. To understand how you can utilize this within your workflow, see our guide on <a href="/#two-ways" className="text-white hover:text-[#037cf9] transition-colors underline decoration-white/30 font-semibold">Two Ways to Use Akr</a>, which explores both the CLI and my AI coding skill. If you have questions about this philosophy, visit the <a href="/#faq" className="text-white hover:text-[#037cf9] transition-colors underline decoration-white/30 font-semibold">FAQ section</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Next Steps</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2 leading-relaxed">
                  <li>Explore the <strong className="text-white">Installation</strong> guide for advanced setup.</li>
                  <li>Learn about my <strong className="text-white">Core Concepts</strong> and design tokens.</li>
                  <li>Check out the <strong className="text-white">Components</strong> library to see what's available.</li>
                </ul>
              </section>
              <section id="docs-installation" className="pt-8 mt-8 border-t border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Installation</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  The recommended way to start a new Akr project is by using my scaffolding tool. This sets up everything you need, including Tailwind CSS, Framer Motion, and GSAP.
                </p>
                <div className="bg-black border border-white/10 p-6 rounded-2xl font-mono text-sm text-gray-300 mb-4">
                  <div className="mb-2 text-gray-500"># npm</div>
                  <div><span className="text-[#037cf9]">$</span> npm create akr</div>
                  
                  <div className="mt-4 mb-2 text-gray-500"># bun</div>
                  <div><span className="text-[#037cf9]">$</span> bun create akr</div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Follow the prompts to configure your project. Once complete, navigate to your project directory, install your dependencies, and start the development server:
                </p>
                <div className="bg-black border border-white/10 p-6 rounded-2xl font-mono text-sm text-gray-300">
                  <div className="mb-2 text-gray-500"># Using npm</div>
                  <div><span className="text-[#037cf9]">$</span> cd my-akr-project</div>
                  <div><span className="text-[#037cf9]">$</span> npm install</div>
                  <div><span className="text-[#037cf9]">$</span> npm run dev</div>
                  
                  <div className="mt-4 mb-2 text-gray-500"># Using bun</div>
                  <div><span className="text-[#037cf9]">$</span> cd my-akr-project</div>
                  <div><span className="text-[#037cf9]">$</span> bun install</div>
                  <div><span className="text-[#037cf9]">$</span> bun run dev</div>
                </div>
              </section>

              <section id="docs-core-concepts" className="pt-8 mt-8 border-t border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Core Concepts</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Akr is built on a few core principles that guide my component design and architecture.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-4 leading-relaxed">
                  <li><strong className="text-white">Cinematic Animations:</strong> I utilize GSAP and Framer Motion to create smooth, scroll-linked animations that feel native and premium.</li>
                  <li><strong className="text-white">Dark Mode First:</strong> My default aesthetic is dark, high-contrast, and tailored for technical products and developer tools.</li>
                  <li><strong className="text-white">Zero Configuration:</strong> My starter templates come pre-configured with everything you need, so you can focus on building your product, not configuring webpack.</li>
                </ul>
              </section>

              <section id="docs-components" className="pt-8 mt-8 border-t border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Components</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  My library includes a suite of highly-polished components designed for marketing pages and landing sites.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/50 border border-white/10 p-4 rounded-xl">
                    <h4 className="text-white font-bold mb-2">Magnetic Button</h4>
                    <p className="text-sm text-gray-400">A button that elegantly tracks the user's cursor on hover.</p>
                  </div>
                  <div className="bg-black/50 border border-white/10 p-4 rounded-xl">
                    <h4 className="text-white font-bold mb-2">Smooth Scroll</h4>
                    <p className="text-sm text-gray-400">Momentum-based smooth scrolling wrapper using Lenis.</p>
                  </div>
                  <div className="bg-black/50 border border-white/10 p-4 rounded-xl">
                    <h4 className="text-white font-bold mb-2">Hero Section</h4>
                    <p className="text-sm text-gray-400">High-impact landing section with parallax floating assets.</p>
                  </div>
                  <div className="bg-black/50 border border-white/10 p-4 rounded-xl">
                    <h4 className="text-white font-bold mb-2">Feature Grid</h4>
                    <p className="text-sm text-gray-400">Responsive, animated grid for showcasing product features.</p>
                  </div>
                </div>
              </section>

              <section id="docs-api-reference" className="pt-8 mt-8 border-t border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">API Reference</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  For detailed information on component props and utilities, please refer to the specific component documentation files included in the <code className="bg-black text-[#037cf9] px-2 py-1 rounded">src/components</code> directory.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl mt-4">
                  <p className="text-sm text-blue-400 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    <strong>Note:</strong> Comprehensive API documentation is currently being generated and will be available in the next major release.
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      </section>
    </div>
  );
}
