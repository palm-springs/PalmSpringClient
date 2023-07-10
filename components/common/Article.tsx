'use client';

import React from 'react';
import styled from 'styled-components';

import ArticleImg from '../blog/UI/ArticleImg';

interface ArticleProps {
  title: string;
  description: string;
  writer: string;
  date: string;
  // imgSrc: string;
}

const Article = (props: ArticleProps) => {
  const { title, description, writer, date } = props;

  return (
    <ArticleContainer>
      <ArticleInfo>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDescription>{description}</ArticleDescription>
        <DetailBox>
          <ArticleDetail>{writer}</ArticleDetail>
          <Bar>|</Bar>
          <ArticleDetail>{date}</ArticleDetail>
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
  justify-content: center;
`;

const ArticleTitle = styled.div`
  ${({ theme }) => theme.fonts.Heading2};
  margin-bottom: 0.4rem;
  word-break: keep-all;
  color: ${({ theme }) => theme.colors.grey_900};
`;

const ArticleDescription = styled.div`
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
