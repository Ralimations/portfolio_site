import type { ProjectCategoryId } from "./categories";

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryIds: ProjectCategoryId[];
  thumbnail?: string;
  period: string;
  status: string;
  problem: string;
  solution: string;
  technologies: string[];
  flow: string[];
  featured: boolean;
  github?: string;
  demo?: string;
  caseStudy?: {
    objective: string;
    role: string;
    architecture: string;
    decisions: { title: string; detail: string }[];
    outcome: string;
    next: string;
  };
  // Add only verified implementation evidence and repository URLs.
  evidence: string;
}

export const projects: Project[] = [
  {
    id: "guided-pose", title: "Guided Pose", category: "Computer vision / Embedded systems", categoryIds: ["computer-vision-embedded"],
    period: "SEP — DEC 2025", status: "Functional prototype", featured: true,
    github: "https://github.com/Ralimations/guided-pose-program",
    problem: "Exercise instructions alone cannot tell a student when their posture needs correcting.",
    solution: "A microcomputer-based physical education guide that evaluates movement and gives real-time posture correction and voice feedback.",
    technologies: ["Python", "OpenCV"], flow: ["Movement input", "Pose analysis", "Corrective feedback", "Voice guidance"],
    caseStudy: {
      objective: "Build an exercise guide that connects movement analysis with feedback students can act on while exercising.",
      role: "Lead programmer in a team of eight. Developed the core computer-vision module and integrated pose-detection logic, corrective feedback, and voice guidance. Led work on requirements, testing, documentation, and the final presentation.",
      architecture: "The Python and OpenCV module tracks, analyzes, and evaluates user movements. Pose-detection logic supplies corrective feedback, which is connected to voice guidance in the microcomputer-based prototype.",
      decisions: [
        { title: "Connect analysis to action", detail: "Movement evaluation was integrated with corrective and voice feedback so the system could guide an exercise rather than only record it." },
        { title: "Coordinate software and team delivery", detail: "The lead-programmer role included defining requirements and coordinating testing and documentation across the eight-person team." },
      ],
      outcome: "Delivered a functional prototype combining computer vision, posture correction, and voice guidance for physical education activities.",
      next: "Suggested next evaluation: document posture criteria, test different camera positions and lighting, and measure the delay between movement and spoken feedback. These are proposed checks, not reported results.",
    }, evidence: "CV · Guided Pose Program, September–December 2025",
  },
  {
    id: "shorts-manager", title: "Ralskies Shorts Manager", category: "Desktop software / Workflow automation", categoryIds: ["desktop-automation"],
    period: "IN DEVELOPMENT", status: "In progress", featured: true,
    github: "https://github.com/Ralimations/ralskies-shorts-helper",
    problem: "A publishing workflow needs to keep local media, tracker records, and uploaded videos matched without duplicating files.",
    solution: "A local-first desktop application to organize, batch, track, schedule, and verify a real YouTube Shorts workflow.",
    technologies: ["Electron", "Node.js", "JavaScript", "YouTube Data API v3", "OAuth 2.0", "SHA-256", "XLSX"],
    flow: ["Local media", "SHA-256 identity", "Tracker & staging", "YouTube uploads"],
    caseStudy: {
      objective: "Create a desktop workspace that keeps a creator’s local files and YouTube publishing workflow consistently linked.",
      role: "Building the local-first application and implementing SHA-256 media identity for duplicate detection and deterministic matching.",
      architecture: "An Electron and Node.js application connects local media, XLSX tracker records, and YouTube through Data API v3 and OAuth 2.0. SHA-256 identifies media across workflow stages. Execution uses immutable plans, durable journals, tracker backups, crash recovery, and bounded read-only verification retries.",
      decisions: [
        { title: "Identify media by its contents", detail: "SHA-256 provides deterministic media identity for duplicate detection and matching across the local-file, tracker, staging, and upload steps." },
        { title: "Make external changes recoverable", detail: "Execution is authorized for an exact immutable plan. Durable journals and tracker backups support crash recovery; bounded read-only retries verify the external changes without repeating writes." },
      ],
      outcome: "The application is in progress and actively used on the Ralskies channel. The earlier project record documents a batch of eight scheduled updates, eight live writes, and 19 verification reads, with no recovery failures in that batch.",
      next: "Suggested next evaluation: expand recovery testing with deliberately interrupted runs and changed tracker records. The recorded batch is evidence of one execution, not a guarantee for every failure mode.",
    }, evidence: "CV and earlier portfolio project record · Ralskies Shorts Manager & Scheduler",
  },
  {
    id: "soireesource", title: "SoiréeSource — Full-Stack Event Services Marketplace", category: "Web development / Full-stack marketplace", categoryIds: ["web-development"],
    period: "2026 — PRESENT", status: "Ongoing client project", featured: true,
    demo: "https://soireesource.vercel.app/", thumbnail: "/projects/soireesource.jpg",
    problem: "Event planning involves scattered service discovery, provider coordination, and booking details that need to work together in one dependable workflow.",
    solution: "A production-hosted marketplace where customers discover event services, providers manage their businesses, and administrators oversee the booking lifecycle.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Supabase PostgreSQL", "Postgres.js", "Vercel"],
    flow: ["Service discovery", "Role-based booking", "Provider & admin workflows", "Cloud persistence"],
    caseStudy: {
      objective: "Build and maintain a usable event-services marketplace with structured workflows for customers, providers, and administrators.",
      role: "Independent developer responsible for the application’s full-stack implementation and ongoing maintenance, including authentication, authorization, booking workflows, responsive interfaces, database migration, performance work, and validation.",
      architecture: "The Next.js and React application uses server-side authentication and authorization, transactional PostgreSQL operations through Supabase and Postgres.js, and Vercel hosting. The platform coordinates service discovery, provider profiles, bundles, vouchers, notifications, availability, bookings, reviews, dashboards, and account management across three user roles.",
      decisions: [
        { title: "Move persistence to managed PostgreSQL", detail: "The original local SQLite implementation was migrated to cloud-hosted Supabase PostgreSQL to support the deployed marketplace and its multi-role workflows." },
        { title: "Replace repeated reads with set-based access", detail: "Batched PostgreSQL queries, request memoization, and safe Next.js Cache Components reduced homepage reads from 54 to 8, customer-dashboard reads from 125 to 7, and admin-dashboard reads from 256 to 9 while retaining live availability checks." },
        { title: "Validate the workflow as a product", detail: "TypeScript checking, ESLint, business tests, browser smoke testing, responsive testing, and production builds provide repeatable checks while Phase 1 feedback is collected." },
      ],
      outcome: "Phase 1 is deployed and undergoing client and user acceptance testing. The current release supports the marketplace’s core discovery, booking, provider, administration, and simulated transaction workflows.",
      next: "Continue iterating from acceptance feedback and evaluate production payment integrations, external notifications, media storage, and additional marketplace features.",
    }, evidence: "Client project record, live Phase 1 deployment, and local project source",
  },
  {
    id: "local-ai-chatbot", title: "Local AI Analytics", category: "AI implementation / Data exploration", categoryIds: ["ai-data"],
    period: "OJT PROJECT · 2026", status: "Proof of concept", featured: false,
    problem: "Natural-language data exploration must work within the limits of locally hosted models and hardware.",
    solution: "An interactive Streamlit chatbot prototype connecting natural-language questions with data exploration and analytics workflows.",
    technologies: ["Python", "Streamlit", "Local LLMs", "API integration"],
    flow: ["User question", "Streamlit interface", "Local model endpoint", "Analytics response"],
    caseStudy: {
      objective: "Explore whether locally hosted language-model endpoints can support an interactive data-analytics workflow.",
      role: "Developed the proof of concept during on-the-job training. Integrated local model endpoints into the Streamlit interface and validated responses, resource usage, and deployment constraints.",
      architecture: "A Python and Streamlit interface accepts natural-language questions and integrates locally hosted language-model endpoints. The prototype combines this interaction with data exploration and analytics workflows.",
      decisions: [
        { title: "Validate the model in its environment", detail: "Evaluation covered responses, resource usage, and deployment constraints rather than assuming a locally hosted model would behave the same on every setup." },
        { title: "Make endpoint behavior interactive", detail: "Streamlit provided an interface for trying natural-language questions against locally hosted endpoints during the proof of concept." },
      ],
      outcome: "Created an interactive proof of concept and validated local inference behavior and deployment constraints. It is presented as a prototype, with no production-accuracy claim.",
      next: "Suggested next evaluation: create repeatable question-and-answer checks, make unsupported answers visible, and record resource usage for each target machine.",
    }, evidence: "CV · Streamlit AI Data Analytics Chatbot",
  },
  {
    id: "ralskies", title: "Ralskies Artist Website", category: "Web development / Artist website", categoryIds: ["web-development"],
    period: "WEB PROJECT", status: "Live website", featured: false,
    github: "https://github.com/Ralimations/Ralskies-OFFICIAL-WEBSITE", demo: "https://ralskies.vercel.app",
    thumbnail: "/projects/ralskies.png",
    problem: "Bring an artist’s music, performances, and collaboration opportunities together in one place.",
    solution: "An artist website for Ralskies, showcasing music and live performances with community links, donation support, and collaboration enquiries.",
    technologies: ["HTML", "CSS", "JavaScript", "Vite", "Vercel"], flow: ["Artist introduction", "Music & performances", "Community & collaborations"],
    evidence: "Owner-provided reference, homepage capture, and local project source",
  },
  {
    id: "solutions-with-ral", title: "solutionswithral Portfolio", category: "Web development / Portfolio", categoryIds: ["web-development"],
    period: "WEB PROJECT", status: "Live website", featured: false,
    github: "https://github.com/Ralimations/portfolio_site", demo: "https://solutionswithral.vercel.app",
    thumbnail: "/projects/solutions-with-ral.png",
    problem: "Make projects, technical skills, and contact information easy to explore.",
    solution: "A personal portfolio presenting software, hardware, and AI projects through case studies, a technology stack, and direct contact links.",
    technologies: ["Next.js", "React", "TypeScript", "CSS", "Vercel"], flow: ["Introduction", "Featured projects", "Skills & contact"],
    evidence: "Owner-provided reference, homepage capture, and portfolio source",
  },
  {
    id: "luxury-presence-test", title: "Marci Metzger Real Estate", category: "Web development / Real estate", categoryIds: ["web-development"],
    period: "WEB PROJECT", status: "Live prototype", featured: false,
    github: "https://github.com/Ralimations/luxury-presence-test", demo: "https://luxury-presence-test-chi.vercel.app",
    thumbnail: "/projects/luxury-presence-test.png",
    problem: "Introduce a real estate agent and give prospective buyers a clear route to finding a home or making contact.",
    solution: "A real estate website prototype for Marci Metzger in Pahrump, Nevada, with an agent introduction, home discovery, a gallery, and contact calls to action.",
    technologies: ["React", "TypeScript", "Vite", "Vercel"], flow: ["Meet the agent", "Explore homes", "Get in touch"],
    evidence: "Owner-provided reference, homepage capture, and local project source",
  },
];
