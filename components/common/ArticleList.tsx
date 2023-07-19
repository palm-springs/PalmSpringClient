'use client';

import React from 'react';
import styled from 'styled-components';

import { ArticleData } from '@/types/article';

import Article from './Article';

interface ArticleListProp {
  articleList: ArticleData[];
}

const ArticleList = (prop: ArticleListProp) => {
  const { articleList } = prop;
  return (
    <ArticleListContainer>
      {articleList.map((article) => (
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
