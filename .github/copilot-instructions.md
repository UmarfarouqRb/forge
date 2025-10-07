# Copilot Instructions for Forge Codebase

## Overview
This project is a full-stack web application using React (TypeScript) with Vite for the frontend and Node.js/Express for the backend. The codebase is organized for rapid feature development and modularity.

## Architecture
- **Frontend**: Located in `src/`, built with React + TypeScript. Pages are in `src/pages/`, components in `src/components/`, and context/providers in their respective folders.
- **Backend**: Located in `backend/`, with main entry in `backend/server.js` and route logic in files like `backend/users.js`.
- **Public Assets**: Static files (images, CSS, HTML) are in `public/`.
- **Configuration**: Vite config (`vite.config.ts`), TypeScript configs (`tsconfig*.json`), ESLint config (`eslint.config.js`).

## Developer Workflows
- **Start Frontend**: `npm run dev` (uses Vite for HMR)
- **Build Frontend**: `npm run build`
- **Start Backend**: `node backend/server.js` (or use nodemon for auto-reload)
- **Lint**: `npm run lint` (configured via `eslint.config.js`)
- **Type Checking**: Uses `tsc` with `tsconfig.app.json` and `tsconfig.node.json` for separate frontend/backend configs.

## Patterns & Conventions
- **Component Structure**: Use functional components and hooks. Shared UI in `src/components/`, page logic in `src/pages/`.
- **Context**: App-wide state (e.g., theme) via React Context in `src/contexts/`.
- **Data**: Static data in `src/data/`, hooks in `src/hooks/`.
- **Styling**: CSS modules per component/page (e.g., `Card.css`, `Landing.css`).
- **Routing**: Page-level routing handled in `src/pages/` (see `main.tsx`).
- **Backend API**: REST endpoints defined in `backend/` files, consumed by frontend via fetch/axios.

## Integration Points
- **Frontend/Backend Communication**: API calls from React to Express backend (update endpoints in `backend/server.js` as needed).
- **External Dependencies**: Vite, React, TypeScript, ESLint, Node.js, Express.

## Examples
- To add a new page: create a `.tsx` file in `src/pages/`, add route in `main.tsx`.
- To add a backend route: update `backend/server.js` and/or add a new file in `backend/`.
- To add global state: use React Context in `src/contexts/` and wrap in `main.tsx`.

## References
- See `README.md` for Vite/React/ESLint setup details.
- See `vite.config.ts` and `eslint.config.js` for build/lint customization.
- See `backend/server.js` for backend entry and routing.

---
For questions or unclear conventions, ask for clarification or review recent changes in the referenced files.