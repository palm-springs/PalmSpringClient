'use client';

import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

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

  const MOBILE = useMediaQuery({
    query: '(min-width : 375px) and (max-width:768px)',
  });
  const {
    authorData: { thumbnail, nickname, job, description, articles },
  } = props;

  if (MOBILE)
    return (
      <AuthorPageTemplateContainer className="mobile">
        <AuthorInfo thumbnail={thumbnail} nickname={nickname} job={job} description={description} />
        {articles.length !== 0 && <Line className="mobile" />}
        <ArticleList articleList={articles} />
      </AuthorPageTemplateContainer>
    );
  else
    return (
      <AuthorPageTemplateContainer>
        <AuthorInfo thumbnail={thumbnail} nickname={nickname} job={job} description={description} />
        {articles.length !== 0 && <Line />}
        <ArticleList articleList={articles} />
      </AuthorPageTemplateContainer>
    );
};

export default AuthorPageTemplate;

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
    width: calc(100vw - 4.8rem);
  }
`;
