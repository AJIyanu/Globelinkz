import { ButtonLink } from "@/components/common/ButtonLink";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { Review } from "@/lib/types";

const reviews: Review[] = [
  { initial: "A", name: "Aldahish", source: "Verified · Fiverr · March 2025", text: "I HAD MY FIRST SALE. I couldn't believe how fast it worked. The strategy started producing almost immediately. These people genuinely know what they're doing." },
  { initial: "F", name: "Fiverr Client", source: "Verified · Fiverr · March 2025", text: "Professional, thorough, and completely committed. They treated my business like their own — not just another brief to get through." },
  { initial: "T", name: "Business Owner", source: "Verified · Fiverr · Jan 2025", text: "Extraordinary work on TikTok — not just the execution, but they taught me why it works. It's actively making my business more money." },
  { initial: "O", name: "Omwela", source: "Verified · Fiverr · March 2025", text: "Great communication and very patient throughout. The results came faster than I expected. I'll be back — and I'll be sending people their way." },
  { initial: "H", name: "Hanan China G.", source: "Verified · LinkedIn · Oct 2024", text: "Dedication, professionalism, and real strategic depth. His knowledge is at a different level. Anyone serious about growing should work with GlobeLinkz." },
  { initial: "A", name: "Akinloye Akinfala", source: "Verified · LinkedIn · Oct 2024", text: "Fast, reliable, and deeply committed. Multiple successful projects delivered. I send people to GlobeLinkz without a second thought." },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[var(--dk2)] px-[5%] py-20 lg:px-[7%] lg:py-[130px]">
      <Reveal className="mb-[60px]"><SectionHeader centered eyebrow="Client Stories" title={<>The Proof Isn&apos;t Just<br /><span className="text-[var(--g)]">in the Numbers.</span></>} description="Our clients come back. They refer people. Their businesses grow. Here's what they say." /></Reveal>
      <Reveal className="grid gap-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="border border-[rgba(125,193,42,.15)] bg-[linear-gradient(135deg,rgba(10,30,66,.6),rgba(10,21,37,.8))] p-11 md:col-span-2 xl:col-span-3 xl:grid xl:grid-cols-[1fr_auto] xl:items-center xl:gap-10">
          <div className="max-w-[640px] text-[clamp(18px,2.5vw,24px)] italic leading-[1.7] text-[var(--ow)]">&quot;The ads brought <strong className="not-italic text-[var(--g)]">buyers</strong> — not traffic. People who were ready to pay. I couldn&apos;t believe how fast it all happened. GlobeLinkz changed the trajectory of my business completely.&quot;</div>
          <div className="mt-5 xl:mt-0 xl:text-right"><div className="text-base font-extrabold">Client · West Africa</div><div className="mt-1 text-xs text-[var(--g)]">Campaign: ₦200K → ₦20M</div><div className="mt-2 text-base tracking-[2px] text-[var(--g)]">★★★★★</div></div>
        </div>
        {reviews.map((review) => <ReviewCard key={review.name} review={review} />)}
      </Reveal>
      <Reveal className="mt-[60px] text-center"><ButtonLink href="#book" size="large">I Want Results Like These →</ButtonLink></Reveal>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="bg-[var(--card)] p-7 transition hover:bg-[#0D1D30]">
      <div className="mb-1.5 font-serif text-[42px] leading-none text-[rgba(125,193,42,.15)]">&quot;</div>
      <div className="mb-3 text-[13px] tracking-[2px] text-[var(--g)]">★★★★★</div>
      <p className="mb-5 text-[15px] italic leading-[1.8] text-[var(--ow)]">&quot;{review.text}&quot;</p>
      <div className="flex items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--navy),var(--blue))] text-[15px] font-extrabold">{review.initial}</div><div><div className="text-sm font-bold">{review.name}</div><div className="mt-0.5 text-[11px] text-[var(--g)]">{review.source}</div></div></div>
    </article>
  );
}
