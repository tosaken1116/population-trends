'use client';

import { Suspense } from 'react';

import { PopulationChartContainer } from './presentations';
import { PopulationChartErrorPresentation } from './presentations/error';
import { PopulationChartLoadingPresentation } from './presentations/loading';

import { ClientProvider } from '@/components/functional/QueryClient';
import { ErrorBoundary } from '@/libs/errorBoundary';

export const PopulationChart: React.FC = () => (
  <ErrorBoundary fallback={<PopulationChartErrorPresentation />}>
    <Suspense fallback={<PopulationChartLoadingPresentation />}>
      <ClientProvider>
        <PopulationChartContainer />
      </ClientProvider>
    </Suspense>
  </ErrorBoundary>
);
