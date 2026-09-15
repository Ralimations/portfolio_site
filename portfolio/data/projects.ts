export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  status: string;
  problem: string;
  solution: string;
  technologies: string[];
  flow: string[];
  featured: boolean;
  github?: string;
  demo?: string;
  caseStudy: {
    objective: string;
    role: string;
    architecture: string;
    decisions: { title: string; detail: string }[];
    outcome: string;
    next: string;
  };
  // TODO: Add owner-supplied implementation notes, screenshots, measured results,
  // and repository URLs. Never infer missing implementation evidence or links.
  evidence: string;
}

export const projects: Project[] = [
  {
    id: "guided-pose", title: "Guided Pose", category: "Computer vision / Embedded systems",
    period: "SEP — DEC 2025", status: "Functional prototype", featured: true,
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
    id: "shorts-manager", title: "Ralskies Shorts Manager", category: "Desktop software / Workflow automation",
    period: "IN DEVELOPMENT", status: "In progress", featured: true,
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
    id: "aria-studio", title: "A.R.I.A. Studio", category: "Web development / Creator analytics",
    period: "MAR — APR 2026", status: "Developed workspace", featured: true,
    problem: "Creator performance data needs to become clear priorities, not just another collection of numbers.",
    solution: "A creator-analytics workspace that turns performance data into dashboards, milestones, alerts, and recommended actions.",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "Recharts"],
    flow: ["Performance data", "Analytics workspace", "Dashboards & alerts", "Recommended actions"],
    caseStudy: {
      objective: "Make creator performance data useful for deciding what to do next through dashboards and actionable outputs.",
      role: "Developed the creator-analytics workspace, also named Tuberskies, using React, TypeScript, Python, FastAPI, and Recharts.",
      architecture: "The documented stack combines a React and TypeScript interface, Recharts visualizations, and Python with FastAPI. The workspace presents performance data through dashboards, milestones, alerts, and recommended actions. Endpoint contracts and data-source details are not yet documented here.",
      decisions: [
        { title: "Present more than raw metrics", detail: "Dashboards are paired with milestones, alerts, and recommended actions to connect performance data with a creator’s next steps." },
        { title: "Use a dedicated visualization library", detail: "Recharts is part of the documented React stack for the analytics workspace. Detailed library-selection tradeoffs have not been supplied." },
      ],
      outcome: "Developed a creator-analytics workspace during March–April 2026. Deployment scale and measured outcomes are not claimed.",
      next: "Suggested next evaluation: trace recommendations back to their supporting metrics and document how missing or outdated data is shown to the user.",
    }, evidence: "CV · A.R.I.A. Studio / Tuberskies, March–April 2026",
  },
  {
    id: "local-ai-chatbot", title: "Local AI Analytics", category: "AI implementation / Data exploration",
    period: "OJT PROJECT · 2026", status: "Proof of concept", featured: true,
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
];
