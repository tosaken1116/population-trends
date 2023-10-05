import { useQueries } from '@tanstack/react-query';
import { array, number, object } from 'zod';

import type { Response } from '@/app/api/v1/population/composition/perYear/schema';
import type { z } from 'zod';

import {
  RequestParamSchema,
  ResponseSchema,
} from '@/app/api/v1/population/composition/perYear/schema';
import { fetchQuery } from '@/libs/fetchQuery';

const fetcher = async (url: string): Promise<{ data: Response }> => {
  const data = (await fetch(url).then((res) => res.json())) as {
    data: Response;
  };

  return data;
};

const DataResponseSchema = array(
  object({ prefCode: number(), data: ResponseSchema })
);

export type DataResponse = z.infer<typeof DataResponseSchema>;

type IUsePopulationQuery = { data: DataResponse | null };

export const usePopulationQuery = ({
  params,
}: {
  params: URLSearchParams;
}): IUsePopulationQuery => {
  const prefCodes = params.getAll('q').map((v) => Number(v));

  const data = useQueries({
    queries: prefCodes.map((prefCode) => ({
      queryKey: ['/api/v1/population/composition/perYear', prefCode],
      queryFn: () =>
        fetcher(
          fetchQuery(
            `${process.env['NEXT_PUBLIC_API_ROUTE']}/api/v1/population/composition/perYear`,
            new URLSearchParams({ prefCode: String(prefCode), cityCode: '-' }),
            RequestParamSchema
          )
        ),
      suspense: true,
      cacheTime: Infinity,
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    })),
  });

  const isLoading = data.some((d) => d.isFetching);
  if (isLoading) {
    return { data: null };
  }

  const parsed = DataResponseSchema.safeParse(
    data.map((d, i) => ({
      data: d.data?.data,
      prefCode: prefCodes[i],
    }))
  );

  if (!parsed.success) {
    throw new Error('Failed to parse data');
  }
  return { data: parsed.data };
};
