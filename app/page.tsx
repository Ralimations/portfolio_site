const skillLanes = [
  {
    id: "01",
    title: "Front-end build",
    accent: "red",
    items: ["React interfaces", "Responsive layouts", "Component systems"],
  },
  {
    id: "02",
    title: "Data work",
    accent: "blue",
    items: ["Clean spreadsheets", "Readable reports", "Dashboard thinking"],
  },
  {
    id: "03",
    title: "Coding support",
    accent: "yellow",
    items: ["Task automation", "Bug tracing", "Process cleanup"],
  },
  {
    id: "04",
    title: "Client-ready delivery",
    accent: "black",
    items: ["Clear handoffs", "Documented choices", "Polished details"],
  },
];

const projectFrames = [
  {
    title: "Portfolio system",
    kind: "Site backbone",
    copy:
      "A modular one-page site built to hold case studies, code notes, data samples, and role-specific CV paths.",
  },
  {
    title: "Data and coding associate track",
    kind: "Work sample slot",
    copy:
      "A place for cleaning workflows, spreadsheet logic, scripts, and before-after examples that show practical accuracy.",
  },
  {
    title: "Front-end developer track",
    kind: "Case study slot",
    copy:
      "A focused area for interface builds, responsive decisions, accessibility fixes, and component-level craft.",
  },
];

const proofPoints = [
  "Turns messy requirements into ordered screens",
  "Keeps content specific to the role being targeted",
  "Builds pages that can grow into case studies",
  "Explains technical choices in plain language",
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

function GeometricPanel() {
  return (
    <div className="relative min-h-[420px] overflow-hidden border-l-4 border-black bg-[#1040C0] p-6 sm:min-h-[520px]">
      <div className="absolute left-8 top-8 h-28 w-28 rounded-full border-4 border-black bg-[#F0C020] shadow-[8px_8px_0_0_#121212]" />
      <div className="absolute right-10 top-20 h-36 w-36 rotate-45 border-4 border-black bg-[#D02020] shadow-[8px_8px_0_0_#121212]" />
      <div className="absolute bottom-12 left-12 h-44 w-44 border-4 border-black bg-white shadow-[8px_8px_0_0_#121212]" />
      <div className="absolute bottom-24 right-16 h-0 w-0 border-x-[70px] border-b-[120px] border-x-transparent border-b-[#F0C020] drop-shadow-[6px_6px_0_#121212]" />
      <div className="absolute inset-x-8 bottom-8 border-4 border-black bg-white p-5 shadow-[8px_8px_0_0_#121212]">
        <p className="text-sm font-black uppercase tracking-[0.2em]">Current build</p>
        <p className="mt-2 text-2xl font-black uppercase leading-none">
          A site frame for coding, data, and front-end proof.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0F0F0] text-[#121212]">
      <header className="sticky top-0 z-20 border-b-4 border-black bg-[#F0F0F0]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-4">
            <ShapeMark />
            <span className="text-sm font-black uppercase tracking-[0.24em]">
              Ral Angelo Lluisma
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-black uppercase tracking-widest md:flex">
            <a className="hover:text-[#D02020]" href="#skills">
              Skills
            </a>
            <a className="hover:text-[#1040C0]" href="#projects">
              Projects
            </a>
            <a className="hover:text-[#D02020]" href="#contact">
              Contact
            </a>
          </div>
          <a
            href="mailto:hello@example.com"
            className="border-2 border-black bg-[#F0C020] px-4 py-2 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0_0_#121212] transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Email
          </a>
        </nav>
      </header>

      <section id="top" className="border-b-4 border-black">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <p className="mb-6 inline-block border-2 border-black bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.28em] shadow-[4px_4px_0_0_#121212]">
              Portfolio backbone
            </p>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] sm:text-7xl lg:text-8xl">
              Coding work with visible structure.
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed sm:text-xl">
              A portfolio for front-end builds, data cleanup, automation notes, and
              work samples that can be read quickly by recruiters and hiring teams.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="border-2 border-black bg-[#D02020] px-6 py-4 text-center font-black uppercase tracking-wider text-white shadow-[4px_4px_0_0_#121212] transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                View the frame
              </a>
              <a
                href="#skills"
                className="border-2 border-black bg-white px-6 py-4 text-center font-black uppercase tracking-wider shadow-[4px_4px_0_0_#121212] transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                Skill lanes
              </a>
            </div>
          </div>
          <GeometricPanel />
        </div>
      </section>

      <section className="border-b-4 border-black bg-[#F0C020]">
        <div className="mx-auto grid max-w-7xl divide-y-4 divide-black border-x-4 border-black bg-[#F0C020] sm:grid-cols-2 sm:divide-x-4 sm:divide-y-0 lg:grid-cols-4">
          {["Front-end", "Data", "Automation", "Writing"].map((item, index) => (
            <div key={item} className="p-6">
              <p className="text-5xl font-black leading-none">0{index + 1}</p>
              <p className="mt-3 text-lg font-black uppercase tracking-widest">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="border-b-4 border-black px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em]">Skill map</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">
                Four lanes, one working system.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {skillLanes.map((lane) => (
                <article
                  key={lane.id}
                  className="group border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#121212] transition duration-200 hover:-translate-y-1"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-4xl font-black">{lane.id}</span>
                    <span
                      className={[
                        "h-6 w-6 border-2 border-black",
                        lane.accent === "red" ? "rounded-full bg-[#D02020]" : "",
                        lane.accent === "blue" ? "bg-[#1040C0]" : "",
                        lane.accent === "yellow" ? "rotate-45 bg-[#F0C020]" : "",
                        lane.accent === "black" ? "rounded-full bg-[#121212]" : "",
                      ].join(" ")}
                    />
                  </div>
                  <h3 className="text-2xl font-black uppercase">{lane.title}</h3>
                  <ul className="mt-5 space-y-3 text-base font-bold">
                    {lane.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 bg-[#121212]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-b-4 border-black bg-[#1040C0] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em]">Project bays</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-none sm:text-6xl">
                Ready for proof, not filler.
              </h2>
            </div>
            <div className="h-24 w-24 rotate-45 border-4 border-black bg-[#F0C020] shadow-[8px_8px_0_0_#121212]" />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projectFrames.map((project, index) => (
              <article
                key={project.title}
                className="border-4 border-black bg-white p-6 text-[#121212] shadow-[8px_8px_0_0_#121212]"
              >
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#D02020]">
                  {project.kind}
                </p>
                <h3 className="mt-5 text-3xl font-black uppercase leading-none">
                  {project.title}
                </h3>
                <p className="mt-5 text-base font-medium leading-relaxed">{project.copy}</p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full border-2 border-black bg-[#F0C020]" />
                  <span className="h-10 w-10 border-2 border-black bg-[#D02020]" />
                  <span className="text-3xl font-black">0{index + 1}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-4 border-black bg-[#D02020] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-4xl font-black uppercase leading-none sm:text-6xl">
            What the site should prove.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <div key={point} className="border-4 border-black bg-white p-5 text-[#121212] shadow-[6px_6px_0_0_#121212]">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-[#F0C020] text-xl font-black">
                  +
                </span>
                <p className="text-lg font-black uppercase leading-tight">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#F0C020] px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl border-4 border-black bg-[#F0F0F0] p-6 shadow-[8px_8px_0_0_#121212] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em]">Next layer</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">
                Add the real cases next.
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed">
                The backbone is ready for project evidence, screenshots, GitHub links,
                role-specific CV downloads, and a cleaner contact address.
              </p>
            </div>
            <a
              href="mailto:hello@example.com"
              className="block border-4 border-black bg-[#121212] px-6 py-5 text-center text-xl font-black uppercase tracking-wider text-white shadow-[6px_6px_0_0_#D02020] transition active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
