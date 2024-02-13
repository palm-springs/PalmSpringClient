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

type ContentPageProps = {
  params: { team: string; articleUrl: string; articleId: string };
};

const ContentPage = async ({ params }: ContentPageProps) => {
  const team = params.team;
  const articleId = params.articleId;
  const product = await getBlogArticleDetail(team, Number(articleId));

  if (!product) return null;

  return <BlogMeta product={product.data} />;
};

export default ContentPage;
