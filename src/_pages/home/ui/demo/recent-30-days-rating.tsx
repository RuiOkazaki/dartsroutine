import { ApexchartsBase } from '@/_shared/lib/apexcharts';
import { format } from '@formkit/tempo';
import type { FC } from 'react';

const games = [
  {
    rating: 5.18,
    ratingMark: 5.18 - 0.48 - 0.4,
    ratingPoint: 5.18 + 0.46 + 0.5,
    played_at: '2024-01-01',
  },
  {
    rating: 5.18,
    ratingMark: 5.18 - 0.13 - 0.4,
    ratingPoint: 5.18 + 0.65 + 0.5,
    played_at: '2024-01-02',
  },
  {
    rating: 5.25,
    ratingMark: 5.25 - 0.84 - 0.4,
    ratingPoint: 5.25 + 0.58 + 0.5,
    played_at: '2024-01-03',
  },
  {
    rating: 5.35,
    ratingMark: 5.35 - 0.29 - 0.4,
    ratingPoint: 5.35 + 0.22 + 0.5,
    played_at: '2024-01-04',
  },
  {
    rating: 5.35,
    ratingMark: 5.35 - 0.2 - 0.4,
    ratingPoint: 5.35 + 0.11 + 0.5,
    played_at: '2024-01-05',
  },
  {
    rating: 5.57,
    ratingMark: 5.57 - 0.9 - 0.4,
    ratingPoint: 5.57 + 0.44 + 0.5,
    played_at: '2024-01-06',
  },
  {
    rating: 5.57,
    ratingMark: 5.57 - 0.85 - 0.4,
    ratingPoint: 5.57 + 0.31 + 0.5,
    played_at: '2024-01-07',
  },
  {
    rating: 5.63,
    ratingMark: 5.63 - 0.54 - 0.4,
    ratingPoint: 5.63 + 0.24 + 0.5,
    played_at: '2024-01-08',
  },
  {
    rating: 5.63,
    ratingMark: 5.63 - 0.83 - 0.4,
    ratingPoint: 5.63 + 0.52 + 0.5,
    played_at: '2024-01-09',
  },
  {
    rating: 5.63,
    ratingMark: 5.63 - 0.47 - 0.4,
    ratingPoint: 5.63 + 0.83 + 0.5,
    played_at: '2024-01-10',
  },
  {
    rating: 5.66,
    ratingMark: 5.66 - 0.18 - 0.4,
    ratingPoint: 5.66 + 0.16 + 0.5,
    played_at: '2024-01-11',
  },
  {
    rating: 5.87,
    ratingMark: 5.87 - 0.85 - 0.4,
    ratingPoint: 5.87 + 0.33 + 0.5,
    played_at: '2024-01-12',
  },
  {
    rating: 6.06,
    ratingMark: 6.06 - 0.45 - 0.4,
    ratingPoint: 6.06 + 0.73 + 0.5,
    played_at: '2024-01-13',
  },
  {
    rating: 6.06,
    ratingMark: 6.06 - 0.47 - 0.4,
    ratingPoint: 6.06 + 0.39 + 0.5,
    played_at: '2024-01-14',
  },
  {
    rating: 6.14,
    ratingMark: 6.14 - 0.14 - 0.4,
    ratingPoint: 6.14 + 0.24 + 0.5,
    played_at: '2024-01-15',
  },
  {
    rating: 6.17,
    ratingMark: 6.17 - 0.43 - 0.4,
    ratingPoint: 6.17 + 0.53 + 0.5,
    played_at: '2024-01-16',
  },
  {
    rating: 6.19,
    ratingMark: 6.19 - 0.82 - 0.4,
    ratingPoint: 6.19 + 0.71 + 0.5,
    played_at: '2024-01-17',
  },
  {
    rating: 6.25,
    ratingMark: 6.25 - 0.12 - 0.4,
    ratingPoint: 6.25 + 0.37 + 0.5,
    played_at: '2024-01-18',
  },
  {
    rating: 6.25,
    ratingMark: 6.25 - 0.54 - 0.4,
    ratingPoint: 6.25 + 0.65 + 0.5,
    played_at: '2024-01-19',
  },
  {
    rating: 6.26,
    ratingMark: 6.26 - 0.76 - 0.4,
    ratingPoint: 6.26 + 0.45 + 0.5,
    played_at: '2024-01-20',
  },
  {
    rating: 6.27,
    ratingMark: 6.27 - 0.63 - 0.4,
    ratingPoint: 6.27 + 0.18 + 0.5,
    played_at: '2024-01-21',
  },
  {
    rating: 6.27,
    ratingMark: 6.27 - 0.31 - 0.4,
    ratingPoint: 6.27 + 0.75 + 0.5,
    played_at: '2024-01-22',
  },
  {
    rating: 6.31,
    ratingMark: 6.31 - 0.2 - 0.4,
    ratingPoint: 6.31 + 0.5 + 0.5,
    played_at: '2024-01-23',
  },
  {
    rating: 6.43,
    ratingMark: 6.43 - 0.58 - 0.4,
    ratingPoint: 6.43 + 0.69 + 0.5,
    played_at: '2024-01-24',
  },
  {
    rating: 6.43,
    ratingMark: 6.43 - 0.32 - 0.4,
    ratingPoint: 6.43 + 0.6 + 0.5,
    played_at: '2024-01-25',
  },
  {
    rating: 6.51,
    ratingMark: 6.51 - 0.8 - 0.4,
    ratingPoint: 6.51 + 0.68 + 0.5,
    played_at: '2024-01-26',
  },
  {
    rating: 6.51,
    ratingMark: 6.51 - 0.54 - 0.4,
    ratingPoint: 6.51 + 0.85 + 0.5,
    played_at: '2024-01-27',
  },
  {
    rating: 6.54,
    ratingMark: 6.54 - 0.17 - 0.4,
    ratingPoint: 6.54 + 0.27 + 0.5,
    played_at: '2024-01-28',
  },
  {
    rating: 6.83,
    ratingMark: 6.83 - 0.72 - 0.4,
    ratingPoint: 6.83 + 0.69 + 0.5,
    played_at: '2024-01-29',
  },
  {
    rating: 6.83,
    ratingMark: 6.83 - 0.22 - 0.4,
    ratingPoint: 6.83 + 0.33 + 0.5,
    played_at: '2024-01-30',
  },
];

export const Recent30DaysRating: FC = () => {
  return (
    <div className='h-[350px] w-full'>
      <ApexchartsBase
        series={[
          {
            name: 'Rating',
            data: games.map(game => Number(game.rating.toFixed(2))),
          },
          {
            name: 'Mark',
            data: games.map(game => Number(game.ratingMark.toFixed(2))),
          },
          {
            name: 'Point',
            data: games.map(game => Number(game.ratingPoint.toFixed(2))),
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
          colors: ['#3b82f6', '#22c55e', '#ef4444'],
          stroke: {
            curve: 'smooth',
            width: [5, 5, 5],
            dashArray: [0, 5, 5],
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
            min:
              Number(
                games
                  .slice()
                  .sort((a, b) => a.rating - b.rating)[0]
                  .rating.toFixed(0),
              ) - 1,
            max:
              Number(
                games
                  .slice()
                  .sort((a, b) => b.rating - a.rating)[0]
                  .rating.toFixed(0),
              ) + 1,
            tickAmount:
              Number(
                games
                  .slice()
                  .sort((a, b) => b.rating - a.rating)[0]
                  .rating.toFixed(0),
              ) +
              1 -
              (Number(
                games
                  .slice()
                  .sort((a, b) => a.rating - b.rating)[0]
                  .rating.toFixed(0),
              ) -
                1),
          },
        }}
      />
    </div>
  );
};
