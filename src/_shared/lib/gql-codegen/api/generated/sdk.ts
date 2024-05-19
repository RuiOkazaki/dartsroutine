import type { DocumentNode } from 'graphql';
import * as Operations from './graphql';
import type * as Type from './graphql';

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
  };
}
export type Sdk = ReturnType<typeof getSdk>;
