// 선택 카테고리 별 페이지
import React from 'react';

import { getBlogArticleList, getBlogMainImg } from '@/api/blogHome';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

const CategoryPage = async ({ params }: { params: { team: string } }) => {
  const { data } = await getBlogArticleList(params.team, '');

  const {
    data: { thumbnail, description, blogName },
  } = await getBlogMainImg(params.team);

  return (
    <ArticleContainer articleListData={data} thumbnail={thumbnail} description={description} blogName={blogName} />
  );
};

export default CategoryPage;
