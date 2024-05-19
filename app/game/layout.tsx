import { GameModeLayout } from '@/widget/layout';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GameModeLayout>{children}</GameModeLayout>;
}
