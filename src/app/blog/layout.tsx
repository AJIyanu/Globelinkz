import Header from '@/components/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Page - Globelinkz',
  description:
    'Globelinkz is Nigeria’s trusted global digital partner, specializing in data analysis, digital marketing, and custom web/dashboard development. We empower your business growth with innovative, measurable solutions.',
  keywords:
    'digital agency, Nigeria, data analysis, digital marketing, web development, dashboard development, global clients, SEO, web design, marketing strategy, data insights, web applications',
  robots: 'index, follow',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center">
      {/* Header Section */}
      <div className="bg-indigo-300 w-full h-[80px] lg:h-[100px]">
        <Header />
      </div>

      {/* Page Content */}
      <div className="w-full lg:w-[80%] border-l border-r border-gray-300 bg-indigo-100">
        {children}
      </div>
    </div>
  )
}
