import React from 'react';

import { getBlogPageDetail } from '@/api/blogHome';
import PageTemplate from '@/components/content/ui/PageTemplate';

type Props = {
  params: { team: string; pageUrl: string };
};

const ContentPage = async ({ params }: Props) => {
  const team = params.team;
  const pageUrl = params.pageUrl;

  const res = await getBlogPageDetail(team, pageUrl);
  if (!res) return null;

  return <PageTemplate data={res.data} />;
};

export default ContentPage;
