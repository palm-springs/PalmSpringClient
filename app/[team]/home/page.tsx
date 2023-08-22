// all 카테고리 페이지
import React from 'react';

import { getBlogArticleList, getBlogMainImg } from '@/api/blogHome';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

const BlogMainPage = async ({ params }: { params: { team: string } }) => {
  const {
    data: { thumbnail, description },
  } = await getBlogMainImg(params.team);
  const { data: articleListData } = await getBlogArticleList(params.team, '');

  return <ArticleContainer articleListData={articleListData} thumbnail={thumbnail} description={description} />;
};

export default BlogMainPage;
