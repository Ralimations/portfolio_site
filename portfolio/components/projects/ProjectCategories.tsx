import Link from "next/link";
import { projectCategories } from "@/data/categories";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectCategories() {
  return <section id="categories" className="project-categories" aria-labelledby="categories-title">
    <div className="section-heading"><p className="eyebrow">EXPLORE THE COLLECTION</p><p className="section-note">{projects.length} projects / {projectCategories.length} categories</p></div>
    <h2 id="categories-title">Projects by <span className="muted">category.</span></h2>
    <nav className="category-nav" aria-label="Jump to project category">
      {projectCategories.map(category => <a key={category.id} href={`#category-${category.id}`}>{category.label}<span>{projects.filter(p => p.categoryIds.includes(category.id)).length}</span></a>)}
    </nav>
    {projectCategories.map(category => {
      const members = projects.filter(p => p.categoryIds.includes(category.id)).sort((a, b) => Number(Boolean(b.demo)) - Number(Boolean(a.demo)));
      return <section className="category-group" id={`category-${category.id}`} key={category.id} aria-labelledby={`heading-${category.id}`}>
        <div className="category-heading"><div><p className="eyebrow">{category.label} / {String(members.length).padStart(2, "0")}</p><h3 id={`heading-${category.id}`}>{category.title}</h3><p>{category.description}</p></div><Link className="text-link" href={`/projects/category/${category.id}`}>View category <span>↗</span><span className="sr-only">: {category.title}</span></Link></div>
        <div className="catalog-grid">{members.map(project => <ProjectCard key={project.id} project={project} />)}</div>
      </section>;
    })}
  </section>;
}
