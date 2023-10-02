import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { usePrefectureSWR } from './usePrefectureQuery';

import type { Response } from '@/app/api/v1/prefectures/schema';

type IUsePrefectureCheckBoxes = {
  onChange: (target: Response['result'][number]) => void;
  prefectures: Response['result'] | undefined;
  selectedPrefectures: Response['result'][number]['prefCode'][];
};

export const usePrefectureCheckBoxes = (): IUsePrefectureCheckBoxes => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const isSearchParamNull = searchParams == null;

  const params = new URLSearchParams(
    isSearchParamNull ? [] : Array.from(searchParams.entries())
  );

  const selectedPrefectures = params.getAll('q').map((v) => Number(v));

  const replaceQuery = (target: Response['result'][number]): void => {
    if (!params.has('q')) {
      params.set('q', target.prefCode.toString());
    } else if (params.getAll('q').includes(target.prefCode.toString())) {
      params.delete('q', target.prefCode.toString());
    } else {
      params.append('q', target.prefCode.toString());
    }

    router.push(`${path}?${params.toString()}`);
  };

  const onChange = (target: Response['result'][number]): void => {
    replaceQuery(target);
  };

  const { data } = usePrefectureSWR();

  return {
    onChange,
    prefectures: data?.data.result,
    selectedPrefectures,
  };
};
