'use client';

import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { articleDataState } from '../states/atom';

const ArticleTitle = () => {
  const [{ title }, setArticleData] = useRecoilState(articleDataState);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setArticleData((prev) => ({ ...prev, title: value }));
  };
  return (
    <ArticleTitleContainer>
      <Input value={title} onChange={handleTitleChange} type="text" placeholder="제목을 입력해주세요" />
    </ArticleTitleContainer>
  );
};

export default ArticleTitle;

const ArticleTitleContainer = styled.div`
  margin: 4rem 0 0 35.9rem;
`;

const Input = styled.input`
  border: none;
  background: ${({ theme }) => theme.colors.grey_0};
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.grey_900};
  font-family: ${({ theme }) => theme.fonts.Title};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_900};
  }
  &:focus {
    outline: none;
  }
`;
