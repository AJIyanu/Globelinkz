import Hero from "@/sections/hero";
import WhyUs from "@/sections/whyus";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <WhyUs />
    </div>
  );
}
