# Framing the Problem — workshop series site

A static, three-page site for the **Framing the Problem** workshop series:

- `index.html` — series hub
- `cogsci2026.html` — CogSci 2026 workshop (Rio de Janeiro, 22 July 2026)
- `ccn2026.html` — CCN 2026 community event (NYU, 3–6 August 2026)

## Stack

Zero build step. The pages load React + Babel from a CDN and transpile JSX in the browser. This keeps the repo small and editable, and works on any static host.

```
site/
├─ index.html          ← series hub
├─ cogsci2026.html     ← CogSci event page
├─ ccn2026.html        ← CCN event page
├─ styles.css          ← all visual styles (single source of truth)
├─ app.jsx             ← React components + page-mount helpers
├─ data.jsx            ← content (speakers, programme, questions, organisers)
└─ photos/             ← speaker + organiser portraits (jpg/webp)
```

## Editing content

Almost everything lives in **`data.jsx`**:

- `SITE` — series title, subtitle, intro paragraphs, contact
- `EVENTS.cogsci` / `EVENTS.ccn` — title, date, city, venue, description, speakers, programme
- `QUESTIONS` — the four cross-cutting questions and annotated readings
- `ORGANISERS` — organiser list (used on the hub *and* on each event page)

Speaker / organiser photos live in `photos/`. Reference them as `photos/<name>.jpg`. Use square images, ~400×400px, JPG or WebP.

To change the accent colour: edit the inline `<style>` block in each HTML file (`.d6-root { --accent: #b4431a; }`) — or move that line into `styles.css` if you want it global.

## Running locally

Open any of the HTML files in a browser. For most browsers the inline `<script type="text/babel" src="…">` imports require a real HTTP origin (`file://` is fine for simple cases but some browsers refuse). A one-liner local server:

```bash
cd site
python3 -m http.server 8080
# → http://localhost:8080/
```

## Deploying

Anywhere that serves static files works:

- **GitHub Pages** — push to `main`, enable Pages on the repo settings → root.
- **Netlify / Vercel / Cloudflare Pages** — point at the repo. No build command. Publish directory: `site/` (or move the contents to the repo root).
- **A regular web server (Apache / nginx / Caddy)** — drop the folder into the document root.

There is no build step and no node dependency.

## If you'd rather pre-compile (optional)

For faster page loads, run the JSX through Babel once at build time and ship plain JS:

```bash
npm i -D @babel/cli @babel/preset-react
npx babel app.jsx --presets @babel/preset-react -o app.js
npx babel data.jsx --presets @babel/preset-react -o data.js
```

Then in each HTML file:

- replace `https://unpkg.com/@babel/standalone@7.29.0/babel.min.js` (delete the line)
- change `<script type="text/babel" src="data.jsx">` → `<script src="data.js">`
- change `<script type="text/babel" src="app.jsx">` → `<script src="app.js">`
- change the small inline `<script type="text/babel">` to plain `<script>`

## Fonts

The site loads Cormorant Garamond + JetBrains Mono from Google Fonts. Avenir is used for body copy when available (it's preinstalled on macOS / iOS); other systems fall back to Segoe UI / system-ui.
