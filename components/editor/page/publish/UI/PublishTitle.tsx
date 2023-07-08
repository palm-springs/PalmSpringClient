import React from 'react';
import styled from 'styled-components';

import ARTICLE_CONTENT from '@/constants/ArticleContent';

const PublishTitle = () => {
  return (
    <>
      <ArticleTitle>{ARTICLE_CONTENT.article.title}</ArticleTitle>
    </>
  );
};

export default PublishTitle;

const ArticleTitle = styled.p`
  margin-top: 2.4rem;
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Heading1};
`;
