'use client';

import React from 'react';
import styled from 'styled-components';

import ArticleDetail from './ArticleDetail';
import ArticleImg from './ArticleImg';

const Article = () => {
  return (
    <ArticleContainer>
      <ArticleDetail />
      <ArticleImg />
    </ArticleContainer>
  );
};

export default Article;

const ArticleContainer = styled.div`
  display: flex;
`;
