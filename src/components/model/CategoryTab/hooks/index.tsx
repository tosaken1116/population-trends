import { useMemo } from 'react';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const DEFAULT_TAB = '総人口';

type IUseCategoryTab = {
  onTabChange: (title: string) => void;
  selectedTab: string;
};

export const useCategoryTab = (): IUseCategoryTab => {
  const router = useRouter();
  const path = usePathname();

  const searchParams = useSearchParams();
  const isSearchParamNull = searchParams == null;

  const params = useMemo(
    () =>
      new URLSearchParams(
        isSearchParamNull ? [] : Array.from(searchParams.entries())
      ),
    [isSearchParamNull, searchParams]
  );

  const selectedTab = useMemo(() => params.get('s'), [params]);

  if (selectedTab == null) {
    params.set('s', '総人口');
  }

  const onTabChange = (title: string): void => {
    params.set('s', title);

    router.push(`${path}?${params.toString()}`);
  };

  return { selectedTab: selectedTab ?? DEFAULT_TAB, onTabChange };
};
