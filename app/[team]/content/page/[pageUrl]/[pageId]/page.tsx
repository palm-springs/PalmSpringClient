'use client';

import React from 'react';
import { useParams } from 'next/navigation';

// import { getContent } from '@/api/content';
// import { getPageDetail } from '@/api/page';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import PageTemplate from '@/components/content/ui/PageTemplate';
import { useGetPageDetail } from '@/hooks/blog';
// import ContentTemplate from '@/components/content/ContentTemplate';
const ContentPage = async () => {
  const { team, pageId } = useParams();
  //   const { data } = await getContent(params.team, params.pageId);
  // const pageIdNum = String(params.pageId);
  const res = useGetPageDetail(team, pageId);
  // const currentCategoryId = categoryData?.data.find(({ name }) => name === category)?.id;
  if (!res) return <LoadingLottie width={10} height={10} fit />;
  return (
    <PageTemplate
      data={res.data}
      //   title={title} thumbnail={thumbnail} content={content}
    />
  );
};

export default ContentPage;
