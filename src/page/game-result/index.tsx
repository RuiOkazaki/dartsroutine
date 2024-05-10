'use client';

import { pagesPath } from '@/shared/libs/pathpida/$path';
import { Button } from '@/shared/ui/button';
import { HomeIcon, RotateCcwIcon } from 'lucide-react';
import Link from 'next/link';

export default function Game() {
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

          {/* ホームに移動ボタン */}
          <Button
            variant='outline'
            size='icon'
            className='hover:bg-transparent hover:text-black'
            asChild
          >
            <Link href={pagesPath.game.$url()}>
              <HomeIcon />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
