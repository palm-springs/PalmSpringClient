'use client';

import React from 'react';
import styled from 'styled-components';

import Article from './Article';

const ArticleList = () => {
  return (
    <ArticleListContainer>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </ArticleListContainer>
  );
};

export default ArticleList;

const ArticleListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-bottom: 2.4rem;
`;
