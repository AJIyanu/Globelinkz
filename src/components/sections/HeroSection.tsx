import Image from "next/image";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Reveal } from "@/components/common/Reveal";
import { whatsappUrl } from "@/lib/site-config";

const heroStats = [
  ["$51K", "From $5,800 in ad spend"],
  ["₦20M", "From ₦200K in 12 days"],
  ["4.9★", "Verified client reviews"],
  ["Global", "Clients across continents"],
] as const;

export function HeroSection() {
  return (
    <section id="hero" className="relative grid min-h-screen overflow-hidden bg-[var(--dk)] lg:grid-cols-2">
      <div className="relative z-10 flex flex-col justify-center px-[5%] pb-20 pt-[130px] lg:px-0 lg:pb-[100px] lg:pl-[7%] lg:pt-[140px]">
        <Reveal>
          <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(125,193,42,.28)] bg-[rgba(125,193,42,.08)] px-[18px] py-[7px] text-xs font-bold tracking-[.5px] text-[var(--g)]">
            <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[var(--g)] animate-dot-pulse" />
            $5,800 → $51K · ₦200K → ₦20M · Real clients, real campaigns
          </div>
        </Reveal>

        <Reveal>
          <h1 className="font-heading mb-6 text-[clamp(56px,6vw,88px)] leading-[.92] tracking-[.5px] text-white">
            SALES ARE<br />
            <span className="text-[var(--g)]">WAITING FOR</span><br />
            YOU ON THE<br />
            <span className="text-[var(--g)]">OTHER SIDE</span><br />
            OF THE RIGHT<br />
            STRATEGY.
          </h1>
        </Reveal>

        <Reveal>
          <p className="mb-[38px] max-w-[500px] text-lg leading-[1.75] text-[var(--ow)]">
            You have a business worth growing. <strong className="text-white">What&apos;s missing is the system that puts it in front of the right people</strong> — consistently, strategically, and at scale. That&apos;s exactly what we build.
          </p>
        </Reveal>

        <Reveal className="mb-[50px] flex flex-wrap gap-[13px]">
          <ButtonLink href="#book" size="large">Book My Free Strategy Session →</ButtonLink>
          <ButtonLink href={whatsappUrl} variant="outline">💬 Talk to Us</ButtonLink>
        </Reveal>

        <Reveal className="flex flex-wrap gap-7 border-t border-white/10 pt-[26px]">
          {heroStats.map(([number, label]) => (
            <div key={number}>
              <div className="font-heading text-4xl leading-none text-[var(--g)]">{number}</div>
              <div className="mt-[3px] text-[11px] text-[var(--gr)]">{label}</div>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="relative hidden overflow-hidden lg:block">
        <Image src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80&fit=crop" alt="Business team" fill priority sizes="50vw" className="object-cover object-top brightness-[.7]" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,var(--dk)_0%,transparent_30%),linear-gradient(180deg,transparent_60%,var(--dk)_100%)]" />
        <div className="absolute bottom-10 left-1/2 z-[2] -translate-x-1/2 whitespace-nowrap rounded-xl border border-[rgba(125,193,42,.25)] bg-[rgba(10,21,37,.92)] px-[22px] py-4 backdrop-blur-[14px]">
          <div className="font-heading text-[38px] leading-none text-[var(--g)]">100x ROI</div>
          <div className="mt-[3px] text-xs text-[var(--gr)]">Achieved for a client in 12 days</div>
        </div>
      </div>
    </section>
  );
}
