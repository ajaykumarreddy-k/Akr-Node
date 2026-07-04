import React from 'react';
import { ChevronDown, Terminal, Monitor, User, Menu, Sun, Moon } from 'lucide-react';
import './TopNav.css';
import logo from '../logo.png'; // Trying logo.png first, as it might be their custom logo

interface TopNavProps {
  onMenuClick: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function TopNav({ onMenuClick, theme, toggleTheme }: TopNavProps) {
  return (
    <header className="top-nav">
      <button className="mobile-menu-btn" onClick={onMenuClick}>
        <Menu size={24} />
      </button>
      <div className="top-nav-left">
        <div className="logo-container">
          <img src={logo} alt="Akr-Docs Logo" className="akr-logo" />
          <span className="logo-text">Akr-Docs</span>
        </div>
      </div>

      <nav className="top-nav-center">
        <a href="#" className="nav-link">Messages</a>
        <a href="#" className="nav-link active">Managed Agents</a>
        <a href="#" className="nav-link">Admin</a>
        <div className="nav-dropdown">
          <span className="nav-link">Resources</span>
          <ChevronDown size={14} className="dropdown-icon" />
        </div>
      </nav>

      <div className="top-nav-right">
        <button onClick={toggleTheme} className="nav-icon-link" aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={18} className="text-muted" /> : <Sun size={18} className="text-muted" />}
        </button>
        <a href="#" className="nav-icon-link text-sm text-muted flex items-center gap-2">
          <Terminal size={14} />
          API reference
        </a>
        <div className="nav-icon-link">
          <Monitor size={16} className="text-muted" />
        </div>
        <div className="nav-dropdown text-sm text-muted flex items-center gap-2 ml-4">
          English
          <ChevronDown size={14} />
        </div>
        <button className="btn-outline">
          <Terminal size={14} />
          Console
        </button>
        <button className="btn-solid">Log in</button>
      </div>
    </header>
  );
}
