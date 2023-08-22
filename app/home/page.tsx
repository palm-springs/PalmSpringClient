// all 카테고리 페이지
import React from 'react';

import { getBlogArticleList, getBlogMainImg } from '@/api/blogHome';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

const BlogMainPage = async () => {
  const {
    data: { thumbnail, description },
  } = await getBlogMainImg();
  const { data: articleListData } = await getBlogArticleList('');

  return <ArticleContainer articleListData={articleListData} thumbnail={thumbnail} description={description} />;
};

export default BlogMainPage;
