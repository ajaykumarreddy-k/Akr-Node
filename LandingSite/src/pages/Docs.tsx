import React from 'react';
import { motion } from 'framer-motion';

export function Docs() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">Documentation</h3>
            <nav className="flex flex-col gap-3">
              <a href="#docs" className="text-[#037cf9] font-medium border-l-2 border-[#037cf9] pl-4 transition-colors">Getting Started</a>
              <a href="#docs-installation" className="text-gray-400 hover:text-white border-l-2 border-transparent hover:border-gray-500 pl-4 transition-colors">Installation</a>
              <a href="#docs-core-concepts" className="text-gray-400 hover:text-white border-l-2 border-transparent hover:border-gray-500 pl-4 transition-colors">Core Concepts</a>
              <a href="#docs-components" className="text-gray-400 hover:text-white border-l-2 border-transparent hover:border-gray-500 pl-4 transition-colors">Components</a>
              <a href="#docs-api-reference" className="text-gray-400 hover:text-white border-l-2 border-transparent hover:border-gray-500 pl-4 transition-colors">API Reference</a>
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
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Getting Started</h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Welcome to the Akr ecosystem. Our tools are designed to help you build lightning-fast, premium React applications without the boilerplate.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Quick Setup</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Start a new project instantly using our CLI. We recommend using <code className="bg-black text-[#037cf9] px-2 py-1 rounded">npm</code> for the best experience.
                </p>
                <div className="bg-black border border-white/10 p-6 rounded-2xl font-mono text-sm text-gray-300">
                  <span className="text-[#037cf9]">$</span> npm create akr
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">The AKR Philosophy</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  We believe in cinematic design, developer productivity, and extreme performance. Every component in our library is built from the ground up to support smooth scrolling, micro-animations, and robust dark-mode aesthetics.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Next Steps</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2 leading-relaxed">
                  <li>Explore the <strong className="text-white">Installation</strong> guide for advanced setup.</li>
                  <li>Learn about our <strong className="text-white">Core Concepts</strong> and design tokens.</li>
                  <li>Check out the <strong className="text-white">Components</strong> library to see what's available.</li>
                </ul>
              </section>
              <section id="docs-installation" className="pt-8 mt-8 border-t border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Installation</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  The recommended way to start a new Akr project is by using our scaffolding tool. This sets up everything you need, including Tailwind CSS, Framer Motion, and GSAP.
                </p>
                <div className="bg-black border border-white/10 p-6 rounded-2xl font-mono text-sm text-gray-300 mb-4">
                  <span className="text-[#037cf9]">$</span> npm create akr
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Follow the prompts to configure your project. Once complete, navigate to your project directory and start the development server:
                </p>
                <div className="bg-black border border-white/10 p-6 rounded-2xl font-mono text-sm text-gray-300">
                  <span className="text-[#037cf9]">$</span> cd my-akr-project<br/>
                  <span className="text-[#037cf9]">$</span> npm run dev
                </div>
              </section>

              <section id="docs-core-concepts" className="pt-8 mt-8 border-t border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Core Concepts</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Akr is built on a few core principles that guide our component design and architecture.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-4 leading-relaxed">
                  <li><strong className="text-white">Cinematic Animations:</strong> We utilize GSAP and Framer Motion to create smooth, scroll-linked animations that feel native and premium.</li>
                  <li><strong className="text-white">Dark Mode First:</strong> Our default aesthetic is dark, high-contrast, and tailored for technical products and developer tools.</li>
                  <li><strong className="text-white">Zero Configuration:</strong> Our starter templates come pre-configured with everything you need, so you can focus on building your product, not configuring webpack.</li>
                </ul>
              </section>

              <section id="docs-components" className="pt-8 mt-8 border-t border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Components</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Our library includes a suite of highly-polished components designed for marketing pages and landing sites.
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
  );
}
