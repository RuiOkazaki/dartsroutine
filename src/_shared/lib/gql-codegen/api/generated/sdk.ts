import type { DocumentNode } from 'graphql';
import * as Operations from './graphql';
import type * as Type from './graphql.ts';

export type Requester<C = {}> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C,
) => Promise<R> | AsyncIterable<R>;
export function getSdk<C>(requester: Requester<C>) {
  return {
    GetDartsPositions(
      variables?: Type.GetDartsPositionsQueryVariables,
      options?: C,
    ): Promise<Type.GetDartsPositionsQuery> {
      return requester<
        Type.GetDartsPositionsQuery,
        Type.GetDartsPositionsQueryVariables
      >(
        Operations.GetDartsPositionsDocument,
        variables,
        options,
      ) as Promise<Type.GetDartsPositionsQuery>;
    },
    InsertGameSessionWithThrows(
      variables: Type.InsertGameSessionWithThrowsMutationVariables,
      options?: C,
    ): Promise<Type.InsertGameSessionWithThrowsMutation> {
      return requester<
        Type.InsertGameSessionWithThrowsMutation,
        Type.InsertGameSessionWithThrowsMutationVariables
      >(
        Operations.InsertGameSessionWithThrowsDocument,
        variables,
        options,
      ) as Promise<Type.InsertGameSessionWithThrowsMutation>;
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
