'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetArticleList } from '@/hooks/article';

import ArticleBox from './ArticleBox';

const Recommend = () => {
  const { team } = useParams();

  const MOBILE = useMediaQuery({
    query: '(min-width : 375px) and (max-width:768px)',
  });

  const data = useGetArticleList(team, '');
  const recommendArticle = data?.data.slice(0, 3);
  if (!recommendArticle) return <LoadingLottie width={5} height={5} fit />;

  if (MOBILE)
    return (
      <RecommendContainer className="mobile">
        <RecommendTitle className="mobile">추천 아티클</RecommendTitle>
        <ArticleBox recommendArticle={recommendArticle} />
      </RecommendContainer>
    );
  else
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

  &.mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
    padding: 0 2.4rem;
    width: 100vw;
  }
`;

const RecommendTitle = styled.div`
  ${({ theme }) => theme.fonts.Heading3_Semibold};

  display: flex;
  justify-content: flex-start;
  width: 100vw;

  color: ${({ theme }) => theme.colors.grey_900};

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Markdown_H2};

    margin-bottom: 2.2rem;
    padding-left: 2.4rem;
  }
`;
