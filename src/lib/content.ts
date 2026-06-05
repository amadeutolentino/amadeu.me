export const BOOKING_URL =
  "https://calendar.app.google/ugo7FGnkNQQ1mSmP8";

export const siteConfig = {
  name: "Amadeu Tolentino",
  title: "Amadeu Tolentino | AI Consulting & Operational Strategy",
  description:
    "Amadeu Tolentino partners with organizations to identify AI opportunities, implement practical solutions, and help teams adopt AI across their operations.",
  ogTitle: "Amadeu Tolentino | AI Consulting & Operational Strategy",
  ogDescription:
    "Identify AI opportunities, implement practical solutions, and help teams adopt AI across their operations.",
  ogImageAlt:
    "Amadeu Tolentino — AI consulting, workflow automation, and operational strategy",
  url: "https://amadeu.me",
  ogImage: "/opengraph-image",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
] as const;

export const services = [
  {
    title: "AI Strategy",
    description:
      "Identify where AI creates the most value and build a clear roadmap for adoption.",
    icon: "target",
  },
  {
    title: "Workflow Automation",
    description:
      "Design and implement automated workflows that reduce manual work and improve accuracy.",
    icon: "network",
  },
  {
    title: "Team Training",
    description:
      "Help teams understand, adopt, and confidently use AI tools in daily operations.",
    icon: "person",
  },
  {
    title: "Custom Solutions",
    description:
      "Build tailored AI systems that solve specific operational challenges.",
    icon: "code",
  },
] as const;

export const engagements = [
  {
    title: "Healthcare Intake Automation",
    description:
      "Automated patient intake and data collection workflows.",
  },
  {
    title: "Insurance Eligibility Verification",
    description:
      "Streamlined eligibility checks across multiple payer systems.",
  },
  {
    title: "CRM & Communication Workflows",
    description:
      "AI-assisted client communication and follow-up systems.",
  },
  {
    title: "AI-Powered Operational Systems",
    description:
      "End-to-end operational platforms built around AI capabilities.",
  },
  {
    title: "Process & Workflow Design",
    description:
      "Redesigned core business processes for efficiency and scale.",
  },
] as const;

export const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Focus on Results" },
] as const;
