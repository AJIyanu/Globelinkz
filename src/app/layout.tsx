import type { Metadata } from "next";
import { Bebas_Neue, Epilogue } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const epilogue = Epilogue({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "GlobeLinkz",
    "digital marketing agency",
    "paid advertising agency",
    "Facebook ads",
    "Instagram ads",
    "TikTok ads",
    "Google ads",
    "sales funnels",
    "conversion websites",
    "SEO agency",
    "business growth strategy",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80&fit=crop",
        width: 1200,
        height: 630,
        alt: "GlobeLinkz digital growth agency strategy team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${epilogue.variable}`}>
      <body>{children}</body>
    </html>
  );
}
