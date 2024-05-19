export * from '@/_pages/game-configure/ui';
export { default } from '@/_pages/game-configure/ui';

// MEMO: export type { Query } from '@/page/game-configure'; だと pathpida がうまく読み込んでくれない
import type { Query as OriginalQuery } from '@/_pages/game-configure/ui';
export type Query = OriginalQuery;
