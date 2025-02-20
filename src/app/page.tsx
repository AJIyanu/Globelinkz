import Hero from "@/sections/hero";
import WhyUs from "@/sections/whyus";
import Reviews from "@/sections/review";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <WhyUs />
      <Reviews />
    </div>
  );
}
