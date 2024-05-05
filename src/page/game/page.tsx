import { Button } from '@/shared/ui/button';
import { MenuIcon, SettingsIcon, UserIcon } from 'lucide-react';
import './style.css';

export default async function Game() {
  return (
    <div className='grid h-full w-full grid-rows-[4.5rem_1fr]'>
      <header className='flex items-center justify-between border-b p-4'>
        <Button className='flex gap-2 uppercase' variant='outline'>
          <UserIcon size='1rem' />
          Profile
        </Button>
        <div className='flex gap-4'>
          <Button variant='outline' size='icon'>
            <SettingsIcon className='stroke-[1.5]' />
          </Button>
          <Button variant='outline' size='icon'>
            <MenuIcon />
          </Button>
        </div>
      </header>
      <main className='p-4'>hoge</main>
    </div>
  );
}
