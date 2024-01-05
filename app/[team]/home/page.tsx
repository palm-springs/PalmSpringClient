// all 카테고리 페이지
//여기서 동적 태그 작업
import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';

import { getMetaBlogInfo } from '@/api/blog';
import { getBlogArticleList, getBlogMainImg } from '@/api/blogHome';
import NotFound from '@/app/not-found';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

type Props = {
  params: { team: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// 메타데이터 끼면 에러생김 --> 공문 보고 다시 해보기
export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const team = params.team;
  const product = await getMetaBlogInfo(team);

  if (!product || product.code === 404) return null;

  const blogUrl = product.data.blogUrl;
  const {
    data: { metaName: title, metaDescription: description, metaThumbnail },
  } = product;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: metaThumbnail }],
      type: 'website',
      url: `${blogUrl}.com`,
    },
  };
}

const BlogMainPage = async ({ params }: { params: { team: string } }) => {
  const blogMainRes = await getBlogMainImg(params.team);
  const blogArticleRes = await getBlogArticleList(params.team, '');

  if (!blogMainRes || !blogArticleRes || blogMainRes.code === 404 || blogArticleRes.code === 404) return <NotFound />;

  const {
    data: { thumbnail, description, blogName },
  } = blogMainRes;

  const { data: articleListData } = blogArticleRes;
  return (
    <ArticleContainer
      articleListData={articleListData}
      thumbnail={thumbnail}
      description={description}
      blogName={blogName}
    />
  );
};

export default BlogMainPage;
