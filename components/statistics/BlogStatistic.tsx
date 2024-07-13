'use client';
import React from 'react';
import styled from 'styled-components';

import VisitantUI from './BlogStatistics/VisitantUI';

const BlogStatistic = () => {
  const getCurrentDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  const date = getCurrentDate();
  return (
    <div>
      <TitleContainer>
        <BlogStatisticTitle>블로그 통계</BlogStatisticTitle>
        <StandardTime>{date} 기준</StandardTime>
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
