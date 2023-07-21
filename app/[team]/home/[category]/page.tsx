// 선택 카테고리 별 페이지
import React from 'react';

import { getArticleList } from '@/api/article';
import { getBlogMainImg } from '@/api/blog';
import { getContent } from '@/api/content';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

const CategoryPage = async ({ params }: { params: { category: string; team: string } }) => {
  const {
    data: { thumbnail, description },
  } = await getBlogMainImg(params.team);
  const { data: categoryArticleList } = await getArticleList(params.team, params.category);
  const { data: contentInfoData } = await getContent(params.team, categoryArticleList[0].id);
  const IndivContentId = categoryArticleList[0].id;
  return (
    <ArticleContainer
      articleListData={categoryArticleList}
      thumbnail={thumbnail}
      description={description}
      contentInfoData={contentInfoData}
      IndivContentId={IndivContentId}
    />
  );
};

export default CategoryPage;
