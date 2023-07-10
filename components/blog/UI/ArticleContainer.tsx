'use client';

import React from 'react';
import styled from 'styled-components';

import ArticleList from './ArticleList';
import CategoryBtnBar from './CategoryBtnBar';

const ArticleContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <ArticleWrapper>
      <CategoryBtnBar />
      <ArticleList>{children}</ArticleList>
    </ArticleWrapper>
  );
};

export default ArticleContainer;

const ArticleWrapper = styled.section`
  margin: 6rem 36rem;
`;
