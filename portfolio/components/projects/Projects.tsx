import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects() {
  return <section id="projects" className="section projects">
    <div className="section-heading"><p className="eyebrow"><span>01 /</span> SELECTED WORK</p><p className="section-note">From physical movement<br />to everyday workflows.</p></div>
    <h2>Built around<br /><span className="muted">a real problem.</span></h2>
    <div className="project-index">{projects.filter(p => p.featured).map((project, index) =>
      <article className={`project-row project-${index}`} key={project.id}>
        <span className="project-number">0{index + 1}</span>
        <div className="project-info"><p className="eyebrow">{project.category}</p>
          <h3><Link href={`/projects/${project.id}`}>{project.title}</Link></h3>
          <p className="problem">{project.problem}</p><p className="solution">{project.solution}</p>
          <p className="technology-list">{project.technologies.join(" · ")}</p>
          <Link className="text-link case-link" href={`/projects/${project.id}`}>Case study <span>→</span><span className="sr-only">: {project.title}</span></Link>
        </div>
        <div className="project-diagram" aria-label={`${project.title} workflow`}>
          <div className="diagram-meta"><span>WORKFLOW / 0{index + 1}</span><span>{project.status}</span></div>
          <ol>{project.flow.map((step, i) => <li key={step}><span className="flow-port" aria-hidden="true">{i === 0 ? "○" : i === 3 ? "↗" : "+"}</span><span>{step}</span><span className="flow-step">0{i + 1}</span></li>)}</ol>
          <span className="diagram-foot">{project.period}</span>
        </div>
      </article>
    )}</div>
  </section>;
}
