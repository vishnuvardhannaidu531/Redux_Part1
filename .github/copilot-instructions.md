# Copilot Instructions for Redux (refdux) project

This is a minimal **React + Vite** starter application with Redux libraries installed but not yet wired into the component tree. Use this document to bring an AI agent up to speed quickly.

## Big-picture architecture 🔍

- Single-page application built with **React 19** and rendered via `src/main.jsx`.
- UI lives entirely under `src/`:
  - `App.jsx` is the root component; additional views/components are added alongside it (e.g. `Counting.jsx`).
  - Styles are plain CSS files (`src/App.css`, `src/index.css`). No CSS modules or pre‑processors are configured.
  - Static assets go in `src/assets`; anything placed in `public/` is served at the root (`/`).
- No server code – everything is compiled by Vite in `vite.config.js` which only applies the `@vitejs/plugin-react` plugin.
- Redux dependencies (`redux`, `@reduxjs/toolkit`, `react-redux`) are listed in `package.json` but there is no store yet. Typical pattern is to add a `src/store.js` or `features/` folder when needed.
- ESLint configuration lives at the repo root in `eslint.config.js`; it uses the flat config API and enables React/Hook rules.

## Key developer workflows 🛠

Execute commands from the project root (where `package.json` resides):

```bash
npm install            # first time or after changing deps
npm run dev            # start Vite dev server with HMR
npm run build          # produce production assets under `dist/`
npm run preview        # locally preview the built app
npm run lint           # run ESLint against all .js/.jsx files
```

There are no automated tests or CI scripts configured. Add them if the project grows.

## Conventions & patterns ✅

- All React components use the `.jsx` extension even though the `type` in `package.json` is `module`.
- Import paths are relative from the current file; Vite allows root‑relative imports for public assets, e.g. `import viteLogo from '/vite.svg'`.
- Keep component logic and markup together—no special container/presenter split is enforced.
- `Counting.jsx` is an example placeholder for a feature/Redux slice; it currently returns an empty fragment.
- When introducing Redux, follow the Redux Toolkit pattern (`createSlice`, `configureStore`) and wrap `<App />` in `<Provider store={...}>` inside `src/main.jsx`.
- Use React hooks (`useState`, `useEffect`, `useSelector`, `useDispatch`) as needed; ESLint hooks rules are active.

## External dependencies & integration 🔗

- **React** & **React DOM** (version 19)
- **Vite** (v7) with the official React plugin for JSX support and Fast Refresh
- **Redux toolkit**, **redux**, and **react-redux** are already installed; you can reference `package-lock.json` for exact versions.

No other runtime integrations (APIs, auth, etc.) are present.

## Notes for AI contributors 💡

- Since the codebase is tiny, always look at `src/App.jsx` and `src/main.jsx` when asked about app startup or rendering logic.
- New features should live under `src/` and follow the existing naming/style.
- There is no backend, so focus suggestions on frontend code and Vite configuration.
- When adding global configuration (e.g. new lint rules, PostCSS, routing), update the README as well as this instructions file.

> After writing or modifying any code, make sure the dev server (`npm run dev`) still starts without errors and that ESLint passes (`npm run lint`).

---

If anything is unclear or you need more detail on a workflow or pattern, let me know and I can expand this guide.