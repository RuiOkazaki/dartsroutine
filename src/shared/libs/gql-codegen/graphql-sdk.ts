import { print } from 'graphql';
import { type Requester, getSdk } from './generated/sdk';

type RequestOptions = {
  headers?: Record<string, string>;
  revalidate: false | number;
  tags?: string[];
};

const endpoint = process.env.HASURA_GRAPHQL_URL;
const token = process.env.HASURA_GRAPHQL_ADMIN_SECRET;

const apiClient: Requester<RequestOptions> = async (
  doc,
  variables,
  options?,
) => {
  if (!(endpoint && token)) {
    throw new Error(
      'Missing HASURA_GRAPHQL_URL or HASURA_GRAPHQL_ADMIN_SECRET',
    );
  }

  const headers = {
    'Content-Type': 'application/json',
    // TODO: x-hasura-admin-secret の代わりに Authorization ヘッダを使う
    'x-hasura-admin-secret': token,
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

    if (!response.ok) {
      throw new Error(
        `GraphQL Error: ${response.status} ${response.statusText}`,
      );
    }
    const data = (await response.json()).data;
    return data;
  } catch (error) {
    console.error('Error in GraphQL request:', error);
  }
};

export const graphqlSdk = getSdk(apiClient);
