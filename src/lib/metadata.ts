import type { Metadata } from 'next';

const title = 'GlobeLinkz — The Agency Behind the Numbers';
const description =
  'Full-service digital growth agency. Paid ads, funnels, conversion websites, and revenue-focused strategies. Book your free strategy session today.';
const url = 'https://globelinkz.com';
const ogImage = `${url}/og-image.png`;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  applicationName: 'GlobeLinkz',
  authors: [{ name: 'GlobeLinkz' }],
  keywords: [
    'digital marketing agency',
    'paid advertising',
    'Facebook ads',
    'Instagram ads',
    'TikTok ads',
    'Google ads',
    'sales funnels',
    'web design',
    'SEO',
    'brand strategy',
    'conversion rate optimization',
    'digital growth',
    'marketing strategy',
    'revenue optimization',
  ],
  creator: 'GlobeLinkz',
  publisher: 'GlobeLinkz',
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url,
    title,
    description,
    siteName: 'GlobeLinkz',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'GlobeLinkz - The Agency Behind the Numbers',
        type: 'image/png',
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
    creator: '@globelinkz',
    site: '@globelinkz',
  },
  // Additional metadata for AI chatbots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    'googlebot': 'index, follow',
  },
  // Structured Data for better AI understanding
  other: {
    'og:type': 'website',
    'article:published_time': new Date().toISOString(),
    'article:author': 'GlobeLinkz',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  interactiveWidget: 'resizes-content',
};
