// all 카테고리 페이지
//여기서 동적 태그 작업
import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { Head } from 'next/document';
import { useRecoilValue } from 'recoil';

import { getMetaBlogInfo } from '@/api/blog';
import { getBlogArticleList, getBlogMainImg } from '@/api/blogHome';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';
// import { useGetBlogInfo } from '@/hooks/blog';

type Props = {
  params: { team: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// 메타데이터 끼면 에러생김 --> 공문 보고 다시 해보기
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const team = params.team;
  // const product = await getBlogInfo(team);
  const product = await getMetaBlogInfo(team);
  const blogUrl = product.data.blogUrl;

  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: product.data.metaName,
    description: product.data.metaDescription,
    openGraph: {
      title: product.data.metaName,
      description: product.data.metaDescription,
      type: 'website',
      url: `https://palm-spring-client-git-feat-276metadataapi-palm-spring-client.vercel.app/${blogUrl}/home`,
      images: [product.data.metaThumbnail, ...previousImages],
    },
  };
}
// export const metadata: Metadata = {
//   openGraph: {
//     title: '보이나',
//     description: '여기여기여기',
//     type: 'website',
//     url: 'https://palm-spring-client-git-feat-276metadataapi-palm-spring-client.vercel.app/bongzzi/home',
//   },
// };
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
