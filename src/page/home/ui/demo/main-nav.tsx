import { cn } from '@/shared/libs/shadcn';
import Link from 'next/link';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      <Link
        href='/examples/dashboard'
        className='font-medium text-sm transition-colors hover:text-primary'
      >
        Overview
      </Link>
      <Link
        href='/examples/dashboard'
        className='font-medium text-muted-foreground text-sm transition-colors hover:text-primary'
      >
        Customers
      </Link>
      <Link
        href='/examples/dashboard'
        className='font-medium text-muted-foreground text-sm transition-colors hover:text-primary'
      >
        Products
      </Link>
      <Link
        href='/examples/dashboard'
        className='font-medium text-muted-foreground text-sm transition-colors hover:text-primary'
      >
        Settings
      </Link>
    </nav>
  );
}
