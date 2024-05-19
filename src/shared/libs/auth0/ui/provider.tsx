'use client';

import { UserProvider } from '@auth0/nextjs-auth0/client';
import type { FC, ReactNode } from 'react';
import { memo } from 'react';

type Props = {
  children: ReactNode;
};

const Component: FC<Props> = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export const Auth0Provider = memo(Component);
