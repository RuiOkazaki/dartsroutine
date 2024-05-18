import { ApexchartsBase } from '@/shared/libs/apexcharts/apexcharts-base';
import { format } from '@formkit/tempo';
import type { FC } from 'react';

const games = [
  {
    point: 65.12,
    played_at: '2024-01-01',
  },
  {
    point: 65.37,
    played_at: '2024-01-02',
  },
  {
    point: 66.33,
    played_at: '2024-01-03',
  },
  {
    point: 66.98,
    played_at: '2024-01-04',
  },
  {
    point: 66.99,
    played_at: '2024-01-05',
  },
  {
    point: 67.61,
    played_at: '2024-01-06',
  },
  {
    point: 68.3,
    played_at: '2024-01-07',
  },
  {
    point: 68.45,
    played_at: '2024-01-08',
  },
  {
    point: 68.82,
    played_at: '2024-01-09',
  },
  {
    point: 68.85,
    played_at: '2024-01-10',
  },
  {
    point: 68.86,
    played_at: '2024-01-11',
  },
  {
    point: 69.33,
    played_at: '2024-01-12',
  },
  {
    point: 69.36,
    played_at: '2024-01-13',
  },
  {
    point: 69.74,
    played_at: '2024-01-14',
  },
  {
    point: 69.87,
    played_at: '2024-01-15',
  },
  {
    point: 71.69,
    played_at: '2024-01-16',
  },
  {
    point: 72.45,
    played_at: '2024-01-17',
  },
  {
    point: 72.51,
    played_at: '2024-01-18',
  },
  {
    point: 73.31,
    played_at: '2024-01-19',
  },
  {
    point: 73.49,
    played_at: '2024-01-20',
  },
  {
    point: 73.58,
    played_at: '2024-01-21',
  },
  {
    point: 73.83,
    played_at: '2024-01-22',
  },
  {
    point: 74.44,
    played_at: '2024-01-23',
  },
  {
    point: 74.44,
    played_at: '2024-01-24',
  },
  {
    point: 74.82,
    played_at: '2024-01-25',
  },
  {
    point: 74.91,
    played_at: '2024-01-26',
  },
  {
    point: 75.22,
    played_at: '2024-01-27',
  },
  {
    point: 75.31,
    played_at: '2024-01-28',
  },
  {
    point: 75.51,
    played_at: '2024-01-29',
  },
  {
    point: 75.58,
    played_at: '2024-01-30',
  },
];

export const Recent30DaysPPR: FC = () => {
  return (
    <div className='h-[350px] w-full'>
      <ApexchartsBase
        series={[
          {
            name: 'Point',
            data: games.map(game => Number(game.point.toFixed(2))),
          },
        ]}
        width='100%'
        height='100%'
        type='line'
        options={{
          chart: {
            height: '100%',
            type: 'line',
            toolbar: {
              show: false,
            },
            selection: {
              enabled: false,
            },
            zoom: {
              enabled: false,
            },
          },
          colors: ['#3b82f6'],
          stroke: {
            curve: 'straight',
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['transparent'],
            },
          },
          markers: {
            size: 1,
          },
          xaxis: {
            categories: games.map(game => format(game.played_at, 'M月D日')),
            labels: {
              show: false,
            },
          },
          yaxis: {
            max:
              Number(
                games
                  .slice()
                  .sort((a, b) => b.point - a.point)[0]
                  .point.toFixed(0),
              ) + 5,
            tickAmount: 4,
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5,
          },
        }}
      />
    </div>
  );
};
