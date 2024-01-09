import { Metadata } from 'next';

import Layout from '@/components/Layout';

export const metadata: Metadata = {
  metadataBase: new URL('https://palms.blog'),
  title: 'palmspring',
  description: '성장하는 조직을 위한 팀 블로그 빌더',
  openGraph: {
    title: 'palmspring | 팜스프링',
    description: '성장하는 조직을 위한 팀 블로그 빌더',
    type: 'website',
    url: 'https://palm-spring-client-git-feat-276metadataapi-palm-spring-client.vercel.app',
    images: 'https://user-images.githubusercontent.com/97084864/273285983-041a2713-43c1-4d30-9195-6fc212838957.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Layout>{children}</Layout>
    </html>
  );
}
