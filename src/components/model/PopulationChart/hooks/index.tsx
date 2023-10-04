import { useMemo } from 'react';

import { useSearchParams } from 'next/navigation';
import { array, number, object, string } from 'zod';

import { usePrefectureSWR } from '../../PrefectureCheckBoxes/hooks/usePrefectureQuery';

import { usePopulationQuery } from './usePopulationQuery';

import type { z } from 'zod';

const VisibleDataSchema = array(
  object({
    prefecture: string(),
    data: array(object({ year: number(), value: number() })),
  })
);

export type VisibleData = z.infer<typeof VisibleDataSchema>;

type IUsePopulationChart = {
  visibleData: VisibleData | null;
};

export const usePopulationChart = (): IUsePopulationChart => {
  const searchParams = useSearchParams();
  const isSearchParamNull = searchParams == null;

  const params = useMemo(
    () =>
      new URLSearchParams(
        isSearchParamNull ? [] : Array.from(searchParams.entries())
      ),
    [isSearchParamNull, searchParams]
  );

  const { data } = usePopulationQuery({ params });
  const { data: prefectures } = usePrefectureSWR();

  const visibleData = useMemo(() => {
    if (data === null) {
      return null;
    }

    const prefecturePopulations = data.map(
      ({
        data: {
          result: { data: populationValues },
        },
        prefCode,
      }) => ({
        prefecture: prefectures?.data.result.filter(
          (p) => p.prefCode == prefCode
        )[0]?.prefName,
        data: populationValues
          .filter((populationValue) => populationValue.label == params.get('s'))
          .flatMap(({ data }) =>
            data.map(({ year, value }) => ({
              year,
              value,
            }))
          ),
      })
    );

    const parsed = VisibleDataSchema.safeParse(prefecturePopulations);
    if (!parsed.success) {
      throw new Error('data is invalid');
    }

    return parsed.data;
  }, [data, params, prefectures?.data.result]);

  return {
    visibleData,
  };
};
