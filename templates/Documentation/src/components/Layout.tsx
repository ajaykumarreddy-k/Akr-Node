import React, { useState, useEffect } from 'react';
import { TopNav } from './TopNav';
import { LeftSidebar } from './LeftSidebar';
import { MainContent } from './MainContent';
import { RightSidebar } from './RightSidebar';
import { FloatingActionButton } from './FloatingActionButton';

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-container">
      <TopNav 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="main-layout">
        <LeftSidebar isOpen={sidebarOpen} />
        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} style={{
            position: 'fixed', inset: 0, top: 64, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 30
          }} />
        )}
        <MainContent />
        <RightSidebar />
      </div>
      <FloatingActionButton />
    </div>
  );
}
