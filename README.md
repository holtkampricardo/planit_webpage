# Planit — Launch Webpage

Static landing page for [Planit](https://www.getplanit.app/), a social planning app by Buildit Labs.

## Features

- Responsive design with custom CSS (no build step)
- Waitlist form via [Formspree](https://formspree.io)
- Spanish / English language switcher
- Legal pages (privacy, terms) and in-page modals
- SEO: structured data, sitemap, Open Graph (`assets/og-image.jpg`)

## Project structure

| File | Purpose |
|------|---------|
| `index.html` | Main landing page |
| `index.css` | Styles |
| `site.js` | i18n, form, interactions |
| `legal.js` | Legal modal content (EN/ES) |
| `privacidad.html` / `terminos.html` | Standalone legal pages |
| `manifest.json` | Web app manifest |
| `sitemap.xml` | Search engine sitemap |
| `assets/og-image.jpg` | Open Graph / Twitter preview (1200×800) |
| `assets/icon-48.png` | Favicon for Google Search (circular-safe monogram) |
| `assets/icon.png` | PWA / high-res icon (512×512) |

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

## Deploy

Hosted on **GitHub Pages** at `www.getplanit.app` (see `CNAME`).

Push to `main` to deploy. After changes, submit the sitemap in [Google Search Console](https://search.google.com/search-console).

## Configuration

Edit `site.js`:

- `formspreeEndpoint` — your Formspree form URL
- `contactEmail` / `supportEmail` — contact address shown in errors
