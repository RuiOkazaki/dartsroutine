'use client';

import { cn } from '@/_shared/lib/shadcn';
import { Button } from '@/_shared/ui/button';
import { Calendar } from '@/_shared/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/_shared/ui/popover';
import { format } from '@formkit/tempo';
import { CalendarIcon } from 'lucide-react';
import { type HTMLAttributes, useState } from 'react';

export function CalendarDateRangePicker({
  className,
}: HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<
    | {
        from: Date | undefined;
        to?: Date | undefined;
      }
    | undefined
  >();

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={'outline'}
            className={cn(
              'w-72 justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date?.from ? (
              date.to ? (
                <>{`${format(date.from, 'YYYY年M月D日')} ~ ${format(
                  date.to,
                  'YYYY年M月D日',
                )}`}</>
              ) : (
                format(date.from, 'YYYY年M月D日')
              )
            ) : (
              <span>期間を選択してください。</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='end'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
