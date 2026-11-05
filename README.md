# Moodle for Clubs and Societies Guide

A simple, static, multi-page guide that shows AUB students what they can do on Moodle through clubs and societies.

Plain HTML, CSS, and JavaScript. No framework, no build step, no backend, no cookies, no analytics.

## Files

- `index.html` - home page
- `why.html`, `pipeline.html`, `inside.html`, `features.html` - the other pages
- `styles.css` - the look (AUB maroon is the `--aub-maroon` variable at the top)
- `script.js` - the feature list (at the top), plus the feature search and filters, the section tabs, and the mobile menu
- `CONTENT_TODO.md` - items for OSA to review

## Preview

Open `index.html` in a browser. No server is needed.

## Edit the content

- **Features:** edit the `FEATURES` array at the top of `script.js`. Each item has `name`, `category`, `meaning`, and `example`. The `category` must match one of the names in the `CATEGORIES` list just above it.
- **Everything else:** edit the page it appears on. Mission and navigation tiles are in `index.html`, the reasons in `why.html`, the steps and event flow in `pipeline.html`, club sections in `inside.html`. The header and footer are repeated in each page, so change them in all five. The feedback email link is in the help box on `index.html` and in every footer.
- **Colour:** change `--aub-maroon` in `styles.css`.

All paths are relative, so the site works from a folder, from `file://`, and on GitHub Pages.

## Publish on GitHub Pages

1. Push these files to the root of the `main` branch of a GitHub repository.
2. In the repository go to Settings > Pages.
3. Under "Build and deployment", choose Deploy from a branch.
4. Select `main` and `/(root)`, then Save.
5. After a minute, the site is live at the URL GitHub shows on that page.

## Notes

- `source/` (private reference documents) is listed in `.gitignore` and must never be committed.
- The only link to Moodle is the "Open Moodle" button (https://lms.aub.edu.lb).
