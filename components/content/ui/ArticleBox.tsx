'use client';

import React from 'react';
import styled from 'styled-components';

import Article from '@/components/common/Article';
import { ArticleData } from '@/types/article';

interface ArticleBoxProps {
  recommendArticle: ArticleData[];
}

const ArticleBox = (props: ArticleBoxProps) => {
  const { recommendArticle } = props;

  const ArticleList = recommendArticle.map((article) => {
    return <Article noHover key={article.id} article={article} />;
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
