import { cn } from '@/shared/libs/shadcn';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

const typographyVariants = cva('', {
  variants: {
    variant: {
      'body-s': 'text-xs leading-normal',
      'body-m': 'text-sm leading-normal',
      'body-l': 'text-base leading-normal',
      'heading-m': 'text-2xl leading-normal',
    },
    weight: {
      normal: 'font-normal',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'body-m',
    weight: 'normal',
  },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
  NonNullable<VariantPropType['variant']>,
  string
> = {
  'body-s': 'p',
  'body-m': 'p',
  'body-l': 'p',
  'heading-m': 'h2',
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, weight, as, asChild, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : as ?? (variant ? variantElementMap[variant] : undefined) ?? 'div';
    return (
      <Comp
        className={cn(typographyVariants({ variant, weight, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Typography.displayName = 'Typography';

export { Typography, typographyVariants };

type TypographyVariantType = NonNullable<
  VariantProps<typeof typographyVariants>['variant']
>;

interface VariantPropsTypographyWithoutVariant
  extends Omit<VariantProps<typeof typographyVariants>, 'variant'> {
  asChild?: boolean;
}

export type { VariantPropsTypographyWithoutVariant, TypographyVariantType };
