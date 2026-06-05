import { siteConfig } from "@/lib/content";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "AI Consultant",
    description: siteConfig.description,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    knowsAbout: [
      "Artificial Intelligence",
      "Workflow Automation",
      "Operational Strategy",
      "Product Design",
      "Team Training",
    ],
    sameAs: [siteConfig.linkedin],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  const professionalServiceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} — AI Consulting`,
    url: siteConfig.url,
    description: siteConfig.description,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    priceRange: "$$",
    areaServed: "Worldwide",
    serviceType: [
      "AI Strategy",
      "Workflow Automation",
      "Team Training",
      "Custom AI Solutions",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceData),
        }}
      />
    </>
  );
}
