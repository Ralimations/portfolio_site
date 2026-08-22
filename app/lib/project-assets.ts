/// <reference types="vite/client" />

import type { Project } from "@/app/data/projects";

export type ProjectImage = {
  src: string;
  alt: string;
  name: string;
};

export type ProjectMedia = {
  cover?: ProjectImage;
  gallery: ProjectImage[];
};

const projectImageModules = import.meta.glob("../../public/projects/**/*.{webp,avif,jpg,jpeg,png}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function toPublicPath(modulePath: string) {
  const normalized = modulePath.replaceAll("\\", "/");
  const publicIndex = normalized.indexOf("/public/");

  if (publicIndex === -1) {
    return normalized;
  }

  return normalized.slice(publicIndex + "/public".length);
}

function imageNameFromPath(path: string) {
  const fileName = path.split("/").pop() ?? "project image";
  return fileName.replace(/\.[^.]+$/, "").replace(/^\d+[-_]/, "").replaceAll("-", " ");
}

function buildImage(path: string, src: string, project: Project): ProjectImage {
  return {
    src,
    alt: `${project.title} ${imageNameFromPath(path)}`,
    name: imageNameFromPath(path),
  };
}

export function getProjectMedia(project: Project): ProjectMedia {
  const folder = `/projects/${project.assetFolder}/`;
  const entries = Object.entries(projectImageModules)
    .map(([path, src]) => ({ path: toPublicPath(path), src }))
    .filter(({ path }) => path.startsWith(folder))
    .sort((a, b) => a.path.localeCompare(b.path, undefined, { numeric: true }));

  const coverEntry = entries.find(({ path }) => /\/cover\.(webp|avif|jpe?g|png)$/i.test(path));
  const galleryEntries = entries.filter(({ path }) => path.includes(`${folder}gallery/`));

  const cover = coverEntry ? buildImage(coverEntry.path, coverEntry.src, project) : undefined;
  const gallery = [
    ...(cover ? [cover] : []),
    ...galleryEntries
      .filter(({ path }) => path !== coverEntry?.path)
      .map(({ path, src }) => buildImage(path, src, project)),
  ];

  return {
    cover: cover ?? (gallery[0] ? gallery[0] : undefined),
    gallery,
  };
}

export function getProjectsWithMedia(projects: Project[]) {
  return projects.map((project) => ({
    ...project,
    media: getProjectMedia(project),
  }));
}
