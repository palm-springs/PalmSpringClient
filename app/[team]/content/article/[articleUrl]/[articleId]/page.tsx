'use client';

import React from 'react';
import { Metadata } from 'next';
import { useParams } from 'next/navigation';

import { getSingleArticleData } from '@/api/article';
import { getBlogArticleDetail, getBlogArticleList } from '@/api/blogHome';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import ArticleTemplate from '@/components/content/ui/ArticleTemplate';
import { useGetBlogArticleDetail } from '@/hooks/blogHome';

//build 안됨 이유: use client 제거 해야함 -> 서버 컴포넌트에서만 메타 태그 가능함
// export const metadata: Metadata = {
//   title: '야야',
//   description: '왜안되는데 개짱나아아아아ㅏ아앙',
//   openGraph: {
//     title: 'ㅁ메롱메롱멩로올올모렝로ㅔㅇㅁ',
//     description: '아로오오오오오오ㅗㅇ',
//   },
// };

// type Props = {
//   params: { team: string; articleId: number };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
//   const team = params.team;
//   const articleId = params.articleId;
//   const product = await getBlogArticleDetail(team, articleId);

//   if (!product || product.code === 404) return null;

//   // const blogUrl = product.data.blogUrl;
//   const {
//     data: { title, content: description },
//   } = product;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: 'website',
//     },
//   };
// }

const ContentPage = () => {
  const { team, articleId } = useParams();

  const res = useGetBlogArticleDetail(team, Number(articleId));

  if (!res) return <LoadingLottie width={10} height={10} fit />;

  return <ArticleTemplate data={res.data} />;
};

export default ContentPage;
