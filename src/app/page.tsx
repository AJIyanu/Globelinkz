import { JsonLd } from "@/components/common/JsonLd";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PainSection } from "@/components/sections/PainSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TickerSection } from "@/components/sections/TickerSection";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <WhatsAppFloat />
      <Navbar />
      <main>
        <HeroSection />
        <TickerSection />
        <PainSection />
        <ProofSection />
        <BeforeAfterSection />
        <ServicesSection />
        <HowItWorksSection />
        <ReviewsSection />
        <BookingSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
