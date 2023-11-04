// all 카테고리 페이지
//여기서 동적 태그 작업
import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';

import { getMetaBlogInfo } from '@/api/blog';
import { getBlogArticleList, getBlogMainImg } from '@/api/blogHome';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

type Props = {
  params: { team: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// 메타데이터 끼면 에러생김 --> 공문 보고 다시 해보기
export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const team = params.team;
  const product = await getMetaBlogInfo(team);
  const blogUrl = product.data.blogUrl;

  if (!product) return null;

  const {
    data: { metaName: title, metaDescription: description },
  } = product;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${blogUrl}.com`,
    },
  };
}

const BlogMainPage = async ({ params }: { params: { team: string } }) => {
  const {
    data: { thumbnail, description },
  } = await getBlogMainImg(params.team);
  const { data: articleListData } = await getBlogArticleList(params.team, '');
  return <ArticleContainer articleListData={articleListData} thumbnail={thumbnail} description={description} />;
};

export default BlogMainPage;
