import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  icon?: string;
  target?: '_blank' | '_self';
  className?: string;
}

export function CTAButton({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  icon,
  target,
  className,
}: CTAButtonProps) {
  const content = (
    <>
      {icon && <span>{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
        <Button
          variant={variant}
          size={size}
          className={className}
          asChild
        >
          {content}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      className={className}
    >
      {content}
    </Button>
  );
}
