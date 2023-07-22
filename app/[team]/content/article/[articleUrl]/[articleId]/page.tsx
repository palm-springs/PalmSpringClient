'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import ArticleTemplate from '@/components/content/ui/ArticleTemplate';
import { useGetContent } from '@/hooks/blog';
const ContentPage = () => {
  const { team, articleId } = useParams();

  const res = useGetContent(team, Number(articleId));

  if (!res) return <LoadingLottie width={10} height={10} fit />;

  return <ArticleTemplate data={res.data} />;
};

export default ContentPage;
