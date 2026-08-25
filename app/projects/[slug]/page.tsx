import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ActionLink, SectionLabel, SiteFooter } from "@/app/components/DesignPrimitives";
import { ProjectCarousel } from "@/app/components/ProjectCarousel";
import { getCategoryLabel, getProjectBySlug, projects } from "@/app/data/projects";
import { getProjectMedia } from "@/app/lib/project-assets";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Ral Angelo Lluisma",
    };
  }

  const media = getProjectMedia(project);

  return {
    title: `${project.title} | Ral Angelo Lluisma`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Ral Angelo Lluisma`,
      description: project.shortDescription,
      images: media.cover ? [{ url: media.cover.src, alt: media.cover.alt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ral Angelo Lluisma`,
      description: project.shortDescription,
      images: media.cover ? [media.cover.src] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const media = getProjectMedia(project);

  return (
    <main className="min-h-screen text-[var(--foreground)]">
      <header className="border-b border-[var(--border)] bg-[rgba(250,250,250,0.82)] backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--foreground)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--muted)]"
          >
            Back to Projects
          </Link>
          <p className="font-code hidden text-xs uppercase tracking-[0.15em] text-[var(--muted-foreground)] sm:block">Project Detail</p>
        </nav>
      </header>

      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>{getCategoryLabel(project.category)}</SectionLabel>
            <h1 className="font-display mt-7 text-[3.2rem] leading-[1.02] tracking-[-0.02em] sm:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[var(--muted-foreground)]">{project.shortDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="font-code rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
                {project.year}
              </span>
              <span className="font-code rounded-full border border-[rgba(0,82,255,0.18)] bg-[rgba(0,82,255,0.06)] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[var(--accent)]">
                {project.status}
              </span>
            </div>
          </div>
          <ProjectCarousel images={media.gallery} title={project.title} />
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">What it does.</h2>
          </div>
          <div className="soft-card space-y-5 rounded-[2rem] p-8 text-lg leading-8 text-[var(--muted-foreground)] sm:p-10">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          <article className="soft-card rounded-2xl p-7">
            <SectionLabel>Problem</SectionLabel>
            <p className="mt-5 text-lg leading-8 text-[var(--muted-foreground)]">{project.problem ?? project.description[0]}</p>
          </article>
          <article className="soft-card rounded-2xl p-7">
            <SectionLabel>Solution</SectionLabel>
            <p className="mt-5 text-lg leading-8 text-[var(--muted-foreground)]">{project.solution ?? project.description[1] ?? project.description[0]}</p>
          </article>
        </div>
      </section>

      <section className="dark-texture px-5 py-24 text-white sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionLabel inverted>My Contribution</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">What I handled.</h2>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {project.contributions.map((contribution) => (
              <li key={contribution} className="rounded-2xl border border-white/10 bg-white/95 p-6 text-[var(--foreground)] shadow-xl">
                <span className="mb-5 block h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                <p className="text-lg font-semibold leading-7 tracking-[-0.01em]">{contribution}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionLabel>Technologies Used</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">What built it.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {project.technologies.map((group) => (
              <article key={group.label} className="soft-card rounded-2xl p-7">
                <h3 className="text-xl font-semibold tracking-[-0.01em]">{group.label}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-1.5 text-xs font-medium text-[var(--muted-foreground)]">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {project.architecture ? (
        <section className="px-5 py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
            <SectionLabel>Architecture / Workflow</SectionLabel>
              <h2 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">How it flows.</h2>
            </div>
            <ol className="grid gap-4 md:grid-cols-3">
              {project.architecture.map((step, index) => (
                <li key={step} className="soft-card rounded-2xl p-6">
                  <p className="font-display gradient-text text-4xl leading-none">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-5 text-lg font-semibold leading-7 tracking-[-0.01em]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {(project.testing || project.challenges || project.learned || project.outcomes) ? (
        <section className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Testing & Validation</SectionLabel>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {(project.testing ?? ["Reviewed behavior across available sample inputs and documented observed results."]).map((item) => (
                <div key={item} className="soft-card rounded-2xl p-6 text-lg leading-7 text-[var(--muted-foreground)]">{item}</div>
              ))}
              {project.challenges?.map((item) => <div key={item} className="soft-card rounded-2xl border-l-4 border-[var(--accent)] p-6 text-lg leading-7 text-[var(--muted-foreground)]">Challenge: {item}</div>)}
              {project.learned?.map((item) => <div key={item} className="soft-card rounded-2xl p-6 text-lg leading-7 text-[var(--muted-foreground)]">Learned: {item}</div>)}
              {project.outcomes?.map((item) => <div key={item} className="soft-card rounded-2xl p-6 text-lg leading-7 text-[var(--muted-foreground)]">Outcome: {item}</div>)}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-5 py-24">
        <div className="dark-texture mx-auto flex max-w-6xl flex-col gap-6 rounded-[2rem] px-6 py-10 text-white shadow-[var(--shadow-card-hover)] sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <SectionLabel inverted>External Links</SectionLabel>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">Links appear here when a repository, demo, or documentation URL is available.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { href: project.githubUrl, label: "GitHub" },
              { href: project.demoUrl, label: "Demo" },
              { href: project.documentationUrl, label: "Docs" },
            ]
              .filter((link): link is { href: string; label: string } => Boolean(link.href))
              .map((link) => (
                <ActionLink key={link.label} href={link.href} external>
                  {link.label}
                </ActionLink>
              ))}
            {!project.githubUrl && !project.demoUrl && !project.documentationUrl ? (
              <ActionLink href="/#contact">Contact</ActionLink>
            ) : null}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
