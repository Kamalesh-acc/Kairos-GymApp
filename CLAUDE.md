# CLAUDE.md — Website Workspace

## Workspace Structure
Each project lives in its own subfolder. Shared tooling stays at the root.
```
AI_Website/
  kairos/               ← Kairos gym app marketing site
    index.html
    brand_assets/
    docs/
  your-next-project/
    index.html
    brand_assets/
  serve.mjs             ← shared dev server
  screenshot.mjs        ← shared screenshot tool
  CLAUDE.md             ← this file
```

## Starting a New Project
1. Create a subfolder: `mkdir project-name`
2. Add `brand_assets/` inside with logo, colors, and images
3. Build `index.html` inside that subfolder
4. Access at `http://localhost:3000/project-name/`

---

## Every Session — Do First
- Invoke the `frontend-design` skill before writing any frontend code, every session, no exceptions.

---

## Dev Server
- Start once per session: `node serve.mjs` → `http://localhost:3000`
- Serves all subfolders automatically. `/kairos/` → `kairos/index.html`
- Never start a second instance. Check if already running before starting.

## Screenshot Workflow
- Command: `node screenshot.mjs http://localhost:3000/project-name/ label`
- Chrome path: `C:\Program Files\Google\Chrome\Application\chrome.exe`
- Saves to `./temporary screenshots/screenshot-N[-label].png` (auto-incremented, never overwritten)
- After saving: read the PNG with the Read tool and analyze visually
- Do **minimum 2 screenshot rounds** — shoot, compare, fix, re-shoot
- Stop only when no visible differences remain or the user says so

---

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color **exactly**
  - Swap in placeholder content (`https://placehold.co/WxH` for images, generic copy)
  - Do not improve, add to, or deviate from the reference in any way
- If no reference image: design from scratch using brand assets and guardrails below

## Visual Comparison Checklist
When comparing screenshot to reference, be specific — not "looks close":
- Spacing & padding: check every gap, margin, section padding
- Font size, weight, line-height: measure against reference proportions
- Colors: exact hex match — check bg, text, borders, accents
- Alignment: left/center/right, vertical centering of items
- Border-radius: pill vs rounded vs sharp corners
- Shadows: count layers, check spread and color tint
- Image sizing and crop: aspect ratio, object-position
- Responsive behaviour at 1440px, 1024px, 768px

---

## Brand Assets
- Always check the project's `brand_assets/` folder before designing
- Use the real logo file — never recreate it in SVG or CSS
- Use exact brand colors — never invent or substitute
- Use real photography where available — no placeholders for provided images
- Apply `mix-blend-mode: screen` on logos placed on dark backgrounds
- Boost dark photos with `filter: brightness(1.2–1.3)` before gradient overlays

---

## Output Defaults
- Single `index.html`, all styles inline (no external CSS files)
- No Tailwind CDN — write raw CSS with CSS custom properties
- Google Fonts via `<link>` — Barlow Condensed + Barlow + DM Mono (default stack)
- Mobile-first responsive, breakpoints at 1024px and 768px
- Placeholder images only when no real asset exists: `https://placehold.co/WxH`

---

## Design Standards

### Typography
- Headings: Barlow Condensed 900, `line-height: 0.93–0.96`, `letter-spacing: -0.025em`
- Body: Barlow 400–500, `line-height: 1.65–1.72`
- Data / labels / mono: DM Mono 400–500, `letter-spacing: 0.1–0.18em`
- Never use the same font for headings and body
- Large heading font-size: `clamp(min, vw, max)` — never fixed px only

### Color System
- Never use default Tailwind palette (blue-500, indigo-600, etc.) as primary
- Define all colors as CSS variables in `:root` — no magic hex values in rules
- Dominant base color (dark or light) + 1–2 sharp accent colors
- Derive muted/dim variants as `rgba(accent, 0.1–0.15)` for surfaces

### Backgrounds & Depth
- Layer multiple radial gradients — never a flat solid background on sections
- Add grain texture via SVG `feTurbulence` filter on `body::before`, opacity ~0.025–0.03
- Z-plane system: base (`--obsidian`) → elevated (`--surface`) → floating (cards/overlays)
- Alternate section backgrounds subtly to create visual rhythm and separation

### Shadows
- Never flat `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`
- Use layered shadows: ambient + directional key + color-tinted glow
- Example: `0 2px 8px rgba(0,0,0,0.3), 0 0 24px rgba(59,130,246,0.15)`
- Cards: add `inset 0 1px 0 rgba(255,255,255,0.07)` for inner top highlight

### Spacing
- Use consistent spacing tokens — not arbitrary Tailwind steps
- Section padding: 120–128px vertical, 48–52px horizontal
- Never mix spacing units randomly — pick a scale and stick to it

### Animations
- Only animate `transform` and `opacity` — never layout or color properties
- Never `transition-all` — always specify exact properties
- Spring easing (interactive lifts): `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Smooth reveal easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Scroll reveals: `IntersectionObserver`, stagger via `transition-delay`
- Hero load: stagger elements via `setTimeout` (80ms base + 120–130ms per element)
- Float animation on mockups: `translateY` ±16–18px over 5–6s ease-in-out

### Interactive States
- Every clickable element must have: `hover` + `focus-visible` + `active`
- Hover: `translateY(-2px)` + shadow intensify
- Active: `scale(0.97) translateY(1px)`
- Focus-visible: `outline: 2px solid accent; outline-offset: 4px`

---

## Hard Rules
- No `transition-all` — ever
- No default Tailwind color palette as primary
- No flat single-layer shadows
- No placeholder images where real brand assets exist
- Do not stop after one screenshot pass — minimum two rounds
- Do not add features, sections, or content not in the reference or brief
- Do not improve or deviate from a provided reference design — match it exactly
- Never recreate a provided logo in SVG — always use the image file
- Never screenshot a `file:///` URL — always serve via localhost
