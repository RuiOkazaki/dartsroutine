'use client';

import { useConnectDartsliveHome } from '@/_features/dartsboard';
import { pagesPath } from '@/_shared/lib/pathpida';
import { Button } from '@/_shared/ui/button';
import { ScrollArea } from '@/_shared/ui/scroll-area';
import { Separator } from '@/_shared/ui/separator';
import { Typography } from '@/_shared/ui/typography';
import {
  BluetoothIcon,
  BluetoothOffIcon,
  LoaderIcon,
  MenuIcon,
  RotateCcwIcon,
} from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useMemo } from 'react';

export type Query = {
  game_name: 'target-bull' | 'cr-number';
  difficulty: '5' | '10' | '30' | '50' | '100';
};

export default function Game() {
  const {
    connectDartsliveHome,
    finalizeCurrentRound,
    connectStatus,
    dartsRoundsHistory,
  } = useConnectDartsliveHome();

  const router = useRouter();
  const query = useSearchParams();
  const difficulty = query.get('difficulty');

  const currentSBullCount = useMemo(
    () =>
      dartsRoundsHistory
        .flatMap(round => round)
        .map(hit => (hit?.position_code === 'S-BULL' ? 1 : 0))
        .reduce((acc: number, cur: number) => acc + cur, 0),
    [dartsRoundsHistory],
  );
  const currentDBullCount = useMemo(
    () =>
      dartsRoundsHistory
        .flatMap(round => round)
        .map(hit => (hit?.position_code === 'D-BULL' ? 1 : 0))
        .reduce((acc: number, cur: number) => acc + cur, 0),
    [dartsRoundsHistory],
  );
  const currentMissCount = useMemo(
    () =>
      dartsRoundsHistory.flatMap(round => round).length -
      currentSBullCount -
      currentDBullCount,
    [dartsRoundsHistory, currentSBullCount, currentDBullCount],
  );
  const currentRoundNumber = useMemo(
    () => dartsRoundsHistory.length,
    [dartsRoundsHistory],
  );

  const lastThrow = useMemo(
    () => dartsRoundsHistory[currentRoundNumber - 1]?.slice(-1)[0],
    [dartsRoundsHistory, currentRoundNumber],
  );

  useEffect(() => {
    if (Number(difficulty) <= currentSBullCount + currentDBullCount * 2) {
      router.push(pagesPath.game.result.$url().pathname);
    }
  }, [currentSBullCount, currentDBullCount, difficulty, router]);

  return (
    <main className='h-full p-4'>
      <div className='relative grid h-full w-full place-items-center'>
        {/* ゲームタイトル */}
        <Typography
          variant='heading-m'
          weight='bold'
          className='absolute top-0 text-5xl text-red-500'
        >
          BULL {difficulty}
        </Typography>

        {/* ゲーム終了までの残りスコア */}
        <div className='absolute bottom-0 grid h-14 w-72 place-items-center bg-red-500'>
          <Typography
            variant='heading-m'
            weight='bold'
            className='text-5xl text-white'
          >
            {Number(difficulty) - currentSBullCount - currentDBullCount * 2}
          </Typography>
        </div>

        {/* ラウンド履歴 */}
        <div className='absolute left-0 flex flex-col gap-2 rounded-md border p-2 pb-0'>
          <Typography variant='body-l' weight='bold'>
            ラウンド {currentRoundNumber} / Free
          </Typography>
          <ScrollArea className='h-40 w-36 pb-2'>
            {dartsRoundsHistory.length === 1 &&
              dartsRoundsHistory[0].length === 0 && (
                <Typography className='text-nowrap' variant='body-s'>
                  No rounds
                </Typography>
              )}
            {dartsRoundsHistory.map((round, index) => (
              <Fragment key={`${JSON.stringify(round)}-${index}`}>
                <div className='grid grid-cols-3 gap-2'>
                  {round.map((hit, index) => (
                    <Typography
                      className='text-nowrap'
                      variant='body-s'
                      key={`${JSON.stringify(hit)}-${index}`}
                    >
                      {hit?.score === 25 ? hit.position_code : 'MISS'}
                    </Typography>
                  ))}
                </div>
                <Separator className='my-2' />
              </Fragment>
            ))}
          </ScrollArea>
        </div>

        {/* 現在のスコア */}
        <div className='absolute right-0 flex w-32 flex-col gap-2 rounded-md border p-2'>
          <div className='flex justify-between'>
            <Typography variant='body-l' weight='bold'>
              S-BULL
            </Typography>
            <Typography variant='body-l' weight='bold'>
              {currentSBullCount}
            </Typography>
          </div>
          <Separator />
          <div className='flex justify-between'>
            <Typography variant='body-l' weight='bold'>
              D-BULL
            </Typography>
            <Typography variant='body-l' weight='bold'>
              {currentDBullCount}
            </Typography>
          </div>
          <Separator />
          <div className='flex justify-between'>
            <Typography variant='body-l' weight='bold'>
              MISS
            </Typography>
            <Typography variant='body-l' weight='bold'>
              {currentMissCount}
            </Typography>
          </div>
        </div>

        {/* ラウンド切り替えボタン */}
        <Button
          variant='outline'
          size='icon'
          className='absolute right-0 bottom-0 hover:bg-transparent hover:text-black'
          onClick={finalizeCurrentRound}
        >
          <RotateCcwIcon />
        </Button>

        <div className='absolute top-0 right-0 flex gap-2'>
          {/* 接続ボタン */}
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

          {/* 設定表示ボタン */}
          <Button
            variant='outline'
            size='icon'
            className='hover:bg-transparent hover:text-black'
          >
            <MenuIcon />
          </Button>
        </div>

        <Typography className='text-[10rem]'>
          {lastThrow?.position_code ?? ''}
        </Typography>
      </div>
    </main>
  );
}
