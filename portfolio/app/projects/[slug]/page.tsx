import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Navigation } from "@/components/navigation/Navigation";
import { Environment } from "@/components/motion/Environment";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);
  return { title: project ? `${project.title} — Ral Angelo Lluisma` : "Project not found", description: project?.solution, alternates: { canonical: `/projects/${slug}` }, openGraph: { title: project?.title, description: project?.solution, images: ["/social-preview.png"] } };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <><Environment /><Navigation /><main id="main" tabIndex={-1} className="case-study">
    <Link href="/#projects" className="text-link back-link">← All projects</Link>
    <header className="case-header"><p className="eyebrow">CASE STUDY / {project.category}</p><h1>{project.title}</h1><p className="case-summary">{project.solution}</p><div className="case-meta"><span>{project.period}</span><span>{project.status}</span></div></header>
    <div className="case-body"><aside className="case-toc"><p className="eyebrow">IN THIS PROJECT</p><nav aria-label="Case study sections">{["problem", "role", "architecture", "decisions", "result"].map(s => <a key={s} href={`#${s}`}>{s === "role" ? "My role" : s}</a>)}</nav><a href={`mailto:${profile.email}?subject=${encodeURIComponent(`Let’s talk about ${project.title}`)}`}>Discuss this project ↗</a></aside>
      <div className="case-sections">
        <section id="problem"><p className="eyebrow">01 / THE CONTEXT</p><h2>Problem & objective</h2><p>{project.problem}</p><p>{project.caseStudy.objective}</p></section>
        <section id="role"><p className="eyebrow">02 / MY CONTRIBUTION</p><h2>My role</h2><p>{project.caseStudy.role}</p></section>
        <section id="architecture"><p className="eyebrow">03 / HOW IT FITS TOGETHER</p><h2>Technical architecture</h2><p>{project.caseStudy.architecture}</p><ol className="architecture-flow">{project.flow.map((step, i) => <li key={step}><span>0{i + 1}</span>{step}<span aria-hidden="true">{i < project.flow.length - 1 ? "↓" : "↗"}</span></li>)}</ol><h3>Technology stack</h3><p className="technology-list">{project.technologies.join(" · ")}</p></section>
        <section id="decisions"><p className="eyebrow">04 / ENGINEERING REASONING</p><h2>Challenges & decisions</h2>{project.caseStudy.decisions.map(d => <div className="decision" key={d.title}><h3>{d.title}</h3><p>{d.detail}</p></div>)}</section>
        <section id="result"><p className="eyebrow">05 / WHAT CAME OUT OF IT</p><h2>Result</h2><p>{project.caseStudy.outcome}</p><h3>Lessons & next evaluation</h3><p>{project.caseStudy.next}</p><p className="source-note">Project record: {project.evidence}. Implementation details are limited to the supplied record.</p><div className="contact-links"><a href={profile.resume} target="_blank" rel="noreferrer">Project record in CV ↗</a>{project.github && <a href={project.github}>Source code ↗</a>}{project.demo && <a href={project.demo}>Live demo ↗</a>}</div></section>
      </div>
    </div><Link className="next-project" href={`/projects/${next.id}`}><span className="eyebrow">NEXT CASE STUDY</span><span>{next.title} ↗</span></Link>
  </main></>;
}
