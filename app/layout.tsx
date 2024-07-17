import { Metadata } from 'next';

import Layout from '@/components/Layout';

export const metadata: Metadata = {
  metadataBase: new URL('https://palms.blog'),
  title: 'palms | 우리만의 팀블로그 3초만에 만들기',
  description:
    '파운더·기획자·개발자·디자이너·HR·CS·재무담당자, 모든 팀원들이 다같이 만들어나가는 조직의 문화, 지식의 축적, 그리고 제품 이야기.',
  openGraph: {
    title: 'palms | 우리만의 팀블로그 3초만에 만들기',
    description:
      '파운더·기획자·개발자·디자이너·HR·CS·재무담당자, 모든 팀원들이 다같이 만들어나가는 조직의 문화, 지식의 축적, 그리고 제품 이야기.',
    type: 'website',
    url: 'https://palms.blog',
    images: 'https://cdn.palms.blog/duckduck/image/6fcab290-7070-4630-8382-4159b3f984d9.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Layout>{children}</Layout>
    </html>
  );
}
