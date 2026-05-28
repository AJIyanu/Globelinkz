import Link from 'next/link';

const services = [
  { label: 'Paid Advertising', href: '#services' },
  { label: 'Facebook & Instagram Ads', href: '#services' },
  { label: 'TikTok & Google Ads', href: '#services' },
  { label: 'Sales Funnels', href: '#services' },
  { label: 'Web Design', href: '#services' },
  { label: 'SEO', href: '#services' },
  { label: 'Brand Strategy', href: '#services' },
];

const company = [
  { label: 'Results', href: '#proof' },
  { label: 'Client Stories', href: '#reviews' },
  { label: 'Blog', href: 'https://globelinkz.com/blog' },
  { label: 'Free Strategy Session', href: '#book' },
  { label: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=2347036825350' },
];

const social = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Globelinkz',
    short: 'f',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/globelinkz/',
    short: 'ig',
  },
  {
    label: 'LinkedIn',
    href: 'https://ng.linkedin.com/company/globelinkz',
    short: 'in',
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-green/10 py-16">
      <div className="max-w-7xl mx-auto px-7">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="#hero" className="font-heading text-2xl tracking-wider inline-block mb-6">
              Globe<span className="text-brand-green">Linkz</span>
            </Link>
            <p className="text-sm text-brand-gray leading-relaxed mb-6">
              A full-service digital growth agency working with businesses globally. Paid ads,
              funnels, conversion websites, and strategies built around one thing — your revenue.
            </p>
            <div className="flex gap-4">
              {social.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-brand-green/25 flex items-center justify-center text-xs font-bold text-brand-green hover:bg-brand-green hover:text-brand-dark transition-all duration-200"
                >
                  {item.short}
                </Link>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-gray hover:text-brand-green transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-brand-gray hover:text-brand-green transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-green/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-gray">
            © 2025 GlobeLinkz. All rights reserved. Working with businesses globally.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-brand-gray hover:text-brand-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-brand-gray hover:text-brand-green transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
