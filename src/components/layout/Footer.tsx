import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

const services = ["Paid Advertising", "Facebook & Instagram Ads", "TikTok & Google Ads", "Sales Funnels", "Web Design", "SEO", "Brand Strategy"] as const;

export function Footer() {
  return (
    <footer className="border-t border-[rgba(125,193,42,.07)] bg-[#020610] px-[7%] pb-8 pt-20">
      <div className="mb-[60px] grid gap-10 lg:grid-cols-[2.2fr_1fr_1fr] lg:gap-[70px]">
        <div>
          <Link href="#hero" className="font-heading mb-3.5 block text-[26px] tracking-[2px] text-white">
            Globe<span className="text-[var(--g)]">Linkz</span>
          </Link>
          <p className="mb-[22px] max-w-[280px] text-sm leading-[1.8] text-[var(--gr)]">
            A full-service digital growth agency working with businesses globally. Paid ads, funnels, conversion websites, and strategies built around one thing — your revenue.
          </p>
          <div className="flex gap-2.5">
            <Link href={siteConfig.social.facebook} className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[13px] font-bold text-[var(--gr)] transition hover:border-[var(--g)] hover:bg-[var(--g)] hover:text-[var(--dk)]">f</Link>
            <Link href={siteConfig.social.instagram} className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[13px] font-bold text-[var(--gr)] transition hover:border-[var(--g)] hover:bg-[var(--g)] hover:text-[var(--dk)]">ig</Link>
            <Link href={siteConfig.social.linkedin} className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[13px] font-bold text-[var(--gr)] transition hover:border-[var(--g)] hover:bg-[var(--g)] hover:text-[var(--dk)]">in</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-[18px] text-[11px] font-bold uppercase tracking-[3px] text-[var(--g)]">Services</h4>
          <ul className="space-y-[11px]">
            {services.map((service) => (
              <li key={service}>
                <Link href="#services" className="text-sm text-[var(--gr)] transition hover:text-white">{service}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-[18px] text-[11px] font-bold uppercase tracking-[3px] text-[var(--g)]">Company</h4>
          <ul className="space-y-[11px]">
            <li><Link href="#proof" className="text-sm text-[var(--gr)] transition hover:text-white">Results</Link></li>
            <li><Link href="#reviews" className="text-sm text-[var(--gr)] transition hover:text-white">Client Stories</Link></li>
            <li><Link href="https://globelinkz.com/blog" className="text-sm text-[var(--gr)] transition hover:text-white">Blog</Link></li>
            <li><Link href="#book" className="text-sm text-[var(--gr)] transition hover:text-white">Free Strategy Session</Link></li>
            <li><Link href={whatsappUrl} className="text-sm text-[var(--gr)] transition hover:text-white">WhatsApp</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-6">
        <p className="text-[13px] text-[#2A3E58]">© 2025 GlobeLinkz. All rights reserved. Working with businesses globally.</p>
        <div className="flex gap-5">
          <Link href="#" className="text-[13px] text-[#2A3E58] transition hover:text-[var(--gr)]">Privacy Policy</Link>
          <Link href="#" className="text-[13px] text-[#2A3E58] transition hover:text-[var(--gr)]">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
