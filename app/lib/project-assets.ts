import type { Project } from "@/app/data/projects";
import { generatedProjectMediaManifest } from "@/app/data/project-media-manifest.generated";

export type ProjectImage = {
  src: string;
  alt: string;
  name: string;
};

export type ProjectMedia = {
  cover?: ProjectImage;
  gallery: ProjectImage[];
};

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
  const manifestEntry = generatedProjectMediaManifest[project.assetFolder];
  const cover = manifestEntry?.cover ? buildImage(manifestEntry.cover, manifestEntry.cover, project) : undefined;
  const gallery = [
    ...(cover ? [cover] : []),
    ...(manifestEntry?.gallery ?? [])
      .filter((path) => path !== manifestEntry?.cover)
      .map((path) => buildImage(path, path, project)),
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
