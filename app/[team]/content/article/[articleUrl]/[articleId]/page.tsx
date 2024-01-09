import React from 'react';
import { Metadata } from 'next';

import { getBlogArticleDetail } from '@/api/blogHome';
import BlogMeta from '@/components/blog/BlogMeta';

type Props = {
  params: { team: string; articleUrl: string; articleId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const team = params.team;
  const articleUrl = params.articleUrl;
  const articleId = params.articleId;
  const product = await getBlogArticleDetail(team, Number(articleId));
  if (!product) return null;

  const {
    data: { title, description },
  } = product;

  return {
    alternates: {
      canonical: `/${team}/content/article/${articleUrl}/${articleId}`,
    },
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
