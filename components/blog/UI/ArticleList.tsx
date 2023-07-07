'use client';

import React from 'react';
import styled from 'styled-components';

import Article from '../Article';

const ArticleList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ArticleListContainer>
      <Article />
      <Article />
      <Article />
      <Article />
      {children}
    </ArticleListContainer>
  );
};

export default ArticleList;

const ArticleListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-top: 5.8rem;
`;
