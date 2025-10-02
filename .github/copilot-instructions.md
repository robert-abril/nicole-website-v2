# Copilot Instructions for `nicole-website-v2`

## Project Overview

- This is a React single-page application (SPA) bootstrapped with Create React App.
- The main entry point is `src/index.js`, which loads `App.js`.
- UI is organized into `components` (reusable widgets) and `containers` (page-level sections).
- Static assets (images, icons) are in `public/` and `src/assets/`.

## Key Architectural Patterns

- **Component Structure:**
  - `src/components/` contains UI elements (e.g., `navbar`, `reel`).
  - `src/containers/` contains larger sections (e.g., `header`, `aboutme`, `footer`, `reels`).
  - Each component/section has its own folder with `.jsx` and `.css` files.
  - All components are imported and re-exported via `components/index.js` and `containers/index.js` for easier imports.
- **Styling:**
  - CSS is scoped per component/section (e.g., `navbar/navbar.css`).
  - Global styles are in `src/index.css` and `src/App.css`.
- **Assets:**
  - Images for banners and UI are in `src/assets/` and referenced in components.

## Developer Workflows

- **Start Development Server:**
  - `npm start` (runs on http://localhost:3000)
- **Run Tests:**
  - `npm test` (Jest, watch mode)
- **Build for Production:**
  - `npm run build` (outputs to `build/`)
- **Linting:**
  - Standard Create React App linting; errors shown in browser/console.

## Project-Specific Conventions

- **File Naming:**
  - Use PascalCase for React components (e.g., `Navbar.jsx`, `Aboutme.jsx`).
  - CSS files match their component/section name and are colocated.
- **Imports:**
  - Prefer importing from `components/index.js` and `containers/index.js` for cleaner paths.
- **No Custom Routing:**
  - SPA structure; navigation handled within components (no React Router).
- **No API Integration:**
  - All data and assets are local; no backend or external API calls.

## Integration Points & Dependencies

- **External Libraries:**
  - React, ReactDOM (from Create React App)
  - No custom middleware, state management, or third-party UI libraries detected.
- **Manifest & PWA:**
  - `public/manifest.json` for PWA support (default from CRA)

## Example Patterns

- To add a new section:
  1. Create a folder in `src/containers/` with `.jsx` and `.css` files.
  2. Export the new section in `containers/index.js`.
  3. Import and use it in `App.js`.
- To add a new component:
  1. Create a folder in `src/components/`.
  2. Export in `components/index.js`.
  3. Use in containers or `App.js`.

## Key Files

- `src/App.js` – Main app layout and composition.
- `src/components/` – Reusable UI widgets.
- `src/containers/` – Page sections.
- `public/index.html` – HTML template.
- `README.md` – Basic workflow and commands.

---

If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.
