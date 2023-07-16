'use client';

import React from 'react';
import styled from 'styled-components';

import ArticleList from '@/components/common/ArticleList';

const ArticleBox = () => {
  return (
    <>
      <ArticleListHeader>작성한 아티클</ArticleListHeader>
      <ArticleList />
    </>
  );
};

export default ArticleBox;

const ArticleListHeader = styled.div`
  ${({ theme }) => theme.fonts.Heading3_Semibold};
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.colors.grey_900};
`;
