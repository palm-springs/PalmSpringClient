'use client';

import React from 'react';
import styled from 'styled-components';

const ArticleListHeader = () => {
  return <ArticleListHeaderContainer>작성한 아티클</ArticleListHeaderContainer>;
};

export default ArticleListHeader;

const ArticleListHeaderContainer = styled.div`
  ${({ theme }) => theme.fonts.Heading3_Semibold};
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.colors.grey_900};
`;
