import { getAccessToken } from '@/_shared/api/access-token';
import { print } from 'graphql';
import { type Requester, getSdk } from './generated/sdk';

type RequestOptions = {
  headers?: Record<string, string>;
  revalidate: false | number;
  tags?: string[];
};

const endpoint = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL;

const apiClient: Requester<RequestOptions> = async (
  doc,
  variables,
  options?,
) => {
  if (endpoint === undefined) {
    throw new Error('HASURA_GRAPHQL_URL is not defined');
  }

  const accessTokenResponse = await getAccessToken();
  if ('error' in accessTokenResponse) {
    throw new Error('Access token is not defined');
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessTokenResponse.accessToken}`,
    ...options?.headers,
  };
  const revalidate = options?.revalidate ?? 0;
  const tags = options?.tags ?? [];
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: print(doc),
        variables,
      }),
      next: {
        revalidate,
        tags,
      },
    });

    if (response.status !== 200) {
      // MEMO: GraphQL は常に200を返すので、エラーの場合はサーバー側でエラーが発生している
      throw new Error(`GraphQL request failed: ${JSON.stringify(response)}`);
    }

    const result = await response.json();

    if ('errors' in result) {
      throw new Error(
        result.errors.map((error: Error) => error.message).join('\n'),
      );
    }

    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export const graphqlSdk = getSdk(apiClient);
