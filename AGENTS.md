<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# my-portfolio

Single-page portfolio site. Next.js 16.4.3 (App Router, Turbopack) + React 19.3 + Tailwind v4 + shadcn/ui. No monorepo, no tests, no CI.

## Commands (verified)

- `npm run dev` — dev server; also rewrites the agent-rules block above.
- `npx tsc --noEmit` — typecheck (no `typecheck` script exists). Passes on a clean tree.
- `npm run lint` — `eslint` (flat config, no args lints the whole repo). **Currently exits 1 with ~13 pre-existing errors**: unescaped `'` in `src/app/page.tsx` + `src/component/*`, and `react-hooks/set-state-in-effect` in shadcn-generated `src/components/ui/carousel.tsx` and `src/hooks/use-mobile.ts`. Don't assume your change caused them — just don't add new ones.
- `npm run build` — production build; also type-checks.
- There is no test runner. Fast verification order: `npx tsc --noEmit` → `npm run lint` → `npm run build`.

## Structure

- `src/app/` — App Router: `layout.tsx`, `page.tsx`, `globals.css`. Everything renders from the one `page.tsx`.
- `@/*` → `src/*` (tsconfig `paths`; also used by shadcn aliases).
- **Two component dirs, easy to mix up:**
  - `src/component/` (singular) — the hand-written page sections (`Hero`, `AboutSection`, `Skills`, `ProjectPage`, `Navber`, `Contect`, `Footer`). The filenames `Navber.tsx` and `Contect.tsx` are misspelled and imports reference them as-is; don't rename without updating every `@/component/...` import.
  - `src/components/` (plural) — shadcn/ui-generated code (`ui/*`, plus `src/hooks/`). Treat as generated/vendor: don't restyle by hand.
- `src/lib/utils.ts` is a one-line re-export of the `cn` **npm package** — there is no local clsx/tailwind-merge implementation to edit.
- `src/app/page.tsx` still renders *both* the extracted `src/component/` sections *and* older inline copies of the same content (mid-migration). Check both before editing a section, and remove the stale copy deliberately rather than assuming one is a mistake.

## Toolchain quirks

- Tailwind v4 is CSS-first: no `tailwind.config` — theme tokens live in `src/app/globals.css` (`@theme inline`, shadcn variables). CSS compiles via the `@tailwindcss/turbopack` loader rule in `next.config.ts`.
- `next.config.ts` enables `reactCompiler` (babel-plugin-react-compiler), `cacheComponents`, `partialPrefetching`, and `experimental.agentFeedback`. Consult the Next 16 docs in `node_modules/next/dist/docs/` before using caching/async or other framework APIs — defaults from older Next.js versions may not apply.
- Root layout uses Next 16's global `LayoutProps<"/">` type instead of explicitly typed props.
- Only interactive components declare `"use client"` (currently just `src/component/Navber.tsx`, which holds the mobile-menu state); sections are server components by default.
- shadcn: configured by `components.json` (style `base-nova`, neutral base, lucide icons). Add primitives with `npx shadcn add <component>` instead of hand-writing them.
