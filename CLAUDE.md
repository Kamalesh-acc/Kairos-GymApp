# CLAUDE.md — Kairos Website

## Every Session
- Invoke the `frontend-design` skill before writing any frontend code.

## Dev Server
- Start: `node serve.mjs` → `http://localhost:3000`
- Don't start a second instance if already running.

## Screenshots
- `node screenshot.mjs http://localhost:3000 [label]`
- Chrome: `C:\Program Files\Google\Chrome\Application\chrome.exe`
- Saves to `./temporary screenshots/screenshot-N[-label].png`
- After shooting: read the PNG with the Read tool and compare visually.
- Do at least 2 rounds. Fix mismatches before reporting done.

## Output Standard
- Single `index.html`, all styles inline. Mobile-first.
- Check `brand_assets/` first — use real logo, colors, and images, never placeholders.
- Fonts: Barlow Condensed (headings 900) + Barlow + DM Mono (data/labels).
- Brand colors: Obsidian `#0B0F14` · Blue `#3B82F6` · Green `#22C55E` · Red `#EF4444`

## Hard Rules
- No `transition-all`. No default Tailwind palette.
- Every interactive element needs hover + focus-visible + active states.
- Only animate `transform` and `opacity`.
- Grain texture, layered gradients, and z-plane depth on every design.
