"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  getCategoryLabel,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/app/data/projects";
import type { ProjectMedia } from "@/app/lib/project-assets";
import { ProjectVisual } from "@/app/components/ProjectVisual";

type ProjectWithMedia = Project & {
  media: ProjectMedia;
};

type ProjectExplorerProps = {
  projects: ProjectWithMedia[];
};

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3" role="list" aria-label="Project filters">
        {projectCategories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={[
                "border-4 border-black px-4 py-3 text-sm font-black uppercase tracking-wider shadow-[5px_5px_0_0_#121212] transition duration-200 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#F0C020] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
                isActive ? "bg-[#F0C020] text-[#121212]" : "bg-white text-[#121212] hover:bg-[#F0F0F0]",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {category.shortLabel}
            </button>
          );
        })}
      </div>

      <p className="text-sm font-black uppercase tracking-[0.2em]" aria-live="polite">
        {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} shown
      </p>

      <div className="grid gap-7 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            className="group grid overflow-hidden border-4 border-black bg-white text-[#121212] shadow-[8px_8px_0_0_#121212] transition duration-200 hover:-translate-y-1"
          >
            <div className="aspect-[4/3] border-b-4 border-black">
              <ProjectVisual
                media={project.media}
                title={project.title}
                categoryLabel={getCategoryLabel(project.category)}
                priority={index < 3}
              />
            </div>
            <div className="grid gap-5 p-5">
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D02020]">
                  {getCategoryLabel(project.category)}
                </p>
                <p className="border-2 border-black bg-[#F0F0F0] px-2 py-1 text-xs font-black uppercase">
                  {project.year}
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-black uppercase leading-none">{project.title}</h3>
                <p className="mt-4 text-base font-medium leading-relaxed">{project.shortDescription}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies
                  .flatMap((group) => group.items)
                  .slice(0, 6)
                  .map((technology) => (
                    <span
                      key={technology}
                      className="border-2 border-black bg-[#F0F0F0] px-2 py-1 text-xs font-black uppercase"
                    >
                      {technology}
                    </span>
                  ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="justify-self-start border-4 border-black bg-[#1040C0] px-4 py-3 text-sm font-black uppercase tracking-wider text-white shadow-[5px_5px_0_0_#121212] transition duration-200 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#F0C020] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                Project Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
