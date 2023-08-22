'use client';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { UpdatePageProps } from '@/types/page';

import { articleDataState, pageDataState, pageTitleState } from '../../states/atom';

interface PublishTitleprops {
  pageType: string;
  pageData?: UpdatePageProps;
}

//정보 get 해야함
const PublishTitle = (props: PublishTitleprops) => {
  const { pageType, pageData } = props;

  const [{ title }, setArticleData] = useRecoilState(articleDataState);
  const [{ title: pageTitle }, setPageData] = useRecoilState(pageDataState);
  const [pageNewTitle, setPageNewTitle] = useRecoilState(pageTitleState);

  switch (pageType) {
    case `article`:
      return (
        <TitleWrapper>
          <EditorInputTitle>{title}</EditorInputTitle>
        </TitleWrapper>
      );
    case `page`:
      console.log(pageNewTitle, '왜 안넘어옴?');

      return (
        <TitleWrapper>
          {pageData ? (
            <EditorInputTitle>{pageNewTitle}</EditorInputTitle>
          ) : (
            <EditorInputTitle>{pageTitle}</EditorInputTitle>
          )}
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
