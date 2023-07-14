//blog main page의 article를 공통 컴포넌트로 분리 후 가져와서 쓸 예정

'use client';

import React from 'react';
import styled from 'styled-components';

import Article from '@/components/common/Article';

const ArticleBox = () => {
  const ARTICLE_LIST = [
    {
      title: '리액트 API와 코드 재사용의 진화에 대한 글의 제목이 길다면 어떨까',
      description: '리액트 API와 코드 재사용의 진화에 관한 글입니다.',
      writer: '장묭지 · 웹 프론트엔드 개발자',
      date: '2023.06.25',
    },
    {
      title: '리액트 API와 코드 재사용의 진화',
      description: '리액트 API와 코드 재사용의 진화에 관한 글입니다.',
      writer: '오형근 · 웹 프론트엔드 개발자',
      date: '2023.06.28',
      thumbnailImgUrl: 'https://unsplash.com/s/photos/image',
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
  const RECOMMEND_ARTICLE_LIST: ArticleListProps[] = ARTICLE_LIST.slice(0, 3);

  const ArticleList = RECOMMEND_ARTICLE_LIST.map(({ title, description, writer, date, thumbnailImgUrl }) => {
    return (
      <Article
        key={thumbnailImgUrl}
        title={title}
        description={description}
        writer={writer}
        date={date}
        thumbnailImgUrl={thumbnailImgUrl}
      />
    );
  });

  return <ArticleBoxContainer>{ArticleList}</ArticleBoxContainer>;
};

export default ArticleBox;

const ArticleBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding-top: 2.4rem;
  width: 100%;
`;
