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
    id: "ralskies-shorts-manager",
    slug: "ralskies-shorts-manager",
    title: "Ralskies Shorts Manager & Scheduler",
    category: "automation",
    capabilityTags: [
      "Desktop Application",
      "Workflow Automation",
      "API Integration",
      "Verification"
    ],
    shortDescription: "A local-first desktop application for organizing, batching, tracking, scheduling, and verifying a YouTube Shorts workflow.",
    description: [
      "I am building a desktop application that connects local media files, tracker records, staged media, and private YouTube uploads in one workflow.",
      "Production execution uses immutable plans, durable journals, exact-plan authorization, tracker backups, crash recovery, and bounded read-only verification retries."
    ],
    technologies: [
      {
        label: "Application",
        items: [
          "Electron",
          "Node.js",
          "JavaScript"
        ]
      },
      {
        label: "Integrations",
        items: [
          "YouTube Data API v3",
          "OAuth 2.0",
          "XLSX"
        ]
      },
      {
        label: "Media identity",
        items: [
          "SHA-256"
        ]
      }
    ],
    contributions: [
      "Implemented SHA-256 media identity for duplicate detection and deterministic matching across the workflow.",
      "Designed guarded execution with recovery journals, tracker backups, and authorization for the exact execution plan.",
      "Completed a production batch of 8/8 scheduled updates using 8 live writes and 19 verification reads, with zero recovery failures."
    ],
    assetFolder: "ralskies-shorts-manager",
    year: "Personal project",
    featured: true,
    status: "In progress",
    outcomes: [
      "Production batch: 8/8 scheduled updates, 8 live writes, 19 verification reads, zero recovery failures."
    ],
    testing: [
      "Used bounded read-only verification retries to check production updates.",
      "Recorded production execution in durable journals and supported crash recovery."
    ]
  },
  {
    id: "ralskies-showcase",
    slug: "ralskies-showcase",
    title: "Ralskies Artist Website",
    category: "web",
    capabilityTags: [
      "Web Development",
      "Artist Portfolio",
      "Contact Integration"
    ],
    shortDescription: "An artist website presenting Ralskies music, content, and creator identity, with email/contact integration in development.",
    description: [
      "I am developing an artist website for Ralskies with a focused presentation of music, content, and creator identity.",
      "The project includes email/contact integration to support audience and collaboration inquiries through a maintainable web workflow."
    ],
    technologies: [
      {
        label: "Development",
        items: [
          "Web Development",
          "Email Integration"
        ]
      }
    ],
    contributions: [
      "Developing the artist website and organizing its music, content, and creator presentation.",
      "Implementing email/contact integration for audience and collaboration inquiries."
    ],
    assetFolder: "ralskies-showcase",
    year: "March 2026",
    featured: true,
    status: "In development",
    demoUrl: "https://ralskies.vercel.app/"
  },
  {
    id: "streamlit-analytics-chatbot",
    slug: "streamlit-analytics-chatbot",
    title: "Streamlit AI Data Analytics Chatbot",
    category: "ai-ml",
    capabilityTags: [
      "Local LLMs",
      "Data Analytics",
      "API Integration",
      "Validation"
    ],
    shortDescription: "An interactive chatbot prototype that connects natural-language questions with data exploration and analytics.",
    description: [
      "This personal project combines natural-language questions with data exploration in a Streamlit interface.",
      "I integrated locally hosted language-model endpoints and validated responses, resource usage, and deployment constraints."
    ],
    technologies: [
      {
        label: "Application",
        items: [
          "Python",
          "Streamlit",
          "Local LLM/API Integration"
        ]
      }
    ],
    contributions: [
      "Developed the interactive chatbot prototype and data exploration workflow.",
      "Integrated local language-model endpoints into the Streamlit interface.",
      "Validated responses, resource usage, and deployment constraints."
    ],
    assetFolder: "streamlit-analytics-chatbot",
    year: "Personal project",
    featured: false,
    status: "Prototype"
  },
  {
    id: "aria-studio",
    slug: "aria-studio",
    title: "A.R.I.A. Studio / Tuberskies",
    category: "software",
    capabilityTags: [
      "Creator Analytics",
      "Dashboards",
      "Data Visualization"
    ],
    shortDescription: "A creator-analytics workspace that turns performance data into dashboards, milestones, alerts, and recommended actions.",
    description: [
      "I developed a workspace for reviewing creator performance data through dashboards, milestones, alerts, and recommended actions."
    ],
    technologies: [
      {
        label: "Frontend",
        items: [
          "React",
          "TypeScript",
          "Recharts"
        ]
      },
      {
        label: "Backend",
        items: [
          "Python",
          "FastAPI"
        ]
      }
    ],
    contributions: [
      "Developed the creator-analytics workspace and its performance-data views."
    ],
    assetFolder: "aria-studio",
    year: "March - April 2026",
    featured: true,
    status: "Developed"
  },
  {
    id: "guided-pose",
    slug: "guided-pose",
    title: "Guided Pose Program",
    category: "ai-ml",
    capabilityTags: [
      "Computer Vision",
      "Team Leadership",
      "Voice Feedback"
    ],
    shortDescription: "A microcomputer-based physical education guide with real-time posture correction and voice feedback.",
    description: [
      "As lead programmer in a team of eight, I led software development for a microcomputer-based exercise guide system at MSU-IIT.",
      "The prototype tracks, analyzes, and evaluates user movements, combining corrective feedback with voice guidance for physical education activities."
    ],
    technologies: [
      {
        label: "Computer vision",
        items: [
          "Python",
          "OpenCV"
        ]
      }
    ],
    contributions: [
      "Designed and developed the core computer-vision module for tracking and evaluating movement.",
      "Integrated pose-detection logic, corrective feedback, and voice guidance into the prototype.",
      "Coordinated project requirements, testing, documentation, and the final presentation with the team."
    ],
    assetFolder: "guided-pose",
    year: "September - December 2025",
    featured: false,
    status: "Functional prototype",
    testing: [
      "Coordinated prototype testing with the project team."
    ]
  },
  {
    id: "morphscale",
    slug: "morphscale",
    title: "Mobile Job Portal Prototype",
    category: "mobile",
    capabilityTags: [
      "C++",
      "Qt Creator",
      "Team Leadership"
    ],
    shortDescription: "A C++ and Qt Creator prototype connecting MSU students with local job opportunities.",
    description: [
      "I led a capstone application project at MSU-IIT connecting students with local job opportunities.",
      "The team developed the software using C++ and Qt Creator, applying object-oriented programming principles, and presented the functional prototype to faculty."
    ],
    technologies: [
      {
        label: "Development",
        items: [
          "C++",
          "Qt Creator",
          "Object-Oriented Programming"
        ]
      }
    ],
    contributions: [
      "Designed the capstone application and coordinated team tasks as team lead.",
      "Applied object-oriented programming principles to develop the software.",
      "Presented the functional prototype to faculty."
    ],
    assetFolder: "mobile-job-portal",
    year: "January - March 2023",
    featured: false,
    status: "Functional prototype"
  },
  {
    id: "smart-shelf",
    slug: "smart-shelf",
    title: "AutoMatTsek - IoT Stock Monitoring & Pricing Display",
    category: "embedded-iot",
    capabilityTags: [
      "IoT",
      "Stock Monitoring",
      "Pricing Display"
    ],
    shortDescription: "A modular IoT-based on-shelf stock monitoring and pricing display system developed as my Computer Applications thesis.",
    description: [
      "AutoMatTsek is my BS Computer Applications thesis at MSU-IIT: a modular IoT-based on-shelf stock monitoring and pricing display system."
    ],
    technologies: [
      {
        label: "Discipline",
        items: [
          "Internet of Things",
          "Embedded Systems"
        ]
      }
    ],
    contributions: [
      "Completed the AutoMatTsek thesis as part of my BS Computer Applications degree."
    ],
    assetFolder: "smart-shelf",
    year: "2026",
    featured: false,
    status: "Thesis"
  },
  {
    id: "pcb-design",
    slug: "pcb-design",
    title: "PCB Designing",
    category: "embedded-iot",
    capabilityTags: [
      "PCB Layout",
      "Design Checks",
      "Manufacturing Files"
    ],
    shortDescription: "A collaborative PCB design project covering component placement, circuit routing, and manufacturing files.",
    description: [
      "As a project contributor at MSU-IIT, I assisted with component placement, circuit routing, and design checks.",
      "I also contributed to the board layout and Gerber files prepared for manufacturing."
    ],
    technologies: [
      {
        label: "Design",
        items: [
          "PCB Layout",
          "Circuit Routing",
          "Gerber Files"
        ]
      }
    ],
    contributions: [
      "Assisted with component placement, circuit routing, and design checks.",
      "Contributed to preparing the board layout and Gerber files for manufacturing."
    ],
    assetFolder: "pcb-design",
    year: "February - April 2024",
    featured: false,
    status: "Academic project"
  },
  {
    id: "am-transmitter",
    slug: "am-transmitter",
    title: "AM Transmitter",
    category: "embedded-iot",
    capabilityTags: [
      "Circuit Assembly",
      "Troubleshooting",
      "Audio Modulation"
    ],
    shortDescription: "An AM transmitter built with a 555 timer, microphone, and amplifier circuit to modulate and broadcast audio.",
    description: [
      "I worked as hardware troubleshooter and documenter on a team AM transmitter project at MSU-IIT.",
      "The circuit used a 555 timer, microphone, and amplifier to modulate and broadcast audio signals."
    ],
    technologies: [
      {
        label: "Hardware",
        items: [
          "555 Timer",
          "Microphone",
          "Amplifier Circuit"
        ]
      }
    ],
    contributions: [
      "Built the transmitter with the project team.",
      "Collaborated on circuit assembly, testing, and troubleshooting for audio modulation and signal transmission."
    ],
    assetFolder: "am-transmitter",
    year: "November - December 2023",
    featured: false,
    status: "Academic project"
  },
  {
    id: "variable-power-supply",
    slug: "variable-power-supply",
    title: "Variable Power Supply",
    category: "embedded-iot",
    capabilityTags: [
      "Technical Documentation",
      "Assembly Support",
      "Testing"
    ],
    shortDescription: "Technical documentation and assembly support for a team-built 12V variable power supply.",
    description: [
      "As project documenter at MSU-IIT, I recorded the design, assembly, PCB fabrication, soldering, and testing processes for a 12V variable power supply.",
      "I gathered component specifications, test results, and project updates, and prepared supporting records from the schematic and completed prototype."
    ],
    technologies: [
      {
        label: "Hardware & documentation",
        items: [
          "12V Power Supply",
          "PCB Fabrication",
          "Soldering",
          "Technical Documentation"
        ]
      }
    ],
    contributions: [
      "Documented design, assembly, fabrication, soldering, and testing.",
      "Coordinated with teammates to gather specifications, results, and progress updates.",
      "Assisted during assembly and testing while recording issues, troubleshooting steps, and final results."
    ],
    assetFolder: "variable-power-supply",
    year: "May - June 2023",
    featured: false,
    status: "Academic project"
  },
  {
    id: "ai-group-detection",
    slug: "ai-group-detection",
    title: "AI Group Detection",
    category: "ai-ml",
    capabilityTags: [
      "AI / ML",
      "Confidential POC"
    ],
    shortDescription: "MELDCX proof-of-concept project involving AI/ML work; implementation details are confidential under NDA.",
    description: [
      "This was an AI/ML proof of concept completed during my MELDCX internship.",
      "Further project details are withheld under NDA."
    ],
    technologies: [
      {
        label: "Disclosure",
        items: [
          "MELDCX Proof of Concept",
          "Confidential under NDA"
        ]
      }
    ],
    contributions: [
      "Contributed to an AI/ML proof of concept during my MELDCX internship."
    ],
    assetFolder: "ai-group-detection",
    year: "2026",
    featured: false,
    status: "Confidential POC",
    outcomes: [
      "MELDCX proof of concept; further details are confidential under NDA."
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getCategoryLabel(category: ProjectCategory) {
  return projectCategories.find((item) => item.id === category)?.label ?? category;
}
