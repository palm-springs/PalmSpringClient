// 선택 카테고리 별 페이지
import React from 'react';
import { Metadata } from 'next';

import { getMetaBlogInfo } from '@/api/blog';
import { getBlogArticleDetail, getBlogArticleList, getBlogCategoryList, getBlogMainImg } from '@/api/blogHome';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

type Props = {
  params: { team: string; category: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const team = params.team;
  const category = decodeURI(params.category);
  const product = await getMetaBlogInfo(team);

  if (!product) return null;

  const {
    data: { metaName: title, metaDescription: description },
  } = product;

  return {
    alternates: {
      canonical: `/${team}/${category}`,
    },
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${team}.palms.blog`,
    },
  };
}

const CategoryPage = async ({ params }: { params: { team: string } }) => {
  const { data: articleData } = await getBlogArticleList(params.team, '');
  const {
    data: { thumbnail, description, blogName },
  } = await getBlogMainImg(params.team);

  const filteredCategoryList = await getBlogCategoryList(params.team);

  const IndivContentId = articleData[0].id;

  const singleArticleDetail = await getBlogArticleDetail(params.team, IndivContentId);

  return (
    <ArticleContainer
      articleListData={articleData}
      thumbnail={thumbnail}
      description={description}
      blogName={blogName}
      filteredCategoryList={filteredCategoryList}
      singleArticleDetail={singleArticleDetail}
    />
  );
};

export default CategoryPage;
