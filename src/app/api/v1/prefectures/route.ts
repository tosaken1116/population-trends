import { NextResponse } from 'next/server';

import { ResponseSchema } from './schema';

import type { Response } from './schema';

import { WITH_TOKEN_HEADER } from '@/constants/api/header';
import { getApiPath } from '@/libs/apiPath';
import { guardFetch } from '@/libs/guardFetch';

export const GET = async (): Promise<NextResponse> => {
  try {
    const res = await guardFetch<Response, typeof ResponseSchema>(
      getApiPath().v1.prefectures,
      ResponseSchema,
      {
        headers: WITH_TOKEN_HEADER,
      }
    );

    return NextResponse.json({ data: res });
  } catch (e) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
