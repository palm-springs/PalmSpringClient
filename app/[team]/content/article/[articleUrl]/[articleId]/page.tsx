// 'use client';

import React from 'react';
import { Metadata } from 'next';

import { getBlogArticleDetail } from '@/api/blogHome';
// import { useParams } from 'next/navigation';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import BlogArticleContent from '@/components/content/BlogArticle';
import ArticleTemplate from '@/components/content/ui/ArticleTemplate';
// import { useGetBlogArticleDetail } from '@/hooks/blogHome';

export const metadata: Metadata = {
  title: '야야',
  description: '왜안되는데 개짱나아아아아ㅏ아앙',
  openGraph: {
    title: 'ㅁ메롱메롱멩로올올모렝로ㅔㅇㅁ',
    description: '아로오오오오오오ㅗㅇ',
  },
};

const ContentPage = async () => {
  return <BlogArticleContent />;
};

export default ContentPage;
