import React from 'react';

import { getContent } from '@/api/content';
import ContentTemplate from '@/components/content/ContentTemplate';
const ContentPage = async () => {
  const { data } = await getContent('test', 0);
  return <ContentTemplate data={data} />;
};

export default ContentPage;
