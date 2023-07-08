'use client';

import React from 'react';
import styled from 'styled-components';

import ArticleDate from './ArticleDate';
import ArticleDescription from './ArticleDescription';
import ArticleTitle from './ArticleTitle';

const ArticleDetail = () => {
  return (
    <ArticleDetailContainer>
      <ArticleTitle />
      <ArticleDescription />
      <ArticleDate />
    </ArticleDetailContainer>
  );
};

export default ArticleDetail;

const ArticleDetailContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 3.4rem;
`;
