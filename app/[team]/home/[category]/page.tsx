// 선택 카테고리 별 페이지
import React from 'react';
import { Metadata } from 'next';

import { getSingleArticleData } from '@/api/article';
import { getBlogInfo, getMetaBlogInfo } from '@/api/blog';
import { getBlogArticleList, getBlogMainImg } from '@/api/blogHome';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

type Props = {
  params: { team: string; articleId: number };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const team = params.team;
  const articleId = params.articleId;
  const product = await getSingleArticleData(team, articleId);

  if (!product || product.code === 404) return null;

  // const blogUrl = product.data.blogUrl;
  const {
    data: { title, description },
  } = product;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

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
