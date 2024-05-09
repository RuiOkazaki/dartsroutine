'use client';

import { Button } from '@/shared/ui/button';
import { Typography } from '@/shared/ui/typography';
import { GameHeader } from '@/widget/game-header';
import { MenuIcon, SettingsIcon, UserIcon } from 'lucide-react';

export default async function Game() {
  return (
    <div className='grid h-full w-full grid-rows-[4.5rem_1fr]'>
      <GameHeader
        leftItems={
          <Button className='flex gap-2 uppercase' variant='outline'>
            <UserIcon size='1rem' />
            Profile
          </Button>
        }
        rightItems={
          <div className='flex gap-4'>
            <Button variant='outline' size='icon'>
              <SettingsIcon className='stroke-[1.5]' />
            </Button>
            <Button variant='outline' size='icon'>
              <MenuIcon />
            </Button>
          </div>
        }
      />
      <main className='h-full p-4'>
        <div className='flex h-full items-center justify-center gap-8'>
          <div className='h-3/4'>
            <Typography
              className='grid h-full w-36 place-items-center border border-red-500 text-red-500 uppercase'
              variant='body-m'
              weight='bold'
              asChild
            >
              <Button
                variant='unstyle'
                onClick={() => {
                  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
                  console.log('onClick!');
                }}
              >
                Target Bull
              </Button>
            </Typography>
          </div>
          <div className='h-3/4'>
            <Typography
              className='grid h-full w-36 place-items-center border border-blue-500 text-blue-500 uppercase'
              variant='body-m'
              weight='bold'
              asChild
            >
              <Button
                variant='unstyle'
                onClick={() => {
                  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
                  console.log('onClick!');
                }}
              >
                CR Number
              </Button>
            </Typography>
          </div>
        </div>
      </main>
    </div>
  );
}
