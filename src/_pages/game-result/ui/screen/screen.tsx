'use client';

import { useConnectDartsliveHome } from '@/_features/connect-dartsboard';
import { pagesPath } from '@/_shared/lib/pathpida';
import { Button } from '@/_shared/ui/button';
import { Typography } from '@/_shared/ui/typography';
import { GameHeader } from '@/_widgets/ui/game-header';
import { HomeIcon, MenuIcon, RotateCcwIcon } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

export default function Game() {
  const { dartsRoundsHistory } = useConnectDartsliveHome();

  const resultSBullCount = useMemo(
    () =>
      dartsRoundsHistory
        .flatMap(round => round)
        .map(hit => (hit?.position_code === 'S-BULL' ? 1 : 0))
        .reduce((acc: number, cur: number) => acc + cur, 0),
    [dartsRoundsHistory],
  );
  const resultDBullCount = useMemo(
    () =>
      dartsRoundsHistory
        .flatMap(round => round)
        .map(hit => (hit?.position_code === 'D-BULL' ? 1 : 0))
        .reduce((acc: number, cur: number) => acc + cur, 0),
    [dartsRoundsHistory],
  );
  const resultMissCount = useMemo(
    () =>
      dartsRoundsHistory.flatMap(round => round).length -
      resultSBullCount -
      resultDBullCount,
    [dartsRoundsHistory, resultSBullCount, resultDBullCount],
  );

  return (
    <div className='grid h-full w-full grid-rows-[4.5rem_1fr]'>
      <GameHeader
        color='slate-900'
        title='Game Result'
        rightItems={
          <Button
            variant='outline'
            size='icon'
            className='border-white bg-slate-900 text-white hover:border-white hover:bg-slate-900 hover:text-white'
          >
            <MenuIcon className='stroke-1' />
          </Button>
        }
      />
      <main className='h-full p-4'>
        <div className='flex h-full items-center justify-center gap-7'>
          <div className='flex flex-col'>
            <Typography variant='heading-m'>Result:</Typography>
            <Typography variant='body-l'>S-BULL:{resultSBullCount}</Typography>
            <Typography variant='body-l'>D-BULL:{resultDBullCount}</Typography>
            <Typography variant='body-l'>MISS:{resultMissCount}</Typography>
          </div>
          <img className='h-full max-h-96' src='/dartsboard.jpg' alt='' />
          <div className='flex flex-col gap-4'>
            {/* やり直す */}
            <Button
              variant='outline'
              className='size-16 hover:bg-transparent hover:text-black'
            >
              <RotateCcwIcon className='size-14' />
            </Button>

            {/* ホームに移動ボタン */}
            <Button
              variant='outline'
              className='size-16 hover:bg-transparent hover:text-black'
              asChild
            >
              <Link href={pagesPath.game.$url()}>
                <HomeIcon className='size-14' />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>

    // <main className='h-full p-4'>
    //   <div className='relative grid h-full w-full place-items-center'>
    //     <div>
    //       Result:
    //       <br />
    //       {JSON.stringify(
    //         dartsRoundsHistory.map(round =>
    //           round.map(throw_ => throw_?.position_code),
    //         ),
    //       )}
    //     </div>
    //   </div>
    // </main>
  );
}
