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
      <div className="hidden">about us</div>
      <div className="hidden">blog post</div>
      <Reviews />
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
  );
}
