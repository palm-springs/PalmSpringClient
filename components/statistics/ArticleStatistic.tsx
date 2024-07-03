'use client';
import styled from 'styled-components';

import ArticleList from './ArticleList';

const ArticleStatistic = () => {
  return (
    <TitleContainer>
      <ArticleStatisticTitle>게시글 통계</ArticleStatisticTitle>
      <ArticleList />
    </TitleContainer>
  );
};

export default ArticleStatistic;

const TitleContainer = styled.div`
  margin: 4.8rem 0 0 5.6rem;
`;

const ArticleStatisticTitle = styled.h3`
  color: ${({ theme }) => theme.colors.grey_900};
  ${({ theme }) => theme.fonts.Heading3_Semibold};
`;
