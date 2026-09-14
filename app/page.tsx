import Link from "next/link";
import { ActionLink, AccentMark, SectionLabel, SiteFooter } from "@/app/components/DesignPrimitives";
import { ProjectExplorer } from "@/app/components/ProjectExplorer";
import { ProjectVisual } from "@/app/components/ProjectVisual";
import { profile } from "@/app/data/profile";
import { getCategoryLabel, projects } from "@/app/data/projects";
import { getProjectsWithMedia } from "@/app/lib/project-assets";

const skills = [
  {
    "title": "Programming & Development",
    "items": [
      "React",
      "TypeScript",
      "JavaScript",
      "Python",
      "Node.js",
      "Electron",
      "PowerShell",
      "Git / GitHub"
    ]
  },
  {
    "title": "Data & Analytics",
    "items": [
      "Excel / ExcelJS",
      "SQLite / MySQL",
      "Streamlit",
      "Recharts",
      "Local LLM / API integration"
    ]
  },
  {
    "title": "AI, QA & Operations",
    "items": [
      "Local LLM / API testing",
      "Prompt & structured-output QA",
      "Playwright GUI checks",
      "Smoke / build verification",
      "Troubleshooting",
      "Runbooks",
      "Local deployment",
      "LM Studio",
      "Ollama"
    ]
  },
  {
    "title": "Computer Vision",
    "items": [
      "OpenCV",
      "TensorFlow / TFLite",
      "Label Studio",
      "YOLO / OpenVINO exposure",
      "Data preparation & annotation"
    ]
  },
  {
    "title": "IoT & Hardware",
    "items": [
      "ESP32",
      "RFID",
      "Arduino",
      "Serial communication",
      "Drone building & piloting",
      "Autodesk EAGLE",
      "Onshape",
      "PCB layout"
    ]
  },
  {
    "title": "Creative & Design",
    "items": [
      "Mine-imator",
      "Animation production",
      "Music production",
      "Vocal mixing",
      "Graphics design & branding training"
    ]
  }
];

const training = [
  {
    "title": "Data Preparation and Annotation Microcredential",
    "organization": "SPARK-Skunkworks, in partnership with TESDA",
    "date": "May 18-29, 2026",
    "description": "Extracted video frames, organized computer-vision datasets, annotated object-detection bounding boxes, checked dataset quality, and trained a custom object-detection model."
  },
  {
    "title": "Drone Design and Construction, Drone Operations, and Pilot Training",
    "organization": "SPARK-Skunkworks, in partnership with TESDA",
    "date": "June 16 - July 6, 2026",
    "description": "Studied drone components and designed a custom frame in Onshape. Practiced in Uncrashed and with a whoop drone, then completed field exercises using Line-of-Sight and First-Person View modes."
  },
  {
    "title": "Graphics Design & Branding Training",
    "organization": "SEVEN Studios",
    "date": null,
    "description": null
  }
];

const experience = [
  {
    "role": "Information Technology Intern, Front-End Development",
    "organization": "MELD CX · Cagayan de Oro City, Philippines",
    "date": "January - May 2026 · 700 hours",
    "points": [
      "Translated UI/UX concepts into functional front-end components and resolved layout, responsiveness, and usability issues.",
      "Fixed front-end bugs and refined interface behavior and visual consistency using feedback from senior developers and stakeholders.",
      "Configured and tested local LLMs with LM Studio and Ollama for offline inference and AI-box experiments; prototyped Streamlit interfaces connected to local LLM endpoints.",
      "Evaluated model responses, resource usage, and deployment constraints across hardware and software configurations.",
      "Supported software and computer-vision workflows through application setup, testing, validation, and troubleshooting.",
      "Produced troubleshooting guides, validation procedures, technical documentation, presentations, and Scrum meeting minutes."
    ]
  },
  {
    "role": "Senior Animator",
    "organization": "Vexel Studios · Netherlands (Remote)",
    "date": "August 2023 - July 2025",
    "points": [
      "Led a team producing commission-based media projects in Mine-imator.",
      "Managed deliverables against quality standards and deadlines.",
      "Mentored junior animators, produced animations, and conducted progress reviews for junior and peer animators."
    ]
  }
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
    <header className="site-header">
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
          <summary className="neo-control">
            Menu
          </summary>
          <div className="mobile-menu">
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

export default function Home() {
  const projectsWithMedia = getProjectsWithMedia(projects);
  return (
    <main id="top" className="min-h-screen text-[var(--foreground)]">
      <a href="#intro" className="skip-link">Skip to content</a>
      <Header />

      <section id="intro" className="hero-section" tabIndex={-1}>
        <div className="hero-grid mx-auto max-w-6xl">
          <div>
            <SectionLabel>Software · Systems · Real-world solutions</SectionLabel>
            <h1 className="font-display hero-title">Ral Angelo<br />Lluisma<span className="text-[var(--accent)]">.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted-foreground)]">
              I build front-end interfaces, local AI prototypes, and automation tools, with a background in IoT and embedded systems.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ActionLink href="#projects">View Projects</ActionLink>
              <ActionLink href="#contact" variant="secondary">Let’s connect</ActionLink>
            </div>
            <div className="hero-note"><span>{profile.location}</span><span>Computer Applications · MSU-IIT</span></div>
          </div>
          <aside className="profile-panel soft-card" aria-label="Background at a glance">
            <div className="flex items-center justify-between gap-5">
              <div className="profile-monogram inset-panel" aria-hidden="true">ral.</div>
              <span className="font-code text-xs text-[var(--muted-foreground)]">PORTFOLIO<br />2026</span>
            </div>
            <p className="mt-7 text-xl font-semibold">Curious by nature.<br />Practical by approach.</p>
            <dl>
              <div><dt>BACKGROUND</dt><dd>{profile.descriptor}</dd></div>
              <div><dt>FOCUS</dt><dd>Software, AI & automation, embedded systems</dd></div>
            </dl>
            <div className="mt-4 flex gap-3">
              <ActionLink href={profile.githubUrl} variant="secondary" external>GitHub</ActionLink>
              <ActionLink href={profile.linkedInUrl} variant="secondary" external>LinkedIn</ActionLink>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="px-5 py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>About</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-tight tracking-[-0.01em] sm:text-5xl">
              About Me
            </h2>
          </div>
          <div className="soft-card rounded-[2rem] p-8 sm:p-10">
            <p className="text-lg leading-8 text-[var(--muted-foreground)]">
              I graduated from MSU-IIT with a BS in Computer Applications in July 2026, concentrating on IoT, embedded systems, firmware programming, and data communication. During my 700-hour MELD CX internship, I worked on front-end interfaces, local LLM experiments, Streamlit prototypes, testing, and technical documentation. I also bring remote team leadership experience from Vexel Studios and create vocal covers and music content through Ralskies.
            </p>
          </div>
        </div>
      </section>

      <section id="selected-work" className="featured-section">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <SectionLabel inverted>Selected Work</SectionLabel>
              <h2 className="font-display mt-6 max-w-3xl text-4xl leading-tight sm:text-5xl">
                Selected Projects
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-[var(--muted-foreground)]">
              A closer look at connected systems, useful tools, and the work behind them.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projectsWithMedia.filter((project) => project.featured).slice(0, 3).map((project) => (
              <article key={project.id} className="featured-card soft-card group">
                <div className="h-full overflow-hidden rounded-[20px] text-[var(--foreground)]">
                  <div className="aspect-[16/10] border-b border-[var(--border)]">
                    <ProjectVisual
                      media={project.media}
                      title={project.title}
                      categoryLabel={getCategoryLabel(project.category)}
                    />
                  </div>
                  <div className="grid gap-5 p-7">
                    <p className="font-code text-xs uppercase tracking-[0.15em] text-[var(--accent)]">
                      {getCategoryLabel(project.category)}
                    </p>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.02em]">{project.title}</h3>
                      <p className="mt-4 leading-7 text-[var(--muted-foreground)]">{project.shortDescription}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.capabilityTags.slice(0, 4).map((technology) => (
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
                    className="inline-flex items-center gap-2 justify-self-start text-sm font-semibold text-[var(--accent)] transition hover:gap-3"
                  >
                    Open case <span aria-hidden="true">-&gt;</span>
                  </Link>
                  </div>
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
                Projects
              </h2>
            </div>
            <p className="text-lg leading-8 text-[var(--muted-foreground)]">
              Explore my work across software, automation, and embedded systems. Choose a discipline to find the projects that interest you.
            </p>
          </div>
          <ProjectExplorer projects={projectsWithMedia} />
        </div>
      </section>

      <section className="px-5 py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>AI in My Workflow</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">One tool within a broader development process.</h2>
          </div>
          <div className="soft-card rounded-[2rem] p-8 sm:p-10">
            <p className="text-lg leading-8 text-[var(--muted-foreground)]">
              I configure and test locally hosted models with LM Studio and Ollama, connect local LLM endpoints to Streamlit interfaces, and evaluate prompt responses, resource usage, and deployment constraints. My QA work includes structured-output checks, Playwright GUI checks, and smoke/build verification.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-2 font-code text-[10px] uppercase tracking-[0.12em] text-[var(--accent)] sm:gap-3 sm:text-xs">
              {['Requirements', 'Planning', 'Workflow', 'Implement', 'Test', 'Validate', 'Document'].map((step, index) => (
                <span key={step} className="inline-flex items-center gap-2">
                  <span className="rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-2">{step}</span>
                  {index < 6 ? <span aria-hidden="true">-&gt;</span> : null}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dark-texture px-5 py-28 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel inverted>Implementation Mindset</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">Turning broad processes into structured systems.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {['Business problem', 'Requirements', 'Workflow', 'Implementation', 'Testing', 'Documentation', 'Iteration'].map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="font-code text-xs text-white/50">0{index + 1}</p>
                <p className="mt-4 text-lg font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Skills</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-tight tracking-[-0.01em] sm:text-5xl">
              Skills
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

      <section id="training" className="px-5 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Training & Credentials</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">Training & microcredentials.</h2>
          </div>
          <div className="grid gap-5">
            {training.map((item) => (
              <article key={item.title} className="soft-card rounded-[2rem] p-8 sm:p-10">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm font-medium text-[var(--muted-foreground)]">{item.organization}</p>
                {item.date ? <p className="mt-2 text-sm text-[var(--accent)]">{item.date}</p> : null}
                {item.description ? <p className="mt-5 leading-7 text-[var(--muted-foreground)]">{item.description}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="px-5 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div><SectionLabel>Education</SectionLabel><h2 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">Computer Applications.</h2></div>
          <article className="soft-card rounded-[2rem] p-8 sm:p-10">
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Applications</h3>
            <p className="mt-3 leading-7 text-[var(--muted-foreground)]">Mindanao State University - Iligan Institute of Technology · Iligan City, Philippines</p>
            <p className="mt-3 font-medium text-[var(--accent)]">Graduated July 2026</p>
            <p className="mt-6 leading-7 text-[var(--muted-foreground)]"><strong>Concentrations:</strong> Internet of Things, Embedded Systems, Firmware Programming, and Data Communication.</p>
            <p className="mt-4 leading-7 text-[var(--muted-foreground)]"><strong>Thesis:</strong> AutoMatTsek - A Modular IoT-Based On-Shelf Stock Monitoring and Pricing Display System.</p>
            <p className="mt-4 leading-7 text-[var(--muted-foreground)]"><strong>Related coursework:</strong> Programming for IoT, Applied IoT, Artificial Intelligence in IoT, Fundamentals of Robotics Systems, Microcontrollers, Digital Techniques, Computer Architecture, Firmware, PLC Programming, Operating Systems, and Technopreneurship.</p>
          </article>
        </div>
      </section>

      <section id="experience" className="px-5 py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="font-display mt-6 text-4xl leading-tight tracking-[-0.01em] sm:text-5xl">
              Experience
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
                  <p className="font-code rounded-full border border-[var(--border)] bg-[var(--muted)] px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-[var(--accent)]">{item.date}</p>
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
              Let&apos;s connect.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Let’s talk about front-end development, software and automation, AI prototyping, QA, or technical operations. You can also reach out about creative collaborations.
            </p>
          </div>
          <div className="grid gap-3">
            <ActionLink href={`mailto:${profile.email}`}>Email me</ActionLink>
            <ActionLink href={profile.githubUrl} variant="secondary" external>GitHub</ActionLink>
            <ActionLink href={profile.linkedInUrl} variant="secondary" external>LinkedIn</ActionLink>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
