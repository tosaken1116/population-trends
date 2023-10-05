import 'cross-fetch/polyfill';

import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import { useCategoryTab } from './hooks';

jest.mock('next/navigation');

describe('Category Tab model Component', () => {
  it('クエリパラメータにタブが設定されている場合それをデフォルト値にする', () => {
    (usePathname as jest.Mock).mockReturnValue('/test-path');

    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });

    const mockSearchParams = new URLSearchParams();
    mockSearchParams.set('s', '既存のタブ');
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);

    const { result } = renderHook(() => useCategoryTab());

    expect(result.current.selectedTab).toBe('既存のタブ');
  });
});
