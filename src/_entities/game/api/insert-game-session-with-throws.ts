import type { DartsHitHistory } from '@/_entities/score/model/types';
import { graphqlSdk } from '@/_shared/lib/gql-codegen';

type InsertGameSessionWithThrowsArgs = {
  gameTypeId: number;
  throws: (DartsHitHistory | undefined)[];
};

export const insertGameSessionWithThrows = async ({
  gameTypeId,
  throws,
}: InsertGameSessionWithThrowsArgs) => {
  return graphqlSdk.InsertGameSessionWithThrows({
    gameSession: {
      game_type_id: gameTypeId,
      rate_80: 1,
      rate_100: 1,
      score_summary: '{}',
      throws: {
        data: throws.map(t => ({ position_id: t?.id ?? null })),
      },
    },
  });
};
