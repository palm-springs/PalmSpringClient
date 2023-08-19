'use client';

import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { UpdateArticleProps } from '@/types/article';
import { UpdatePageProps } from '@/types/page';

import { articleDataState, articleEditDataState, pageDataState } from '../states/atom';

interface TextEditorBuildProps {
  pageType: string;
  currentState?: string;
  articleData?: UpdateArticleProps;
  pageData?: UpdatePageProps;
}

const EditorInputTitle = (props: TextEditorBuildProps) => {
  const { pageType, currentState, articleData, pageData } = props;

  const [{ title }, setArticleData] = useRecoilState(articleDataState);
  const [{ title: pageTitle }, setPageData] = useRecoilState(pageDataState);
  // const [{ title: updateArticleTitle }, setArticleEditDataState] = useRecoilState(articleEditDataState); update할 때

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
      if (currentState === 'edit' && articleData) {
        const { title } = articleData; //이 값은 수정되는 값으로 해야함 그리고 value에 넣기 -> 수정하는 title data 변화값 넣기
        return (
          <EditorInputTitleContainer>
            <TitleInputBox value={title} onChange={handleSaveArticleTitle} rows={1}>
              {articleData.title}
            </TitleInputBox>
          </EditorInputTitleContainer>
        );
      } else {
        return (
          <EditorInputTitleContainer>
            <TitleInputBox value={title} onChange={handleSaveArticleTitle} rows={1} placeholder="제목을 입력해주세요" />
          </EditorInputTitleContainer>
        );
      }
    case `page`:
      if (currentState === 'edit' && pageData) {
        const { title: pageTitle } = pageData; //이 값은 수정되는 값으로 해야함 그리고 value에 넣기

        return (
          <EditorInputTitleContainer>
            <TitleInputBox value={pageTitle} onChange={handleSavePageTitle} rows={1}>
              {pageData.title}
            </TitleInputBox>
          </EditorInputTitleContainer>
        );
      } else {
        return (
          <EditorInputTitleContainer>
            <TitleInputBox value={title} onChange={handleSaveArticleTitle} rows={1} placeholder="제목을 입력해주세요" />
          </EditorInputTitleContainer>
        );
      }
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
