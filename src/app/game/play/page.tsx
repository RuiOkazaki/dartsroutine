export * from '@/page/game-play';
export { default } from '@/page/game-play';

// MEMO: export type { Query } from '@/page/game-play'; だと pathpida がうまく読み込んでくれない
import type { Query as OriginalQuery } from '@/page/game-play';
export type Query = OriginalQuery;
