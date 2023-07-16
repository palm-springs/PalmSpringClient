'use client';

import React from 'react';
import styled from 'styled-components';

import { ARTICLE_LIST } from '@/constants/articleList';

import Article from './Article';

const ArticleList = () => {
  return (
    <ArticleListContainer>
      {ARTICLE_LIST.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </ArticleListContainer>
  );
};

export default ArticleList;

const ArticleListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 72rem;
`;
