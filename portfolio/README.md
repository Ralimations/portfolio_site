# Ral Angelo Lluisma — portfolio

Next.js, React, TypeScript, structured CSS and a lightweight Canvas background. No animation-library dependency. The application lives in `portfolio/` within the main Git repository.

## Develop

Node 22.13+ is required. From this directory, run `npm ci`, then `npm run dev` (port 5173). Run `npm run build` for a Next.js production build and `npm start` to serve it (port 3000). `npx tsc --noEmit` checks types and `npm run lint` checks source.

## Content

- `data/profile.ts`: verified profile, contact links and grouped technologies.
- `data/projects.ts`: featured projects and case studies, based on the supplied CV and earlier portfolio records in the parent repository’s Git history.
- `public/ral-angelo-lluisma-cv.pdf`: owner-approved downloadable CV.
- `app/projects/[slug]/page.tsx`: data-driven case-study route.

The GitHub account had no public repositories at implementation time. Project-specific source/demo URLs are intentionally optional. Add only verified links. Case-study next steps are explicitly proposed evaluations, not claimed outcomes. Detailed project challenges, screenshots, benchmarks and AutoMatTsek implementation notes remain content TODOs until supplied by the owner.

## Interaction and accessibility

The intro runs once per session. Direct section links and reduced-motion preferences bypass it. Enter submits immediately; Escape and Skip open the portfolio. Typing manually cancels the demonstration. The portfolio is server-rendered and remains accessible without JavaScript. The cursor is an inert visual ring around the native pointer, preserving browser pointer behavior. Motion work uses requestAnimationFrame, stops while idle or hidden, and is disabled for reduced motion/touch.

## Publication

### Manual Vercel deployment

1. Commit and push from the parent `portfolio_site` repository. `portfolio/` must be a normal directory, not a Git submodule.
2. Import `Ralimations/portfolio_site` into Vercel, or update the existing project.
3. Set **Root Directory** to `portfolio` and **Framework Preset** to **Next.js**.
4. Use **Build Command** `npm run build`, **Install Command** `npm ci`, and the default Next.js output directory. Remove any old `dist` or `out` override. Use Node.js 22.x or 24.x.
5. Optionally set `SITE_URL` to your final HTTPS domain. Otherwise metadata uses Vercel’s production domain automatically. No other environment variables are required.
6. Deploy. Check `/`, `/projects/guided-pose`, and `/ral-angelo-lluisma-cv.pdf`.

Vercel configuration is in `vercel.json` in this application directory. No backend contact form or collection of visitor data is included; email opens the visitor’s email application.

### Previous Sites deployment

The previous Cloudflare/Vinext configuration is retained for compatibility. Use `npm run dev:sites`, `npm run build:sites`, and `npm run start:sites` only for that target. `.openai/hosting.json` identifies the earlier private Sites preview; it does not control Vercel.
