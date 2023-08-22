'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetArticleList } from '@/hooks/editor';

import ArticleBox from './ArticleBox';

const Recommend = () => {
  const { team } = useParams();

  const data = useGetArticleList(team, '');
  const recommendArticle = data?.data.slice(0, 3);
  if (!recommendArticle) return <LoadingLottie width={5} height={5} fit />;
  return (
    <RecommendContainer>
      <RecommendTitle>추천 아티클</RecommendTitle>
      <ArticleBox recommendArticle={recommendArticle} />
    </RecommendContainer>
  );
};

export default Recommend;

const RecommendContainer = styled.section`
  margin-bottom: 5.8rem;
  width: 100%;
`;

const RecommendTitle = styled.div`
  ${({ theme }) => theme.fonts.Heading3_Semibold};
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.grey_900};
`;
