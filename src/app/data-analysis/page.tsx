import HeroSection from '@/dacomp/daHero'
import TechStack from '@/sections/techstacks'
import OurTeam from '@/sections/ourteam'
import Footer from '@/sections/footer'
import CallToAction from '@/sections/cta'
import AnalyticFramework from '@/sections/framwork'

export default function DataAnalysisPage() {
  return (
    <div className="flex flex-col items-center ">
      <HeroSection />
      <TechStack />
      <AnalyticFramework />
      <OurTeam />
      <div className="relative bg-black w-full">
        <div className="absolute inset-0 hidden lg:block bg-[url(/footer.jpg)] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  )
}
