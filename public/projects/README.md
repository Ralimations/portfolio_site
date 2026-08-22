# Project Media

Project folders in this directory are matched to `assetFolder` values in `app/data/projects.ts`.

Workflow:

1. Add a project folder named after the project asset folder.
2. Add `cover.webp` for card and preview imagery when available.
3. Add additional images to `gallery/`.
4. Name gallery images in display order, such as `01-overview.webp`, `02-dashboard.webp`, and `03-testing.webp`.
5. Refresh the dev server or run `npm run build`.

The app generates `app/data/project-media-manifest.generated.ts` from this folder. Do not edit that generated file directly.

Supported formats:

- `.webp`
- `.avif`
- `.jpg`
- `.jpeg`
- `.png`

If a folder or image is missing, the app renders a built-in placeholder instead of crashing.
