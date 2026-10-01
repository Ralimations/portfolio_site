import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectThumbnail } from "./ProjectThumbnail";

export function ProjectCard({ project }: { project: Project }) {
  return <article className="catalog-card">
    {project.thumbnail && <ProjectThumbnail src={project.thumbnail} title={project.title} />}
    <div className="catalog-card-body">
      <p className="eyebrow">{project.category}</p>
      <h3><Link href={`/projects/${project.id}`}>{project.title}</Link></h3>
      <p className="catalog-description">{project.solution}</p>
      <p className="catalog-status">{project.status}</p>
      <div className="project-actions">
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title} website (opens in new tab)`}>Visit site ↗</a>}
        <Link href={`/projects/${project.id}`}>{project.caseStudy ? "Case study" : "Project details"} →</Link>
        {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub (opens in new tab)`}>GitHub ↗</a>}
      </div>
    </div>
  </article>;
}
