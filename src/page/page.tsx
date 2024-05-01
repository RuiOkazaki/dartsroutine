import { ProfileClient } from '@/feature/profile-client';
import { getSession } from '@auth0/nextjs-auth0';

export default async function Home() {
  const res = await getSession();

  return (
    <main>
      <a href='/api/auth/login'>Login</a>
      <a href='/api/auth/logout'>Logout</a>
      <div className='w-fit bg-orange-400'>
        <h2>client render</h2>
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
    </main>
  );
}
