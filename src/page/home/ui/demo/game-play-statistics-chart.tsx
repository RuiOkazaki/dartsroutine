import { ApexchartsBase } from '@/shared/libs/apexcharts';
import { format } from '@formkit/tempo';
import type { FC } from 'react';

const gamePlayStatistics = [
  {
    name: 'Progressive CR Number',
    played_month: [
      '2024-01-01',
      '2024-02-01',
      '2024-03-01',
      '2024-04-01',
      '2024-05-01',
    ],
    data: [55, 110, 62, 57, 57],
  },
  {
    name: 'Target BULL',
    played_month: [
      '2024-01-01',
      '2024-02-01',
      '2024-03-01',
      '2024-04-01',
      '2024-05-01',
    ],
    data: [82, 78, 88, 61, 127],
  },
];

export const GamePlayStatisticsChart: FC = () => {
  return (
    <div className='h-[350px] w-full'>
      <ApexchartsBase
        series={gamePlayStatistics}
        width='100%'
        height='100%'
        type='bar'
        options={{
          chart: {
            height: '100%',
            type: 'bar',
            stacked: true,
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
          colors: ['#3b82f6', '#ef4444'],
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
            categories: gamePlayStatistics[0].played_month.map(date =>
              format(date, 'YY/MM'),
            ),
          },
        }}
      />
    </div>
  );
};
