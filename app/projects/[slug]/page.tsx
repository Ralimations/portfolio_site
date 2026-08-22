import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <main className="min-h-screen bg-[#F0F0F0] text-[#121212]">
      <header className="border-b-4 border-black bg-[#F0F0F0]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="border-4 border-black bg-white px-4 py-3 text-sm font-black uppercase tracking-wider shadow-[5px_5px_0_0_#121212] transition active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
          >
            Back to Projects
          </Link>
          <p className="hidden text-sm font-black uppercase tracking-[0.24em] sm:block">Project Detail</p>
        </nav>
      </header>

      <section className="border-b-4 border-black">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <div>
            <p className="inline-block border-4 border-black bg-[#F0C020] px-3 py-2 text-xs font-black uppercase tracking-[0.24em] shadow-[5px_5px_0_0_#121212]">
              {getCategoryLabel(project.category)}
            </p>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.88] sm:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-bold leading-relaxed">{project.shortDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="border-4 border-black bg-white px-3 py-2 text-sm font-black uppercase">
                {project.year}
              </span>
              <span className="border-4 border-black bg-white px-3 py-2 text-sm font-black uppercase">
                {project.status}
              </span>
            </div>
          </div>
          <ProjectCarousel images={media.gallery} title={project.title} />
        </div>
      </section>

      <section className="border-b-4 border-black px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">Project Summary</h2>
          <div className="space-y-5 text-lg font-medium leading-relaxed">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-4 border-black bg-[#1040C0] px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">My Contribution</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {project.contributions.map((contribution) => (
              <li key={contribution} className="border-4 border-black bg-white p-5 text-[#121212] shadow-[6px_6px_0_0_#121212]">
                <span className="mb-4 block h-5 w-5 rounded-full border-2 border-black bg-[#D02020]" />
                <p className="text-lg font-black leading-tight">{contribution}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b-4 border-black px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">Technologies Used</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {project.technologies.map((group) => (
              <article key={group.label} className="border-4 border-black bg-white p-5 shadow-[6px_6px_0_0_#121212]">
                <h3 className="text-2xl font-black uppercase">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="border-2 border-black bg-[#F0F0F0] px-2 py-1 text-xs font-black uppercase">
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
        <section className="border-b-4 border-black bg-[#F0C020] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">Technical Overview</h2>
            <ol className="grid gap-4 md:grid-cols-3">
              {project.architecture.map((step, index) => (
                <li key={step} className="border-4 border-black bg-white p-5 shadow-[6px_6px_0_0_#121212]">
                  <p className="text-4xl font-black leading-none">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-4 text-lg font-black uppercase leading-tight">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#121212] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em]">External Links</p>
            <p className="mt-2 text-lg font-bold">Links appear here when a repository, demo, or documentation URL is available.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { href: project.githubUrl, label: "GitHub" },
              { href: project.demoUrl, label: "Demo" },
              { href: project.documentationUrl, label: "Docs" },
            ]
              .filter((link): link is { href: string; label: string } => Boolean(link.href))
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border-4 border-black bg-[#D02020] px-4 py-3 text-sm font-black uppercase tracking-wider text-white shadow-[5px_5px_0_0_#121212]"
                >
                  {link.label}
                </a>
              ))}
            {!project.githubUrl && !project.demoUrl && !project.documentationUrl ? (
              <Link
                href="/#contact"
                className="border-4 border-black bg-[#121212] px-4 py-3 text-sm font-black uppercase tracking-wider text-white shadow-[5px_5px_0_0_#D02020]"
              >
                Contact
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
