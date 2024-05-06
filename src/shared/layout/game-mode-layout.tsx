import type { FC, ReactNode } from 'react';
import { memo } from 'react';

type Props = {
  children: ReactNode;
};

const Component: FC<Props> = ({ children }) => {
  return (
    <div className='-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 h-[100dvh] w-[100dvw] port:h-[100dvw] port:w-[100dvh] port:rotate-90'>
      {children}
    </div>
  );
};

export const GameModeLayout = memo(Component);
