import React, { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-body font-bold border-none cursor-pointer transition-all duration-200 whitespace-nowrap',
  {
    variants: {
      variant: {
        primary: [
          'bg-brand-green text-brand-dark',
          'shadow-lg shadow-brand-green/25',
          'hover:bg-brand-green-light hover:shadow-2xl hover:shadow-brand-green/40 hover:-translate-y-0.5',
          'active:translate-y-0',
        ],
        secondary: [
          'bg-transparent text-brand-white border-1.5 border-white/18',
          'hover:border-brand-green hover:text-brand-green',
          'transition-all duration-200',
        ],
        tertiary: [
          'bg-brand-card text-brand-white border border-brand-green/25',
          'hover:bg-brand-card/80',
        ],
      },
      size: {
        sm: 'px-6 py-2.5 text-sm',
        md: 'px-8 py-4 text-base',
        lg: 'px-12 py-5 text-lg',
        xl: 'px-14 py-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  children: ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, isLoading, children, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
