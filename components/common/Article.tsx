'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import useGetCategory from '@/hooks/useGetCategory';
import { ArticleProps } from '@/types/article';

import ArticleImg from '../blog/ui/ArticleImg';

const Article = (props: ArticleProps) => {
  const SELECTED = useGetCategory();
  const { title, description, writer, date, thumbnailImgUrl, category } = props;

  return (
    <ArticleContainer>
      <ArticleInfo>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDescription>{description}</ArticleDescription>
        <DetailBox>
          {SELECTED === 'home' && (
            <CategoryBtn href={`/blogNameHere/home/${category}`} type="button">
              {category}
            </CategoryBtn>
          )}
          <ArticleDetail>{writer}</ArticleDetail>
          <Bar>|</Bar>
          <ArticleDetail>{date}</ArticleDetail>
        </DetailBox>
      </ArticleInfo>
      {thumbnailImgUrl && <ArticleImg />}
    </ArticleContainer>
  );
};

export default Article;

const ArticleContainer = styled.section`
  display: flex;
  gap: 3.2rem;
  justify-content: space-between;
  width: 100%;
`;

const ArticleInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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
  align-items: center;
  margin-top: 1.7rem;
  width: 100%;
`;
const CategoryBtn = styled(Link)`
  ${({ theme }) => theme.fonts.Body3_Regular};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 1.2rem;

  background-color: ${({ theme }) => theme.colors.grey_300};
  padding: 0.4rem 1rem;
  height: 2.4rem;

  color: ${({ theme }) => theme.colors.grey_700};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_400};
  }
`;
