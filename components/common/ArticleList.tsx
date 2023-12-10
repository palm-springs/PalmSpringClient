'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';
import { ArticleData } from '@/types/article';

import Article from './Article';
import MobileArticle from './MobileArticle';

interface ArticleListProp {
  articleList: ArticleData[];
}

const ArticleList = (prop: ArticleListProp) => {
  const { articleList } = prop;
  const { category } = useParams();

  const categoryName = decodeURI(category);

  const FilteredArticleList = articleList.filter(
    ({ articleCategory }) => articleCategory.categoryName === categoryName,
  );

  const MOBILE = useCheckMobile();

  if (MOBILE)
    return (
      <ArticleListContainer className="mobile">
        {articleList.map((article) => (
          <MobileArticle key={article.id} article={article} />
        ))}
      </ArticleListContainer>
    );
  else
    return (
      <ArticleListContainer>
        {category
          ? FilteredArticleList.map((article) => <Article key={article.id} article={article} />)
          : articleList.map((article) => <Article key={article.id} article={article} />)}
      </ArticleListContainer>
    );
};

export default ArticleList;

const ArticleListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 72rem;

  &.mobile {
    align-items: center;

    width: 100vw;
  }
`;
