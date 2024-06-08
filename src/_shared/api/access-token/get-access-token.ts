import type {
  AccessTokenResponse,
  ErrorResponse,
} from '@/_shared/api/access-token/type';

export const getAccessToken = async (): Promise<
  AccessTokenResponse | ErrorResponse
> => {
  const response = await fetch('/api/access-token', {
    next: {
      revalidate: 60 * 60,
    },
  });

  if (response.status === 200) {
    return response.json() as Promise<AccessTokenResponse>;
  }

  if (response.status === 401) {
    return response.json() as Promise<ErrorResponse>;
  }

  return { error: 'Internal Server Error' };
};
