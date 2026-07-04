import React from 'react';
import { Search } from 'lucide-react';
import './LeftSidebar.css';

export function LeftSidebar({ isOpen }: { isOpen?: boolean }) {
  return (
    <aside className={`left-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="search-container">
        <div className="search-input-wrapper">
          <Search size={14} className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
          <span className="search-shortcut">⌘K</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-group">
          <h3 className="nav-group-title active">First steps</h3>
          <ul className="nav-list">
            <li><a href="#" className="nav-item active">Overview</a></li>
            <li><a href="#" className="nav-item">Quickstart</a></li>
            <li><a href="#" className="nav-item">Prototype in Console</a></li>
          </ul>
        </div>

        <div className="nav-group">
          <h3 className="nav-group-title">Define your agent</h3>
          <ul className="nav-list">
            <li><a href="#" className="nav-item">Agent setup</a></li>
            <li><a href="#" className="nav-item">Tools</a></li>
            <li><a href="#" className="nav-item">MCP connector</a></li>
            <li><a href="#" className="nav-item">Permission policies</a></li>
            <li><a href="#" className="nav-item">Agent Skills</a></li>
          </ul>
        </div>

        <div className="nav-group">
          <h3 className="nav-group-title">Configure agent environment</h3>
          <ul className="nav-list">
            <li><a href="#" className="nav-item">Cloud environment setup</a></li>
            <li><a href="#" className="nav-item">Cloud sandbox reference</a></li>
            <li>
              <div className="nav-item has-submenu">
                Self-hosted sandboxes
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </div>
            </li>
          </ul>
        </div>

        <div className="nav-group">
          <h3 className="nav-group-title">Delegate work to your agent</h3>
          <ul className="nav-list">
            <li><a href="#" className="nav-item">Start a session</a></li>
            <li><a href="#" className="nav-item">Session operations</a></li>
            <li><a href="#" className="nav-item">Session event stream</a></li>
            <li><a href="#" className="nav-item">Subscribe to webhooks</a></li>
            <li><a href="#" className="nav-item">Define outcomes</a></li>
            <li><a href="#" className="nav-item">Authenticate with vaults</a></li>
          </ul>
        </div>

        {/* Extra test data for scrolling */}
        <div className="nav-group">
          <h3 className="nav-group-title">Advanced Configuration</h3>
          <ul className="nav-list">
            <li><a href="#" className="nav-item">Custom LLM routing</a></li>
            <li><a href="#" className="nav-item">Rate limit management</a></li>
            <li><a href="#" className="nav-item">Fallback strategies</a></li>
            <li><a href="#" className="nav-item">Usage analytics</a></li>
          </ul>
        </div>
        <div className="nav-group">
          <h3 className="nav-group-title">Troubleshooting</h3>
          <ul className="nav-list">
            <li><a href="#" className="nav-item">Common errors</a></li>
            <li><a href="#" className="nav-item">Debug mode</a></li>
            <li><a href="#" className="nav-item">Contact support</a></li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
