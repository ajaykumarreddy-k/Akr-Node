import React from 'react';
import './RightSidebar.css';

export function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <nav className="toc-nav">
        <h4 className="toc-title">Core concepts</h4>
        <ul className="toc-list">
          <li><a href="#" className="toc-item">How it works</a></li>
          <li><a href="#" className="toc-item">When to use Claude Managed Agents</a></li>
          <li><a href="#" className="toc-item">Supported tools</a></li>
          <li><a href="#" className="toc-item">Beta access</a></li>
        </ul>
      </nav>
    </aside>
  );
}
