import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "default" | "large" | "small";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", size = "default", className = "" }: ButtonLinkProps) {
  const variantClass = variant === "primary" ? "btn-primary" : "btn-outline";
  const sizeClass = size === "large" ? "btn-lg" : size === "small" ? "btn-sm" : "";

  return (
    <Link href={href} className={`${variantClass} ${sizeClass} ${className}`}>
      {children}
    </Link>
  );
}
