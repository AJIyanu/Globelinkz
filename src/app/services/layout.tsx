import Header from '@/components/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Globelinkz Services Page',
  description:
    'Globelinkz is Nigeria’s trusted global digital partner, specializing in data analysis, digital marketing, and custom web/dashboard development. We empower your business growth with innovative, measurable solutions.',
  keywords:
    'digital agency, Nigeria, data analysis, digital marketing, web development, dashboard development, global clients, SEO, web design, marketing strategy, data insights, web applications',
  robots: 'index, follow',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Header Section */}
      {/* <div className="bg-indigo-300 w-full h-[80px] lg:h-[100px]"> */}
      <Header />
      {/* </div> */}

      {/* Page Content */}
      <div className="w-full border-l border-r border-gray-300 min-h-screen flex flex-col items-center justify-start bg-cover">
        {children}
      </div>
    </div>
  )
}
