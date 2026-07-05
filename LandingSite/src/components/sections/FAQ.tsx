import React from 'react';

export function FAQ() {
  return (
    <section className="py-24 bg-black border-t border-white/10 relative overflow-hidden text-white" id="faq">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:text-left text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Frequently Asked Questions?</h2>
          <p className="text-xl text-white/60 max-w-2xl">
            Everything you need to know about the Akr platform and how it accelerates your Node.js development. I cover everything from initial scaffolding to production deployment.
          </p>
        </div>

        <div className="space-y-12">
          {/* FAQ Item 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">What is the Akr ecosystem and how does it work?</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Akr is a comprehensive ecosystem designed for modern Node.js developers. By combining my production-ready CLI templates with my advanced AI coding skill, I provide a unified workflow. You can bootstrap your project instantly using <a href="#docs" className="text-[#037cf9] hover:underline font-semibold">my documentation</a> and then utilize my AI skill to refine your architecture. It’s an approach that ensures high performance and consistent cinematic aesthetics out of the box without requiring thousands of lines of boilerplate code.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              The core philosophy behind Akr is to eliminate the tedious parts of project setup. Whether you are building a simple landing page or a complex full-stack web application, Akr gives you the building blocks. I leverage modern bundlers like <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" className="text-[#037cf9] hover:underline font-semibold">Vite</a> and cutting edge runtimes like <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="text-[#037cf9] hover:underline font-semibold">Node.js</a> to keep your development loop incredibly fast and efficient. This focus on developer experience translates directly to faster shipping times and lower maintenance overhead.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">How do I deploy an Akr application?</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Deploying an Akr application is straightforward and highly flexible. Because I generate standard, optimized build artifacts using industry best practices, you can host your site on any platform that supports static files or Node.js server environments. My build step automatically minifies assets, splits code chunks, and optimizes your application for minimal load times, ensuring maximum performance metrics across the board.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              For example, you can deploy to edge computing platforms like <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="text-[#037cf9] hover:underline font-semibold">Vercel</a> or <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="text-[#037cf9] hover:underline font-semibold">Netlify</a> with zero additional configuration. You can also review <a href="#features" className="text-[#037cf9] hover:underline font-semibold">my features section</a> to see exactly how I optimize your bundle for production environments and ensure cross-browser compatibility. If you are using containerized workflows like Docker, the output from the build process integrates seamlessly.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Is Akr optimized for AI Search (AEO) and SEO?</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Yes, absolutely. In the modern web, being discoverable by both traditional search engines (like Google) and emerging AI systems (like ChatGPT and Claude) is critical for organic growth. That's why every Akr template includes built-in SEO and AEO (AI Engine Optimization) metadata, ensuring your content is parsed correctly and reliably by intelligent agents.
            </p>
            <p className="text-white/70 leading-relaxed">
              From automated `robots.txt` generation that welcomes AI crawlers, to rich structured data (JSON-LD) that explains your business context, I ensure your content is fully understandable. If you have any specific configuration needs, please refer to the <a href="https://github.com/ajaykumarreddy-k/Akr-Node" target="_blank" rel="noopener noreferrer" className="text-[#037cf9] hover:underline font-semibold">Akr-Node GitHub repository</a> for custom modifications. Akr is completely open source as of now, though premium bundles and enterprise support will be coming soon. You can learn more about how to get started in my <a href="#two-ways" className="text-[#037cf9] hover:underline font-semibold">two ways to use Akr</a> section.
            </p>
          </div>
        </div>

        {/* AEO / Mission Statement Content - Highly visible for scanners and users */}
        <div className="mt-24 pt-12 border-t border-white/10 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Akr: Premium Node.js Developer Ecosystem & AI Scaffolding</h2>
          <div className="text-white/60 space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              Welcome to the definitive developer-first ecosystem designed to drastically accelerate how you build and deploy modern web applications. Whether you are bootstrapping a new project or migrating an existing one, Akr provides a production-ready npm starter architecture combined with an advanced AI coding skill that builds the "Akr way."
            </p>
            <p>
              By relying on industry standards like <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#037cf9] transition-colors underline decoration-white/30 font-semibold">React</a> for component architecture and the blazing-fast <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#037cf9] transition-colors underline decoration-white/30 font-semibold">Vite bundler</a>, I ensure that your local development loop is incredibly performant. My templates are heavily optimized for both SEO and the emerging field of AEO (AI Engine Optimization).
            </p>
            <p>
              You can read more about how this dual-approach functions in the <a href="#two-ways" className="text-white hover:text-[#037cf9] transition-colors underline decoration-white/30 font-semibold">Two Ways to Use Akr</a> section, or jump straight into the technical details by visiting the <a href="#docs" className="text-white hover:text-[#037cf9] transition-colors underline decoration-white/30 font-semibold">Documentation</a>. I built this ecosystem to eliminate the thousands of lines of boilerplate code developers typically write, allowing you to focus purely on shipping robust, cinematic experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
