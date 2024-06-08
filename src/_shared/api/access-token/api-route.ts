import { getAccessToken } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const { accessToken } = await getAccessToken();

  if (accessToken === undefined) {
    return NextResponse.json(
      { error: 'Access token not found' },
      { status: 401 },
    );
  }

  return NextResponse.json({ accessToken }, { status: 200 });
};
