import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  Smile, Tag, Star, Clipboard, Pencil,
  Terminal, Package, Keyboard, Code, Sparkles, Rocket
} from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type StickerType =
  | 'smiley' | 'tag' | 'star' | 'clipboard' | 'pencil'
  | 'terminal' | 'package' | 'keyboard' | 'code' | 'rocket';

interface StickerProps extends React.HTMLAttributes<HTMLDivElement> {
  type: StickerType;
  size?: number;
  rotation?: number;
}

const iconMap = {
  smiley: Smile,
  tag: Tag,
  star: Star,
  clipboard: Clipboard,
  pencil: Pencil,
  terminal: Terminal,
  package: Package,
  keyboard: Keyboard,
  code: Code,
  rocket: Rocket,
};

const colorMap = {
  smiley: 'text-yellow-400 bg-yellow-400',
  tag: 'text-green-500 bg-green-500',
  star: 'text-purple-400 bg-purple-400',
  clipboard: 'text-blue-500 bg-blue-500',
  pencil: 'text-yellow-600 bg-yellow-600',
  terminal: 'text-gray-800 bg-gray-800',
  package: 'text-orange-500 bg-orange-500',
  keyboard: 'text-pink-500 bg-pink-500',
  code: 'text-indigo-500 bg-indigo-500',
  rocket: 'text-red-500 bg-red-500',
};

export function Sticker({ type, className, size = 48, rotation, ...props }: StickerProps) {
  const Icon = iconMap[type];
  const colorClass = colorMap[type];

  // Deterministic fallback rotation based on type length if none provided
  const rot = rotation !== undefined ? rotation : (type.length * 5) % 24 - 12;

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center p-3 rounded-2xl shadow-md",
        "border-[6px] border-white bg-white transition-transform hover:scale-110",
        className
      )}
      style={{ transform: `rotate(${rot}deg)` }}
      {...props}
    >
      {/* Background fill */}
      <div className={cn("absolute inset-0 opacity-20 rounded-xl", colorClass.split(' ')[1])} />
      {/* Icon */}
      <Icon size={size} strokeWidth={2.5} className={cn("relative z-10", colorClass.split(' ')[0])} />
      {/* Sparkle accent */}
      <Sparkles size={16} strokeWidth={3} className="absolute -top-3 -right-3 text-black fill-white" />
    </div>
  );
}
