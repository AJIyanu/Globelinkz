import Image from "next/image";
import { ButtonLink } from "@/components/common/ButtonLink";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { Service } from "@/lib/types";

const platforms = [["👤", "Facebook Ads"], ["📸", "Instagram Ads"], ["🎵", "TikTok Ads"], ["🔍", "Google Ads"]] as const;
const services: Service[] = [
  { number: "01", title: "Paid Advertising", description: "Campaigns built to bring in money — not just clicks. Facebook, Instagram, TikTok, Google. Every naira and dollar tracked and refined until it's working hard for you.", win: "Your budget becomes a revenue engine", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&fit=crop", alt: "Paid advertising" },
  { number: "02", title: "Sales Funnel Design", description: "We map the journey from first touch to final sale and close every gap along the way. The leaks in your funnel are costing you more than you realise.", win: "More buyers from your existing traffic", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&fit=crop", alt: "Sales funnel" },
  { number: "03", title: "Websites That Sell", description: "Fast, clear, and built to convert. Your website should be earning you customers around the clock — not just sitting there looking pretty.", win: "A site that works while you sleep", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80&fit=crop", alt: "Website design" },
  { number: "04", title: "SEO & Organic Growth", description: "When someone searches for what you sell — they should find you before anyone else. We build the kind of presence that keeps bringing in customers long after the work is done.", win: "Traffic that compounds every month", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80&fit=crop", alt: "SEO" },
  { number: "05", title: "Brand & Content Strategy", description: "Your message, your voice, your content plan — shaped so everything you publish builds trust, attracts the right people, and makes you the obvious choice.", win: "Authority that turns attention into sales", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80&fit=crop", alt: "Brand strategy" },
  { number: "06", title: "Offer & Positioning", description: "Sometimes the product is right but the framing is off. We sharpen how your offer lands so it feels compelling, makes sense immediately, and moves people to act.", win: "The same offer — far more effectively sold", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80&fit=crop", alt: "Offer strategy" },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[var(--dk2)] px-[5%] py-20 lg:px-[7%] lg:py-[130px]">
      <div className="mb-[70px] grid items-end gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left"><SectionHeader eyebrow="What We Do" title={<>Built Around<br />Your Business.<br /><span className="text-[var(--g)]">Not a Template.</span></>} /></Reveal>
        <Reveal direction="right">
          <p className="max-w-[580px] text-[17px] leading-[1.85] text-[var(--ow)]">Every strategy we build is tailored to your market, your offer, and your budget. We pick the right platforms, the right message, and the right approach — specifically for you.</p>
          <div className="mt-6 flex flex-wrap gap-3">{platforms.map(([icon, label]) => <div key={label} className="flex items-center gap-2 rounded-full border border-white/10 bg-[var(--card)] px-[18px] py-2.5 text-[13px] font-bold transition hover:border-[var(--g)] hover:bg-[rgba(125,193,42,.07)]"><span className="text-lg">{icon}</span>{label}</div>)}</div>
          <ButtonLink href="#book" className="mt-7">Build My Strategy →</ButtonLink>
        </Reveal>
      </div>

      <Reveal className="grid gap-1 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => <ServiceCard key={service.number} service={service} />)}
      </Reveal>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card relative overflow-hidden bg-[var(--card)] transition hover:bg-[#0D1D30]">
      <div className="relative h-[200px] overflow-hidden after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_50%,var(--card)_100%)]">
        <Image src={service.image} alt={service.alt} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover brightness-[.55] transition duration-500 group-hover:scale-105" />
      </div>
      <div className="px-[26px] pb-[30px] pt-[26px]">
        <div className="font-heading mb-2.5 text-[46px] leading-none text-[rgba(125,193,42,.1)]">{service.number}</div>
        <h3 className="mb-2.5 text-lg font-extrabold">{service.title}</h3>
        <p className="mb-4 text-sm leading-[1.75] text-[var(--gr)]">{service.description}</p>
        <div className="flex items-center gap-2 text-[13px] font-bold text-[var(--g)]"><span>→</span>{service.win}</div>
      </div>
    </article>
  );
}
