import type { Metadata } from 'next'
import { Geist, Geist_Mono, Rajdhani } from 'next/font/google'
import { Inter } from 'next/font/google'
import './globals.css'

// Configure your font
const inter = Inter({ subsets: ['latin'] })

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const rajdhani = Rajdhani({ weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  title: 'Welcome | Globelinkz',
  description: 'Your digital journey starts here',
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${rajdhani} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
