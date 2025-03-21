import type { Metadata } from 'next'
import { Geist, Geist_Mono, Oswald, Asap_Condensed } from 'next/font/google'
import CallToAction from '@/sections/cta'
import Footer from '@/sections/footer'
import { Inter } from 'next/font/google'
import './globals.css'

// Configure your fonts
const inter = Inter({ subsets: ['latin'] })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const asapCondensed = Oswald({
  weight: ['400', '600', '700'],
  subsets: ['cyrillic', 'latin'],
})

const rajdhani = Asap_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['vietnamese', 'latin'],
})

export const metadata: Metadata = {
  title:
    'Globelinkz - Full Service Digital Agency | Your Digital Growth Starts Here',
  description:
    'Globelinkz is Nigeria’s trusted global digital partner, specializing in data analysis, digital marketing, and custom web/dashboard development. We empower your business growth with innovative, measurable solutions.',
  keywords:
    'digital agency, Nigeria, data analysis, digital marketing, web development, dashboard development, global clients, SEO, web design, marketing strategy, data insights, web applications',
  robots: 'index, follow',
  openGraph: {
    title:
      'Globelinkz - Full Service Digital Agency | Data, Marketing & Web Development',
    description:
      'Globelinkz: Your global digital partner in Nigeria. We provide data analysis, digital marketing, and web/dashboard development. Drive growth with our expert solutions.',
    type: 'website',
    url: 'https://www.globelinkz.com',
    images: [
      {
        url: 'https://www.globelinkz.com/globelinkz-full.png',
        width: 1200,
        height: 630,
        alt: 'Globelinkz Digital Agency',
      },
    ],
    siteName: 'Globelinkz',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Globelinkz - Full Service Digital Agency | Data, Marketing & Web Development',
    description:
      'Globelinkz: Your global digital partner in Nigeria. We provide data analysis, digital marketing, and web/dashboard development. Drive growth with our expert solutions.',
    images: ['https://www.globelinkz.com/globelinkz-full.png'],
  },
  alternates: {
    canonical: 'https://www.globelinkz.com',
  },
  viewport: 'width=device-width, initial-scale=1',
  // themeColor: '#000000', // Add your brand color here
  category: 'technology',
  creator: 'Globelinkz Full Service Digital Agency',
  publisher: 'Globelinkz Full Service Digital Agency',
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  metadataBase: new URL('https://www.globelinkz.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${asapCondensed} ${inter.className} ${rajdhani.className} antialiased`}
      >
        <div className="flex flex-col items-center overflow-hidden w-dvw">
          {children}
          <div className="relative bg-black">
            <div className="absolute inset-0 hidden lg:block bg-[url(/footer.jpg)] bg-cover bg-center">
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <CallToAction />
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
