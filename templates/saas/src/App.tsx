import React, { Suspense } from 'react';
import './styles/index.css';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';

// Lazy load below-the-fold components to improve initial load performance
const FeaturesGrid = React.lazy(() => import('./components/sections/FeaturesGrid').then(module => ({ default: module.FeaturesGrid })));
const Statistics = React.lazy(() => import('./components/sections/Statistics').then(module => ({ default: module.Statistics })));
const Pricing = React.lazy(() => import('./components/sections/Pricing').then(module => ({ default: module.Pricing })));
const FAQ = React.lazy(() => import('./components/sections/FAQ').then(module => ({ default: module.FAQ })));
const CTA = React.lazy(() => import('./components/sections/CTA').then(module => ({ default: module.CTA })));

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Suspense fallback={<div className="h-32 flex items-center justify-center text-slate-400">Loading...</div>}>
          <FeaturesGrid />
          <Statistics />
          <Pricing />
          <FAQ />
          <CTA />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
