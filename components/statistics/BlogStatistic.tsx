'use client';
import React from 'react';
import styled from 'styled-components';

import { getCurrentDateTime } from '@/utils/getCurrentDateTime';

import VisitantUI from './BlogStatistics/VisitantUI';

const BlogStatistic = () => {
  const currentDate = getCurrentDateTime();

  return (
    <div>
      <TitleContainer>
        <BlogStatisticTitle>블로그 통계</BlogStatisticTitle>
        <StandardTime>{currentDate} 기준</StandardTime>
      </TitleContainer>
      <>
        <VisitantUI statisticValue="visitant" />
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
