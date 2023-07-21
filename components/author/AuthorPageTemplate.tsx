'use client';

import React, { useEffect } from 'react';
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

  const {
    authorData: { thumbnail, nickname, job, description, articles },
  } = props;

  return (
    <AuthorPageTemplateContainer>
      <AuthorInfo thumbnail={thumbnail} nickname={nickname} job={job} description={description} />
      <Line />
      <ArticleList articleList={articles} />
    </AuthorPageTemplateContainer>
  );
};

export default AuthorPageTemplate;

const AuthorPageTemplateContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 6rem 0 12rem;
  min-width: 72rem;
`;

const Line = styled.div`
  margin: 6rem 0;
  background-color: ${({ theme }) => theme.colors.grey_300};
  width: 72rem;
  height: 1px;
`;
