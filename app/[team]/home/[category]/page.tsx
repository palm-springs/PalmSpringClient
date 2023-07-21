// 선택 카테고리 별 페이지
import React from 'react';

import { getArticleList } from '@/api/article';
import { getBlogMainImg } from '@/api/blog';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

const CategoryPage = async ({ params }: { params: { category: string; team: string } }) => {
  const categoryName = decodeURI(params.category);

  const { data } = await getArticleList(params.team, '');

  const articleListData = data.filter(({ articleCategory }) => articleCategory.categoryName === categoryName);

  const {
    data: { thumbnail, description },
  } = await getBlogMainImg(params.team);

  return <ArticleContainer articleListData={articleListData} thumbnail={thumbnail} description={description} />;
};

export default CategoryPage;
