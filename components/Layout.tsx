'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { LandingStyle } from '@/styles/LandingStyle';
import theme from '@/styles/theme';
import StyledComponentsRegistry from '@/utils/lib/registry';

import Analytics from './Analytics';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
        },
      },
    }),
  );

  const pathName = usePathname();

  return (
    <body className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
              {pathName === '/' ? <LandingStyle /> : <GlobalStyle />}
              {children}
              {process.env.NODE_ENV !== 'development' && <Analytics />}
              <div id="modal-root"></div>
            </ThemeProvider>
          </StyledComponentsRegistry>
        </RecoilRoot>
      </QueryClientProvider>
    </body>
  );
};

export default Layout;
