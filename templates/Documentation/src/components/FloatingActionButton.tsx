import React from 'react';
import { BookOpen } from 'lucide-react';
import './FloatingActionButton.css';

export function FloatingActionButton() {
  return (
    <button className="fab-btn flex items-center gap-2">
      Ask Docs
      <BookOpen size={16} />
    </button>
  );
}
