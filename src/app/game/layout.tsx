import { GameModeLayout } from '@/shared/layout/game-mode-layout';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GameModeLayout>{children}</GameModeLayout>;
}
