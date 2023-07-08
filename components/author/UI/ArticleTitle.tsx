'use client';

import React from 'react';
import styled from 'styled-components';

const ArticleTitle = () => {
  return (
    <ArticleTitleContainer>리액트 API와 코드 재사용의 진화에 대한 글의 제목이 길다면 어떨까</ArticleTitleContainer>
  );
};

export default ArticleTitle;

const ArticleTitleContainer = styled.div`
  ${({ theme }) => theme.fonts.Heading2};
  width: 45.8rem;
  max-height: 7.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  word-break: keep-all;

  color: ${({ theme }) => theme.colors.grey_900};
`;
