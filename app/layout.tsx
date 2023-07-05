'use client';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/GlobalStyle';
import theme from '@/styles/theme';
import StyledComponentsRegistry from '@/utils/lib/registry';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 0,
        },
      },
    }),
  );

  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              {children}
            </ThemeProvider>
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
