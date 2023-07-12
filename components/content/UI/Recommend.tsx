'use client';

import React from 'react';
import styled from 'styled-components';

import ArticleBox from './ArticleBox';

const Recommend = () => {
  return (
    <RecommendContainer>
      <RecommendTitle>추천 아티클</RecommendTitle>
      <ArticleBox />
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
