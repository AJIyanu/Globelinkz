import Image from "next/image";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Reveal } from "@/components/common/Reveal";
import { whatsappUrl } from "@/lib/site-config";

export function FinalCtaSection() {
  return (
    <section id="final" className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:z-[1] before:bg-[linear-gradient(180deg,var(--dk)_0%,transparent_30%,transparent_70%,var(--dk)_100%),linear-gradient(90deg,rgba(4,8,16,.6),transparent_50%,rgba(4,8,16,.6))]">
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80&fit=crop" alt="Business team in meeting" fill sizes="100vw" className="object-cover brightness-[.25]" />
      </div>
      <div className="relative z-[2] px-[7%] py-[100px] text-center">
        <Reveal><div className="mb-[18px] inline-flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[3px] text-[var(--g)]">The Decision Is Yours</div></Reveal>
        <Reveal><h2 className="font-heading mx-auto mb-5 max-w-[860px] text-[clamp(46px,7vw,100px)] leading-none tracking-[0.5px]">Your Competitors<br />Are Moving.<br /><span className="text-[var(--g)]">Are You?</span></h2></Reveal>
        <Reveal><p className="mx-auto mb-[46px] max-w-[580px] text-lg leading-[1.85] text-[var(--ow)]">The customers in your market will buy from someone. The only question is who they find first. The free session costs nothing. Staying still costs far more.</p></Reveal>
        <Reveal className="flex flex-wrap justify-center gap-3.5"><ButtonLink href="#book" size="large">Book My Free Session Now →</ButtonLink><ButtonLink href={whatsappUrl} variant="outline" size="large">💬 WhatsApp Us Instead</ButtonLink></Reveal>
        <Reveal><p className="mt-6 text-[13px] text-[var(--gr)]">🔒 We work with a <span className="font-bold text-[var(--g)]">limited number of clients at a time</span> to make sure every one gets the attention they deserve.</p></Reveal>
      </div>
    </section>
  );
}
