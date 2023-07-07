'use client';

import React from 'react';
import styled from 'styled-components';

const Article = () => {
  return (
    <div>
      <ArticleTitle>리액트 API와 코드 재사용의 진화에 대한 글의 제목이 길다면 어떨까</ArticleTitle>
      <ArticleIntro>리액트 API와 코드 재사용의 진화에 관한 글입니다.</ArticleIntro>
      <DetailBox>
        <ArticleDetail>김대덕 · 웹 프론트엔드 개발자</ArticleDetail>
        <Bar>|</Bar>
        <ArticleDetail>2023.06.25</ArticleDetail>
      </DetailBox>
    </div>
  );
};

export default Article;

const ArticleTitle = styled.div`
  ${({ theme }) => theme.fonts.Heading2};
  margin-bottom: 0.4rem;
  word-break: keep-all;
  color: ${({ theme }) => theme.colors.grey_900};
`;

const ArticleIntro = styled.div`
  ${({ theme }) => theme.fonts.Body2_Regular};
  word-break: keep-all;
  color: ${({ theme }) => theme.colors.grey_900};
`;

const ArticleDetail = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  word-break: keep-all;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const Bar = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_400};
`;

const DetailBox = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-top: 1.7rem;
`;
