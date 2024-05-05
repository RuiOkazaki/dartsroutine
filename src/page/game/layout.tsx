export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 h-[100dvh] w-[100dvw] port:h-[100dvw] port:w-[100dvh] port:rotate-90'>
      {children}
    </div>
  );
}
