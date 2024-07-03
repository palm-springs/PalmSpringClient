'use client';
import styled from 'styled-components';

import ArticleField from './ArticleField';
import ArticleItem from './ArticleItem';

const ArticleList = () => {
  return (
    <ArticleListContainer>
      <ArticleField />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
    </ArticleListContainer>
  );
};

export default ArticleList;

const ArticleListContainer = styled.div`
  margin-top: 3.5rem;
  padding-right: 5.6rem;
  padding-bottom: 3.5rem;
`;
