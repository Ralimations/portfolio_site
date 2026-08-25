import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientRoot = path.join(root, "dist", "client");
const serverUrl = new URL("../dist/server/index.js", import.meta.url);
serverUrl.searchParams.set("staticExport", Date.now().toString());
const { default: worker } = await import(serverUrl.href);

async function assetResponse(request) {
  const url = new URL(request.url);
  const relativePath = decodeURIComponent(url.pathname).replace(/^\//, "");
  const filePath = path.join(clientRoot, relativePath);

  try {
    const contents = await readFile(filePath);
    return new Response(contents);
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

async function renderRoute(route) {
  const response = await worker.fetch(
    new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: assetResponse } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) {
    throw new Error(`Static export failed for ${route}: ${response.status}`);
  }

  const outputDirectory = route === "/"
    ? clientRoot
    : path.join(clientRoot, route.replace(/^\//, ""));
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(path.join(outputDirectory, "index.html"), await response.text());
}

const projectSource = await readFile(path.join(root, "app", "data", "projects.ts"), "utf8");
const projectSlugs = [...projectSource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);

await renderRoute("/");
await Promise.all(projectSlugs.map((slug) => renderRoute(`/projects/${slug}`)));

console.log(`Exported ${projectSlugs.length + 1} static routes to dist/client`);
