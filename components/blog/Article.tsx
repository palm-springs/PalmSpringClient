'use client';

import React from 'react';
import styled from 'styled-components';

import ArticleImg from './UI/ArticleImg';

interface ArticleProps {
  title: string;
  intro: string;
  writer: string;
  date: string;
  // imgSrc: string;
}

const Article = (props: ArticleProps) => {
  const { title, intro, writer, date } = props;

  return (
    <ArticleContainer>
      <ArticleInfo>
        <ArticleTitle>
          {title}
          리액트 API와 코드 재사용의 진화
        </ArticleTitle>
        <ArticleIntro>
          {intro}
          리액트 API와 코드 재사용의 진화에 관한 글입니다.
        </ArticleIntro>
        <DetailBox>
          <ArticleDetail>
            {writer}
            김대덕 · 웹 프론트엔드 개발자
          </ArticleDetail>
          <Bar>|</Bar>
          <ArticleDetail>
            {date}
            2023.06.25
          </ArticleDetail>
        </DetailBox>
      </ArticleInfo>
      <ArticleImg />
    </ArticleContainer>
  );
};

export default Article;

const ArticleContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const ArticleInfo = styled.article`
  display: flex;
  flex-direction: column;
`;

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
