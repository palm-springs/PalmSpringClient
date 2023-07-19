// all 카테고리 페이지
import React from 'react';

import { getArticleList } from '@/api/article';
import { getBlogMainImg } from '@/api/blog';
import { getContent } from '@/api/content';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

const BlogMainPage = async () => {
  const { data: articleListData } = await getArticleList('test2', '');
  const { data: contentInfoData } = await getContent('test', 0);

  const {
    data: { thumbnail, description },
  } = await getBlogMainImg('test2');

  return (
    <ArticleContainer
      articleListData={articleListData}
      thumbnail={thumbnail}
      description={description}
      contentInfoData={contentInfoData}
    />
  );
};

export default BlogMainPage;
