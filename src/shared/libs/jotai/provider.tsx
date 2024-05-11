'use client';

import { Provider } from 'jotai';
import type { FC, ReactNode } from 'react';
import { memo } from 'react';

type Props = {
  children: ReactNode;
};

const Component: FC<Props> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export const JotaiProvider = memo(Component);
