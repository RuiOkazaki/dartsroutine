'use client';

import { pagesPath } from '@/shared/libs/pathpida';
import { Button } from '@/shared/ui/button';
import { Typography } from '@/shared/ui/typography';
import { GameHeader } from '@/widget/ui/game-header';
import { HomeIcon, MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import {
  DifficultySelectorTabs,
  DifficultySelectorTabsList,
  DifficultySelectorTabsTrigger,
} from '../difficulty-selector-tabs';

export type Query = {
  game_name: 'target-bull' | 'cr-number';
};

const DIFFICULTY = ['5', '10', '30', '50', '100'] as const;

// TODO: ゲームモードによって色を変更する
export default function Game() {
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<(typeof DIFFICULTY)[number]>('10');

  const query = useSearchParams();
  // TODO: query.get を型安全にする
  const game_name = query.get('game_name') as unknown as ReturnType<
    typeof pagesPath.game.configure.$url
  >['query']['game_name'];
  game_name;

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
            asChild
          >
            <Link href={pagesPath.game.$url()}>
              <HomeIcon className='stroke-1' />
            </Link>
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
          <DifficultySelectorTabs value={selectedDifficulty}>
            <DifficultySelectorTabsList>
              {DIFFICULTY.map(level => (
                <DifficultySelectorTabsTrigger
                  key={level}
                  value={level}
                  onClick={() => setSelectedDifficulty(level)}
                >
                  {level}
                </DifficultySelectorTabsTrigger>
              ))}
            </DifficultySelectorTabsList>
          </DifficultySelectorTabs>
          <Button
            variant='outline'
            className='w-80 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
            asChild
            disabled={!selectedDifficulty}
          >
            <Link
              href={pagesPath.game.play.$url({
                query: {
                  game_name: 'target-bull',
                  difficulty: selectedDifficulty,
                },
              })}
            >
              ゲームを開始する
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
