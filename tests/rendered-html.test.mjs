import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
  assert.match(html, /<title>Ral Angelo Lluisma \| Portfolio<\/title>/i);
  assert.match(html, /Developer \/ Embedded Systems &amp; IoT Engineer/);
  assert.match(html, /Project-first portfolio/);
  assert.match(html, /Featured Projects/);
  assert.match(html, /Filter by discipline\./);
  assert.match(html, /Smart Shelf/);
  assert.match(html, /Project Details/);
  assert.match(html, /mailto:hello@example\.com/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
  assert.doesNotMatch(html, /react-loading-skeleton/);
});

test("keeps portfolio content and metadata aligned", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /title:\s*"Ral Angelo Lluisma \| Portfolio"/);
  assert.match(layout, /embedded systems, IoT, AI experiments/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);

  assert.match(page, /const technicalAreas = \[/);
  assert.match(page, /const skills = \[/);
  assert.match(page, /const experience = \[/);
  assert.match(page, /ProjectExplorer/);
  assert.match(page, /Featured Projects/);
  assert.match(page, /id="about"/);
  assert.match(page, /id="skills"/);
  assert.match(page, /id="projects"/);
  assert.match(page, /id="experience"/);
  assert.match(page, /id="contact"/);
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
  assert.match(projectData, /featured: true/);
  assert.match(assetHelper, /import\.meta\.glob/);
  assert.match(assetHelper, /public\/projects/);
  assert.match(detailPage, /generateStaticParams/);
  assert.match(detailPage, /ProjectCarousel/);
  assert.match(detailPage, /My Contribution/);
  assert.match(detailPage, /Technologies Used/);
});
