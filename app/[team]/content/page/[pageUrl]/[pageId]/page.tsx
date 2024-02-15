import React from 'react';

import { getBlogPageDetail } from '@/api/blogHome';
import PageTemplate from '@/components/content/ui/PageTemplate';

type Props = {
  params: { team: string; pageUrl: string };
};

const ContentPage = async ({ params }: Props) => {
  const blogPageDetailRes = await getBlogPageDetail(params.team, params.pageUrl);
  if (!blogPageDetailRes) return null;

  return <PageTemplate data={blogPageDetailRes.data} />;
};

export default ContentPage;
