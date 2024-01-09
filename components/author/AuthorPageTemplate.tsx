'use client';

import React, { useEffect } from 'react';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';

import ArticleList from '../common/ArticleList';

import AuthorInfo from './ui/AuthorInfo';

interface AuthorPageTemplateProps {
  authorData: {
    thumbnail: string;
    nickname: string;
    job: string;
    description: string;
    articles: [];
  };
}

const AuthorPageTemplate = (props: AuthorPageTemplateProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const MOBILE = useCheckMobile();

  const {
    authorData: { thumbnail, nickname, job, description, articles },
  } = props;

  return (
    <AuthorPageTemplateContainer className={MOBILE ? 'mobile' : ''}>
      <AuthorInfo thumbnail={thumbnail} nickname={nickname} job={job} description={description} />
      {articles.length !== 0 && <Line className={MOBILE ? 'mobile' : ''} />}
      {articles.length !== 0 && <AuthorArticle className={MOBILE ? 'mobile' : ''}>작성한 아티클</AuthorArticle>}
      <ArticleList articleList={articles} />
    </AuthorPageTemplateContainer>
  );
};

export default AuthorPageTemplate;

const AuthorArticle = styled.div`
  ${({ theme }) => theme.fonts.Heading3_Semibold};

  margin-bottom: 2.8rem;
  width: 72rem;

  color: ${({ theme }) => theme.colors.grey_900};

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Title3};

    margin-bottom: 2.2rem;
    width: 100%;
  }
`;

const AuthorPageTemplateContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 6rem 0 12rem;
  width: 100vw;

  &.mobile {
    padding: 6rem 2.4rem 12rem;
    width: 100vw;
  }
`;

const Line = styled.div`
  margin: 6rem 0;
  background-color: ${({ theme }) => theme.colors.grey_300};
  width: 72rem;
  height: 1px;

  &.mobile {
    margin: 4rem 0;
    width: calc(100vw - 4.8rem);
  }
`;
