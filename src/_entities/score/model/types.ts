import type { Darts_Positions } from '@/_shared/lib/gql-codegen/api/generated/graphql';

export type DartsPosition = Darts_Positions;
export type DartsHitHistory = DartsPosition | null;
export type DartsRound = [DartsHitHistory?, DartsHitHistory?, DartsHitHistory?];
export type DartsRoundsHistory = Array<DartsRound>;
