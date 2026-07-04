import React from 'react';
import { Copy, Info, Play, Braces, BookOpen } from 'lucide-react';
import './MainContent.css';

export function MainContent() {
  return (
    <main className="content-area">
      <div className="content-inner">
        <div className="breadcrumb text-sm text-muted mb-4">
          Akr-Docs <span style={{ margin: '0 4px' }}>/</span> Getting Started
        </div>

        <div className="page-header flex items-center justify-between mb-6">
          <h1 className="page-title">Akr-Docs Overview</h1>
          <button className="btn-copy text-sm flex items-center gap-2">
            <Copy size={14} />
            Copy page
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>

        <p className="page-description text-muted mb-8">
          The official documentation for the Akr-Docs ecosystem. Learn how to integrate, scale, and customize your setup easily.
        </p>

        <p className="mb-4 text-sm text-secondary">
          Akr offers two main pathways for developers, tailored to different architectural needs:
        </p>

        <div className="comparison-table-wrapper mb-8">
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th>Core API</th>
                <th>Akr Managed Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">What it is</td>
                <td>Direct low-level access to core functions</td>
                <td>Pre-built infrastructure for rapid deployment</td>
              </tr>
              <tr>
                <td className="font-medium">Best for</td>
                <td>Custom pipelines and fine-grained control</td>
                <td>Enterprise scale and asynchronous workloads</td>
              </tr>
              <tr>
                <td className="font-medium">Learn more</td>
                <td><a href="#" className="text-link">Core API docs</a></td>
                <td><a href="#" className="text-link">Akr Managed docs</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-sm text-secondary" style={{ lineHeight: '1.6' }}>
          Akr-Docs provides the harness and infrastructure for running your services autonomously. Instead of building your own loop, tool execution, and runtime, you get a fully managed environment. The harness supports built-in caching, compaction, and other performance optimizations for high-quality, efficient outputs.
        </p>

        <div className="alert-box mb-8">
          <Info size={18} className="alert-icon" />
          <div className="alert-content">
            Akr-Docs is also available on self-hosted environments, with some differences in feature availability. See <a href="#" className="text-link">Self-hosted Akr</a> in the deployment guide.
          </div>
        </div>
        
        {/* Extra text for scrolling test */}
        <h2 className="mb-4 text-primary font-semibold" style={{ fontSize: '1.5rem', marginTop: '2rem' }}>Architecture Overview</h2>
        <p className="mb-4 text-sm text-secondary" style={{ lineHeight: '1.6' }}>
          Our architecture is designed from the ground up to be distributed and highly available. By utilizing edge-caching and state-of-the-art CDNs, Akr-Docs ensures that your users experience minimal latency regardless of their geographic location.
        </p>
        <p className="mb-8 text-sm text-secondary" style={{ lineHeight: '1.6' }}>
          Furthermore, our microservices approach allows for horizontal scaling during peak traffic. You can independently scale the ingestion pipeline, the rendering engine, and the analytics workers without over-provisioning resources.
        </p>

        <div className="action-cards">
          <a href="#" className="action-card">
            <Play size={20} className="card-icon" />
            <h3 className="card-title">Quickstart</h3>
            <p className="card-desc">Create your first agent session</p>
          </a>
          <a href="#" className="action-card">
            <Braces size={20} className="card-icon" />
            <h3 className="card-title">Start a session</h3>
            <p className="card-desc">Create a session and send your first event</p>
          </a>
          <a href="#" className="action-card">
            <BookOpen size={20} className="card-icon" />
            <h3 className="card-title">Reference</h3>
            <p className="card-desc">Event types, rate limits, CLI flags, and other lookup tables</p>
          </a>
        </div>
      </div>
    </main>
  );
}
