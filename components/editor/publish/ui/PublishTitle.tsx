'use client';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { UpdateArticleProps } from '@/types/article';
import { UpdatePageProps } from '@/types/page';

import { articleDataState, pageDataState } from '../../states/atom';

interface PublishTitleprops {
  pageType: string;
  pageData?: UpdatePageProps;
  articleData?: UpdateArticleProps;
}

//정보 get 해야함
const PublishTitle = (props: PublishTitleprops) => {
  const { pageType, pageData, articleData } = props;

  const [{ title: articleTitle }, setArticleData] = useRecoilState(articleDataState);
  const [{ title: pageTitle }, setPageData] = useRecoilState(pageDataState);
  useEffect(() => {
    if (articleData) {
      setArticleData((prev) => ({ ...prev, title: articleData.title }));
    } else if (pageData) {
      setPageData((prev) => ({ ...prev, title: pageData.title }));
    }
  }, []);
  switch (pageType) {
    case `article`:
      return (
        <TitleWrapper>
          <EditorInputTitle>{articleTitle}</EditorInputTitle>
        </TitleWrapper>
      );
    case `page`:
      return (
        <TitleWrapper>
          <EditorInputTitle>{pageTitle}</EditorInputTitle>
        </TitleWrapper>
      );
    default:
      break;
  }
};

export default PublishTitle;

const TitleWrapper = styled.div`
  margin: 2.4rem 0;
  width: 54rem;
`;

const EditorInputTitle = styled.span`
  margin: 2.4rem 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Heading1};
`;
