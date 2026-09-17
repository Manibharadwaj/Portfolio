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
    label: "Voice systems",
    value: "Proactive AI calls",
    detail: "Scheduled check-ins, speech pipelines, memory, and resilient call workflows.",
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
    slug: "esp32-monitor",
    name: "ESP32 Monitor",
    eyebrow: "IoT sensor monitoring",
    description: "An embedded-to-interface project for monitoring sensor data from an ESP32 and making device signals easier to inspect.",
    problem: "Hardware projects become useful when raw sensor readings can be observed, understood, and acted on outside the device itself.",
    solution: "Connected ESP32 firmware, sensor readings, and a lightweight monitoring interface into one end-to-end IoT workflow.",
    outcomes: [
      "Worked across embedded firmware, device communication, and monitoring UI concerns.",
      "Built a practical bridge between physical sensor data and a human-readable interface.",
    ],
    tech: ["ESP32", "Embedded C/C++", "IoT", "Sensors"],
    github: "https://github.com/Manibharadwaj",
    repoLabel: "GitHub profile",
    media: {
      type: "product",
      alt: "ESP32 sensor monitoring project",
      hint: "Use an embedded sensor and telemetry composition.",
    },
    featured: true,
  },
  {
    slug: "jarvis",
    name: "J.A.R.V.I.S.",
    eyebrow: "Voice accountability agent",
    description: "A proactive voice-based accountability companion that calls, checks in, remembers context, and turns daily intentions into a repeatable system.",
    problem: "Accountability systems usually wait for a person to open an app; meaningful follow-through needs timely, human-feeling intervention.",
    solution: "Built scheduled wake-up, check-in, and evening-review calls with a Flutter app, Node.js backend, Python LiveKit agent, speech recognition, text-to-speech, memory, tasks, retries, and identity verification.",
    outcomes: [
      "Coordinates scheduled calls, missed-call retries, memory, and daily tracking across mobile, backend, and voice-agent layers.",
      "Combines LiveKit voice, Groq Whisper STT, Edge TTS, PostgreSQL, Redis, and BullMQ in one working product.",
    ],
    tech: ["Python", "Node.js", "Flutter", "LiveKit", "Whisper", "PostgreSQL"],
    github: "https://github.com/Manibharadwaj/jarvis",
    repoLabel: "View source",
    media: {
      type: "product",
      alt: "Jarvis voice accountability system",
      hint: "Use a voice-agent command center composition.",
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

export const openSourceWork = [
  { name: "Twenty", detail: "Navigation, custom-object labels and icons, CLI re-authentication, OpenAPI cursor fixes, translated relation labels, and select-filter handling across PRs #21299, #19224, #21335, #21920, #22090, and #23468.", github: "https://github.com/Manibharadwaj/twenty", upstream: "https://github.com/twentyhq/twenty" },
  { name: "n8n", detail: "Markdown renderer reactivity and inline-code toolbar improvements in the open-source workflow automation platform.", github: "https://github.com/Manibharadwaj/n8n", upstream: "https://github.com/n8n-io/n8n" },
  { name: "Zapier Platform", detail: "Security dependency maintenance, including a form-data vulnerability fix in the platform toolchain.", github: "https://github.com/Manibharadwaj/zapier-platform", upstream: "https://github.com/zapier/zapier-platform" },
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
    name: "Putt Together",
    description: "Community mini-golf platform with deterministic physics, server-validated publishing, and replay ghosts.",
    tech: "TypeScript · Phaser · Hono · Redis",
    github: "https://github.com/Manibharadwaj/putt-together",
  },
  {
    name: "Aasha",
    description: "Slack relief-operations agent for triage, incident assignment, resolution, situation reports, and MCP workflows.",
    tech: "Node.js · Slack Bolt · Supabase · MCP",
    github: "https://github.com/Manibharadwaj/aasha",
  },
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
