# Frontend Assessment — Talenix Group Training & Development Page

A pixel-perfect, fully responsive implementation of the Talenix Group Training and Development landing page, built with Next.js (App Router) and Tailwind CSS v4.

## Live URL

**[https://frontenderz.vercel.app](https://frontenderz.vercel.app)**

## GitHub Repository

**[https://github.com/emmyade360/frontend-intern](https://github.com/emmyade360/frontend-intern)**

## Figma Design

**[Frontend Intern Assessment — Figma](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)**

---

## Setup Instructions

### Prerequisites

- Node.js 18.17+ or 20+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/emmyade360/frontend-intern.git
cd frontend-intern

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 16.x (App Router) | React framework, SSR, image/font optimisation |
| React | 19.x | UI rendering |
| Tailwind CSS | v4 | Utility-first styling — sole CSS solution |
| TypeScript | 5.x | Type safety across all components |
| Inter (`next/font`) | — | Typography, zero-layout-shift font loading |

---

## Project Structure

```
frontend-assessment/
├── app/
│   ├── globals.css        # Tailwind v4 entry + @theme token definitions
│   ├── icon.svg           # Favicon (matches navbar logo)
│   ├── layout.tsx         # Root layout — Inter font via next/font, page metadata
│   └── page.tsx           # Composes all sections in order
├── components/
│   ├── ui/
│   │   ├── CheckList.tsx      # Reusable bulleted list with brand checkmarks
│   │   ├── SectionLink.tsx    # Reusable "Learn More →" link button
│   │   └── TalenixLogo.tsx    # Brand logo SVG — single source of truth
│   ├── Navbar.tsx             # Sticky top nav, responsive hamburger, Escape-to-close
│   ├── Hero.tsx               # Full-bleed dark hero with background image
│   ├── LearningManagementSystem.tsx
│   ├── CorporateTrainings.tsx
│   ├── PersonalisedTraining.tsx
│   ├── CapacityDevelopment.tsx
│   ├── ManagementDevelopmentProgram.tsx
│   ├── TransformationHub.tsx
│   ├── TrainingConsultant.tsx
│   ├── CTABanner.tsx
│   ├── Testimonials.tsx       # Mobile carousel + desktop 3-column grid
│   ├── FooterCTA.tsx
│   └── Footer.tsx
├── public/
├── next.config.ts         # Enables next/image for Unsplash remote patterns
└── README.md
```

---

## Design Decisions & Technical Assumptions

### Color Palette
Extracted from the Figma screenshot and defined as Tailwind v4 `@theme` tokens:

| Token | Hex | Usage |
|---|---|---|
| `brand-dark` | `#180b25` | Hero, footer background |
| `brand-section` | `#2e1021` | Management Dev Program, CTA banner |
| `brand-maroon` | `#5a1e3c` | Primary buttons, checkmarks, accents |
| `brand-maroon-hover` | `#6e2549` | Hover state for maroon buttons |
| `brand-pink` | `#fdf0ef` | Transformation Hub, Footer CTA backgrounds |
| `brand-purple` | `#7c3aed` | Navbar CTA button |
| `brand-purple-hover` | `#6d28d9` | Hover state for purple button |

### Typography
- **Font:** Inter (Google Fonts) — closely matches the humanist sans-serif used in the Figma design.
- Loaded via `next/font/google` for automatic font-display swap, zero layout shift, and self-hosting at build time.

### Images
- The Figma file's photography assets are not exportable without Figma editor access.
- **Decision:** Substituted with professionally relevant Unsplash photos that match each section's subject matter (corporate training, coaching, management, etc.).
- All images use `next/image` with accurate `sizes` props for responsive srcset generation, WebP conversion, and lazy loading.

### Tailwind CSS v4
- Uses Tailwind CSS **v4**, which replaces `tailwind.config.ts` with an `@theme {}` block inside `globals.css`.
- There is intentionally **no** `tailwind.config.ts` — all custom design tokens live in `app/globals.css`.
- No custom `@media` queries are used anywhere. All breakpoints are Tailwind's built-in responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`).
- No inline `style` props anywhere in the codebase — all styling is via Tailwind utility classes.

### Responsive Breakpoints

| Breakpoint | Width | Behaviour |
|---|---|---|
| Mobile (default) | 0–639px | Single column, stacked images, mobile nav |
| `sm:` | 640px+ | 2-column grids begin, typography scales up |
| `md:` | 768px+ | Full side-by-side section layouts |
| `lg:` | 1024px+ | Desktop nav visible, wider padding |
| `xl:` | 1280px+ | Max-width container locks at 1280px |

### Accessibility
- Semantic HTML throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<blockquote>`.
- All `<Image />` tags have meaningful `alt` text; purely decorative images use `alt=""`.
- All interactive elements are keyboard-focusable with a visible `:focus-visible` ring (purple, 2px offset).
- `aria-label`, `aria-expanded`, `aria-controls`, `aria-current`, `role="tablist"`, `role="img"` applied where native semantics are insufficient.
- Mobile nav closes on Escape key press via `useEffect` keyboard listener.
- Testimonial dots use `aria-label` referencing the reviewer's name, not just a number.

### Deviations from Figma
1. **Photography:** Unsplash photos used in place of original Figma assets (unavailable without editor access). Each photo was chosen to match the section's visual context.
2. **Logo:** Reconstructed as an inline SVG diamond + wordmark using the brand colour, since the original vector asset was not accessible from the public Figma link.
3. **Testimonials:** On desktop all three cards are shown in a grid (matching the Figma). On mobile, only the active card is shown and the dots act as a navigator — this avoids a heavy JS carousel dependency while preserving usability.

### Mobile Navigation
- Desktop nav collapses to a hamburger below `lg:` (1024px).
- State managed with `useState` and `useCallback` — zero third-party dependencies.
- Closes on: link click, CTA click, or Escape key.

---

## Known Issues

- **Photography:** The original Figma design uses proprietary photography assets that are not publicly accessible. Unsplash images have been substituted as close visual matches. If the original assets are provided, they can be dropped into `public/images/` and the `src` props in each section component updated accordingly.
- **Nav links:** All navigation links currently point to `#` as placeholder `href` values. In a production build these would be wired to their respective routes or anchor sections.
- **Hero gradient on older Safari:** The hero overlay uses `color-mix()` via Tailwind's opacity modifier syntax, which requires Safari 15.4+. A solid fallback colour (`bg-brand-dark`) is applied first so the section remains readable on unsupported browsers.

---

## AI Tool Disclosure

This project was built with the assistance of **Claude (claude-sonnet-4-6)**, an AI assistant by Anthropic. Specifically, AI was used to:

- Scaffold component boilerplate and Tailwind class structures from the Figma screenshot
- Suggest accessible ARIA patterns (`aria-expanded`, `role="tablist"`, `aria-current`, etc.)
- Identify and fix code quality issues (JSX-in-data anti-pattern, missing `type="button"`, SVG presentation attributes vs. Tailwind classes, duplicate code extraction)
- Draft the README content

All design decisions, architecture choices, colour extraction, component decomposition, and final code review were validated and directed by the developer. No pre-built UI kit components were copied from external sources.
