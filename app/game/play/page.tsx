export * from '@/_pages/game-play/ui';
export { default } from '@/_pages/game-play/ui';

// MEMO: export type { Query } from '@/page/game-play'; だと pathpida がうまく読み込んでくれない
import type { Query as OriginalQuery } from '@/_pages/game-play/ui';
export type Query = OriginalQuery;
