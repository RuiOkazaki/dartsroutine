export * from '@/page/game-configure';
export { default } from '@/page/game-configure';

// MEMO: export type { Query } from '@/page/game-configure'; だと pathpida がうまく読み込んでくれない
import type { Query as OriginalQuery } from '@/page/game-configure';
export type Query = OriginalQuery;
