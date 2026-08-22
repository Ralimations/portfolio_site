import Link from "next/link";
import { ActionLink, AccentMark, SectionLabel } from "@/app/components/DesignPrimitives";
import { ProjectExplorer } from "@/app/components/ProjectExplorer";
import { getCategoryLabel, projects } from "@/app/data/projects";
import { getProjectsWithMedia } from "@/app/lib/project-assets";

const technicalAreas = [
  { value: "05", label: "Technical disciplines" },
  { value: "03", label: "Featured builds" },
  { value: "30s", label: "Project scan target" },
  { value: "100%", label: "Contribution focused" },
];

const skills = [
  {
    title: "Embedded / Hardware",
    items: ["Microcontrollers", "Sensors", "IoT hardware", "Circuit prototyping", "Hardware integration"],
  },
  {
    title: "Programming / Development",
    items: ["TypeScript", "JavaScript", "Python", "React", "System design basics"],
  },
  {
    title: "AI / ML",
    items: ["Computer vision", "Detection workflows", "Model testing", "Data review", "AI-assisted tools"],
  },
  {
    title: "Tools",
    items: ["Git", "VS Code", "Docker basics", "CAD workflows", "Technical documentation"],
  },
];

const experience = [
  {
    role: "Engineering Portfolio Development",
    organization: "Independent Projects",
    date: "2025 - Present",
    points: [
      "Built project work across embedded systems, AI experiments, web interfaces, and small software utilities.",
      "Focused on concise documentation, practical prototypes, and maintainable technical presentation.",
    ],
  },
  {
    role: "Academic and Technical Build Work",
    organization: "Project-Based Engineering Practice",
    date: "Recent",
    points: [
      "Worked with hardware/software integration, responsive interfaces, and prototype validation.",
      "Organized project evidence so contributions, technologies, and outcomes are easy to review.",
    ],
  },
];

function Header() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[rgba(250,250,250,0.82)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <AccentMark />
          <span className="truncate text-sm font-semibold tracking-[-0.01em]">Ral Angelo Lluisma</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-[var(--muted-foreground)] lg:flex">
          {links.map((link) => (
            <a key={link.href} className="transition hover:text-[var(--foreground)]" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <details className="relative lg:hidden">
          <summary className="cursor-pointer rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold shadow-sm">
            Menu
          </summary>
          <div className="absolute right-0 top-14 grid w-56 gap-1 rounded-2xl border border-[var(--border)] bg-white p-3 shadow-xl">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="rounded-xl px-3 py-2 text-sm font-semibold text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]">
                {link.label}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}

function HeroGraphic() {
  return (
    <div className="relative hidden min-h-[560px] lg:block">
      <div className="absolute inset-6 rounded-[2rem] border border-[var(--border)] bg-white/70 shadow-[var(--shadow-card)] backdrop-blur">
        <div className="absolute inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_35%_25%,rgba(0,82,255,0.12),transparent_35%),radial-gradient(circle_at_78%_68%,rgba(77,124,255,0.18),transparent_38%)]" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[rgba(0,82,255,0.35)] animate-rotate-slow" />
        <div className="absolute left-16 top-20 h-28 w-28 rounded-[2rem] gradient-surface shadow-[var(--shadow-accent)] animate-float-slow" />
        <div className="absolute right-16 top-16 rounded-2xl border border-[var(--border)] bg-white p-5 shadow-xl animate-float-slower">
          <p className="font-code text-xs uppercase tracking-[0.15em] text-[var(--muted-foreground)]">Signal</p>
          <p className="mt-2 text-3xl font-semibold tracking-[-0.02em]">IoT + AI</p>
        </div>
        <div className="absolute bottom-20 left-14 rounded-2xl border border-[var(--border)] bg-white p-5 shadow-xl animate-float-slower">
          <p className="font-code text-xs uppercase tracking-[0.15em] text-[var(--accent)]">Evidence</p>
          <p className="mt-2 max-w-48 text-lg font-semibold leading-snug">Projects explain what changed, what I built, and what I used.</p>
        </div>
        <div className="absolute bottom-24 right-16 grid grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <span key={index} className="h-2 w-2 rounded-full bg-[rgba(0,82,255,0.32)]" />
          ))}
        </div>
        <div className="absolute bottom-12 right-10 h-24 w-24 rounded-[1.5rem] bg-[var(--foreground)] shadow-2xl" />
      </div>
    </div>
  );
}

export default function Home() {
  const projectsWithMedia = getProjectsWithMedia(projects);
  const featuredProjects = projectsWithMedia.filter((project) => project.featured);

  return (
    <main id="top" className="min-h-screen text-[var(--foreground)]">
      <Header />

      <section className="px-5 py-24 sm:py-32 lg:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionLabel>Developer / Embedded Systems & IoT Engineer</SectionLabel>
            <h1 className="font-display mt-8 max-w-4xl text-[3.3rem] leading-[1.02] tracking-[-0.02em] sm:text-7xl lg:text-[5.25rem]">
              Ral Angelo Lluisma builds technical work with <span className="gradient-text">visible proof.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
              I work across embedded systems, IoT, AI experiments, web interfaces, mobile-oriented flows, and practical software tools. The portfolio keeps each project scannable: what it does, what I contributed, and what I used.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ActionLink href="#projects">View Projects</ActionLink>
              <ActionLink href="#contact" variant="secondary">Contact</ActionLink>
            </div>
          </div>
          <HeroGraphic />
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technicalAreas.map((item) => (
            <article key={item.label} className="soft-card rounded-2xl p-6">
              <p className="font-display gradient-text text-5xl leading-none">{item.value}</p>
              <p className="mt-3 font-code text-xs uppercase tracking-[0.15em] text-[var(--muted-foreground)]">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="px-5 py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>About</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-tight tracking-[-0.01em] sm:text-5xl">
              Hardware and software in one calm, readable frame.
            </h2>
          </div>
          <div className="soft-card rounded-[2rem] p-8 sm:p-10">
            <p className="text-lg leading-8 text-[var(--muted-foreground)]">
              My work sits between physical systems and software: microcontrollers, sensors, connected prototypes, AI-assisted experimentation, interfaces, and tools that make technical workflows easier to use. I enjoy projects where hardware behavior, data flow, and user-facing clarity all have to line up.
            </p>
          </div>
        </div>
      </section>

      <section className="dark-texture px-5 py-28 text-white sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <SectionLabel inverted>Featured Projects</SectionLabel>
              <h2 className="font-display mt-6 max-w-3xl text-4xl leading-tight sm:text-5xl">
                Strongest examples, presented first.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-white/70">
              Featured work uses the same project data model as the full library, but earns more visual weight.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.id} className="rounded-[1.6rem] bg-gradient-to-br from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--accent)] p-[1px]">
                <div className="h-full rounded-[calc(1.6rem-1px)] bg-white p-7 text-[var(--foreground)]">
                  <p className="font-code text-xs uppercase tracking-[0.15em] text-[var(--accent)]">
                    {getCategoryLabel(project.category)}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em]">{project.title}</h3>
                  <p className="mt-4 leading-7 text-[var(--muted-foreground)]">{project.shortDescription}</p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition hover:gap-3"
                  >
                    Open case <span aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <SectionLabel>Projects</SectionLabel>
              <h2 className="font-display mt-6 text-4xl leading-tight tracking-[-0.01em] sm:text-5xl">
                Filter by discipline.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[var(--muted-foreground)]">
              Every project card starts with the outcome, then exposes category, year, status, and the most relevant technologies without turning the page into a technical archive.
            </p>
          </div>
          <ProjectExplorer projects={projectsWithMedia} />
        </div>
      </section>

      <section id="skills" className="px-5 py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Skills</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-tight tracking-[-0.01em] sm:text-5xl">
              Practical areas, no fake percentages.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((group) => (
              <article key={group.title} className="soft-card group rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-[-0.01em]">{group.title}</h3>
                  <span className="grid h-11 w-11 place-items-center rounded-xl gradient-surface shadow-[var(--shadow-accent)] transition group-hover:scale-110">
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
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

      <section id="experience" className="px-5 py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-tight tracking-[-0.01em] sm:text-5xl">
              Background in short form.
            </h2>
          </div>
          <div className="grid gap-5">
            {experience.map((item) => (
              <article key={item.role} className="soft-card rounded-2xl p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.01em]">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-[var(--muted-foreground)]">{item.organization}</p>
                  </div>
                  <p className="font-code rounded-full border border-[rgba(0,82,255,0.18)] bg-[rgba(0,82,255,0.06)] px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-[var(--accent)]">{item.date}</p>
                </div>
                <ul className="mt-6 grid gap-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7 text-[var(--muted-foreground)]">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-28">
        <div className="dark-texture mx-auto grid max-w-6xl gap-10 rounded-[2rem] px-6 py-12 text-white shadow-[var(--shadow-card-hover)] sm:px-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <SectionLabel inverted>Contact</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">
              Open to technical roles and collaboration.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              The portfolio is ready for real resume, GitHub, LinkedIn, and email links as soon as those URLs are confirmed.
            </p>
          </div>
          <div className="grid gap-3">
            <ActionLink href="mailto:hello@example.com">Email</ActionLink>
            <ActionLink href="https://github.com/" variant="secondary" external>GitHub</ActionLink>
            <ActionLink href="https://www.linkedin.com/" variant="secondary" external>LinkedIn</ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
