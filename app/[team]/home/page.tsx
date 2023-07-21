// all 카테고리 페이지
import React from 'react';

import { getArticleList } from '@/api/article';
import { getBlogMainImg } from '@/api/blog';
import { getContent } from '@/api/content';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

const BlogMainPage = async ({ params }: { params: { team: string } }) => {
  const {
    data: { thumbnail, description },
  } = await getBlogMainImg(params.team);
  const { data: articleListData } = await getArticleList(params.team, '');
  const { data: contentInfoData } = await getContent(params.team, articleListData[0].id);
  const IndivContentId = articleListData[0].id;

  return (
    <ArticleContainer
      articleListData={articleListData}
      thumbnail={thumbnail}
      description={description}
      contentInfoData={contentInfoData}
      IndivContentId={IndivContentId}
    />
  );
};

export default BlogMainPage;
