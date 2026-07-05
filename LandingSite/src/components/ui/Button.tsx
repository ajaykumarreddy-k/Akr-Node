import React from 'react';
import { cn } from './Sticker';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary';
}

export function Button({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-lg transition-colors cursor-pointer",
        variant === 'primary' 
          ? "bg-white text-[#0D0D0D] hover:bg-gray-100" 
          : "bg-transparent text-white border-2 border-white hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
