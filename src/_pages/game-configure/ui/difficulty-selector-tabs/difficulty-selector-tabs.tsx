'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';

import { cn } from '@/_shared/lib/shadcn';
import { Typography } from '@/_shared/ui/typography';

const DifficultySelectorTabs = TabsPrimitive.Root;

const DifficultySelectorTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center bg-transparent p-1 text-red-500',
      className,
    )}
    {...props}
  />
));
DifficultySelectorTabsList.displayName = TabsPrimitive.List.displayName;

const DifficultySelectorTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex w-24 items-center justify-center whitespace-nowrap border-red-500 border-t border-b border-l px-3 py-1.5 font-medium text-sm ring-offset-red-500 transition-all disabled:pointer-events-none last:rounded-r first:rounded-l last:border-r data-[state=active]:bg-red-200 data-[state=active]:text-red-500 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  >
    <Typography variant='body-m'>{props.children}</Typography>
  </TabsPrimitive.Trigger>
));
DifficultySelectorTabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export {
  DifficultySelectorTabs,
  DifficultySelectorTabsList,
  DifficultySelectorTabsTrigger,
};
