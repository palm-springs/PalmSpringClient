'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { ArticleData } from '@/types/article';

interface ArticleProps {
  article: ArticleData;
}

const MobileArticle = (props: ArticleProps) => {
  const {
    article: { id, title, description, memberName, createdAt, thumbnail, articleCategory, articleUrl },
  } = props;

  return (
    <ArticleContainer href={`/content/article/${articleUrl}/${id}`}>
      {thumbnail && <ArticleThumbnail src={thumbnail} alt="Article Thumbnail" />}
      <ArticleInfo>
        <EditorInputTitle className="title">{title}</EditorInputTitle>
        <ArticleDescription className="description">{description}</ArticleDescription>
        <DetailBox>
          {articleCategory && <CategoryBtn type="button">{articleCategory.categoryName}</CategoryBtn>}
          <ArticleDetail>{memberName}</ArticleDetail>
          <Bar>|</Bar>
          <ArticleDetail>{createdAt}</ArticleDetail>
        </DetailBox>
      </ArticleInfo>
    </ArticleContainer>
  );
};

export default MobileArticle;

const ArticleThumbnail = styled.img`
  margin-bottom: 1.2rem;
  border-radius: 1.2rem;
  width: 32.7rem;
  height: 18.3rem;
  object-fit: cover;
`;

const ArticleContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 32.7rem;
  height: 31.8rem;
`;

const ArticleInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`;

const EditorInputTitle = styled.article`
  ${({ theme }) => theme.mobileFonts.Title2};
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;

  margin-bottom: 0.4rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  word-break: break-all;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: ${({ theme }) => theme.colors.grey_900};
`;

const ArticleDescription = styled.div`
  ${({ theme }) => theme.mobileFonts.Body2_Regular};
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  word-break: break-all;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: ${({ theme }) => theme.colors.grey_900};
`;

const ArticleDetail = styled.div`
  ${({ theme }) => theme.mobileFonts.Caption};

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

  margin-top: 1rem;
`;
const CategoryBtn = styled.button`
  ${({ theme }) => theme.mobileFonts.Caption};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.4rem;
  border: none;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.grey_300};
  padding: 0 1rem;
  height: 2.4rem;

  color: ${({ theme }) => theme.colors.grey_700};
`;
