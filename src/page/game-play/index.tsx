'use client';

import { useConnectDartsliveHome } from '@/entitie/dartsboard/hooks/use-connect-dartslive-home';
import { Button } from '@/shared/ui/button';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { Separator } from '@/shared/ui/separator';
import { Typography } from '@/shared/ui/typography';
import {
  LoaderIcon,
  MenuIcon,
  RotateCcwIcon,
  WifiIcon,
  WifiOffIcon,
} from 'lucide-react';
import { Fragment } from 'react';

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

  return (
    <main className='h-full p-4'>
      <div className='relative grid h-full w-full place-items-center'>
        {/* ゲームタイトル */}
        <Typography
          variant='heading-m'
          weight='bold'
          className='absolute top-0 text-5xl text-red-500'
        >
          BULL 100
        </Typography>

        {/* ゲーム終了までの残りスコア */}
        <div className='absolute bottom-0 grid h-14 w-72 place-items-center bg-red-500'>
          <Typography
            variant='heading-m'
            weight='bold'
            className='text-5xl text-white'
          >
            100
          </Typography>
        </div>

        {/* ラウンド履歴 */}
        <div className='absolute left-0 flex flex-col gap-2 rounded-md border p-2 pb-0'>
          <Typography variant='body-l' weight='bold'>
            ラウンド 1 / Free
          </Typography>
          <ScrollArea className='h-40 w-32 pb-2'>
            {dartsRoundsHistory.map((round, index) => (
              <Fragment key={`${JSON.stringify(round)}-${index}`}>
                <div className='flex gap-2'>
                  {round.map((hit, index) => (
                    <Typography key={`${JSON.stringify(hit)}-${index}`}>
                      {hit === null ? 'MISS' : hit?.position_code}
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
              70
            </Typography>
          </div>
          <Separator />
          <div className='flex justify-between'>
            <Typography variant='body-l' weight='bold'>
              D-BULL
            </Typography>
            <Typography variant='body-l' weight='bold'>
              70
            </Typography>
          </div>
          <Separator />
          <div className='flex justify-between'>
            <Typography variant='body-l' weight='bold'>
              MISS
            </Typography>
            <Typography variant='body-l' weight='bold'>
              70
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
            {connectStatus === 'connected' && <WifiIcon />}
            {connectStatus === 'connecting' && <LoaderIcon />}
            {connectStatus === 'disconnected' && <WifiOffIcon />}
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
      </div>
    </main>
  );
}
