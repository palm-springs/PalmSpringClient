'use client';

import React, { ChangeEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { UpdateArticleProps } from '@/types/article';
import { UpdatePageProps } from '@/types/page';

import { articleDataState, pageDataState } from '../states/atom';

interface TextEditorBuildProps {
  pageType: string;
  currentState?: string;
  articleData?: UpdateArticleProps;
  pageData?: UpdatePageProps;
}

const EditorInputTitle = (props: TextEditorBuildProps) => {
  const { pageType, articleData, pageData } = props;

  const [{ title: articleTitle }, setArticleData] = useRecoilState(articleDataState); // 아티클 초기 타이틀 -> 복사 -> 새로운 title 갈아끼기
  const [{ title: pageTitle }, setPageData] = useRecoilState(pageDataState);
  useEffect(() => {
    if (articleData) {
      setArticleData((prev) => ({ ...prev, title: articleData.title }));
    } else if (pageData) {
      setPageData((prev) => ({ ...prev, title: pageData.title }));
    }
  }, []);

  const handleSaveArticleTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setArticleData((prev) => ({ ...prev, title: value }));
  };

  const handleSavePageTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setPageData((prev) => ({ ...prev, title: value }));
  };

  // currentState가 edit 이고 데이터가 있으면 title (updateTitle)이 보여지고
  // 아니라면 기존의 빈 타이틀이 저장된다.
  switch (pageType) {
    case `article`:
      return (
        <EditorInputTitleContainer>
          <TitleInputBox value={articleTitle} onChange={handleSaveArticleTitle} rows={1}>
            {/* 이거 defalt atom값으로 집어 넣어야함 */}
          </TitleInputBox>
        </EditorInputTitleContainer>
      );
    case `page`:
      return (
        <EditorInputTitleContainer>
          <TitleInputBox value={pageTitle} onChange={handleSavePageTitle} rows={1} />
        </EditorInputTitleContainer>
      );
    default:
      break;
  }
};

export default EditorInputTitle;

const EditorInputTitleContainer = styled.div`
  width: 72.2rem;
`;

const TitleInputBox = styled.textarea`
  margin-top: 4rem;
  border: none;
  background: ${({ theme }) => theme.colors.grey_0};
  width: 100%;
  height: 100%;
  resize: none;
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.grey_900};
  font-family: ${({ theme }) => theme.fonts.Title};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }
  &:focus {
    outline: none;
  }
`;
