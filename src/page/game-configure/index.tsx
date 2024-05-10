'use client';

import { Button } from '@/shared/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { Typography } from '@/shared/ui/typography';
import { GameHeader } from '@/widget/game-header';
import { HomeIcon, MenuIcon } from 'lucide-react';

// TODO: query params からゲームモードを取得する
// TODO: ゲームモードによって色を変更する
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
        <div className='flex h-full flex-col items-center justify-center gap-7'>
          <div className='flex items-center gap-7'>
            <span className='block aspect-video h-24 bg-gray-300' />
            <div className='flex w-72 flex-col gap-2'>
              <Typography variant='body-l'>
                ゲームの難易度を選択してください
              </Typography>
              <span className='border-b' />
              <Typography>
                ターゲットにn（5,10,30,50,100）回
                <br />
                刺さるまで狙い続ける
              </Typography>
            </div>
          </div>
          <Tabs defaultValue='5'>
            <TabsList>
              <TabsTrigger value='5'>5</TabsTrigger>
              <TabsTrigger value='10'>10</TabsTrigger>
              <TabsTrigger value='30'>30</TabsTrigger>
              <TabsTrigger value='50'>50</TabsTrigger>
              <TabsTrigger value='100'>100</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button
            variant='outline'
            className='w-80 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
          >
            ゲームを開始する
          </Button>
        </div>
      </main>
    </div>
  );
}
