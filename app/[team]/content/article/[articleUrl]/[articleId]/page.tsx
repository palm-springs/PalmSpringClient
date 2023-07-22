import React from 'react';

import { getContent } from '@/api/content';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
// import ContentTemplate from '@/components/content/ContentTemplate';
import ArticleTemplate from '@/components/content/ui/ArticleTemplate';
const ContentPage = async ({ params }: { params: { team: string; articleUrl: string; articleId: number } }) => {
  // const { data } = await getContent(params.team, params.articleId);
  // const currentCategoryId = categoryData?.data.find(({ name }) => name === category)?.id;
  const { data } = await getContent(params.team, params.articleId);

  if (!data) return <LoadingLottie width={10} height={10} fit />;
  return <ArticleTemplate data={data} />;
};

export default ContentPage;
