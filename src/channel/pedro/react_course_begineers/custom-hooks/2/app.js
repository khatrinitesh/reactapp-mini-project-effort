import React from 'react';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import {Cat} from './cat';

export default function CustomApp() {

    const client = new QueryClient({
        defaultOptions: {
            queries: {
              staleTime: Infinity,
            },
          },
    })
  return (
    <QueryClientProvider client={client}>
        <Cat/>
    </QueryClientProvider>
  ) 
}




