import { ButtonLink } from "@/components/common/ButtonLink";
import { Reveal } from "@/components/common/Reveal";
import { BookingForm } from "@/components/forms/BookingForm";
import { whatsappUrl } from "@/lib/site-config";

const sessionItems = [
  "An honest look at why your current marketing isn't producing",
  "The platforms and approach that will actually work for your business",
  "A strategy outline built around your specific goals and budget",
  "Direct, practical advice — no fluff, no pressure, no pitch",
  "A clear plan you can act on — whether you work with us or not",
] as const;

export function BookingSection() {
  return (
    <section id="book" className="relative overflow-hidden bg-[linear-gradient(135deg,var(--navy)_0%,#071628_55%,rgba(125,193,42,.04)_100%)] px-[5%] py-20 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,var(--g),transparent)] lg:px-[7%] lg:py-[130px]">
      <div className="pointer-events-none absolute right-[-180px] top-[40%] h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(125,193,42,.1),transparent_65%)]" />
      <div className="relative grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left">
          <div className="mb-[18px] inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[3px] text-[var(--g)] before:h-0.5 before:w-5 before:bg-[var(--g)]">Free Consultation</div>
          <h2 className="font-heading mb-5 text-[clamp(42px,5.5vw,72px)] leading-none tracking-[0.5px]">Let&apos;s Look at Your<br />Business and <span className="text-[var(--g)]">Build Something That Works.</span></h2>
          <p className="mb-8 max-w-[580px] text-[17px] leading-[1.85] text-[var(--ow)]">Right now your customers are online. They&apos;re browsing, searching, ready to buy. The only question is whether they find you or someone else. This conversation is how we make sure it&apos;s you.</p>
          <div className="rounded-[10px] border border-[rgba(232,64,64,.2)] bg-[rgba(232,64,64,.08)] px-5 py-[18px] text-sm leading-[1.7] text-white/80"><strong className="text-[var(--red)]">⚠️ If your sales aren&apos;t where they should be</strong> — this session is the right call. Every week without a working strategy is a week your competitors consolidate the ground that belongs to you.</div>
          <div className="mt-[26px] border-t border-white/10 pt-[22px]"><div className="mb-3 text-[11px] font-bold uppercase tracking-[3px] text-[var(--g)]">What the free session covers</div><ul className="space-y-2.5">{sessionItems.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm leading-[1.6] text-[var(--ow)]"><span className="mt-px font-black text-[var(--g)]">✓</span>{item}</li>)}</ul></div>
          <ButtonLink href={whatsappUrl} variant="outline" className="mt-[30px]">💬 Prefer WhatsApp? Message Us Directly</ButtonLink>
        </Reveal>
        <Reveal direction="right"><BookingForm /></Reveal>
      </div>
    </section>
  );
}
