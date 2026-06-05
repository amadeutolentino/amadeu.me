export const BOOKING_URL =
  "https://calendar.app.google/ugo7FGnkNQQ1mSmP8";

export const siteConfig = {
  name: "Amadeu Tolentino",
  title: "Amadeu Tolentino | Fractional AI Operations",
  description:
    "Fractional AI operations partner for organizations that need focused implementation — not another strategy deck. Identify high-impact areas and execute one Focus at a time.",
  ogTitle: "Amadeu Tolentino | Fractional AI Operations",
  ogDescription:
    "Embedded monthly partnership to identify bottom-line opportunities and implement AI across your operations — one Focus at a time.",
  ogImageAlt:
    "Amadeu Tolentino — fractional AI operations and workflow consulting",
  url: "https://amadeu.me",
  ogImage: "/opengraph-image",
  linkedin: "https://www.linkedin.com/in/amadeutolentino/",
};

export const navLinks = [
  { label: "Focus", href: "#focus" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
] as const;

export const focusIntro = {
  headline: "One priority area. One monthly partnership.",
  paragraphs: [
    "A Focus is how I work with your organization. Instead of scattered AI projects or strategy decks that sit on a shelf, we choose one operational area where AI and automation will actually move the bottom line — and we go deep.",
    "I embed monthly as your fractional AI operations partner. You get dedicated attention on that single priority until it's working inside your business. Then we identify the next Focus together.",
  ],
} as const;

export const focusSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Map your operations and find where AI creates the most bottom-line impact.",
  },
  {
    step: "02",
    title: "Define the Focus",
    description:
      "One priority area. Clear scope. Plain language — no technical jargon.",
  },
  {
    step: "03",
    title: "Build & Implement",
    description:
      "Work inside your existing tools and workflows. Ship something real.",
  },
  {
    step: "04",
    title: "Adopt & Expand",
    description:
      "Train your team, measure results, then move to the next Focus.",
  },
] as const;

export const whoThisIsFor = [
  "Operations leaders modernizing how work gets done",
  "Owner-operated businesses ready to adopt AI practically",
  "Teams that need implementation — not another roadmap",
  "Organizations with repetitive workflows costing time and money",
] as const;

export const services = [
  {
    title: "Identify",
    description:
      "Find where AI and automation improve the bottom line — not just where it's trendy.",
    icon: "target",
  },
  {
    title: "Automate",
    description:
      "Build workflows that remove manual work and reduce errors in daily operations.",
    icon: "network",
  },
  {
    title: "Enable",
    description:
      "Help your team adopt and use AI confidently — without needing to be technical.",
    icon: "person",
  },
  {
    title: "Improve",
    description:
      "Measure what works, refine the system, and line up the next Focus.",
    icon: "code",
  },
] as const;

export const exampleFocusIntro =
  "Examples of operational areas where a Focus can create measurable impact — not a client list, but the kinds of problems I help solve.";

export const engagements = [
  {
    title: "Healthcare Intake",
    description:
      "Manual intake slows staff down and introduces errors. Automate patient data collection from first contact.",
  },
  {
    title: "Insurance Eligibility",
    description:
      "Eligibility checks across multiple payers waste hours every week. Streamline verification into one reliable workflow.",
  },
  {
    title: "CRM & Communication",
    description:
      "Follow-ups fall through when communication is manual. Build AI-assisted outreach that stays on track.",
  },
  {
    title: "Operational Systems",
    description:
      "Critical work lives across too many disconnected tools. Connect operations into systems your team actually uses.",
  },
] as const;

export const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Focus on Results" },
] as const;
