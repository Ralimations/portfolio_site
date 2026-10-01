export const projectCategories = [
  { id: "web-development", label: "WEB DEV", title: "Web Development", description: "Artist websites, personal portfolios, business sites, and browser-based tools." },
  { id: "desktop-automation", label: "DESKTOP & AUTOMATION", title: "Desktop & Automation", description: "Applications that organize media and make everyday workflows easier to manage." },
  { id: "ai-data", label: "AI & DATA", title: "AI & Data", description: "Tools for exploring data, understanding performance, and working with local AI." },
  { id: "computer-vision-embedded", label: "VISION & EMBEDDED", title: "Computer Vision & Embedded Systems", description: "Software that connects cameras, movement, and physical hardware." },
] as const;

export type ProjectCategoryId = typeof projectCategories[number]["id"];
