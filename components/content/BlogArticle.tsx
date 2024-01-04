'use client';

import React from 'react';
import { Metadata } from 'next';
import { useParams } from 'next/navigation';

import { getSingleArticleData } from '@/api/article';
import { getBlogArticleDetail, getBlogArticleList } from '@/api/blogHome';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import ArticleTemplate from '@/components/content/ui/ArticleTemplate';
import { useGetBlogArticleDetail } from '@/hooks/blogHome';

const BlogArticleContent = () => {
  const { team, articleId } = useParams();

  const res = useGetBlogArticleDetail(team, Number(articleId));

  if (!res) return <LoadingLottie width={10} height={10} fit />;

  return <ArticleTemplate data={res.data} />;
};

export default BlogArticleContent;
