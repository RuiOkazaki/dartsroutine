import { Input } from '@/shared/ui/input';

export function Search() {
  return (
    <div>
      <Input
        type='search'
        placeholder='Search...'
        className='lg:w-[300px] md:w-[100px]'
      />
    </div>
  );
}
