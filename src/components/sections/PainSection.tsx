import Image from "next/image";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";

const bars = [
  { label: "No Strategy", value: 12, labelValue: "12%", good: false },
  { label: "Boosted Post", value: 28, labelValue: "28%", good: false },
  { label: "Basic Ads", value: 45, labelValue: "45%", good: false },
  { label: "With GlobeLinkz", value: 100, labelValue: "100x", good: true },
] as const;

const losses = [
  { color: "#E84040", text: "Never saw your ad — 42%" },
  { color: "#1457A0", text: "Saw it, didn't click — 28%" },
  { color: "#7DC12A", text: "Clicked, didn't convert — 20%" },
  { color: "#4a5568", text: "Converted — 10%" },
] as const;

function PainCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`pb-card relative overflow-hidden bg-[var(--card)] transition hover:bg-[#0D1D30] ${className}`}
    >
      {children}
    </div>
  );
}

export function PainSection() {
  return (
    <section
      id="pain"
      className="relative overflow-hidden bg-[var(--dk)] px-[5%] py-20 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(232,64,64,.06)_0%,transparent_70%)] lg:px-[7%] lg:py-[130px]"
    >
      <Reveal className="mb-20">
        <SectionHeader
          centered
          eyebrow="What's Really Going On"
          title={
            <>
              Your Business Has a<br />
              <span className="text-[var(--red)]">Visibility Problem.</span>
            </>
          }
          description="It's not the product. It's not the team. It's the gap between where you are and where your customers can actually find you. Let's look at it honestly."
        />
      </Reveal>

      <div className="grid gap-1 md:grid-cols-2 xl:grid-cols-3">
        <Reveal>
          <PainCard className="min-h-70">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop&crop=face"
              alt="Frustrated business owner"
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover brightness-[.65] saturate-[.8] transition duration-500 hover:scale-105 hover:brightness-75"
            />
            <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_30%,rgba(4,8,16,.9)_100%)]" />
            <div className="absolute inset-x-6 bottom-6 z-[2]">
              <h3 className="font-heading mb-1.5 text-[28px]">
                &quot;I Post Every Day.
                <br />
                Nothing Comes Back.&quot;
              </h3>
              <p className="text-[13px] leading-[1.6] text-[var(--ow)]">
                Consistent effort. Empty results. The content is there — the
                strategy isn&apos;t.
              </p>
            </div>
          </PainCard>
        </Reveal>

        <Reveal>
          <PainCard className="flex flex-col items-center justify-center px-[30px] py-9 text-center">
            <div className="font-heading text-[80px] leading-none text-[var(--g)]">
              87%
            </div>
            <div className="mt-2 max-w-[180px] text-sm leading-[1.5] text-[var(--ow)]">
              of ad budgets are wasted without the right targeting and funnel
              structure
            </div>
            <div className="mt-1.5 text-xs text-[var(--gr)]">
              — industry average
            </div>
            <ButtonLink href="#book" size="small" className="mt-5">
              Fix Mine →
            </ButtonLink>
          </PainCard>
        </Reveal>

        <Reveal>
          <PainCard className="flex flex-col px-7 py-8">
            <div className="mb-5 text-xs font-bold uppercase tracking-[2px] text-[var(--gr)]">
              Revenue: No Strategy vs. With Strategy
            </div>
            <div className="mb-3.5 flex h-[120px] items-end gap-2.5">
              {bars.map((bar) => (
                <div
                  key={bar.label}
                  className="flex flex-1 flex-col items-center gap-1.5"
                >
                  <span className="text-[11px] font-bold text-white">
                    {bar.labelValue}
                  </span>
                  <div
                    className={`w-full rounded-t ${bar.good ? "bg-[linear-gradient(180deg,var(--g),#4a9010)]" : "bg-[rgba(232,64,64,.5)]"}`}
                    style={{ height: `${(bar.value / 100) * 110}px` }}
                  />
                  <span className="text-center text-[10px] leading-[1.3] text-[var(--gr)]">
                    {bar.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs leading-[1.6] text-[var(--gr)]">
              Businesses with a structured ad strategy consistently see 3–8× the
              revenue of those running without one.
            </p>
          </PainCard>
        </Reveal>

        <Reveal className="md:col-span-2 xl:col-span-2">
          <PainCard>
            <div className="grid h-full lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8">
                <div className="mb-3 text-3xl">💸</div>
                <h3 className="mb-2.5 text-lg font-extrabold tracking-[-.2px]">
                  &quot;I Tried Ads Once. Burned the Budget.&quot;
                </h3>
                <p className="mb-4 text-sm leading-[1.8] text-[var(--gr)]">
                  You ran a campaign. Watched money leave the account. Got
                  almost nothing in return. That experience wasn&apos;t proof
                  that ads don&apos;t work — it was proof that the strategy was
                  wrong.
                </p>
                <div className="border-t border-white/5 pt-3 text-[13px] italic text-white/30">
                  &quot;Never again,&quot; you said. But you still need
                  customers.
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3.5 bg-white/[.02] p-7">
                <div className="text-xs font-bold uppercase tracking-[2px] text-[var(--gr)]">
                  What Went Wrong
                </div>
                {[
                  ["Targeting", "22%"],
                  ["Ad Creative", "35%"],
                  ["Offer", "18%"],
                  ["Funnel", "10%"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="min-w-[90px] text-xs text-[var(--gr)]">
                      {label}
                    </span>
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/[.06]">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,var(--g),var(--blue))]"
                        style={{ width: value }}
                      />
                    </div>
                    <span className="min-w-10 text-right text-xs font-bold text-[var(--g)]">
                      {value}
                    </span>
                  </div>
                ))}
                <p className="mt-1 text-xs text-[var(--gr)]">
                  Average scores on first-time DIY campaigns. All fixable.
                </p>
              </div>
            </div>
          </PainCard>
        </Reveal>

        <Reveal>
          <PainCard className="min-h-[280px]">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&fit=crop"
              alt="Business owner at desk frustrated"
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover brightness-[.65] saturate-[.8] transition duration-500 hover:scale-105 hover:brightness-75"
            />
            <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_30%,rgba(4,8,16,.9)_100%)]" />
            <div className="absolute inset-x-6 bottom-6 z-[2]">
              <h3 className="font-heading mb-1.5 text-[28px]">
                &quot;Same Ceiling.
                <br />
                Every Month.&quot;
              </h3>
              <p className="text-[13px] leading-[1.6] text-[var(--ow)]">
                The product is there. The drive is there. The numbers just
                won&apos;t move.
              </p>
            </div>
          </PainCard>
        </Reveal>

        <Reveal>
          <PainCard className="p-8">
            <div className="mb-5 text-xs font-bold uppercase tracking-[2px] text-[var(--gr)]">
              Where You&apos;re Losing Customers
            </div>
            <div className="flex items-center gap-5">
              <svg
                viewBox="0 0 36 36"
                className="h-[90px] w-[90px] shrink-0 -rotate-90"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke="rgba(255,255,255,.06)"
                  strokeWidth="3.5"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke="#E84040"
                  strokeWidth="3.5"
                  strokeDasharray="42 58"
                  strokeLinecap="round"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke="#1457A0"
                  strokeWidth="3.5"
                  strokeDasharray="28 72"
                  strokeDashoffset="-42"
                  strokeLinecap="round"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke="#7DC12A"
                  strokeWidth="3.5"
                  strokeDasharray="20 80"
                  strokeDashoffset="-70"
                  strokeLinecap="round"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.9"
                  fill="none"
                  stroke="#4a5568"
                  strokeWidth="3.5"
                  strokeDasharray="10 90"
                  strokeDashoffset="-90"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex flex-col gap-2">
                {losses.map((loss) => (
                  <div
                    key={loss.text}
                    className="flex items-center gap-2 text-xs text-[var(--ow)]"
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: loss.color }}
                    />
                    {loss.text}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-xs leading-[1.6] text-[var(--gr)]">
              The average business loses 90% of potential customers before they
              ever buy. A proper funnel changes all of this.
            </p>
          </PainCard>
        </Reveal>

        <Reveal>
          <TextPain
            emoji="😤"
            title='"My Competitors Are Everywhere. I&apos;m Better."'
            text="You watch businesses with lesser products gain all the traction. They're not better than you — they're just more visible. And visibility is a strategy, not a coincidence."
            echo="It's genuinely frustrating to watch."
          />
        </Reveal>
        <Reveal>
          <TextPain
            emoji="🕐"
            title='"I&apos;m Already Running a Business Full Time."'
            text="You don't have the hours to also master paid ads, build funnels, write copy, and analyse campaigns. That's a full-time discipline on its own. It's ours."
            echo="I know exactly what I need. I just can't do it myself."
            showButton
          />
        </Reveal>
      </div>

      <Reveal className="mt-20">
        <div className="relative grid items-center gap-7 rounded-[20px] border border-[rgba(125,193,42,.15)] bg-[linear-gradient(135deg,rgba(10,30,66,.7),rgba(7,13,28,.9))] px-7 py-9 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[linear-gradient(90deg,transparent,var(--g),transparent)] lg:grid-cols-[1fr_auto] lg:gap-10 lg:px-16 lg:py-14">
          <div>
            <h2 className="font-heading mb-3 text-[clamp(32px,4vw,52px)] leading-[1.05]">
              The Customers Are Out There.
              <br />
              <span className="text-[var(--g)]">
                They&apos;re Just Not Finding You Yet.
              </span>
            </h2>
            <p className="mt-3.5 max-w-[520px] text-base leading-[1.7] text-[var(--ow)]">
              Every week without a working strategy is a week your competitors
              take ground that belongs to you. That changes with one
              conversation.
            </p>
          </div>
          <div className="flex min-w-[220px] flex-col items-center gap-3">
            <ButtonLink href="#book">Book Free Session →</ButtonLink>
            <ButtonLink href="#proof" variant="outline">
              See Real Results ↓
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function TextPain({
  emoji,
  title,
  text,
  echo,
  showButton = false,
}: {
  emoji: string;
  title: string;
  text: string;
  echo: string;
  showButton?: boolean;
}) {
  return (
    <PainCard className="p-9">
      <div className="mb-3.5 text-[32px]">{emoji}</div>
      <h3 className="mb-2.5 text-lg font-extrabold tracking-[-.2px]">
        {title}
      </h3>
      <p className="text-sm leading-[1.8] text-[var(--gr)]">{text}</p>
      <div className="mt-3.5 border-t border-white/5 pt-3.5 text-[13px] italic text-white/30">
        &quot;{echo}&quot;
      </div>
      {showButton ? (
        <ButtonLink href="#book" size="small" className="mt-5">
          Let&apos;s Talk →
        </ButtonLink>
      ) : null}
    </PainCard>
  );
}
