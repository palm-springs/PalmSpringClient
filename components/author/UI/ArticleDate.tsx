'use client';

import React from 'react';
import styled from 'styled-components';

const ArticleDate = () => {
  return <ArticleDateContainer>2023.06.25</ArticleDateContainer>;
};

export default ArticleDate;

const ArticleDateContainer = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  margin-top: 1.7rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;
