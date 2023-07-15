'use client';

import React from 'react';
import styled from 'styled-components';

import ArticleList from '@/components/common/ArticleList';

import CategoryBtnBar from './CategoryBtnBar';

const ArticleContainer = () => {
  return (
    <>
      <CategoryBtnWrapper>
        <CategoryBtnBar />
      </CategoryBtnWrapper>
      <ArticleWrapper>
        <ArticleList />
      </ArticleWrapper>
    </>
  );
};

export default ArticleContainer;

const ArticleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 11rem;
  min-width: 105.6rem;
`;
const CategoryBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 105.6rem;
`;
