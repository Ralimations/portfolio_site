export const projectCategories = [
  { id: "all", label: "All Projects", shortLabel: "All" },
  { id: "ai-automation", label: "AI & Automation", shortLabel: "AI + Automation" },
  { id: "embedded-iot", label: "Embedded / IoT", shortLabel: "Embedded" },
  { id: "ai-ml", label: "AI / ML", shortLabel: "AI / ML" },
  { id: "web", label: "Web Development", shortLabel: "Web" },
  { id: "mobile", label: "Mobile Development", shortLabel: "Mobile" },
  { id: "software", label: "Software Development", shortLabel: "Software" },
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
    featured: true,
    status: "Case study draft",
  },
  {
    id: "ai-group-detection",
    slug: "ai-group-detection",
    title: "AI Group Detection",
    category: "ai-ml",
    capabilityTags: ["Computer Vision", "AI Experiment", "Data Processing", "Testing"],
    shortDescription:
      "Computer vision experiment for identifying grouped people and reviewing detection output through a simple interface.",
    description: [
      "AI Group Detection explores how computer vision can identify people, group proximity, and detection confidence from visual input.",
      "The project is focused on practical AI experimentation: model behavior, interface clarity, and readable results.",
    ],
    technologies: [
      { label: "AI / ML", items: ["Computer Vision", "Object Detection", "Python"] },
      { label: "Interface", items: ["React", "JavaScript", "Result Visualization"] },
      { label: "Tools", items: ["Git", "Dataset Review", "Model Testing"] },
    ],
    contributions: [
      "Tested detection behavior across sample inputs.",
      "Reviewed model output and false-positive cases.",
      "Built interface elements for presenting detection state clearly.",
    ],
    architecture: ["Input media", "Detection model", "Post-processing", "Result overlay", "Review interface"],
    outcomes: ["Shows AI experimentation, visual result handling, and practical model evaluation."],
    assetFolder: "ai-group-detection",
    year: "2026",
    featured: true,
    status: "Prototype",
  },
  {
    id: "portfolio-site",
    slug: "portfolio-site",
    title: "Portfolio Website",
    category: "web",
    capabilityTags: ["Frontend", "Structured Data", "Documentation", "Accessibility"],
    shortDescription:
      "Minimalist Modern professional portfolio built around structured project data, fast scanning, and maintainable case studies.",
    description: [
      "This portfolio is a content-driven site for presenting embedded, AI, web, mobile, and software projects in a recruiter-friendly format.",
      "The implementation separates project metadata from reusable UI, making future updates mostly a data and asset-management task.",
    ],
    technologies: [
      { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { label: "Platform", items: ["Vinext", "Vite", "Cloudflare Workers"] },
      { label: "Quality", items: ["Semantic HTML", "Accessible Focus States", "Responsive Layout"] },
    ],
    contributions: [
      "Defined the project data model and category structure.",
      "Built filtered project browsing and detail views.",
      "Translated the visual system into a refined Minimalist Modern interface.",
    ],
    architecture: ["Project metadata", "Asset discovery", "Filtered cards", "Detail route", "Carousel media"],
    outcomes: ["Turns the portfolio from a placeholder shell into a maintainable project showcase."],
    assetFolder: "portfolio-site",
    year: "2026",
    featured: true,
    status: "In progress",
  },
  {
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
    id: "mobile-job-portal",
    slug: "mobile-job-portal",
    title: "Mobile Job Portal",
    category: "mobile",
    capabilityTags: ["Frontend", "Workflow Design", "Testing"],
    shortDescription:
      "Mobile-oriented job portal concept with screens for browsing roles, reviewing details, and managing user profile flow.",
    description: [
      "Mobile Job Portal is a compact application concept for browsing job listings and moving through a simplified application journey.",
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
    featured: false,
    status: "Concept",
  },
  {
    id: "automation-utilities",
    slug: "automation-utilities",
    title: "Automation Utilities",
    category: "software",
    capabilityTags: ["Automation", "Data Processing", "Validation", "Documentation"],
    shortDescription:
      "Small software tools and scripts for cleaning repetitive tasks, validating files, and making technical workflows easier to repeat.",
    description: [
      "Automation Utilities collects small programs built to reduce manual repetition in day-to-day technical workflows.",
      "The work focuses on reliability, readable output, and simple commands that can be reused without extra setup.",
    ],
    technologies: [
      { label: "Languages", items: ["JavaScript", "TypeScript", "Python"] },
      { label: "Practices", items: ["File Validation", "CLI Workflows", "Error Handling"] },
      { label: "Tools", items: ["Node.js", "Git", "VS Code"] },
    ],
    contributions: [
      "Wrote scripts for repeatable file and content checks.",
      "Added clear terminal output for success and failure states.",
      "Documented usage so utilities can be reused later.",
    ],
    architecture: ["Input files", "Validation step", "Transform or report", "Actionable output"],
    outcomes: ["Shows practical software development through small, focused tools."],
    assetFolder: "automation-utilities",
    year: "2025",
    featured: false,
    status: "Collection",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getCategoryLabel(category: ProjectCategory) {
  return projectCategories.find((item) => item.id === category)?.label ?? category;
}
