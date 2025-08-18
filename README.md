# Personal Site Redesign

A minimalist, responsive single‑page site with sections for About, CV, Publications, GitHub Projects, Books, Teaching Materials, and Contact.

## How to use

1. **Copy your content**:
   - Replace `img/profile.jpg` with your photo (optional).
   - Put your CV at `cv/cv.pdf` (the "Download CV" button will work).
   - Edit `data/books.json` and `data/publications.json` with your data.

2. **Teaching materials**:
   - Add files into `/materials` in your GitHub repo `danibacaicoa/danibacaicoa.github.io`.
   - The site lists them automatically using the GitHub Contents API (no server needed).

3. **Projects**:
   - The site fetches your public repos from GitHub and shows the top by stars.
   - To curate manually, set a JSON file and adjust `assets/js/main.js`.

4. **Customize**:
   - Colors, spacing, and corners are set via CSS variables in `assets/css/main.css`.
   - There’s a light/dark theme toggle; respects `prefers-color-scheme`.

5. **Accessibility & UX**:
   - Keyboard‑friendly with visible focus states.
   - Respectful of `prefers-reduced-motion` (animations are subtle and opt‑in via IntersectionObserver).
   - Semantic landmarks and headings.

6. **Deploy**:
   - If this is the `danibacaicoa.github.io` repo, push to `main` and enable GitHub Pages.
   - Or deploy anywhere static (Netlify, Vercel, GitHub Pages).

## Notes

- No build tools required; pure HTML/CSS/JS for easy maintenance.
- You can later move to a static generator (Hugo/Jekyll) if you want blogs or templating.
