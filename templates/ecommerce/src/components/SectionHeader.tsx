import React from 'react';

interface SectionHeaderProps {
  title: string;
  showArrows?: boolean;
}

export function SectionHeader({ title, showArrows = true }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-end mb-16 reveal">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black uppercase tracking-wider font-light">
        {title}
      </h2>
      
      {showArrows && (
        <div className="flex space-x-3">
          <button 
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-black hover:bg-gray-50 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black active:scale-95"
            aria-label="Previous items"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-black hover:bg-gray-50 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black active:scale-95"
            aria-label="Next items"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
