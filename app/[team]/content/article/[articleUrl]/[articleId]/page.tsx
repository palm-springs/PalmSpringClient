import React from 'react';
import { Metadata } from 'next';

import { getSingleArticleData } from '@/api/article';
import BlogMeta from '@/components/blog/BlogMeta';

export async function generateMetadata({
  params,
}: {
  params: { team: string; articleId: number };
}): Promise<Metadata | null> {
  const team = params.team;
  const articleId = params.articleId;

  const product = await getSingleArticleData(team, Number(articleId));

  if (!product) return null;

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

const ContentPage = () => {
  return <BlogMeta />;
};

export default ContentPage;
