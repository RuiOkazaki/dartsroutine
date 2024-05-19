import { ApexchartsBase } from '@/shared/libs/apexcharts';
import { format } from '@formkit/tempo';
import type { FC } from 'react';

const games = [
  {
    mark: 2.33,
    played_at: '2024-01-01',
  },
  {
    mark: 2.37,
    played_at: '2024-01-02',
  },
  {
    mark: 2.51,
    played_at: '2024-01-03',
  },
  {
    mark: 2.58,
    played_at: '2024-01-04',
  },
  {
    mark: 2.58,
    played_at: '2024-01-05',
  },
  {
    mark: 2.69,
    played_at: '2024-01-06',
  },
  {
    mark: 2.82,
    played_at: '2024-01-07',
  },
  {
    mark: 2.82,
    played_at: '2024-01-08',
  },
  {
    mark: 2.86,
    played_at: '2024-01-09',
  },
  {
    mark: 2.99,
    played_at: '2024-01-10',
  },
  {
    mark: 3.12,
    played_at: '2024-01-11',
  },
  {
    mark: 3.3,
    played_at: '2024-01-12',
  },
  {
    mark: 3.31,
    played_at: '2024-01-13',
  },
  {
    mark: 3.36,
    played_at: '2024-01-14',
  },
  {
    mark: 3.51,
    played_at: '2024-01-15',
  },
  {
    mark: 3.85,
    played_at: '2024-01-16',
  },
  {
    mark: 3.87,
    played_at: '2024-01-17',
  },
  {
    mark: 3.98,
    played_at: '2024-01-18',
  },
  {
    mark: 3.22,
    played_at: '2024-01-19',
  },
  {
    mark: 3.31,
    played_at: '2024-01-20',
  },
  {
    mark: 3.33,
    played_at: '2024-01-21',
  },
  {
    mark: 3.44,
    played_at: '2024-01-22',
  },
  {
    mark: 3.44,
    played_at: '2024-01-23',
  },
  {
    mark: 3.45,
    played_at: '2024-01-24',
  },
  {
    mark: 3.45,
    played_at: '2024-01-25',
  },
  {
    mark: 3.49,
    played_at: '2024-01-26',
  },
  {
    mark: 3.61,
    played_at: '2024-01-27',
  },
  {
    mark: 3.74,
    played_at: '2024-01-28',
  },
  {
    mark: 3.83,
    played_at: '2024-01-29',
  },
  {
    mark: 3.91,
    played_at: '2024-01-30',
  },
];

export const Recent30DaysMPR: FC = () => {
  return (
    <div className='h-[350px] w-full'>
      <ApexchartsBase
        series={[
          {
            name: 'Mark',
            data: games.map(game => Number(game.mark.toFixed(2))),
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
                  .sort((a, b) => b.mark - a.mark)[0]
                  .mark.toFixed(0),
              ) + 1,
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
