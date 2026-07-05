<div align="center">
  <img src="./logo.png" alt="Akr-Node Logo" width="250" />

  # ⚡ Akr-Node

  **A comprehensive tooling, template, and design ecosystem for scaffolding modern, production-ready web applications.**

  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white" alt="Bun" />
    <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/AEO_Score-100%2F100-00C853?style=for-the-badge&logo=google&logoColor=white" alt="AEO Score 100/100" />
    <img src="https://img.shields.io/badge/AI_Findable-✓ Good-00C853?style=for-the-badge" alt="AI Findable" />
    <img src="https://img.shields.io/badge/AI_Trustworthy-✓ Good-00C853?style=for-the-badge" alt="AI Trustworthy" />
  </p>

  <p align="center">
    <a href="#-create-akr-cli">CLI</a> •
    <a href="#-templates">Templates</a> •
    <a href="#-akr-designperfection-skill">AI Design Skill</a> •
    <a href="#-landing-site">Landing Site</a> •
    <a href="#-aeo-score">AEO Score</a>
  </p>
</div>

---

## 🌟 Overview

This repository is the central hub for the **Akr-Node** ecosystem. It is divided into four core pillars designed to accelerate your development workflow:

1. **`create-akr` CLI**: A powerful, interactive scaffolding tool.
2. **AKR Templates**: A collection of high-quality, pre-configured starter templates.
3. **AKR-Designperfection-Skill**: An advanced AI agent skill for UI/UX integration and design perfection.
4. **Landing Site**: A production-deployed marketing site with a perfect 100/100 AEO score.

---

## 🚀 `create-akr` CLI

The `create-akr` CLI is an interactive command-line wizard. It sets up your project with a predefined, high-performance tech stack (React 19, TS, Vite, Tailwind v4, animations) so you can skip the boilerplate and start building immediately.

### 🛠️ Quick Start

You can generate a new project instantly using `bunx` or `npx`:

```bash
bunx create-akr
# or
npx create-akr
```

Follow the interactive prompts to choose your project name and desired template.

> **Note for Local Development:**  
> To test the CLI locally, navigate to `cli/create-akr`, run `bun link`, and then use `bun link create-akr` or simply `create-akr` anywhere in your terminal.

---

## 📦 Templates

The `templates/` directory houses a suite of premium starter templates. Every template is mobile-responsive, production-ready, and adheres to strict code quality standards.

| Template | Description |
|----------|-------------|
| 💼 **SaaS Starter** (`saas`) | A modern, universal SaaS application template with essential layouts. |
| 👨‍💻 **Personal Portfolio** (`portfolio`) | A polished, dark-themed developer portfolio for showcasing projects. |
| 🛒 **E-commerce** (`ecommerce`) | A commercial-grade, premium e-commerce storefront template. |
| 📚 **Documentation** (`documentation`) | A clean, highly-readable platform for technical docs. |
| 📊 **Dashboard** (`dashboard`) | A robust React architecture using Shadcn UI and Recharts for data visualization. |

### ⚙️ Default Tech Stack
- **Framework**: React 19 + Vite
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion & GSAP
- **Package Manager**: Bun

---

## 🎨 AKR-Designperfection-Skill

Located in `Skill-Perfection/`, the **AKR-Designperfection-Skill** is a specialized AI agent prompt (`.md` format). It is designed to adapt proven UI patterns, design systems, and animations from [AKR-Inspo](https://github.com/ajaykumarreddy-k/AKR-Inspo) directly into your projects.

### ✨ Highlights:
- **Smart Scaffolding:** Pairs with `bun create akr` to scaffold using hand-picked top-300 reference designs.
- **Taste Enforcement:** Applies Leonxlnx/taste-skill's rules (dark mode first, Apple-level spacing, WCAG AA contrast).
- **Discoverability:** Can run comprehensive SEO/AEO/GEO audits.
- **Self-Documenting:** Automatically logs its architectural decisions in `akr-design.md`.

🔗 **[Read the full AI Skill Documentation](./Skill-Perfection/README.md)**

---

## 🌐 Landing Site

The `LandingSite/` directory contains the official marketing and documentation site for the Akr ecosystem, live at **[akr-node.vercel.app](https://akr-node.vercel.app)**.

- Built with **Bun + Parcel** for lightning-fast builds.
- Includes `robots.txt`, `sitemap.xml`, and `llms.txt` for maximum discoverability.
- Fully optimized for AI Engine Optimization (AEO), achieving a perfect score.

---

## 🏆 AEO Score

The Akr landing site has achieved a **perfect 100/100 AEO (AI Engine Optimization) score**, placing it in the **Top 5%** of all scanned sites. Most sites score between 45–70.

<div align="center">
  <img src="./AEOSCORE.png" alt="AEO Score 100/100 — Flawless. Go touch grass." width="360" />
</div>

| Category | Status |
|----------|--------|
| 🔍 **Findable** | ✅ Good |
| 💬 **Quotable** | ✅ Good |
| 🧠 **Understandable** | ✅ Good |
| 🛡️ **Trustworthy** | ✅ Good |

> *"Flawless. Go touch grass. Your site is doing the work for you. AI engines have nothing to complain about."*
> — AEO Report for [akr-node.vercel.app](https://akr-node.vercel.app)

---

## 🤝 Code Quality & Deployment

### 🛡️ Quality Standards
All code in this repository strictly enforces:
- Type safety via **TypeScript strict mode**.
- Clean code via pre-configured **ESLint** (zero warnings policy).

### 🚀 Zero-Config Deployments
Templates are pre-configured to be deployed out-of-the-box to all major edge providers:
- **Vercel** (`vercel.json` included for SPA routing)
- **Netlify** (`public/_redirects` included)
- **GitHub Pages** (Ready for static `dist` export)

<br/>
<p align="center">
  Built with ❤️ by the Akr-Node Team
</p>
