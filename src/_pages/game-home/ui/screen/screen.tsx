'use client';

import { useConnectDartsliveHome } from '@/_features/dartsboard';
import { pagesPath } from '@/_shared/lib/pathpida';
import { Button } from '@/_shared/ui/button';
import { Typography } from '@/_shared/ui/typography';
import { GameHeader } from '@/_widgets/ui/game-header';
import {
  BluetoothIcon,
  BluetoothOffIcon,
  LineChartIcon,
  LoaderIcon,
  MenuIcon,
} from 'lucide-react';
import Link from 'next/link';

export default function Game() {
  const { connectDartsliveHome, connectStatus } = useConnectDartsliveHome();

  return (
    <div className='grid h-full w-full grid-rows-[4.5rem_1fr]'>
      <GameHeader
        leftItems={
          <Button className='flex gap-2 uppercase' variant='outline' asChild>
            <Link href={pagesPath.$url()}>
              <LineChartIcon size='1rem' />
              Dashboard
            </Link>
          </Button>
        }
        rightItems={
          <div className='flex gap-4'>
            <Button
              variant='outline'
              size='icon'
              className='hover:bg-transparent hover:text-black'
              onClick={() => {
                connectDartsliveHome();
              }}
            >
              {connectStatus === 'connected' && <BluetoothIcon />}
              {connectStatus === 'connecting' && <LoaderIcon />}
              {connectStatus === 'disconnected' && <BluetoothOffIcon />}
            </Button>
            <Button variant='outline' size='icon'>
              <MenuIcon />
            </Button>
          </div>
        }
      />
      <main className='h-full p-4'>
        <div className='flex h-full items-center justify-center gap-8'>
          <div className='h-3/4 max-h-60 min-h-40 w-1/4 min-w-32 max-w-52'>
            <Typography
              className='grid h-full w-full place-items-center border border-red-500 text-red-500 uppercase'
              variant='body-m'
              weight='bold'
              asChild
            >
              <Button variant='unstyle' asChild>
                <Link
                  href={pagesPath.game.configure.$url({
                    query: { game_name: 'target-bull' },
                  })}
                >
                  Target Bull
                </Link>
              </Button>
            </Typography>
          </div>
          <div className='h-3/4 max-h-60 min-h-40 w-1/4 min-w-32 max-w-52'>
            <Typography
              className='grid h-full w-full place-items-center border border-blue-500 text-blue-500 uppercase'
              variant='body-m'
              weight='bold'
              asChild
            >
              <Button variant='unstyle' asChild>
                <Link
                  href={pagesPath.game.configure.$url({
                    query: { game_name: 'cr-number' },
                  })}
                >
                  CR Number
                </Link>
              </Button>
            </Typography>
          </div>
        </div>
      </main>
    </div>
  );
}
