export const siteConfig = {
  name: "GlobeLinkz",
  title: "GlobeLinkz — The Agency Behind the Numbers",
  description:
    "GlobeLinkz is a full-service digital growth agency helping businesses grow through paid advertising, sales funnels, SEO, conversion websites, and custom growth strategy.",
  url: "https://globelinkz.com",
  whatsappNumber: "2347036825350",
  ownerEmail: "hello@globelinkz.com",
  social: {
    facebook: "https://www.facebook.com/Globelinkz",
    instagram: "https://www.instagram.com/globelinkz/",
    linkedin: "https://ng.linkedin.com/company/globelinkz",
  },
} as const;

export const whatsappUrl = `https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumber}`;

export const strategySessionWhatsappUrl = `${whatsappUrl}&text=Hi%20GlobeLinkz!%20I%20just%20booked%20a%20free%20strategy%20session%20on%20your%20website.%20Looking%20forward%20to%20speaking!`;
