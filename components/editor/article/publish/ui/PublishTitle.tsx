'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import router from 'next/router';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

// import ARTICLE_CONTENT from '@/constants/ArticleContent';
import { useGetSingleArticleData, useGetSinglePageData } from '@/hooks/article';

import { articleDataState, pageDataState } from '../../states/atom';

interface PublishTitleprops {
  pageType: string;
  blogUrl: string;
  articleId: number;
}

//정보 get 해야함
const PublishTitle = (props: PublishTitleprops) => {
  const { team } = useParams();
  const { pageType, blogUrl, articleId } = props;

  const [{ title }, setArticleData] = useRecoilState(articleDataState);
  const [{ title: pageTitle }, setPageData] = useRecoilState(pageDataState);

  switch (pageType) {
    case `article`:
      return (
        <TitleWrapper>
          <ArticleTitle>{title}</ArticleTitle>
        </TitleWrapper>
      );
    case `page`:
      return (
        <TitleWrapper>
          <ArticleTitle>{pageTitle}</ArticleTitle>
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

const ArticleTitle = styled.span`
  margin: 2.4rem 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Heading1};
`;
