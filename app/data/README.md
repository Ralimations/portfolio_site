# Project Data

`projects.ts` is the source of truth for portfolio project metadata.

Each project should keep:

- `id`, `slug`, and `assetFolder` aligned.
- `shortDescription` between roughly 15 and 40 words.
- `description` focused on what the project is and why it exists.
- `contributions` focused on what Ral personally worked on.
- `technologies` grouped only when grouping helps scanning.
- external URLs omitted when unavailable.

Media is not imported manually in project data. Add media under:

```text
public/projects/{assetFolder}/cover.webp
public/projects/{assetFolder}/gallery/
```

The asset discovery helper reads those folders at build time and falls back gracefully when images are missing.
