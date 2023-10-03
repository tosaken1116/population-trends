'use client';

import { useQuery } from '@tanstack/react-query';
import { object } from 'zod';

import type { z } from 'zod';

import { ResponseSchema } from '@/app/api/v1/prefectures/schema';
import { guardFetch } from '@/libs/guardFetch';

const DataResponseSchema = object({
  data: ResponseSchema,
});

type DataResponse = z.infer<typeof DataResponseSchema>;

const fetcher = async (url: string): Promise<DataResponse> =>
  await guardFetch<DataResponse, typeof DataResponseSchema>(
    url,
    DataResponseSchema
  );

export const usePrefectureSWR = (): { data: DataResponse | undefined } => {
  const { data } = useQuery<DataResponse>({
    queryKey: ['/api/v1/prefectures'],
    queryFn: () =>
      fetcher(`${process.env['NEXT_PUBLIC_API_ROUTE']}/api/v1/prefectures`),
    suspense: true,
  });

  return { data };
};
