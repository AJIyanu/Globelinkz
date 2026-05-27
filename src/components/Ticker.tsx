export function Ticker() {
  const items = [
    'Paid Advertising',
    'Sales Funnels',
    'Web Design',
    'SEO & Content',
    'Brand Strategy',
    'Conversion Optimization',
  ];

  return (
    <div className="bg-brand-green/6 border-y border-brand-green/10 overflow-hidden py-3.5">
      <div className="flex gap-15 whitespace-nowrap animate-ticker">
        {/* Double for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-xs font-bold letter-spacing-wider uppercase text-brand-green"
          >
            <span>{item}</span>
            <div className="w-1 h-1 rounded-full bg-brand-green flex-shrink-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
