'use client';

import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { articleDataState, pageDataState } from '../states/atom';

interface TextEditorBuildProps {
  pageType: string;
}

const EditorInputTitle = (props: TextEditorBuildProps) => {
  const { pageType } = props;

  const [{ title }, setArticleData] = useRecoilState(articleDataState);
  const [{ title: pageTitle }, setPageData] = useRecoilState(pageDataState);

  const handleSaveArticleTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setArticleData((prev) => ({ ...prev, title: value }));
  };

  const handleSavePageTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setPageData((prev) => ({ ...prev, title: value }));
  };

  switch (pageType) {
    case `article`:
      return (
        <EditorInputTitleContainer>
          <TitleInputBox value={title} onChange={handleSaveArticleTitle} rows={1} placeholder="제목을 입력해주세요" />
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
