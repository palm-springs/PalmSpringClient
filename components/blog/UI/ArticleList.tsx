'use client';

import React from 'react';
import styled from 'styled-components';

import Article from '../../common/Article';

const ArticleList = ({ children }: { children: React.ReactNode }) => {
  const ARTICLE_LIST = [
    {
      title: '리액트 API와 코드 재사용의 진화에 대한 글의 제목이 길다면 어떨까',
      description: '리액트 API와 코드 재사용의 진화에 관한 글입니다.',
      writer: '장묭지 · 웹 프론트엔드 개발자',
      date: '2023.06.25',
      thumbnailImgUrl: 'https://unsplash.com/s/photos/image',
    },
    {
      title: '리액트 API와 코드 재사용의 진화',
      description: '리액트 API와 코드 재사용의 진화에 관한 글입니다.',
      writer: '오형근 · 웹 프론트엔드 개발자',
      date: '2023.06.28',
    },
    {
      title: '리액트 API와 코드 재사용의 진화에 대한 글의 제목이 길다면 어떨까',
      description: '리액트 API와 코드 재사용의 진화에 관한 글입니다.',
      writer: '길서현 · 웹 프론트엔드 개발자',
      date: '2023.06.27',
    },
    {
      title: '리액트 API와 코드 재사용의 진화에 대한 글의 제목이 길다면 어떨까',
      description: '이렇게 글 설명이 보입니다.',
      writer: '이시연 · 웹 프론트엔드 개발자',
      date: '2023.07.25',
    },
  ];

  return (
    <ArticleListContainer>
      {ARTICLE_LIST.map((eachItem) => (
        <Article
          key={eachItem.title}
          title={eachItem.title}
          description={eachItem.description}
          writer={eachItem.writer}
          date={eachItem.date}
          thumbnailImgUrl={eachItem.thumbnailImgUrl}
        />
      ))}
      {children}
    </ArticleListContainer>
  );
};

export default ArticleList;

const ArticleListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  justify-content: center;

  margin-top: 5.8rem;
  width: 72rem;
`;
