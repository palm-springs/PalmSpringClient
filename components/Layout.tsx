'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Inter } from 'next/font/google';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import StyledComponentsRegistry from '@/utils/lib/registry';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
          cacheTime: 0,
        },
      },
    }),
  );

  return (
    <body className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              {children}
              <div id="modal-root"></div>
            </ThemeProvider>
          </StyledComponentsRegistry>
        </RecoilRoot>
      </QueryClientProvider>
    </body>
  );
};

export default Layout;
