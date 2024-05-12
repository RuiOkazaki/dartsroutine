import { RatingCharts } from './ui/rating-charts';

export default async function Home() {
  return (
    <main>
      <RatingCharts
        rating={4.86}
        ratingDiff={0.14}
        className='h-1/3 max-h-96 min-h-80'
      />
    </main>
  );
}
