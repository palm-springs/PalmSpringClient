'use client';
import styled from 'styled-components';

import ArticleList from './ArticleList';

const ArticleListStatistic = () => {
  return (
    <TitleContainer>
      <Title>게시글 통계</Title>
      <ArticleList />
    </TitleContainer>
  );
};

export default ArticleListStatistic;

const TitleContainer = styled.div`
  margin: 4.8rem 0 0 5.6rem;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.grey_900};
  ${({ theme }) => theme.fonts.Heading3_Semibold};
`;
