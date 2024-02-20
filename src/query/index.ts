import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: 0,
      gcTime: Infinity,
      // useErrorBoundary: true,
    },
    mutations: {},
  },
});
