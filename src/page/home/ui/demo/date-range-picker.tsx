'use client';

import { cn } from '@/shared/libs/shadcn/utils';
import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { addDay, format } from '@formkit/tempo';
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
  >({
    from: new Date(2023, 0, 20),
    to: addDay(new Date(2023, 0, 20), 20),
  });

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={'outline'}
            className={cn(
              'w-[260px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'YYYY-MM-DD')} -{' '}
                  {format(date.to, 'YYYY-MM-DD')}
                </>
              ) : (
                format(date.from, 'YYYY-MM-DD')
              )
            ) : (
              <span>Pick a date</span>
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
