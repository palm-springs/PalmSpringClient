'use client';

import React from 'react';
import styled from 'styled-components';

import Article from '../../common/Article';

const ArticleList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ArticleListContainer>
      <Article
        title={'리액트 API와 코드 재사용의 진화에 대한 글의 제목이 길다면 어떨까'}
        description={'리액트 API와 코드 재사용의 진화에 관한 글입니다.'}
        writer={'김대덕 · 웹 프론트엔드 개발자'}
        date={'2023.06.25'}
      />
      <Article
        title={'리액트 API와 코드 재사용의 진화에 대한 글의 제목이 길다면 어떨까'}
        description={'리액트 API와 코드 재사용의 진화에 관한 글입니다.'}
        writer={'김대덕 · 웹 프론트엔드 개발자'}
        date={'2023.06.25'}
      />
      <Article
        title={'리액트 API와 코드 재사용의 진화에 대한 글의 제목이 길다면 어떨까'}
        description={'리액트 API와 코드 재사용의 진화에 관한 글입니다.'}
        writer={'김대덕 · 웹 프론트엔드 개발자'}
        date={'2023.06.25'}
      />
      <Article
        title={'리액트 API와 코드 재사용의 진화에 대한 글의 제목이 길다면 어떨까'}
        description={'리액트 API와 코드 재사용의 진화에 관한 글입니다.'}
        writer={'김대덕 · 웹 프론트엔드 개발자'}
        date={'2023.06.25'}
      />
      {children}
    </ArticleListContainer>
  );
};

export default ArticleList;

const ArticleListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-top: 5.8rem;
`;
