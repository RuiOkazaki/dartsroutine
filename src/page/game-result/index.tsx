'use client';

import { Button } from '@/shared/ui/button';
import { HomeIcon, RotateCcwIcon } from 'lucide-react';

export default async function Game() {
  return (
    <main className='h-full p-4'>
      <div className='relative grid h-full w-full place-items-center'>
        <div className='flex gap-4'>
          {/* やり直す */}
          <Button
            variant='outline'
            size='icon'
            className='hover:bg-transparent hover:text-black'
          >
            <RotateCcwIcon />
          </Button>

          {/* 設定表示ボタン */}
          <Button
            variant='outline'
            size='icon'
            className='hover:bg-transparent hover:text-black'
          >
            <HomeIcon />
          </Button>
        </div>
      </div>
    </main>
  );
}
