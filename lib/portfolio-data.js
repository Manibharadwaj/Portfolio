// Portfolio copy is deliberately kept separate from presentation components.
// Project claims below are grounded in the linked public repositories.

export const profile = {
  name: "Mani Bharadwaj",
  role: "Software Engineer I & Full-Stack Developer",
  location: "Bengaluru, India",
  email: "manibharadwajcr@gmail.com",
  github: "https://github.com/Manibharadwaj",
  linkedin: "https://www.linkedin.com/in/mani-bharadwaj",
  availability: "Building practical software for real operational work.",
};

export const hero = {
  eyebrow: "Software Engineer I · Bengaluru, India",
  title: "I build software that makes work feel simpler.",
  lead: "Full-stack developer working across product interfaces, back-end services, and the systems that connect them. I care about useful flows, clear interaction, and software that earns its place in someone’s day.",
  primaryCta: { label: "See selected work", href: "#work" },
  secondaryCta: { label: "Get in touch", href: "mailto:manibharadwajcr@gmail.com" },
};

// These are qualitative proof points: they establish range without inventing metrics.
export const proofPoints = [
  {
    label: "Interactive systems",
    value: "Deterministic game logic",
    detail: "Shared client/server physics, replay data, and server-side validation.",
  },
  {
    label: "AI operations",
    value: "Slack relief triage",
    detail: "Structured incidents, coordinator workflows, and MCP-accessible operations.",
  },
  {
    label: "Developer tooling",
    value: "Inside the editor",
    detail: "A VS Code extension for reading and saving developer news without context switching.",
  },
];

export const experience = [
  {
    company: "SmotPro India Pvt. Ltd.",
    role: "Software Engineer I",
    period: "Mar 2026 — Present",
    location: "Bengaluru, India",
    current: true,
    summary: "Building and maintaining software that simplifies workflows for clients and executive teams.",
    highlights: [
      "Develop full-stack features across user interfaces, back-end services, and data workflows.",
      "Translate operational needs into clear, practical product functionality.",
    ],
  },
  {
    company: "Global Tech Software Solutions",
    role: "Technical Lead",
    period: "Jul 2025 — Mar 2026",
    location: "Bengaluru, India",
    current: false,
    summary: "Led delivery of full-stack software solutions for client and executive workflows.",
    highlights: [
      "Translated requirements into practical web application features through release.",
      "Collaborated with junior developers, reviewed work, and helped resolve delivery issues.",
    ],
  },
  {
    company: "Medopharm",
    role: "Quality Analyst",
    period: "Jun 2021 — Jul 2022",
    location: "Malur, India",
    current: false,
    summary: "Worked in a regulated pharmaceutical environment with an emphasis on quality checks and documentation.",
    highlights: [
      "Supported quality processes, accurate record-keeping, and day-to-day operational standards.",
    ],
  },
];

export const stack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "Supabase", category: "Data" },
  { name: "PostgreSQL", category: "Data" },
  { name: "Git", category: "Workflow" },
  { name: "VS Code Extension API", category: "Developer tools" },
];

export const caseStudies = [
  {
    slug: "putt-together",
    name: "Putt Together",
    eyebrow: "Community game platform",
    description: "An endless community-built mini-golf course for Reddit, where creators must ace a hole before publishing it and every scored run is verified by the server.",
    problem: "Community-created challenges need a way to be fun, fair, and provably beatable.",
    solution: "Built a tile editor with an ace-to-publish gate, ghost record replays, themed course progression, player energy and streaks, and deterministic shot simulation shared by the client and server.",
    outcomes: [
      "Publishing is gated by a server-validated one-stroke proof on the exact submitted layout.",
      "Record runs are stored as shot vectors and replayed as ghosts for other players.",
      "The starter world contains 36 generated, solvable holes across four themes.",
    ],
    tech: ["TypeScript", "Phaser", "Vite", "Hono", "Devvit Web", "Redis"],
    github: "https://github.com/Manibharadwaj/putt-together",
    repoLabel: "View source",
    media: {
      type: "product",
      alt: "Putt Together mini-golf game interface",
      hint: "Use a bold game-world composition or a product screenshot from the project.",
    },
    featured: true,
  },
  {
    slug: "aasha",
    name: "Aasha",
    eyebrow: "AI relief-operations agent",
    description: "A Slack-based disaster-relief operations agent that turns unstructured help requests into structured incidents and keeps coordinators focused on the most urgent work.",
    problem: "In fast-moving relief coordination channels, urgent messages can disappear inside a stream of chat.",
    solution: "Built Slack workflows for message triage, incident cards, volunteer assignment, resolution, a live situation report, and an App Home operations view. The same incident operations are also exposed through an MCP server.",
    outcomes: [
      "Classifies incoming channel messages into a structured incident shape with severity, location, people affected, and needs.",
      "Provides one-click assignment and resolution flows through Slack Block Kit cards.",
      "Generates a situation report from unresolved incidents stored in Supabase.",
    ],
    tech: ["Node.js", "Slack Bolt", "Supabase", "PostgreSQL", "MCP", "Zod"],
    github: "https://github.com/Manibharadwaj/aasha",
    repoLabel: "View source",
    media: {
      type: "product",
      alt: "Aasha Slack incident operations interface",
      hint: "Use the project’s incident-card or App Home screenshot with a focused editorial crop.",
    },
    featured: true,
  },
  {
    slug: "codescroll",
    name: "CodeScroll",
    eyebrow: "VS Code extension",
    description: "A developer-news reader that brings Hacker News and Dev.to content into VS Code so developers can browse, read, and bookmark without leaving the editor.",
    problem: "Keeping up with developer news often means breaking focus and leaving the coding environment.",
    solution: "Built a VS Code sidebar webview with topic selection, article fetching from Hacker News and Dev.to, in-editor article reading, browser handoff, and persisted bookmarks.",
    outcomes: [
      "Supports curated topic selection spanning AI, web, mobile, cloud, security, DevOps, blockchain, and data science.",
      "Combines and de-duplicates Hacker News and Dev.to results before showing the feed.",
      "Stores user topic preferences and bookmarks in VS Code extension state.",
    ],
    tech: ["TypeScript", "VS Code Extension API", "Webviews", "Hacker News API", "Dev.to API"],
    github: "https://github.com/Manibharadwaj/vs_code_blog",
    repoLabel: "View source",
    media: {
      type: "product",
      alt: "CodeScroll VS Code extension interface",
      hint: "Use an editor-native feed composition rather than a generic browser mockup.",
    },
    featured: true,
  },
];

export const contact = {
  title: "Have a product problem worth solving?",
  body: "I’m always interested in thoughtful software work, practical collaboration, and teams that care about the details.",
  email: "manibharadwajcr@gmail.com",
  github: "https://github.com/Manibharadwaj",
  linkedin: "https://www.linkedin.com/in/mani-bharadwaj",
};

export const additionalWork = [
  {
    name: "WebXray",
    description: "A website evaluator that surfaces tech stack, design, performance, accessibility, and SEO signals in one pass.",
    tech: "Python · Analysis tooling",
    github: "https://github.com/Manibharadwaj/webxray",
  },
  {
    name: "AVA Call Terminal",
    description: "An AI outbound-calling system spanning a Flutter call terminal and a FastAPI voice server with WebSockets, Whisper, and Ollama.",
    tech: "Flutter · FastAPI · WebSockets · Whisper · Ollama",
    github: "https://github.com/Manibharadwaj/ava-app",
    secondaryGithub: "https://github.com/Manibharadwaj/ava-server",
  },
  {
    name: "Tally Dashboard",
    description: "A dashboard for keeping form submissions and operational data in one place.",
    tech: "TypeScript",
    github: "https://github.com/Manibharadwaj/tally-dashboard",
    live: "https://mytally-pi.vercel.app",
  },
  {
    name: "URL to PDF Converter",
    description: "A web crawler with a UI for crawling a site and exporting its content as PDF or JSON.",
    tech: "Python · Web crawling",
    github: "https://github.com/Manibharadwaj/urls_and_pdf_converter",
    live: "https://urls-and-pdf-converter.vercel.app",
  },
];
