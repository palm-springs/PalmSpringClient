'use client';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Inter } from 'next/font/google';
import { RecoilRoot } from 'recoil';
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
          retry: 1,
        },
      },
    }),
  );

  return (
    <html lang="ko">
      <head>
        {/* <title>palmspring</title>
        <meta name="description" content="성장하는 조직을 위한 팀 블로그 빌더" />

        <meta property="og:title" content="palmspring | 팜스프링" />
        <meta
          property="og:url"
          content="https://palm-spring-client-git-feat-276metadataapi-palm-spring-client.vercel.app"
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/97084864/273285983-041a2713-43c1-4d30-9195-6fc212838957.png"
        />
        <meta property="og:description" content="성장하는 조직을 위한 팀 블로그 빌더" />

        <link
          rel="stylesheet preload"
          as="style"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        /> */}
      </head>
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
    </html>
  );
}
