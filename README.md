# CHRONOVA — Watch Showroom

Static showcase site built with Vite and vanilla JavaScript (no framework, no runtime dependencies).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/

```

- Edit products in `src/data/watches.js`.
- Components live in `src/components/`, styles in `src/styles/`.
- Watch images are generated as SVG by `src/utils/watchSvg.js` (no image files).

## Deploy to GitHub Pages

`vite.config.js` sets `base: '/chronova/'`. If the repository name changes, change `base` to match.
Push to `main`; the workflow in `.github/workflows/deploy.yml` builds and publishes `dist/`.
In the repo: Settings → Pages → Source → **GitHub Actions**.
