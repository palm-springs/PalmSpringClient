'use client';

import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 제목 높이 자동 계산 함수 ->useEffect사용해야할듯?
  const handleResizeInput = useCallback(() => {
    if (textareaRef.current !== null) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  useEffect(() => {
    if (articleData) {
      setArticleData((prev) => ({ ...prev, title: articleData.title }));
    } else if (pageData) {
      setPageData((prev) => ({ ...prev, title: pageData.title }));
    }
    handleResizeInput();
  }, []);

  const handleSaveArticleTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setArticleData((prev) => ({ ...prev, title: value }));
    handleResizeInput();
  };

  const handleSavePageTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setPageData((prev) => ({ ...prev, title: value }));
    handleResizeInput();
  };

  switch (pageType) {
    case `article`:
      return (
        <EditorInputTitleContainer>
          <TitleInputBox
            value={articleTitle}
            onChange={handleSaveArticleTitle}
            rows={1}
            placeholder="제목을 입력해주세요"
            maxLength={67}
            ref={textareaRef}
          />
        </EditorInputTitleContainer>
      );
    case `page`:
      return (
        <EditorInputTitleContainer>
          <TitleInputBox value={pageTitle} onChange={handleSavePageTitle} rows={1} placeholder="제목을 입력해주세요" />
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
  height: 6.7rem;
  max-height: 28rem;
  resize: none;
  line-height: 140%;
  letter-spacing: -0.05rem;
  color: ${({ theme }) => theme.colors.grey_900};
  font-family: ${({ theme }) => theme.fonts.Title};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }
  &:focus {
    outline: none;
  }
`;
