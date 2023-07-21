import React from 'react';

import { getContent } from '@/api/content';
import ContentTemplate from '@/components/content/ContentTemplate';
const ContentPage = async ({ params }: { params: { team: string } }) => {
  const { data } = await getContent(params.team, 1);
  return <ContentTemplate data={data} />;
};

export default ContentPage;
