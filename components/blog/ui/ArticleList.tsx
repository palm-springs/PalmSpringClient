'use client';

import React from 'react';
import styled from 'styled-components';

import Article from '../../common/Article';

const ArticleList = () => {
  const ARTICLE_LIST: ArticleListProps[] = [
    {
      category: '개발',
      title: '리액트 API와 코드 재사용의 진화에 대한 글의 제목이 길다면 어떨까',
      description: '리액트 API와 코드 재사용의 진화에 관한 글입니다.',
      writer: '장묭지 · 웹 프론트엔드 개발자',
      date: '2023.06.25',
      thumbnailImgUrl: 'https://unsplash.com/s/photos/image',
    },
    {
      category: '디자인',
      title: '인간의 생명 연장 가능성,유전자 편집 기술로 한 발 더 나아가다',
      description: '리액트 API와 코드 재사용의 진화에 관한 글입니다.',
      writer: '오형근 · 웹 프론트엔드 개발자',
      date: '2023.06.28',
    },
    {
      category: '팀문화',
      title: '바이오 연구의 첨단,인공 유전자로 인간 피부 재생 가능성',
      description: '리액트 API와 코드 재사용의 진화에 관한 글입니다.',
      writer: '길서현 · 웹 프론트엔드 개발자',
      date: '2023.06.27',
    },
    {
      category: '팀문화',
      title: '무인 택배 드론 서비스,시험 운영 중으로 곧 상용화 예정',
      description: '이렇게 글 설명이 보입니다.',
      writer: '이시연 · 웹 프론트엔드 개발자',
      date: '2023.07.25',
    },
  ];

  return (
    <ArticleListContainer>
      {ARTICLE_LIST.map((eachItem, index) => (
        <Article
          key={index}
          category={eachItem.category}
          title={eachItem.title}
          description={eachItem.description}
          writer={eachItem.writer}
          date={eachItem.date}
          thumbnailImgUrl={eachItem.thumbnailImgUrl}
        />
      ))}
    </ArticleListContainer>
  );
};

export default ArticleList;

const ArticleListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  justify-content: center;

  width: 72rem;
`;
