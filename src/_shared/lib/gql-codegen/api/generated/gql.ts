import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
/* eslint-disable */
import * as types from './graphql';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'mutation InsertGameSessionWithThrows($gameSession: game_sessions_insert_input!) {\n  insert_game_sessions_one(object: $gameSession) {\n    id\n    game_type_id\n    played_at\n    rate_80\n    rate_100\n    score_summary\n    user_id\n    throws {\n      id\n      position_id\n      created_at\n      updated_at\n    }\n  }\n}':
    types.InsertGameSessionWithThrowsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation InsertGameSessionWithThrows($gameSession: game_sessions_insert_input!) {\n  insert_game_sessions_one(object: $gameSession) {\n    id\n    game_type_id\n    played_at\n    rate_80\n    rate_100\n    score_summary\n    user_id\n    throws {\n      id\n      position_id\n      created_at\n      updated_at\n    }\n  }\n}',
): (typeof documents)['mutation InsertGameSessionWithThrows($gameSession: game_sessions_insert_input!) {\n  insert_game_sessions_one(object: $gameSession) {\n    id\n    game_type_id\n    played_at\n    rate_80\n    rate_100\n    score_summary\n    user_id\n    throws {\n      id\n      position_id\n      created_at\n      updated_at\n    }\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
