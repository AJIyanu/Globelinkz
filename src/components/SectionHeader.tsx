'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  titleHighlight?: string;
  centered?: boolean;
  className?: string;
  tagClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  titleHighlight,
  centered = false,
  className,
  tagClassName,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {tag && (
        <div
          className={cn(
            'inline-flex items-center gap-2 mb-4',
            'text-xs font-bold letter-spacing-wider uppercase text-brand-green',
            'px-5 py-2 rounded-full bg-brand-green/8 border border-brand-green/28',
            centered && 'justify-center',
            tagClassName
          )}
        >
          <div className="w-1.5 h-0.5 bg-brand-green"></div>
          {tag}
        </div>
      )}

      <h2
        className={cn(
          'font-heading text-clamp-lg leading-tight tracking-tight mb-5',
          'text-brand-white',
          titleClassName
        )}
      >
        {title}
        {titleHighlight && <span className="text-brand-green"> {titleHighlight}</span>}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'text-base md:text-lg leading-relaxed text-brand-white-off',
            'max-w-2xl',
            centered && 'mx-auto',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
