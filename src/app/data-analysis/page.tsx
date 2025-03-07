import HeroSection from '@/dacomp/daHero'
import TechStack from '@/sections/techstacks'

export default function DataAnalysisPage() {
  return (
    <div className="flex flex-col items-center ">
      <HeroSection />
      <TechStack />
      <div>this one should center</div>
    </div>
  )
}
