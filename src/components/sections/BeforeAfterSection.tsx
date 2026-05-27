import Image from "next/image";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { whatsappUrl } from "@/lib/site-config";

const leftItems = ["Competitors take customers that should be yours", "Revenue hits the same ceiling every single month", "Ad money spent with little to show for it", "No clear picture of what's actually working", "Another year passes without the breakthrough"] as const;
const rightItems = ["Your ideal customers find you before anyone else", "A system running campaigns that actually convert", "Revenue compounds — month on month", "You know exactly what's working and why", "You focus on your business — we fuel the growth"] as const;

export function BeforeAfterSection() {
  return (
    <section id="ba" className="relative overflow-hidden bg-[var(--dk)] px-[5%] py-20 lg:px-[7%] lg:py-[130px]">
      <Reveal className="mb-20">
        <SectionHeader centered eyebrow="Two Realities" title={<>Where You Are vs.<br /><span className="text-[var(--g)]">Where You Could Be.</span></>} description="The gap between these two isn't talent, luck, or time. It's strategy." />
      </Reveal>

      <div className="relative mb-[5px] grid lg:min-h-[580px] lg:grid-cols-2">
        <RealitySide image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=80&fit=crop" alt="Stressed business owner" tag="Right Now — Without a Strategy" title={<>Invisible.<br />Inconsistent.<br />Frustrated.</>} items={leftItems} tone="bad" />
        <div className="absolute bottom-0 left-1/2 top-0 z-10 hidden w-1 -translate-x-1/2 bg-[linear-gradient(180deg,rgba(232,64,64,.3),rgba(125,193,42,.3))] lg:block" />
        <RealitySide image="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80&fit=crop&crop=face" alt="Confident business owner" tag="90 Days From Now — With GlobeLinkz" title={<>Visible.<br />Growing.<br />In Control.</>} items={rightItems} tone="good" />
      </div>

      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-[30px] bg-[var(--card)] px-6 py-9 lg:px-16 lg:py-14">
          <h3 className="font-heading max-w-[560px] text-[clamp(28px,3.5vw,46px)] leading-[1.05]">The Only Difference Between<br /><span className="text-[var(--g)]">These Two Realities Is One Decision.</span></h3>
          <div className="flex flex-wrap gap-3"><ButtonLink href="#book" size="large">Book My Free Session →</ButtonLink><ButtonLink href={whatsappUrl} variant="outline">💬 Chat First</ButtonLink></div>
        </div>
      </Reveal>
    </section>
  );
}

function RealitySide({ image, alt, tag, title, items, tone }: { image: string; alt: string; tag: string; title: React.ReactNode; items: readonly string[]; tone: "bad" | "good" }) {
  const isGood = tone === "good";
  return (
    <div className="relative min-h-[400px] overflow-hidden">
      <Image src={image} alt={alt} fill sizes="(max-width:1024px) 100vw, 50vw" className={`object-cover ${isGood ? "brightness-50 saturate-[.8]" : "brightness-[.4] saturate-[.3]"}`} />
      <div className={`absolute inset-0 z-[1] ${isGood ? "bg-[linear-gradient(135deg,rgba(125,193,42,.1),transparent_50%)]" : "bg-[linear-gradient(135deg,rgba(232,64,64,.15),transparent_50%)]"}`} />
      <div className="absolute inset-0 z-[2] flex flex-col justify-end p-12">
        <div className={`mb-4 text-[11px] font-bold uppercase tracking-[3px] ${isGood ? "text-[var(--g)]" : "text-[var(--red)]"}`}>{tag}</div>
        <h3 className="font-heading mb-4 text-[clamp(30px,3.5vw,48px)] text-white">{title}</h3>
        <ul className="flex list-none flex-col gap-2.5">
          {items.map((item) => (
            <li key={item} className={`flex items-start gap-2.5 text-sm leading-[1.6] ${isGood ? "text-white/80" : "text-white/65"}`}><span className={`mt-px shrink-0 font-black ${isGood ? "text-[var(--g)]" : "text-[var(--red)]"}`}>{isGood ? "✓" : "✗"}</span>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
