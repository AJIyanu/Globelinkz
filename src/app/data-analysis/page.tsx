import HeroSection from '@/dacomp/daHero'
import TechStack from '@/sections/techstacks'
import OurTeam from '@/sections/ourteam'
import AnalyticFramework from '@/sections/framwork'
import DataReview from '@/dacomp/datareview'
import FreqAQ from '@/sections/faq'

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
