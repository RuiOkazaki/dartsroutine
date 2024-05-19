import { cn } from '@/shared/libs/shadcn';
import { Typography } from '@/shared/ui/typography';
import type { FC, ReactNode } from 'react';
import { memo } from 'react';

type Props = {
  color?: string;
  leftItems?: ReactNode;
  rightItems?: ReactNode;
  title?: string;
};

const Component: FC<Props> = ({ color, leftItems, rightItems, title }) => {
  return (
    <header
      className={cn(
        'grid grid-cols-[1fr_auto_1fr] items-center p-4',
        color ? [`bg-${color}`] : ['border-b'],
      )}
    >
      <div className='flex items-center justify-start'>{leftItems}</div>
      <Typography variant='heading-m' className='text-white'>
        {title}
      </Typography>
      <div className='flex items-center justify-end'>{rightItems}</div>
    </header>
  );
};

export const GameHeader = memo(Component);
