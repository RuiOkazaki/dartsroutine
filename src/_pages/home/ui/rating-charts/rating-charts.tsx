import { ApexchartsBase } from '@/_shared/lib/apexcharts';
import { cn } from '@/_shared/lib/shadcn';
import { Typography } from '@/_shared/ui/typography';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import type { FC } from 'react';
import { memo } from 'react';

/**
 * 整数を除いた少数第二位までの値を抽出する
 * @param { number } rating
 * @returns { number } 少数第二位までの値を整数で返す
 */
export const extractDecimal = (rating: number) => {
  if (rating < 0) throw new Error('rating must be greater than or equal to 0');

  return Math.floor((rating * 100) % 100);
};

type Props = {
  rating: number;
  ratingDiff: number;
  className?: string;
};

const Component: FC<Props> = ({ rating, ratingDiff, className }) => {
  return (
    <div className={cn('pointer-events-none relative h-80 w-full', className)}>
      <div className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-10 flex transform flex-col items-center'>
        <Typography variant='body-m' className='text-lg'>
          Rating
        </Typography>
        <Typography as='p' variant='heading-m' className='-mt-1 text-4xl'>
          {rating.toFixed(2)}
        </Typography>
        <div className='flex items-center gap-0'>
          {ratingDiff > 0 ? (
            <ChevronUpIcon className='h-4 w-4 stroke-lime-200' />
          ) : (
            <ChevronDownIcon className='h-4 w-4 stroke-red-200' />
          )}
          <Typography className='text-lime-200' variant='body-s'>
            {ratingDiff.toFixed(2)}
          </Typography>
        </div>
      </div>
      <ApexchartsBase
        series={[extractDecimal(rating)]}
        width='100%'
        height='100%'
        type='radialBar'
        options={{
          plotOptions: {
            radialBar: {
              offsetY: 11,
              startAngle: -135,
              endAngle: 225,
              hollow: {
                size: '70%',
                background: 'transparent',
                position: 'front',
                dropShadow: {
                  enabled: true,
                  color: '#000000',
                  top: -4,
                  left: 0,
                  blur: 4,
                  opacity: 0.25,
                },
              },
              track: {
                background: '#27272A',
                strokeWidth: '70%',
                margin: 0,
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35,
                },
              },
              dataLabels: {
                show: false,
              },
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#ABE5A1'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: 'round',
          },
        }}
      />
    </div>
  );
};

export const RatingCharts = memo(Component);
