// 선택 카테고리 별 페이지
import React from 'react';

import { getArticleList } from '@/api/article';
import { getBlogMainImg } from '@/api/blog';
import { getContent } from '@/api/content';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const { data: categoryArticleList } = await getArticleList('test2', params.categoryId);
  const { data: contentInfoData } = await getContent('test', 0);

  const {
    data: { thumbnail, description },
  } = await getBlogMainImg('test2');

  return (
    <ArticleContainer
      articleListData={categoryArticleList}
      thumbnail={thumbnail}
      description={description}
      contentInfoData={contentInfoData}
    />
  );
};

export default CategoryPage;
