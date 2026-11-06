<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# my-portfolio

Single-page portfolio site. Next.js 16.4.3 (App Router, Turbopack, Cache Components) + React 19.3 + Tailwind v4 + shadcn/ui. No monorepo, no tests, no CI.

## Commands (verified)

- `npm run dev` — dev server; also rewrites the agent-rules block above.
- `npm run typecheck` — `tsc --noEmit`.
- `npm run lint` — `eslint` (flat config, no args lints the whole repo). Exits 0 on a clean tree.
- `npm run build` — production build; type-checks and prerenders `/` as static (Revalidate 15m / Expire 1y).
- No test runner. Verify in order: `npm run typecheck` → `npm run lint` → `npm run build`.

## Structure

- `src/app/` — App Router: `layout.tsx` (metadata, JSON-LD, fonts, skip link), `page.tsx` (just composes sections — no inline markup), `globals.css` (Tailwind + theme).
- `src/components/` — `layout/` (Navbar, Footer), `sections/` (Hero, About, Skills, Experience, Projects, Contact), `common/` (Card, Reveal, Section, SectionHeading, SocialLinks), `ui/` = shadcn-generated (treat as vendor).
- `src/data/site.ts` — single source of truth for name/links/nav/socials; section-specific content (projects, skills, timeline) is colocated as arrays at the top of each file in `sections/`. Wire personal data there, not inline.
- `@/*` → `src/*` (tsconfig `paths` + shadcn aliases).
- `import { cn } from "cn"` — `cn` is an **npm package**; there is no local clsx/tailwind-merge implementation to edit (`src/lib/utils.ts` just re-exports it).

## Hard-won quirks

- **`new Date()` / `Math.random()` fail `npm run build`** under `cacheComponents` with `blocking-prerender-current-time`. Fix: wrap the value in an async function/component with `"use cache"` (see `Footer.tsx`), or `await connection()` to render per-request. Docs: `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md`.
- **Lint and build disagree about effects**: `react-hooks/set-state-in-effect` (React 19 ESLint) fails lint when `setState` runs synchronously in `useEffect`, while that same pattern is the "safe" prerender answer. Resolutions used here: `useSyncExternalStore` for media queries (`hooks/use-mobile.ts`), `requestAnimationFrame` to defer initial sync (`ui/carousel.tsx`). Don't reintroduce the year-in-`useEffect` Footer pattern — it builds but fails lint.
- `NEXT_PUBLIC_SITE_URL` feeds `metadataBase` in `layout.tsx` (falls back to `http://localhost:3000`); set it in deployment for correct absolute OG URLs.
- Client components declare `"use client"` (Navbar, Reveal, Contact, `hooks/*`); the rest are server components. Footer is an async server component with `"use cache"`.
- Tailwind v4 is CSS-first: no `tailwind.config` — tokens live in `src/app/globals.css`; CSS compiles via the `@tailwindcss/turbopack` loader rule in `next.config.ts`.
- `next.config.ts` enables `reactCompiler`, `cacheComponents`, `partialPrefetching`, `experimental.agentFeedback`. Consult `node_modules/next/dist/docs/` before using caching/async or other framework APIs — older-Next defaults may not apply.
- Root layout uses Next 16's global `LayoutProps<"/">` type instead of explicitly typed props.
- shadcn: configured by `components.json` (style `base-nova`, neutral, lucide); the `shadcn` CLI is a devDependency. Add primitives with `npx shadcn add <component>` instead of hand-writing them.
