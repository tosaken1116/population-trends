import { Suspense } from 'react';

import { PrefectureCheckBoxesContainer } from './presentations';
import { PrefectureCheckBoxesErrorPresentation } from './presentations/error';
import { PrefectureCheckBoxesLoadingPresentation } from './presentations/loading';

import { ClientProvider } from '@/components/functional/QueryClient';
import { ErrorBoundary } from '@/libs/errorBoundary';

export const PrefectureCheckBoxes: React.FC = () => (
  <ErrorBoundary fallback={<PrefectureCheckBoxesErrorPresentation />}>
    <Suspense fallback={<PrefectureCheckBoxesLoadingPresentation />}>
      <ClientProvider>
        <PrefectureCheckBoxesContainer />
      </ClientProvider>
    </Suspense>
  </ErrorBoundary>
);
