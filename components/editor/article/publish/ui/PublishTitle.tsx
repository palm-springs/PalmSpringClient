'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import router from 'next/router';
import styled from 'styled-components';

// import ARTICLE_CONTENT from '@/constants/ArticleContent';
import { useGetSingleArticleData, useGetSinglePageData } from '@/hooks/article';

interface PublishTitleprops {
  pageType: string;
  blogUrl: string;
  articleId: number;
}

//정보 get 해야함

const PublishTitle = (props: PublishTitleprops) => {
  const { team } = useParams();
  const { pageType, blogUrl, articleId } = props;
  const singleArticleData = useGetSingleArticleData(team, 1);
  const singlePageData = useGetSinglePageData(team, '');
  if (!singleArticleData) return;
  if (!singlePageData) return;

  switch (pageType) {
    case `article`:
      return (
        <>
          <ArticleTitle>{singleArticleData.data.title}</ArticleTitle>;
        </>
      );
    case `page`:
      return (
        <>
          <ArticleTitle>{singlePageData.data.title}</ArticleTitle>;
        </>
      );
    default:
      router.push('/not-found');
  }
};

export default PublishTitle;

const ArticleTitle = styled.p`
  margin: 2.4rem 0;
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Heading1};
`;
