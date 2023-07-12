'use client';

import React from 'react';
import styled from 'styled-components';

import ArticleList from './UI/ArticleList';
import AuthorInfo from './UI/AuthorInfo';

const AuthorPageTemplate = () => {
  const AUTHOR_INFO = {
    name: '김성은',
    position: 'Product Designer',
    description:
      '안녕하십니까. 저는 팜스프링의 프로덕 디자이너 김성은입니다. 팜스프링을 디자인했습니다. 쩔죠? 팜스프링은 팜스프링입니다 팜스프링 팜스프링 팜스 프링 팜 팜 팜ㅍ마팜 팜팜 팜팜파 팜팜 팜팜 팜 팜 팜 팜팜 팜 팜팜 팜 팜 팜팜',
  };
  return (
    <AuthorPageTemplateContainer>
      <AuthorInfo name={AUTHOR_INFO.name} position={AUTHOR_INFO.position} description={AUTHOR_INFO.description} />
      <Line />
      <ArticleList />
    </AuthorPageTemplateContainer>
  );
};

export default AuthorPageTemplate;

const AuthorPageTemplateContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5.7rem;
  margin-bottom: 15.2rem;
  min-width: 72rem;
`;

const Line = styled.div`
  margin: 6rem 0;
  background-color: ${({ theme }) => theme.colors.grey_300};
  width: 72rem;
  height: 1px;
`;
