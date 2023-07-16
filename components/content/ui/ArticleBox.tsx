'use client';

import React from 'react';
import styled from 'styled-components';

import Article from '@/components/common/Article';
import { ARTICLE_LIST } from '@/constants/articleList';
import { ArticleListProps } from '@/types/articleList';

const ArticleBox = () => {
  const RECOMMEND_ARTICLE_LIST: ArticleData[] = ARTICLE_LIST.slice(0, 3);

  const ArticleList = RECOMMEND_ARTICLE_LIST.map((eachItem, index) => {
    return (
      <Article
        noHover
        key={index}
        categoryArticleResponseDto={eachItem.categoryArticleResponseDto}
        title={eachItem.title}
        description={eachItem.description}
        memberName={eachItem.memberName}
        createdAt={eachItem.createdAt}
        thumbnail={eachItem.thumbnail}
      />
    );
  });

  return <ArticleBoxContainer>{ArticleList}</ArticleBoxContainer>;
};

export default ArticleBox;

const ArticleBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding-top: 2.4rem;
  width: 100%;
`;
