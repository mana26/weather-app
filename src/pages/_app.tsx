import React from 'react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Create a new QueryClient instance
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Wrap your app with QueryClientProvider and provide the queryClient instance
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools /> {/* Optional: Devtools for debugging */}
    </QueryClientProvider>
  );
}

export default MyApp;