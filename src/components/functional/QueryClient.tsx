import { type ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type Props = {
  children: ReactNode | ReactNode[];
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { suspense: true, useErrorBoundary: true, retry: 0 },
  },
});

export const ClientProvider: React.FC<Props> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
