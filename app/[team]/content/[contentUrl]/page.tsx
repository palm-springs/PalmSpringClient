import React from 'react';

import { getContent } from '@/api/content';
import ContentTemplate from '@/components/content/ContentTemplate';
const ContentPage = async ({ params }: { params: { team: string; contentUrl: number } }) => {
  const { data } = await getContent(params.team, params.contentUrl);
  return <ContentTemplate data={data} />;
};

export default ContentPage;
