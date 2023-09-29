import { NextResponse } from 'next/server';

import { RequestParamSchema, ResponseSchema } from './schema';

import type { Response } from './schema';

import { WITH_TOKEN_HEADER } from '@/constants/api/header';
import { BAD_REQUEST } from '@/constants/api/status';
import { getApiPath } from '@/libs/apiPath';
import { fetchQuery } from '@/libs/fetchQuery';
import { guardFetch } from '@/libs/guardFetch';

export const GET = async (request: Request): Promise<NextResponse> => {
  const { searchParams } = new URL(request.url);
  try {
    const res = await guardFetch<Response, typeof ResponseSchema>(
      fetchQuery(
        getApiPath().v1.population.composition.perYear,
        searchParams,
        RequestParamSchema
      ),
      ResponseSchema,
      {
        headers: WITH_TOKEN_HEADER,
      }
    );

    return NextResponse.json({ data: res });
  } catch (e) {
    if (!(e instanceof Error)) {
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
    }
    if (e.message == BAD_REQUEST) {
      return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
};
