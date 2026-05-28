import Image from "next/image";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { whatsappUrl } from "@/lib/site-config";

const cases = [
  {
    badge: "West Africa · Campaign",
    amount: "₦20,000,000",
    from: "Generated from ₦200,000 in ad spend",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80&fit=crop",
    alt: "Business growth",
    stats: [["12", "Days", "Time to result"], ["100x", "", "Return on spend"], ["10,000%", "", "ROI"]],
  },
  {
    badge: "International · Campaign",
    amount: "$51,000",
    from: "Generated from $5,800 in ad spend",
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=700&q=80&fit=crop",
    alt: "International business growth",
    stats: [["8.7x", "", "Return on spend"], ["879%", "", "ROI"]],
  },
] as const;

export function ProofSection() {
  return (
    <section id="proof" className="relative bg-[var(--dk2)] px-[5%] py-20 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,var(--g),transparent)] lg:px-[7%] lg:py-[130px]">
      <Reveal className="mb-20">
        <SectionHeader centered eyebrow="Case Studies" title={<>The Numbers<br />Don&apos;t Lie.</>} description="Two campaigns. Two continents. One consistent outcome — real revenue from real strategy." />
      </Reveal>

      <Reveal className="mb-20 grid gap-[5px] lg:grid-cols-2">
        {cases.map((item) => (
          <article key={item.amount} className="relative overflow-hidden">
            <div className="relative h-[420px] overflow-hidden">
              <Image src={item.image} alt={item.alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover brightness-50" />
              <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_30%,rgba(4,8,16,.95)_100%)]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 z-[2] p-8">
              <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[rgba(125,193,42,.3)] bg-[rgba(125,193,42,.15)] px-3.5 py-[5px] text-[11px] font-bold uppercase tracking-[1px] text-[var(--g)]">{item.badge}</div>
              <div className="font-heading mb-1 text-[clamp(44px,5vw,68px)] leading-none text-[var(--g)]">{item.amount}</div>
              <div className="mb-4 text-sm text-[var(--ow)]">{item.from}</div>
              <div className="flex flex-wrap gap-5">
                {item.stats.map(([number, suffix, label]) => (
                  <div key={label}>
                    <div className="font-heading text-[26px] leading-none text-white"><em className="not-italic text-[var(--g)]">{number}</em>{suffix ? ` ${suffix}` : ""}</div>
                    <div className="mt-0.5 text-[11px] text-[var(--gr)]">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </Reveal>

      <Reveal className="grid gap-[5px] lg:grid-cols-2">
        <div className="bg-[var(--card)] p-10">
          <GraphTitle>Revenue Growth — Campaign Timeline</GraphTitle>
          <h3 className="font-heading mb-2 text-[28px]">₦200K → ₦20M</h3>
          <svg className="mb-2 h-40 w-full" viewBox="0 0 400 160" preserveAspectRatio="none">
            <defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7DC12A" stopOpacity="0.5" /><stop offset="100%" stopColor="#7DC12A" stopOpacity="0" /></linearGradient></defs>
            <path d="M0,155 L40,150 L80,145 L120,130 L160,100 L200,70 L240,45 L280,25 L320,12 L360,6 L400,3 L400,160 L0,160 Z" fill="url(#ag)" />
            <polyline points="0,155 40,150 80,145 120,130 160,100 200,70 240,45 280,25 320,12 360,6 400,3" fill="none" stroke="#7DC12A" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="400" cy="3" r="5" fill="#7DC12A" />
            <text x="366" y="11" fontSize="10" fill="#7DC12A" fontWeight="bold">₦20M</text>
            <text x="2" y="155" fontSize="9" fill="#6E88A2">Day 1</text>
            <text x="170" y="155" fontSize="9" fill="#6E88A2">Day 6</text>
            <text x="360" y="155" fontSize="9" fill="#6E88A2">Day 12</text>
          </svg>
          <p className="mt-3 text-sm leading-[1.7] text-[var(--gr)]">Starting with ₦200K, revenue scaled exponentially over 12 days as campaign optimisation compounded results.</p>
        </div>

        <div className="bg-[var(--card)] p-10">
          <GraphTitle>Before GlobeLinkz vs. After</GraphTitle>
          <h3 className="font-heading mb-2 text-[28px]">$5,800 → $51,000</h3>
          <div className="mt-5 flex flex-col gap-3.5">
            <Comparison label="ROAS Before" value="0.8x" width="12%" bad />
            <Comparison label="ROAS After" value="8.7x" width="88%" />
            <Comparison label="Conv. Before" value="1.2%" width="8%" bad />
            <Comparison label="Conv. After" value="11.4%" width="72%" />
            <Comparison label="Cost/Lead" value="−74%" width="15%" />
          </div>
          <p className="mt-3 text-sm leading-[1.7] text-[var(--gr)]">Same platforms. Same market. Completely different approach — and completely different results.</p>
        </div>
      </Reveal>

      <Reveal className="mt-[5px] bg-[var(--card)] px-11 py-10">
        <blockquote className="relative z-[1] max-w-[700px] text-lg italic leading-[1.8] text-[var(--ow)] before:absolute before:-left-4 before:-top-10 before:-z-[1] before:font-serif before:text-[120px] before:leading-none before:text-[rgba(125,193,42,.1)] before:content-['\0022']">
          &quot;The ads brought <strong className="not-italic text-[var(--g)]">buyers</strong> — not traffic, not vanity numbers. People who were actually ready to spend money. I couldn&apos;t believe how quickly the whole thing moved.&quot;
        </blockquote>
        <div className="mt-4 text-[13px] text-[var(--gr)]">— Client · West Africa</div>
        <div className="mt-6 flex flex-wrap gap-3"><ButtonLink href="#book">I Want Results Like These →</ButtonLink><ButtonLink href={whatsappUrl} variant="outline">💬 Ask Us How</ButtonLink></div>
      </Reveal>
    </section>
  );
}

function GraphTitle({ children }: { children: React.ReactNode }) {
  return <div className="mb-6 text-xs font-bold uppercase tracking-[2px] text-[var(--gr)]">{children}</div>;
}

function Comparison({ label, value, width, bad = false }: { label: string; value: string; width: string; bad?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="min-w-[100px] text-xs text-[var(--gr)]">{label}</span>
      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/[.06]"><div className={`h-full rounded-full ${bad ? "bg-[rgba(232,64,64,.5)]" : "bg-[linear-gradient(90deg,var(--g),var(--blue))]"}`} style={{ width }} /></div>
      <span className={`min-w-10 text-right text-xs font-bold ${bad ? "text-[var(--red)]" : "text-[var(--g)]"}`}>{value}</span>
    </div>
  );
}
