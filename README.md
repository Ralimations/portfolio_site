# Ral Angelo Lluisma Portfolio

Minimalist Modern developer portfolio built with Vinext, Vite, React, and Tailwind CSS.

The project is intended to be maintained locally and deployed through:

```text
GitHub -> Vercel
```

Do not use this repository to create or publish an OpenAI Sites deployment.

## Prerequisites

- Node.js `>=22.13.0`
- npm

## Local Development

```bash
npm install
npm run dev
```

The local dev server runs at:

```text
http://localhost:3000/
```

## Useful Commands

- `npm run dev`: generate the project media manifest and start local development
- `npm run media:generate`: refresh the generated project media manifest
- `npm run build`: generate media metadata and build the site
- `npm run lint`: generate media metadata and run ESLint
- `npm test`: build the site and run rendered HTML checks

## Project Media Workflow

Project metadata lives in:

```text
app/data/projects.ts
```

Project images live in:

```text
public/projects/{assetFolder}/
```

Recommended folder shape:

```text
public/projects/smart-shelf/
├── cover.webp
└── gallery/
    ├── 01.webp
    ├── 02.webp
    └── 03.webp
```

The media manifest is generated from the filesystem. To add gallery media:

1. Drop the image into the matching `gallery/` folder.
2. Use filename order to control carousel order.
3. Refresh the dev server or rebuild.

Project data only needs the asset folder reference:

```ts
assetFolder: "smart-shelf"
```

The app derives cover and gallery images automatically.

## Media Fallbacks

- `cover.webp` exists: used for project cards and first carousel image.
- No cover but gallery exists: first gallery image becomes the card cover.
- No media: the built-in project placeholder renders.
- One image: carousel controls stay hidden.
- Multiple images: carousel controls and swipe navigation are enabled.

Supported image formats are `.webp`, `.avif`, `.jpg`, `.jpeg`, and `.png`.
