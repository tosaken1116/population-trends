import React, { Suspense } from 'react';

import 'cross-fetch/polyfill';

import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorBoundary } from 'react-error-boundary';

import {
  PopulationChartContainer,
  PopulationChartPresentation,
} from './presentations';
import { PopulationChartErrorPresentation } from './presentations/error';
import { PopulationChartLoadingPresentation } from './presentations/loading';

import { ClientProvider } from '@/components/functional/QueryClient';

describe('Population Chart model Component', () => {
  it('エラーの時にエラーコンポーネントが出る', async () => {
    const PopulationChartContainer: React.FC = () => {
      throw new Error();
    };

    console.error = jest.fn();

    const { queryByTestId } = render(
      <ErrorBoundary fallback={<PopulationChartErrorPresentation />}>
        <Suspense fallback={<PopulationChartLoadingPresentation />}>
          <ClientProvider>
            <PopulationChartContainer />
          </ClientProvider>
        </Suspense>
      </ErrorBoundary>
    );

    await waitFor(() => expect(queryByTestId('error')).toBeVisible());
  });

  it('ローディング中にローディングコンポーネントが出る', async () => {
    const PopulationChartContainer: React.FC = () => {
      throw new Promise(() => {});
    };

    const { queryByTestId } = render(
      <ErrorBoundary fallback={<PopulationChartErrorPresentation />}>
        <Suspense fallback={<PopulationChartLoadingPresentation />}>
          <ClientProvider>
            <PopulationChartContainer />
          </ClientProvider>
        </Suspense>
      </ErrorBoundary>
    );

    await waitFor(() => expect(queryByTestId('loading')).toBeVisible());
  });

  it('データ取得が成功した時にグラフが表示される', () => {
    window.ResizeObserver =
      window.ResizeObserver ||
      jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
      }));

    jest
      .spyOn(HTMLElement.prototype, 'clientHeight', 'get')
      .mockReturnValue(100);

    const { container } = render(
      <PopulationChartPresentation
        data={[
          {
            prefecture: '北海道',
            data: [
              { year: 1960, value: 50 },
              { year: 1965, value: 100 },
              { year: 1970, value: 200 },
            ],
          },
          {
            prefecture: '青森県',
            data: [
              { year: 1960, value: 200 },
              { year: 1965, value: 100 },
              { year: 1970, value: 300 },
            ],
          },
        ]}
      />
    );

    const element = container.firstChild;
    expect(element).toBeDefined();
    expect(element?.firstChild).toHaveClass('recharts-responsive-container');
  });

  it('データがないときに空表示が出る', async () => {
    const { container, queryByTestId } = render(
      <ClientProvider>
        <PopulationChartContainer />
      </ClientProvider>
    );

    jest.mock('./hooks', () => ({
      usePopulationChart: (): { visibleData: null } => ({ visibleData: null }),
    }));

    const element = container.firstChild;
    expect(element).toBeDefined();
    await waitFor(() => expect(queryByTestId('empty')).toBeVisible());
  });
});
