'use client';

import { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import { PopulationChartContainer } from './presentations';
import { PopulationChartErrorPresentation } from './presentations/error';
import { PopulationChartLoadingPresentation } from './presentations/loading';

import { ClientProvider } from '@/components/functional/QueryClient';

export const PopulationChart: React.FC = () => (
  <ErrorBoundary fallback={<PopulationChartErrorPresentation />}>
    <Suspense fallback={<PopulationChartLoadingPresentation />}>
      <ClientProvider>
        <PopulationChartContainer />
      </ClientProvider>
    </Suspense>
  </ErrorBoundary>
);
