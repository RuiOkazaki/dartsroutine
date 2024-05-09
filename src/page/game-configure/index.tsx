'use client';

import { Button } from '@/shared/ui/button';
import { GameHeader } from '@/widget/game-header';
import { HomeIcon, MenuIcon } from 'lucide-react';

export default async function Game() {
  return (
    <div className='grid h-full w-full grid-rows-[4.5rem_1fr]'>
      <GameHeader
        color='red-500'
        title='TARGET BULL'
        leftItems={
          <Button
            variant='outline'
            size='icon'
            className='border-white bg-red-500 text-white hover:border-white hover:bg-red-500 hover:text-white'
          >
            <HomeIcon className='stroke-1' />
          </Button>
        }
        rightItems={
          <Button
            variant='outline'
            size='icon'
            className='border-white bg-red-500 text-white hover:border-white hover:bg-red-500 hover:text-white'
          >
            <MenuIcon className='stroke-1' />
          </Button>
        }
      />
      <main className='h-full p-4'>
        <div className='flex h-full items-center justify-center gap-8'>
          ほげ
        </div>
      </main>
    </div>
  );
}
