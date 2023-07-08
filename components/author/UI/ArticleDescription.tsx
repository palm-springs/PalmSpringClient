'use client';

import React from 'react';
import styled from 'styled-components';

const ArticleDescription = () => {
  return <ArticleDescriptionContainer>리액트 API와 코드 재사용의 진화에 관한 글입니다.</ArticleDescriptionContainer>;
};

export default ArticleDescription;

const ArticleDescriptionContainer = styled.article`
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_900};
`;
