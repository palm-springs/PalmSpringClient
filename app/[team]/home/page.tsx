// all 카테고리 페이지
//여기서 동적 태그 작업
import React from 'react';
import { Metadata } from 'next';
import { Head } from 'next/document';

import { getBlogInfo } from '@/api/blog';
import { getBlogArticleList, getBlogMainImg } from '@/api/blogHome';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

// 메타데이터 끼면 에러생김 --> 공문 보고 다시 해보기
export const metadata: Metadata = {
  openGraph: {
    title: '보이나',
    description: '여기여기여기',
    type: 'website',
  },
};
const BlogMainPage = async ({ params }: { params: { team: string } }) => {
  const {
    data: { thumbnail, description },
  } = await getBlogMainImg(params.team);
  const { data: articleListData } = await getBlogArticleList(params.team, '');

  return (
    <>
      <ArticleContainer articleListData={articleListData} thumbnail={thumbnail} description={description} />
    </>
  );
};

export default BlogMainPage;
