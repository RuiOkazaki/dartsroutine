import { pagesPath } from '@/shared/libs/pathpida/$path';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import Link from 'next/link';
import { GamePlayStatisticsChart } from './ui/demo/game-play-statistics-chart';
import { Recent30DaysMPR } from './ui/demo/recent-30-days-mpr';
import { Recent30DaysPPR } from './ui/demo/recent-30-days-ppr';
import { Recent30DaysRating } from './ui/demo/recent-30-days-rating';

export default function Home() {
  return (
    <main>
      <div className='flex-1 space-y-4 p-4 md:p-8 md:pt-6'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='font-bold text-3xl tracking-tight'>Dashboard</h2>
          <div className='flex items-center space-x-2'>
            <Button asChild>
              <Link href={pagesPath.game.$url()}>Play Game</Link>
            </Button>
          </div>
        </div>
        <Tabs defaultValue='overview' className='space-y-4'>
          <TabsList>
            <TabsTrigger value='overview'>Overview</TabsTrigger>
            <TabsTrigger value='mode-stats'>ModeStats</TabsTrigger>
            <TabsTrigger value='calendar'>Calendar</TabsTrigger>
          </TabsList>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2'>
              {/* TODO: 80% レーティングを扱うのは難しそう。 */}
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='font-medium text-sm'>
                    Mark Per Round 80%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='font-bold text-2xl'>2.46 Marks</div>
                  <p className='text-muted-foreground text-xs'>
                    +0.53 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='font-medium text-sm'>
                    Mark Per Round 100%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='font-bold text-2xl'>2.88 Marks</div>
                  <p className='text-muted-foreground text-xs'>
                    -0.21 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='font-medium text-sm'>
                    Point Per Round 80%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='font-bold text-2xl'>70.35 Points</div>
                  <p className='text-muted-foreground text-xs'>
                    +1.04 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='font-medium text-sm'>
                    Point Per Round 100%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='font-bold text-2xl'>67.30 Points</div>
                  <p className='text-muted-foreground text-xs'>
                    +2.91 from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-5'>
              <Card className='col-span-1 sm:col-span-3'>
                <CardHeader>
                  <CardTitle>RATING / 30 days</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  <Recent30DaysRating />
                </CardContent>
              </Card>
              <Card className='col-span-1 sm:col-span-2'>
                <CardHeader>
                  <CardTitle>Game Play Statistics / 5 months</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  <GamePlayStatisticsChart />
                </CardContent>
              </Card>
            </div>

            <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2'>
              <Card className='col-span-1'>
                <CardHeader>
                  <CardTitle>MPR / 30 days</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  <Recent30DaysPPR />
                </CardContent>
              </Card>
              <Card className='col-span-1'>
                <CardHeader>
                  <CardTitle>PPR / 30 days</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  <Recent30DaysMPR />
                </CardContent>
              </Card>
              <Card className='col-span-2 lg:col-span-1'>
                <CardHeader>
                  <CardTitle>Statistics</CardTitle>
                </CardHeader>
                <CardContent>wip</CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
