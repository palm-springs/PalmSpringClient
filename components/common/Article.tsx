'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import { ArticleData } from '@/types/article';

import ArticleImg from '../blog/ui/ArticleImg';

interface ArticleProps {
  noHover?: boolean;
  article: ArticleData;
}

const Article = (props: ArticleProps) => {
  const { team } = useParams();
  const {
    noHover,
    article: { id, title, description, memberName, job, createdAt, thumbnail, articleCategory },
  } = props;

  return (
    <ArticleContainer href={`/${team}/content/${id}`} className={noHover ? '' : 'hover'}>
      <ArticleInfo>
        <ArticleTitle className="title">{title}</ArticleTitle>
        <ArticleDescription className="description">{description}</ArticleDescription>
        <DetailBox>
          {articleCategory && <CategoryBtn>{articleCategory.categoryName}</CategoryBtn>}
          <ArticleDetail>{memberName}</ArticleDetail>&nbsp;·&nbsp;
          <ArticleDetail>{job}</ArticleDetail>
          <Bar>|</Bar>
          <ArticleDetail>{createdAt}</ArticleDetail>
        </DetailBox>
      </ArticleInfo>
      {thumbnail && <ArticleImg />}
    </ArticleContainer>
  );
};

export default Article;

const ArticleContainer = styled(Link)`
  display: flex;
  gap: 3.2rem;
  justify-content: space-between;

  width: 100%;
  height: 17rem;

  &.hover:hover {
    transform: translateY(-0.8rem);
    transition: 0.3s ease-in-out;

    .title,
    .description {
      opacity: 0.8;
    }
  }
`;

const ArticleInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 72rem;
`;

const ArticleTitle = styled.article`
  ${({ theme }) => theme.fonts.Heading2};
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;

  margin-bottom: 0.4rem;
  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  word-break: break-all;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: ${({ theme }) => theme.colors.grey_900};
`;

const ArticleDescription = styled.div`
  ${({ theme }) => theme.fonts.Body2_Regular};
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;

  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  word-break: break-all;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

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
const CategoryBtn = styled.div`
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
`;
