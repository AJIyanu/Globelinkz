import HeroSection from '@/dacomp/daHero'
import TechStack from '@/sections/techstacks'
import OurTeam from '@/sections/ourteam'
import AnalyticFramework from '@/sections/framwork'
import DataReview from '@/dacomp/datareview'
import FreqAQ from '@/sections/faq'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Analysis - Globelinkz',
  description:
    'Globelinkz is Nigeria’s trusted global digital partner, specializing in data analysis, digital marketing, and custom web/dashboard development. We empower your business growth with innovative, measurable solutions.',
  keywords:
    'digital agency, Nigeria, data analysis, digital marketing, web development, dashboard development, global clients, SEO, web design, marketing strategy, data insights, web applications',
  robots: 'index, follow',
}

export default function DataAnalysisPage() {
  return (
    <div className="flex flex-col items-center overflow-hidden tracking-wide w-full">
      <HeroSection />
      <TechStack />
      <AnalyticFramework />
      <OurTeam />
      <DataReview />
      <FreqAQ />
    </div>
  )
}
