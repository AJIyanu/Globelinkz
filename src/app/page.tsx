import Hero from "@/sections/hero";
import WhyUs from "@/sections/whyus";
import Reviews from "@/sections/review";
import OurCompetence from "@/sections/services";
import CallToAction from "@/sections/cta";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <WhyUs />
      <OurCompetence />
      <Reviews />
      <CallToAction />
      <div className="hidden">about us</div>
      <div className="hidden">blog post</div>
      <Footer />
    </div>
  );
}
