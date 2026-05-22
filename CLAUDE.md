# CLAUDE.md — Website Workspace

## Workspace Structure
Each project lives in its own subfolder. Shared tooling stays at the root.
```
AI_Website/
  kairos/           ← Kairos gym app marketing site
    index.html
    brand_assets/
    docs/
  your-next-project/
    index.html
    brand_assets/
  serve.mjs         ← shared dev server
  screenshot.mjs    ← shared screenshot tool
  CLAUDE.md         ← this file
```

## Starting a New Project
1. Create a subfolder: `mkdir project-name`
2. Add `brand_assets/` inside it with logo, colors, images
3. Build `index.html` inside that subfolder
4. Access at `http://localhost:3000/project-name/`

---

## Dev Server
- Start once per session: `node serve.mjs` → `http://localhost:3000`
- Serves all subfolders automatically. `/kairos/` → `kairos/index.html`
- Never start a second instance. Check if already running before starting.

## Screenshot Workflow
- Command: `node screenshot.mjs http://localhost:3000/project-name/ label`
- Chrome path: `C:\Program Files\Google\Chrome\Application\chrome.exe`
- Saves to `./temporary screenshots/screenshot-N[-label].png` (auto-incremented)
- After saving: read the PNG with the Read tool and analyze visually
- Do **minimum 2 screenshot rounds** — shoot, compare, fix, re-shoot
- Be specific when comparing: "heading is 32px, reference shows ~24px"

---

## Every Session — Do First
- Invoke the `frontend-design` skill before writing any frontend code.

---

## Brand Assets
- Always check the project's `brand_assets/` folder before designing
- Use the real logo (`logo.png`) — never recreate it in SVG
- Use exact brand colors — never invent or substitute
- Use real photography from `brand_assets/` — no placeholders where photos exist

---

## Output Defaults
- Single `index.html`, all styles inline (no external CSS files)
- No Tailwind CDN — write raw CSS with CSS variables
- Google Fonts via `<link>` — Barlow Condensed + Barlow + DM Mono (default stack)
- Mobile-first responsive with breakpoints at 1024px and 768px
- Placeholder images (only when no real asset): `https://placehold.co/WxH`

---

## Design Standards

### Typography
- Headings: Barlow Condensed 900, `line-height: 0.93–0.96`, `letter-spacing: -0.025em`
- Body: Barlow 400, `line-height: 1.65–1.72`
- Data / labels / mono: DM Mono 400–500
- Never use the same font for headings and body

### Color
- Never use default Tailwind palette (blue-500, indigo-600, etc.)
- Define all colors as CSS variables in `:root`
- Dominant dark/light base + 1–2 sharp accent colors

### Backgrounds & Depth
- Layer multiple radial gradients — never a flat solid background
- Add grain texture via SVG `feTurbulence` filter on `body::before`
- Z-plane system: base → elevated (`surface`) → floating (cards/modals)
- Section backgrounds should alternate subtly to create visual rhythm

### Shadows
- Never flat `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`
- Use layered shadows: ambient + key + color-tinted glow
- Example: `0 2px 8px rgba(0,0,0,0.3), 0 0 24px rgba(accent,0.2)`

### Animations
- Only animate `transform` and `opacity` — never layout properties
- Never use `transition-all` — always specify exact properties
- Spring easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` for interactive lifts
- Smooth easing: `cubic-bezier(0.16, 1, 0.3, 1)` for reveals
- Scroll reveals: `IntersectionObserver` with staggered `transition-delay`
- Page-load animations: stagger hero elements via `setTimeout`

### Interactive States
- Every clickable element must have: `hover` + `focus-visible` + `active`
- Hover: lift (`translateY(-2px)`) + shadow intensify
- Active: compress (`scale(0.97) translateY(1px)`)
- Focus-visible: `outline: 2px solid accent; outline-offset: 4px`

### Images
- Dark photos: apply `filter: brightness(1.2–1.3)` before gradient overlay
- Gradient overlays on photos: directional, not full-cover black
- Use `mix-blend-mode: screen` on logos placed on dark backgrounds

---

## Hard Rules
- No `transition-all` — ever
- No default Tailwind color palette as primary
- No flat single-layer shadows
- No placeholder images where real brand assets exist
- Do not stop after one screenshot pass
- Do not add features or sections not requested
- Never recreate a provided logo in SVG — use the image file
