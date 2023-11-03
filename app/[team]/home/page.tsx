// all 카테고리 페이지
import React from 'react';

import { getBlogArticleList, getBlogMainImg } from '@/api/blogHome';
import NotFound from '@/app/not-found';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

const BlogMainPage = async ({ params }: { params: { team: string } }) => {
  const blogMainRes = await getBlogMainImg(params.team);
  const blogArticleRes = await getBlogArticleList(params.team, '');

  if (!blogMainRes || !blogArticleRes) return <NotFound />;

  const {
    data: { thumbnail, description },
  } = blogMainRes;

  const { data: articleListData } = blogArticleRes;

  return <ArticleContainer articleListData={articleListData} thumbnail={thumbnail} description={description} />;
};

export default BlogMainPage;
