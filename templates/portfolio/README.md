# AKR v1 SaaS Starter

A modern, production-ready universal SaaS template.

## Tech Stack
- **Framework**: React 19 + Vite
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Package Manager**: Bun

## Getting Started

1. **Install Dependencies**
   ```bash
   bun install
   ```

2. **Run Development Server**
   ```bash
   bun run dev
   ```

3. **Build for Production**
   ```bash
   bun run build
   ```

## Deployment

This template is fully pre-configured for zero-config deployments to major providers:

- **Vercel**: Deploy the repository directly. `vercel.json` is included for SPA routing.
- **Netlify**: Deploy the repository directly. `public/_redirects` is included for SPA routing.
- **GitHub Pages**: Build the app using `bun run build` and deploy the `dist` folder. Ensure you set your `base` path in `vite.config.ts` if deploying to a subpath.

## Project Structure
- `src/components/ui`: Reusable primitive components (Buttons, Cards, etc.)
- `src/components/sections`: Landing page blocks (Hero, Features, Pricing)
- `src/components/layout`: Global structures (Navbar, Footer)
- `src/constants/index.ts`: Copywriting and configuration data

## Code Quality
This template enforces:
- Strict TypeScript rules
- Zero ESLint warnings
- Pre-configured formatting via ESLint
# Akr-Node
