import { useState } from 'react';

import { usePrefectureSWR } from './usePrefectureQuery';

import type { Response } from '@/app/api/v1/prefectures/schema';

type IUsePrefectureCheckBoxes = {
  onChange: (target: Response['result'][number]) => void;
  prefectures: Response['result'] | undefined;
  selectedPrefectures: Response['result'];
};

export const usePrefectureCheckBoxes = (): IUsePrefectureCheckBoxes => {
  const [selectedPrefectures, setSelectedPrefectures] = useState<
    Response['result']
  >([]);

  const onChange = (target: Response['result'][number]): void => {
    setSelectedPrefectures((prev) => {
      if (prev.includes(target)) {
        return prev.filter((prefecture) => prefecture !== target);
      } else {
        return [...prev, target];
      }
    });
  };

  const { data } = usePrefectureSWR();

  return {
    onChange,
    prefectures: data?.data.result,
    selectedPrefectures,
  };
};
