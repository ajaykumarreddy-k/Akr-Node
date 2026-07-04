import React from 'react';

interface ProductCardProps {
  imageSrc: string;
  name: string;
  price: string;
  delay?: number;
}

export function ProductCard({ imageSrc, name, price, delay = 100 }: ProductCardProps) {
  return (
    <div className={`flex-none w-[280px] md:w-[380px] snap-start group cursor-pointer reveal delay-${delay}`}>
      <div className="bg-[#f7f7f7] aspect-[4/5] product-img-wrapper flex items-center justify-center mb-6 relative p-12 transition-colors duration-500 ease-premium group-hover:bg-[#f0f0f0]">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-premium group-hover:scale-105" 
          loading="lazy"
        />
      </div>
      <div className="px-2 text-left">
        <h4 className="font-serif text-3xl text-black font-light mb-1 transition-colors duration-300 group-hover:text-brand-copper">{name}</h4>
        <span className="text-xs text-brand-muted font-medium tracking-widest uppercase">{price}</span>
      </div>
    </div>
  );
}
