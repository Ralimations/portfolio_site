import Link from "next/link";
import { ProjectExplorer } from "@/app/components/ProjectExplorer";
import { getCategoryLabel, projects } from "@/app/data/projects";
import { getProjectsWithMedia } from "@/app/lib/project-assets";

const technicalAreas = [
  "Embedded Systems / IoT",
  "AI / Machine Learning",
  "Web Development",
  "Mobile Development",
  "Software Tools",
];

const skills = [
  {
    title: "Embedded / Hardware",
    items: ["Microcontrollers", "Sensors", "IoT hardware", "Circuit prototyping", "Hardware integration"],
    accent: "red",
  },
  {
    title: "Programming / Development",
    items: ["TypeScript", "JavaScript", "Python", "React", "System design basics"],
    accent: "blue",
  },
  {
    title: "AI / ML",
    items: ["Computer vision", "Detection workflows", "Model testing", "Data review", "AI-assisted tools"],
    accent: "yellow",
  },
  {
    title: "Tools",
    items: ["Git", "VS Code", "Docker basics", "CAD workflows", "Technical documentation"],
    accent: "black",
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

function ShapeMark() {
  return (
    <div className="flex items-center gap-2" aria-label="Ral Angelo Lluisma">
      <span className="h-5 w-5 rounded-full border-2 border-black bg-[#D02020]" />
      <span className="h-5 w-5 border-2 border-black bg-[#F0C020]" />
      <span className="h-0 w-0 border-x-[11px] border-b-[20px] border-x-transparent border-b-[#1040C0]" />
    </div>
  );
}

function MechanicalLink({
  href,
  children,
  tone = "white",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "white" | "red" | "blue" | "black" | "yellow";
}) {
  const toneClass = {
    white: "bg-white text-[#121212] shadow-[5px_5px_0_0_#121212]",
    red: "bg-[#D02020] text-white shadow-[5px_5px_0_0_#121212]",
    blue: "bg-[#1040C0] text-white shadow-[5px_5px_0_0_#121212]",
    black: "bg-[#121212] text-white shadow-[5px_5px_0_0_#D02020]",
    yellow: "bg-[#F0C020] text-[#121212] shadow-[5px_5px_0_0_#121212]",
  }[tone];

  return (
    <a
      href={href}
      className={[
        "inline-flex items-center justify-center border-4 border-black px-5 py-4 text-sm font-black uppercase tracking-wider transition duration-200 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#1040C0] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
        toneClass,
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function Header() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-20 border-b-4 border-black bg-[#F0F0F0]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-4">
          <ShapeMark />
          <span className="truncate text-sm font-black uppercase tracking-[0.2em]">Ral Angelo Lluisma</span>
        </a>

        <div className="hidden items-center gap-5 text-xs font-black uppercase tracking-widest lg:flex">
          {links.map((link) => (
            <a key={link.href} className="hover:text-[#D02020]" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <details className="relative lg:hidden">
          <summary className="cursor-pointer border-4 border-black bg-[#F0C020] px-3 py-2 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0_0_#121212]">
            Menu
          </summary>
          <div className="absolute right-0 top-14 grid w-56 gap-1 border-4 border-black bg-white p-3 shadow-[6px_6px_0_0_#121212]">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="px-3 py-2 text-sm font-black uppercase">
                {link.label}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}

function HeroGeometry() {
  return (
    <div className="relative min-h-[380px] overflow-hidden border-l-0 border-t-4 border-black bg-[#1040C0] lg:min-h-[640px] lg:border-l-4 lg:border-t-0">
      <div className="absolute left-8 top-8 h-28 w-28 rounded-full border-4 border-black bg-[#F0C020] shadow-[8px_8px_0_0_#121212]" />
      <div className="absolute right-10 top-20 h-36 w-36 rotate-45 border-4 border-black bg-[#D02020] shadow-[8px_8px_0_0_#121212]" />
      <div className="absolute bottom-14 left-10 h-40 w-40 border-4 border-black bg-white shadow-[8px_8px_0_0_#121212]" />
      <div className="absolute bottom-28 right-12 h-0 w-0 border-x-[68px] border-b-[118px] border-x-transparent border-b-[#F0C020] drop-shadow-[6px_6px_0_#121212]" />
      <div className="absolute inset-x-6 bottom-6 border-4 border-black bg-white p-5 shadow-[8px_8px_0_0_#121212]">
        <p className="text-sm font-black uppercase tracking-[0.2em]">Project-first portfolio</p>
        <p className="mt-2 text-2xl font-black uppercase leading-none">
          Hardware, software, AI, and interface work presented as evidence.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const projectsWithMedia = getProjectsWithMedia(projects);
  const featuredProjects = projectsWithMedia.filter((project) => project.featured);

  return (
    <main id="top" className="min-h-screen bg-[#F0F0F0] text-[#121212]">
      <Header />

      <section className="border-b-4 border-black">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.04fr_0.96fr]">
          <div className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <p className="mb-6 inline-block border-4 border-black bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.24em] shadow-[5px_5px_0_0_#121212]">
              Developer / Embedded Systems & IoT Engineer
            </p>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] sm:text-7xl lg:text-8xl">
              Ral Angelo Lluisma
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed sm:text-xl">
              I build across embedded systems, IoT, AI experiments, web interfaces, mobile-oriented flows, and practical software tools.
              This portfolio keeps the work visual, scannable, and focused on what I contributed.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MechanicalLink href="#projects" tone="red">
                View Projects
              </MechanicalLink>
              <MechanicalLink href="#contact">Contact</MechanicalLink>
            </div>
          </div>
          <HeroGeometry />
        </div>
      </section>

      <section className="border-b-4 border-black bg-[#F0C020]">
        <div className="mx-auto grid max-w-7xl divide-y-4 divide-black border-x-4 border-black sm:grid-cols-2 sm:divide-x-4 sm:divide-y-0 lg:grid-cols-5">
          {technicalAreas.map((area, index) => (
            <div key={area} className="min-h-32 p-5">
              <p className="text-4xl font-black leading-none">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-base font-black uppercase leading-tight tracking-wider">{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-b-4 border-black px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em]">About</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">
              Hardware and software in one frame.
            </h2>
          </div>
          <p className="max-w-3xl text-xl font-medium leading-relaxed">
            My work sits between physical systems and software: microcontrollers, sensors, connected prototypes, AI-assisted experimentation,
            interfaces, and tools that make technical workflows easier to use. I enjoy projects where hardware behavior, data flow, and user-facing
            clarity all have to line up.
          </p>
        </div>
      </section>

      <section className="border-b-4 border-black bg-[#D02020] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em]">Featured Projects</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-none sm:text-6xl">
                Strongest examples first.
              </h2>
            </div>
            <div className="h-24 w-24 rotate-45 border-4 border-black bg-[#F0C020] shadow-[8px_8px_0_0_#121212]" />
          </div>
          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.id} className="border-4 border-black bg-white p-5 text-[#121212] shadow-[8px_8px_0_0_#121212]">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1040C0]">
                  {getCategoryLabel(project.category)}
                </p>
                <h3 className="mt-4 text-3xl font-black uppercase leading-none">{project.title}</h3>
                <p className="mt-4 text-base font-medium leading-relaxed">{project.shortDescription}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex border-4 border-black bg-[#F0C020] px-4 py-3 text-sm font-black uppercase tracking-wider shadow-[5px_5px_0_0_#121212] transition active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
                >
                  Open Case
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b-4 border-black px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em]">Projects</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">
                Filter by discipline.
              </h2>
            </div>
            <p className="text-lg font-medium leading-relaxed">
              Every project card shows the result first, then the most important technologies. Open a project for contribution notes,
              architecture, media, and links.
            </p>
          </div>
          <ProjectExplorer projects={projectsWithMedia} />
        </div>
      </section>

      <section id="skills" className="border-b-4 border-black bg-[#1040C0] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em]">Skills</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">
              Practical areas, no fake percentages.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((group) => (
              <article key={group.title} className="border-4 border-black bg-white p-5 text-[#121212] shadow-[8px_8px_0_0_#121212]">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-black uppercase">{group.title}</h3>
                  <span
                    className={[
                      "h-7 w-7 border-2 border-black",
                      group.accent === "red" ? "rounded-full bg-[#D02020]" : "",
                      group.accent === "blue" ? "bg-[#1040C0]" : "",
                      group.accent === "yellow" ? "rotate-45 bg-[#F0C020]" : "",
                      group.accent === "black" ? "rounded-full bg-[#121212]" : "",
                    ].join(" ")}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
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

      <section id="experience" className="border-b-4 border-black px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em]">Experience</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">
              Background in short form.
            </h2>
          </div>
          <div className="grid gap-5">
            {experience.map((item) => (
              <article key={item.role} className="border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#121212]">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-black uppercase">{item.role}</h3>
                    <p className="mt-1 text-base font-bold">{item.organization}</p>
                  </div>
                  <p className="border-2 border-black bg-[#F0C020] px-3 py-2 text-xs font-black uppercase">{item.date}</p>
                </div>
                <ul className="mt-5 grid gap-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-base font-medium leading-relaxed">
                      <span className="mt-2 h-2 w-2 shrink-0 bg-[#D02020]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#F0C020] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 border-4 border-black bg-[#F0F0F0] p-6 shadow-[8px_8px_0_0_#121212] lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em]">Contact</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">
              Open to technical roles and collaboration.
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed">
              The portfolio is ready for real resume, GitHub, LinkedIn, and email links as soon as those URLs are confirmed.
            </p>
          </div>
          <div className="grid gap-3">
            <MechanicalLink href="mailto:hello@example.com" tone="black">
              Email
            </MechanicalLink>
            <MechanicalLink href="https://github.com/" tone="white">
              GitHub
            </MechanicalLink>
            <MechanicalLink href="https://www.linkedin.com/" tone="blue">
              LinkedIn
            </MechanicalLink>
          </div>
        </div>
      </section>
    </main>
  );
}
