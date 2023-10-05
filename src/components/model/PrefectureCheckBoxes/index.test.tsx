import React, { Suspense } from 'react';

import 'cross-fetch/polyfill';

import { render, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom';

import { PrefectureCheckBoxesPresentation } from './presentations';
import { PrefectureCheckBoxesErrorPresentation } from './presentations/error';
import { PrefectureCheckBoxesLoadingPresentation } from './presentations/loading';

import { ClientProvider } from '@/components/functional/QueryClient';
import { ErrorBoundary } from '@/libs/errorBoundary';

describe('PrefectureCheckBoxes model Component', () => {
  it('エラーの時にエラーコンポーネントが出る', async () => {
    const PrefectureCheckBoxesContainer: React.FC = () => {
      throw new Error();
    };

    console.error = jest.fn();

    const { queryByTestId } = render(
      <ErrorBoundary fallback={<PrefectureCheckBoxesErrorPresentation />}>
        <Suspense fallback={<PrefectureCheckBoxesLoadingPresentation />}>
          <ClientProvider>
            <PrefectureCheckBoxesContainer />
          </ClientProvider>
        </Suspense>
      </ErrorBoundary>
    );

    await waitFor(() => expect(queryByTestId('error')).toBeVisible());
  });

  it('ローディング中にローディングコンポーネントが出る', async () => {
    const PrefectureCheckBoxesContainer: React.FC = () => {
      throw new Promise(() => {});
    };

    const { queryByTestId } = render(
      <ErrorBoundary fallback={<PrefectureCheckBoxesErrorPresentation />}>
        <Suspense fallback={<PrefectureCheckBoxesLoadingPresentation />}>
          <ClientProvider>
            <PrefectureCheckBoxesContainer />
          </ClientProvider>
        </Suspense>
      </ErrorBoundary>
    );

    await waitFor(() => expect(queryByTestId('loading')).toBeVisible());
  });

  it('データ取得が成功した時にチェックボックスが表示される', () => {
    const { container } = render(
      <PrefectureCheckBoxesPresentation
        selectedPrefectures={[]}
        prefectures={[
          { prefCode: 1, prefName: '北海道' },
          { prefCode: 2, prefName: '青森県' },
          { prefCode: 3, prefName: '福島県' },
        ]}
        onChange={(): void => {}}
      />
    );

    const element = container.firstChild;
    expect(element).toBeDefined();
    expect(element).toHaveTextContent('北海道');
    expect(element).toHaveTextContent('青森県');
    expect(element).toHaveTextContent('福島県');
  });
});
