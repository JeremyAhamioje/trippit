# Trippit

A Next.js 15 (App Router) trip-planning website. React 18, TypeScript,
Tailwind CSS, Radix UI. The `/planner` page uses a Genkit + Google Gemini
AI flow to generate personalized itineraries.

## Requirements

- Node.js 18.18+ (Node 20 LTS recommended)
- npm 9+

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:9002

To use the AI planner on `/planner`, add a Gemini API key:

```bash
cp .env.example .env
# edit .env -> GEMINI_API_KEY=your_key   (get one at https://aistudio.google.com/apikey)
```

## A note on `node_modules`

`npm install` creates a `node_modules` folder with tens of thousands of
files. This is normal for every Node project. It is already git-ignored,
and `.vscode/settings.json` here excludes it from VS Code's file watcher
and search so the editor stays fast.

To delete the project quickly, remove `node_modules` from a terminal
first (this is far faster than the file explorer):

- Windows:  `rmdir /s /q node_modules`
- macOS/Linux:  `rm -rf node_modules`

Or from anywhere: `npx rimraf node_modules`

## Scripts

- `npm run dev`        — dev server (Turbopack) on port 9002
- `npm run build`      — production build
- `npm run start`      — serve the production build
- `npm run lint`       — lint
- `npm run typecheck`  — TypeScript check, no emit
- `npm run genkit:dev` — Genkit dev UI for the AI flow

## Structure

```
src/
  ai/          Genkit setup + trip-itinerary AI flow
  app/         App Router pages and layout
  components/  UI, planner and section components
  hooks/       custom React hooks
  lib/         data and utilities
```

Exported from Firebase Studio. The Firebase Studio / IDX scaffolding and the
unused `firebase`, `@genkit-ai/next` and `patch-package` packages were removed.
