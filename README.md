# Mohammad Roni — Developer Portfolio

A modern, responsive, SEO-friendly personal portfolio showcasing my skills, projects, and journey as a web developer.

**Live demo:** [my-portfolio-eta-gilt-aocqw48xfs.vercel.app](https://my-portfolio-eta-gilt-aocqw48xfs.vercel.app)

---

## About Me

Hi, I'm Mohammad Roni, an aspiring Frontend Developer passionate about building modern, responsive, and user-friendly web applications.

I enjoy learning new technologies, solving problems, and turning ideas into practical digital experiences.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) — App Router, Turbopack, Cache Components |
| UI library | React 19 + TypeScript 5 |
| Styling | Tailwind CSS v4 (CSS-first configuration) |
| Components | [shadcn/ui](https://ui.shadcn.com) (base-nova style) + [Lucide](https://lucide.dev) & [React Icons](https://react-icons.github.io/react-icons) |
| Typography | Geist & Geist Mono via `next/font` |
| Quality | ESLint 9 (`eslint-config-next`) + `tsc` strict mode |
| Hosting | [Vercel](https://vercel.com) |

## Features

- **Scroll-spy navigation** — the navbar highlights the section you're reading, with a responsive mobile menu (Escape-to-close, `aria-*` attributes).
- **Scroll-reveal animations** — content fades in as you scroll, honoring `prefers-reduced-motion` and staying visible without JavaScript.
- **SEO ready** — full metadata, Open Graph / Twitter cards, and JSON-LD `Person` structured data.
- **Accessible by default** — skip-to-content link, focus-visible styles, semantic landmarks.
- **Single source of truth** — name, links, and navigation live in one file (`src/data/site.ts`).

## Portfolio Sections

- **Navbar:** Sticky navigation with active-section highlight and mobile support.
- **Hero:** Introduction, professional title, resume download, and social links.
- **About:** Personal introduction, goals, and highlight cards.
- **Skills:** Technical skills grouped by category.
- **Experience:** Education and learning timeline.
- **Projects:** Showcase of my development projects with live demos.
- **Contact:** Contact methods and social links.
- **Footer:** Copyright, social links, and back-to-top.

## Featured Projects

### 1. Bazer-dor
A modern web application built with Next.js and TypeScript.  
Live: [bazer-dor-web-site.vercel.app](https://bazer-dor-web-site.vercel.app)

### 2. FitLog
A workout library application featuring API integration, dynamic routing, and workout planning.  
Live: [fit-log-app-teal.vercel.app](https://fit-log-app-teal.vercel.app)

### 3. DevConf
A responsive conference website built with HTML5 and CSS3.  
Live: [mohammadroni0187-arch.github.io/Assignment](https://mohammadroni0187-arch.github.io/Assignment/)

### 4. Dev Stack
A technology stack explorer where users can explore technologies and add or remove items from their personal stack.

---

## Getting Started

### Prerequisites

- **Node.js ≥ 20.9** (required by Next.js 16) — check with `node -v`
- npm (ships with Node.js)

### Installation

```bash
git clone https://github.com/mohammadroni0187-arch/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit.

### Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with Turbopack |
| `npm run build` | Production build (also type-checks) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint across the repo |
| `npm run typecheck` | TypeScript check with no emit |

## Project Structure

```text
src/
├── app/
│   ├── globals.css        # Tailwind v4 + shadcn theme tokens
│   ├── layout.tsx         # Root layout: metadata, JSON-LD, fonts, skip link
│   └── page.tsx           # Composes all sections
├── components/
│   ├── common/            # Card, Reveal, Section, SectionHeading, SocialLinks
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, About, Skills, Experience, Projects, Contact
│   └── ui/                # shadcn/ui primitives (generated)
├── data/
│   └── site.ts            # Single source of truth: name, links, nav, socials
├── hooks/                 # use-active-section (scroll-spy), use-mobile
└── lib/                   # cn helper, syntax-highlighting utilities
```

## Editing Your Content

- **Personal details** (name, email, GitHub, LinkedIn, resume): edit [`src/data/site.ts`](src/data/site.ts). Every section picks the changes up automatically.
- **Resume:** drop your file at `public/resume.pdf` — the Hero and Contact buttons download it.
- **Profile image:** replace `public/Image.png`.
- **Projects, skills, experience:** edit the data arrays at the top of the corresponding file in `src/components/sections/`.

## Working with shadcn/ui

This project is pre-configured with [shadcn/ui](https://ui.shadcn.com):

- Configuration lives in [`components.json`](components.json) (style `base-nova`, neutral base color, Lucide icons).
- Generated primitives live in `src/components/ui/` — treat them as vendor code.
- Add a new component when you need one:

  ```bash
  npx shadcn add button
  ```

- Merge conditional class names with the `cn` utility:

  ```tsx
  import { cn } from "cn";

  <div className={cn("base-classes", isActive && "active-classes")} />
  ```

**Styling note:** Tailwind CSS v4 has no `tailwind.config` — the theme is configured CSS-first in `src/app/globals.css` (`@import "tailwindcss"` + `@theme inline`). Path alias: `@/*` maps to `src/*`.

## Deployment

**Vercel (recommended)** — import the repository and deploy with default settings. Set the environment variable below for correct absolute URLs in metadata:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**Any Node host**

```bash
npm run build
npm start
```

## Contact

- **Email:** [mohammadroni0187@gmail.com](mailto:mohammadroni0187@gmail.com)
- **GitHub:** [github.com/mohammadroni0187-arch](https://github.com/mohammadroni0187-arch)
- **LinkedIn:** [linkedin.com/in/md-roni-2034733a2](https://www.linkedin.com/in/md-roni-2034733a2/)

---

Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

© 2026 Mohammad Roni. All Rights Reserved.
