import React from 'react';

// import { getContent } from '@/api/content';
import { getPageDetail } from '@/api/page';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import PageTemplate from '@/components/content/ui/PageTemplate';
// import ContentTemplate from '@/components/content/ContentTemplate';
const ContentPage = async ({ params }: { params: { team: string; pageUrl: string; pageId: number } }) => {
  //   const { data } = await getContent(params.team, params.pageId);
  const pageIdNum = String(params.pageId);
  const { data } = await getPageDetail(params.team, pageIdNum);
  // const currentCategoryId = categoryData?.data.find(({ name }) => name === category)?.id;
  if (!data) return <LoadingLottie width={10} height={10} fit />;
  return (
    <PageTemplate
      data={data}
      //   title={title} thumbnail={thumbnail} content={content}
    />
  );
};

export default ContentPage;
