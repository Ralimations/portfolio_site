export const projectCategories = [
  { id: "all", label: "All Projects", shortLabel: "All" },
  { id: "software", label: "Software", shortLabel: "Software" },
  { id: "web", label: "Web", shortLabel: "Web" },
  { id: "mobile", label: "Mobile", shortLabel: "Mobile" },
  { id: "ai-ml", label: "AI / ML", shortLabel: "AI / ML" },
  { id: "automation", label: "Automation", shortLabel: "Automation" },
  { id: "embedded-iot", label: "Embedded / IoT", shortLabel: "Embedded" },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]["id"];
export type ConcreteProjectCategory = Exclude<ProjectCategory, "all">;

export type TechnologyGroup = {
  label: string;
  items: string[];
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: ConcreteProjectCategory;
  capabilityTags: string[];
  shortDescription: string;
  description: string[];
  technologies: TechnologyGroup[];
  contributions: string[];
  assetFolder: string;
  year: string;
  featured: boolean;
  status: string;
  githubUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  architecture?: string[];
  outcomes?: string[];
  problem?: string;
  solution?: string;
  testing?: string[];
  challenges?: string[];
  learned?: string[];
};

export const projects: Project[] = [
  {
    id: "smart-shelf",
    slug: "smart-shelf",
    title: "Smart Shelf",
    category: "embedded-iot",
    capabilityTags: ["Embedded Systems", "Data Processing", "Hardware Integration", "Dashboard"],
    shortDescription:
      "IoT retail shelf concept that monitors stock through load cells, RFID-aware item tracking, and connected embedded hardware.",
    description: [
      "Smart Shelf is an embedded retail inventory system designed to make product availability visible without manual shelf checks.",
      "The project combines sensor readings, microcontroller logic, and a connected data layer so stock changes can be captured and reviewed quickly.",
    ],
    technologies: [
      { label: "Hardware", items: ["ESP32", "HX711", "Load Cells", "RFID"] },
      { label: "Software", items: ["Arduino Framework", "FreeRTOS", "MongoDB"] },
      { label: "Tools", items: ["VS Code", "Git", "Circuit Prototyping"] },
    ],
    contributions: [
      "Built the embedded sensor workflow for reading shelf weight changes.",
      "Integrated load cell and RFID inputs with microcontroller firmware.",
      "Documented hardware behavior and test conditions for project review.",
    ],
    architecture: ["Sensor input", "ESP32 processing", "Network update", "Database record", "Dashboard review"],
    outcomes: ["Demonstrates hardware integration, firmware structure, and IoT system thinking."],
    assetFolder: "smart-shelf",
    year: "2026",
    featured: false,
    status: "Case study draft",
  },
  {
    id: "ai-group-detection",
    slug: "ai-group-detection",
    title: "AI Group Detection",
    category: "ai-ml",
    capabilityTags: ["AI / ML", "Confidential POC"],
    shortDescription:
      "MELDCX proof-of-concept project involving AI/ML work; implementation details are confidential under NDA.",
    description: [
      "This was an AI/ML proof of concept completed during my MELDCX internship.",
      "Further project details are withheld under NDA.",
    ],
    technologies: [{ label: "Disclosure", items: ["MELDCX Proof of Concept", "Confidential under NDA"] }],
    contributions: ["Contributed to an AI/ML proof of concept during my MELDCX internship."],
    outcomes: ["MELDCX proof of concept; further details are confidential under NDA."],
    assetFolder: "ai-group-detection",
    year: "2026",
    featured: false,
    status: "Confidential POC",
  }, {
    id: "ralskies-showcase",
    slug: "ralskies-showcase",
    title: "Ralskies Artist Portfolio",
    category: "web",
    capabilityTags: ["Frontend", "Workflow Design", "Visual QA", "Responsive UI"],
    shortDescription:
      "Live web development showcase for presenting artist portfolio work through a polished, public-facing Vercel site.",
    description: [
      "Ralskies is a live artist portfolio site used as a public web development showcase.",
      "The project gives visitors a focused place to review creative work, presentation style, and front-end execution, with room to expand as more web projects are added.",
    ],
    technologies: [
      { label: "Frontend", items: ["Responsive UI", "Portfolio Layout", "Web Presentation"] },
      { label: "Platform", items: ["Vercel", "Public Web Hosting"] },
      { label: "Practices", items: ["Visual QA", "Content Organization", "Portfolio Maintenance"] },
    ],
    contributions: [
      "Built and maintains the public-facing portfolio showcase.",
      "Organized the site around visual presentation and quick project review.",
      "Prepared it as a live reference point for future web development work.",
    ],
    architecture: ["Portfolio content", "Responsive layout", "Public web route", "Vercel hosting", "Future project additions"],
    outcomes: ["Provides a live web-development reference that can expand as more portfolio sites are added."],
    assetFolder: "ralskies-showcase",
    year: "2026",
    featured: true,
    status: "Live showcase",
    demoUrl: "https://ralskies.vercel.app/",
  },
  {
    id: "morphscale",
    slug: "morphscale",
    title: "Morphscale",
    category: "mobile",
    capabilityTags: ["Frontend", "Workflow Design", "Testing"],
    shortDescription:
      "Mobile-oriented job portal concept with screens for browsing roles, reviewing details, and managing user profile flow.",
    description: [
      "Morphscale is a mobile application concept for browsing job listings and moving through a simplified application journey.",
      "The project emphasizes mobile layout decisions, clear navigation, and interface states that fit smaller screens.",
    ],
    technologies: [
      { label: "Mobile", items: ["Responsive UI", "Mobile Navigation", "Form Flow"] },
      { label: "Frontend", items: ["React", "TypeScript", "CSS"] },
      { label: "Tools", items: ["Git", "UI Prototyping", "Browser Testing"] },
    ],
    contributions: [
      "Designed the mobile-first screen structure.",
      "Built role browsing and profile-oriented interface sections.",
      "Refined responsive spacing for small-screen readability.",
    ],
    architecture: ["Home", "Job list", "Job details", "Profile", "Application action"],
    outcomes: ["Demonstrates mobile-first interface planning and workflow organization."],
    assetFolder: "mobile-job-portal",
    year: "2025",
    featured: true,
    status: "Concept",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getCategoryLabel(category: ProjectCategory) {
  return projectCategories.find((item) => item.id === category)?.label ?? category;
}
