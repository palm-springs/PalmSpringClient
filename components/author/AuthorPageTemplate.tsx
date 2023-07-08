'use client';

import React from 'react';
import styled from 'styled-components';

import ArticleList from './UI/ArticleList';
import AuthorInfo from './UI/AuthorInfo';
import Line from './UI/Line';

const AuthorPageTemplate = () => {
  return (
    <AuthorPageTemplateContainer>
      <AuthorInfo />
      <Line />
      <ArticleList />
    </AuthorPageTemplateContainer>
  );
};

export default AuthorPageTemplate;

const AuthorPageTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5.7rem 35.9rem 13.8rem 35.9rem;
  width: 72.2rem;
`;
