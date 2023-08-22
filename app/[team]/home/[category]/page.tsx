// 선택 카테고리 별 페이지
import React from 'react';

import { getBlogArticleList, getBlogMainImg } from '@/api/blogHome';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

const CategoryPage = async ({ params }: { params: { category: string; team: string } }) => {
  const categoryName = decodeURI(params.category);

  const { data } = await getBlogArticleList(params.team, '');

  const articleListData = data.filter(({ articleCategory }) => articleCategory.categoryName === categoryName);

  const {
    data: { thumbnail, description },
  } = await getBlogMainImg(params.team);

  return <ArticleContainer articleListData={articleListData} thumbnail={thumbnail} description={description} />;
};

export default CategoryPage;
