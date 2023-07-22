'use client';

import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { articleDataState, pageDataState } from '../states/atom';

interface TextEditorBuildprops {
  pageType: string;
}

const ArticleTitle = (props: TextEditorBuildprops) => {
  const { pageType } = props;

  const { team } = useParams();
  const router = useRouter();
  const [{ title }, setArticleData] = useRecoilState(articleDataState);
  const [{ title: pageTitle }, setPageData] = useRecoilState(pageDataState);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setArticleData((prev) => ({ ...prev, title: value }));
  };

  const handlePageTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPageData((prev) => ({ ...prev, title: value }));
  };

  switch (pageType) {
    case `article`:
      return (
        <ArticleTitleContainer>
          <Input value={title} onChange={handleTitleChange} type="text" placeholder="제목을 입력해주세요" />
        </ArticleTitleContainer>
      );
    case `page`:
      return (
        <ArticleTitleContainer>
          <Input value={pageTitle} onChange={handlePageTitleChange} type="text" placeholder="제목을 입력해주세요" />
        </ArticleTitleContainer>
      );
    default:
      router.push('/not-found');
  }
};

export default ArticleTitle;

const ArticleTitleContainer = styled.div`
  width: 72.2rem;
`;

const Input = styled.input`
  margin-top: 4rem;
  border: none;
  background: ${({ theme }) => theme.colors.grey_0};
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.grey_900};
  font-family: ${({ theme }) => theme.fonts.Title};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grey_300};
  }
`;
