import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';

import ARTICLE_CONTENT from '@/constants/ArticleContent';
import { useGetSingleArticleData, useGetSinglePageleData } from '@/hooks/article';

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
  const singlePageleData = useGetSinglePageleData(team, 0);
  console.log(singleArticleData?.code);
  if (!singleArticleData) return;

  return <ArticleTitle>{singleArticleData.data.title}</ArticleTitle>;
};

export default PublishTitle;

const ArticleTitle = styled.p`
  margin: 2.4rem 0;
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Heading1};
`;
