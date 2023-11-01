// all 카테고리 페이지
//여기서 동적 태그 작업
import React from 'react';
import Head from 'next/head';

import { getBlogInfo } from '@/api/blog';
import { getBlogArticleList, getBlogMainImg } from '@/api/blogHome';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

const BlogMainPage = async ({ params }: { params: { team: string } }) => {
  const {
    data: { thumbnail, description },
  } = await getBlogMainImg(params.team);
  const { data: articleListData } = await getBlogArticleList(params.team, '');
  const {
    data: { metaThumbnail, metaName, metaDescription },
  } = await getBlogInfo(params.team);

  return (
    <>
      <Head>
        <title>{metaName}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaName} />
        <meta property="og:image" content={metaThumbnail} />
      </Head>
      <ArticleContainer articleListData={articleListData} thumbnail={thumbnail} description={description} />
    </>
  );
};

export default BlogMainPage;
