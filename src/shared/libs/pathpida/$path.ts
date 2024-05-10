import type { Query as Query_17iukn9 } from '../../../app/game/configure/page';

const buildSuffix = (url?: {
  query?: Record<string, string>;
  hash?: string;
}) => {
  const query = url?.query;
  const hash = url?.hash;
  if (!(query || hash)) return '';
  const search = query ? `?${new URLSearchParams(query)}` : '';
  return `${search}${hash ? `#${hash}` : ''}`;
};

export const pagesPath = {
  game: {
    configure: {
      $url: (url: { query: Query_17iukn9; hash?: string }) => ({
        pathname: '/game/configure' as const,
        query: url.query,
        hash: url.hash,
        path: `/game/configure${buildSuffix(url)}`,
      }),
    },
    play: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/game/play' as const,
        hash: url?.hash,
        path: `/game/play${buildSuffix(url)}`,
      }),
    },
    result: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/game/result' as const,
        hash: url?.hash,
        path: `/game/result${buildSuffix(url)}`,
      }),
    },
    $url: (url?: { hash?: string }) => ({
      pathname: '/game' as const,
      hash: url?.hash,
      path: `/game${buildSuffix(url)}`,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: '/' as const,
    hash: url?.hash,
    path: `/${buildSuffix(url)}`,
  }),
};

export type PagesPath = typeof pagesPath;
