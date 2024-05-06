import { ProfileClient } from '@/feature/profile-client';
import { graphqlSdk } from '@/shared/libs/gql-codegen/graphql-sdk';
import { Button } from '@/shared/ui/button';
import { Typography } from '@/shared/ui/typography';
import { getSession } from '@auth0/nextjs-auth0';

export default async function Home() {
  const res = await getSession();
  const { darts_positions } = await graphqlSdk.GetDartsPositions({});

  return (
    <main>
      <a href='/api/auth/login'>Login</a>
      <a href='/api/auth/logout'>Logout</a>
      <div className='w-fit bg-orange-400'>
        <Typography variant='heading-m' weight='bold'>
          client render
        </Typography>
        <ProfileClient />
      </div>
      <div className='w-fit bg-violet-400'>
        <h2>server render</h2>
        {res?.user && (
          <div>
            <img src={res?.user.picture} alt={res?.user.name} />
            <h2>{res?.user.name}</h2>
            <p>{res?.user.email}</p>
          </div>
        )}
      </div>
      <div>
        <h2>darts positions</h2>
        <p>
          {JSON.stringify(darts_positions.map(darts => darts.position_code))}
        </p>
      </div>

      <Button>on click!</Button>
    </main>
  );
}
