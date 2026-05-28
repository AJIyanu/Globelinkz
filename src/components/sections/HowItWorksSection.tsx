import Image from "next/image";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { ProcessStep } from "@/lib/types";

const steps: ProcessStep[] = [
  { number: "1", title: "Book Your Free Strategy Session", description: "We start with a focused conversation. You tell us about your business, what's not working, and where you want to go. We listen and ask the right questions.", micro: "Zero cost. Zero obligation." },
  { number: "2", title: "We Build Your Custom Strategy", description: "Based entirely on your business — the right platforms, the right message, the right offer structure. No templates recycled from other clients.", micro: "Built for you. Nobody else." },
  { number: "3", title: "We Execute & You See the Results", description: "Campaigns run, funnels managed, everything tracked and optimised as we go. Regular, honest updates so you always know where things stand.", micro: "Like our clients — the numbers move." },
];

export function HowItWorksSection() {
  return (
    <section id="how" className="bg-[var(--dk)] px-[5%] py-20 lg:px-[7%] lg:py-[130px]">
      <div className="mb-20 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left">
          <SectionHeader eyebrow="The Process" title={<>From First Call<br />to <span className="text-[var(--g)]">Real Revenue.</span></>} className="mb-10" />
          <div>
            {steps.map((step, index) => (
              <div key={step.number} className={`flex gap-[22px] border-white/5 py-7 ${index === 0 ? "pt-0" : "border-t"}`}>
                <div className="font-heading flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--g),var(--blue))] text-[22px] shadow-[0_0_22px_rgba(125,193,42,.22)]">{step.number}</div>
                <div><h3 className="mb-[7px] text-[17px] font-extrabold">{step.title}</h3><p className="text-sm leading-[1.8] text-[var(--gr)]">{step.description}</p><div className="mt-[7px] text-[13px] font-bold italic text-[var(--g)]">{step.micro}</div></div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="relative h-[480px] overflow-hidden rounded-2xl">
            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80&fit=crop" alt="Team working on strategy" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover brightness-[.6]" />
            <div className="absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(10,30,66,.6),transparent_60%)]" />
            <div className="absolute left-7 top-7 z-[2] rounded-[10px] border border-[rgba(125,193,42,.25)] bg-[rgba(10,21,37,.92)] px-[18px] py-3.5 backdrop-blur-xl">
              <div className="font-heading text-[32px] leading-none text-[var(--g)]">100%</div>
              <div className="mt-[3px] text-[11px] text-[var(--gr)]">Custom strategy — no templates</div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="grid items-center gap-5 rounded-2xl border border-[rgba(125,193,42,.12)] bg-[linear-gradient(135deg,rgba(10,30,66,.6),rgba(7,13,28,.9))] p-11 lg:grid-cols-[auto_1fr] lg:gap-10">
          <div className="font-heading whitespace-nowrap text-[80px] leading-none text-[var(--g)]">WHY<br />IT<br />WORKS</div>
          <div><h3 className="mb-2.5 text-[22px] font-extrabold">We Build Around Your Business — Not the Other Way Around</h3><p className="text-[15px] leading-[1.8] text-[var(--ow)]">There are no preset packages here. No Standard, Pro, or Enterprise tiers to squeeze you into. We start from scratch every time — your customers, your market, your numbers — and design the exact strategy that fits. That&apos;s the difference between campaigns that perform and ones that drain your budget.</p><ButtonLink href="#book" className="mt-[22px]">Start With a Free Session →</ButtonLink></div>
        </div>
      </Reveal>
    </section>
  );
}
