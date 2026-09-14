import assert from "node:assert/strict";
import { access, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Ral Angelo Lluisma \| Technical Portfolio<\/title>/i);
  assert.match(html, /Computer Applications Graduate • Technical Generalist/);
  assert.match(html, /Ral Angelo Lluisma/);
  assert.match(html, /Selected Work/);
  assert.match(html, /Projects/);
  assert.match(html, /IoT Smart Shelf Stock Monitoring System/);
  assert.match(html, /Public Artist Website/);
  assert.match(html, /https:\/\/github\.com\/Ralimations/);
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/ral-angelo-lluisma/);
  assert.match(html, /Project Details/);
  assert.match(html, /Ral Angelo Lluisma portfolio/);
  assert.doesNotMatch(html, /hello@example\.com/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
  assert.doesNotMatch(html, /react-loading-skeleton/);
});

test("keeps portfolio content and metadata aligned", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /title:\s*"Ral Angelo Lluisma \| Technical Portfolio"/);
  assert.match(layout, /Computer Applications graduate and technical generalist/);
  assert.match(layout, /software, web, mobile, AI\/ML, automation/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /@openai\/sites-vite-plugin/);

  assert.match(page, /const skills = \[/);
  assert.match(page, /const experience = \[/);
  assert.match(page, /ProjectExplorer/);
  assert.match(page, /AI in My Workflow/);
  assert.match(page, /Implementation Mindset/);
  assert.match(page, /id="about"/);
  assert.match(page, /id="skills"/);
  assert.match(page, /id="projects"/);
  assert.match(page, /id="experience"/);
  assert.match(page, /id="contact"/);
  assert.doesNotMatch(page, /Technical disciplines|Featured builds|Project scan target|Contribution focused/);
  assert.doesNotMatch(page, /SkeletonPreview|react-loading-skeleton/);
  assert.doesNotMatch(packageJson, /"react-loading-skeleton"/);
});

test("keeps project data content-driven and asset-folder aware", async () => {
  const [projectData, assetHelper, detailPage] = await Promise.all([
    readFile(new URL("../app/data/projects.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/lib/project-assets.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/projects/[slug]/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(projectData, /projectCategories/);
  assert.match(projectData, /assetFolder: "smart-shelf"/);
  assert.match(projectData, /assetFolder: "ralskies-showcase"/);
  assert.match(projectData, /demoUrl: "https:\/\/ralskies\.vercel\.app\/"/);
  assert.match(projectData, /featured: true/);
  assert.match(assetHelper, /generatedProjectMediaManifest/);
  assert.doesNotMatch(assetHelper, /images:\s*\[/);
  assert.match(detailPage, /generateStaticParams/);
  assert.match(detailPage, /ProjectCarousel/);
  assert.match(detailPage, /My Contribution/);
  assert.match(detailPage, /Technologies Used/);
});

test("keeps local project media scaffolding aligned", async () => {
  const [projectData, hostingConfig, mediaReadme, dataReadme, viteConfig] = await Promise.all([
    readFile(new URL("../app/data/projects.ts", import.meta.url), "utf8"),
    readFile(new URL("../.openai/hosting.json", import.meta.url), "utf8"),
    readFile(new URL("../public/projects/README.md", import.meta.url), "utf8"),
    readFile(new URL("../app/data/README.md", import.meta.url), "utf8"),
    readFile(new URL("../vite.config.ts", import.meta.url), "utf8"),
  ]);

  const assetFolders = [...projectData.matchAll(/assetFolder:\s*"([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(assetFolders).size, assetFolders.length);
  assert.ok(assetFolders.length >= 4);

  assert.doesNotMatch(hostingConfig, /project_id|site_id/i);
  assert.doesNotMatch(viteConfig, /@openai\/sites-vite-plugin|sites\(\)/);
  assert.match(viteConfig, /\*\*\/\.qa\/\*\*/);
  assert.match(mediaReadme, /Project folders in this directory are matched to `assetFolder` values/);
  assert.match(dataReadme, /`projects\.ts` is the source of truth/);

  await Promise.all(
    assetFolders.map((folder) =>
      access(new URL(`../public/projects/${folder}/gallery/.gitkeep`, import.meta.url)),
    ),
  );
});

test("generates project media manifest from filesystem folders", async () => {
  const { generateProjectMediaManifest } = await import("../scripts/generate-project-media-manifest.mjs");
  const testRoot = path.join(tmpdir(), `portfolio-media-${process.pid}-${Date.now()}`);
  const projectsRoot = path.join(testRoot, "projects");
  const outputPath = path.join(testRoot, "project-media-manifest.generated.ts");

  try {
    await mkdir(path.join(projectsRoot, "smart-shelf", "gallery"), { recursive: true });
    await writeFile(path.join(projectsRoot, "smart-shelf", "cover.webp"), "cover");
    await writeFile(path.join(projectsRoot, "smart-shelf", "gallery", "02-dashboard.webp"), "two");
    await writeFile(path.join(projectsRoot, "smart-shelf", "gallery", "01-hardware.webp"), "one");

    const manifest = await generateProjectMediaManifest({ projectsRoot, outputPath });
    const generatedFile = await readFile(outputPath, "utf8");

    assert.deepEqual(manifest["smart-shelf"], {
      cover: "/projects/smart-shelf/cover.webp",
      gallery: [
        "/projects/smart-shelf/gallery/01-hardware.webp",
        "/projects/smart-shelf/gallery/02-dashboard.webp",
      ],
    });
    assert.match(generatedFile, /generatedProjectMediaManifest/);
  } finally {
    await rm(testRoot, { recursive: true, force: true });
  }
});
