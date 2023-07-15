'use client';

import React from 'react';
import styled from 'styled-components';

import { ARTICLE_LIST } from '@/constants/articleList';

import Article from './Article';

const ArticleList = () => {
  return (
    <ArticleListContainer>
      {ARTICLE_LIST.map((eachItem, index) => (
        <Article
          key={index}
          categoryArticleResponseDto={eachItem.categoryArticleResponseDto}
          title={eachItem.title}
          description={eachItem.description}
          memberName={eachItem.memberName}
          createdAt={eachItem.createdAt}
          thumbnail={eachItem.thumbnail}
        />
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
