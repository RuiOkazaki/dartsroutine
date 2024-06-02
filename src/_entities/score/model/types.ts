import type { Darts_Positions_Max_Fields } from '@/_shared/lib/gql-codegen/api/generated/graphql';

// MEMO: リレーションを取り除いた型定義を使用している
export type DartsPosition = Darts_Positions_Max_Fields;
export type DartsHitHistory = DartsPosition | null;
export type DartsRound = [DartsHitHistory?, DartsHitHistory?, DartsHitHistory?];
export type DartsRoundsHistory = Array<DartsRound>;
