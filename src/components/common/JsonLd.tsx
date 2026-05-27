import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.linkedin],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${siteConfig.whatsappNumber}`,
          contactType: "customer support",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: "Paid ads, sales funnels, conversion websites, SEO, and custom digital growth strategy for businesses globally.",
        areaServed: "Worldwide",
        provider: { "@id": `${siteConfig.url}/#organization` },
        serviceType: ["Paid Advertising", "Sales Funnel Design", "SEO", "Conversion Website Design", "Brand Strategy"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
