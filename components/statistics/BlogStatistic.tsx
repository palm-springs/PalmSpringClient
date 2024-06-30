'use client';
import React from 'react';

import VisitantUI from './BlogStatistics/VisitantUI';
import styled from 'styled-components';

const BlogStatistic = () => {
  return (
    <div>
      <TitleContainer>
        <BlogStatisticTitle>블로그 통계</BlogStatisticTitle>
        <StandardTime>2024.08.25 기준</StandardTime>
      </TitleContainer>
      <>
        <VisitantUI />
      </>
    </div>
  );
};

export default BlogStatistic;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0 0 5.6rem;
`;

const BlogStatisticTitle = styled.h3`
  color: ${({ theme }) => theme.colors.grey_900};
  ${({ theme }) => theme.fonts.Heading3_Semibold};
`;

const StandardTime = styled.p`
  margin-left: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Caption};
`;
