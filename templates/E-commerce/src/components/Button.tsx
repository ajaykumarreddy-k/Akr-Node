import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  children, 
  href = '#', 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-block font-bold uppercase tracking-widest rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-copper focus-visible:ring-offset-2";
  
  const variants = {
    primary: "bg-black text-white hover:bg-brand-copper active:scale-95",
    outline: "border border-black text-black hover:border-brand-copper hover:text-brand-copper active:scale-95",
    ghost: "text-black border-b border-black rounded-none pb-1.5 hover:text-brand-copper hover:border-brand-copper px-0",
  };

  const sizes = {
    sm: "text-[9px] px-6 py-3",
    md: "text-[10px] px-10 py-4",
    lg: "text-[11px] px-12 py-5",
  };

  // Ghost variant ignores standard padding
  const sizeStyles = variant === 'ghost' ? 'text-[10px]' : sizes[size];

  return (
    <a 
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
