# Nové Vita — website

Static site (plain HTML + JS, no build step). Every page is a self-contained
`.html` file rendered client-side by `support.js`.

## Deploy on Vercel

1. Push this folder's contents to a GitHub repo (root of the repo = this folder).
2. In Vercel: New Project → import the repo → Framework Preset: **Other** (no build command, no output directory needed — Vercel serves the static files as-is).
3. Deploy. `index.html` (a copy of the homepage) is served at `/`.

## Structure

- `index.html` — homepage (same as `Nove Vita Homepage.dc.html`)
- `Nove Vita - *.dc.html` — all other pages (Journal, Guidance, FAQ, Contact, legal pages, News articles)
- `Retatrutide Pen Calculator (Standalone).html` / `Vial & Syringe Calculator (Standalone).html` — the two calculator tools
- `journal-data.js` / `news-data.js` — shared content data for Journal and What's New
- `image-slot.js` / `insulin-syringe.js` / `support.js` — shared runtime scripts, required by the pages
- `uploads/` — images used across the site
- `.image-slots.state.json` — saved image placements for slots without an explicit file
- `sitemap.xml` / `robots.txt` — SEO files (domain: novevita.nl)

## Notes

- Internal links use relative `.html` filenames (with spaces) — keep filenames unchanged when deploying, or update links if you rename files.
- No environment variables or server-side code are required.
