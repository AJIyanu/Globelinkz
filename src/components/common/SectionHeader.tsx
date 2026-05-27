type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, centered = false, className = "" }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <div className={`mb-[18px] inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[3px] text-[var(--g)] ${centered ? "justify-center" : "before:h-0.5 before:w-5 before:bg-[var(--g)]"}`}>
        {eyebrow}
      </div>
      <h2 className="font-heading mb-5 text-[clamp(42px,5.5vw,72px)] leading-none tracking-[0.5px] text-white">
        {title}
      </h2>
      {description ? (
        <p className={`text-[17px] leading-[1.85] text-[var(--ow)] ${centered ? "mx-auto max-w-[600px]" : "max-w-[580px]"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
