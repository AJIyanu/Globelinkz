const tickerItems = [
  "Facebook Ads",
  "Google Ads",
  "Instagram Ads",
  "TikTok Ads",
  "$5,800 → $51,000",
  "₦200K → ₦20M in 12 Days",
  "Sales Funnels",
  "Conversion Websites",
  "SEO & Organic Growth",
  "Working With Businesses Globally",
] as const;

export function TickerSection() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="overflow-hidden border-y border-[rgba(125,193,42,.1)] bg-[rgba(125,193,42,.06)] py-3.5">
      <div className="animate-ticker flex w-max gap-15 whitespace-nowrap">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[1.5px] text-[var(--g)]"
          >
            <span className="h-1.25 w-1.25 rounded-full bg-(--g)" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
