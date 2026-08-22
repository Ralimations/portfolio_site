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
                "min-h-11 rounded-full border px-4 py-2 font-code text-xs uppercase tracking-[0.12em] transition-all duration-200 active:scale-[0.98]",
                isActive
                  ? "gradient-surface border-transparent text-white shadow-[var(--shadow-accent)]"
                  : "border-[var(--border)] bg-white text-[var(--muted-foreground)] hover:-translate-y-0.5 hover:border-[rgba(0,82,255,0.28)] hover:text-[var(--foreground)] hover:shadow-md",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {category.shortLabel}
            </button>
          );
        })}
      </div>

      <p className="font-code text-xs uppercase tracking-[0.15em] text-[var(--muted-foreground)]" aria-live="polite">
        {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} shown
      </p>

      <div className="grid gap-6 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            className="soft-card group grid overflow-hidden rounded-[1.5rem] text-[var(--foreground)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
          >
            <div className="aspect-[4/3] overflow-hidden border-b border-[var(--border)]">
              <ProjectVisual
                media={project.media}
                title={project.title}
                categoryLabel={getCategoryLabel(project.category)}
                priority={index < 3}
              />
            </div>
            <div className="grid gap-5 p-5">
              <div className="flex items-start justify-between gap-4">
                <p className="font-code text-xs uppercase tracking-[0.15em] text-[var(--accent)]">
                  {getCategoryLabel(project.category)}
                </p>
                <p className="rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-1 text-xs font-semibold text-[var(--muted-foreground)]">
                  {project.year}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">{project.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted-foreground)]">{project.shortDescription}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies
                  .flatMap((group) => group.items)
                  .slice(0, 6)
                  .map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-1.5 text-xs font-medium text-[var(--muted-foreground)]"
                    >
                      {technology}
                    </span>
                  ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="group/link justify-self-start rounded-xl px-4 py-3 text-sm font-semibold text-[var(--accent)] transition hover:bg-[rgba(0,82,255,0.06)]"
              >
                Project Details <span className="inline-block transition group-hover/link:translate-x-1" aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
