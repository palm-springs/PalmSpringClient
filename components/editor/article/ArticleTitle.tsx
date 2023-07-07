'use client';

import React from 'react';
import styled from 'styled-components';

import {
  BoldIcon,
  BulletIcon,
  CodeBlockIcon,
  CodeIcon,
  H1Icon,
  H2Icon,
  H3Icon,
  HorizonIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  OrderIcon,
  QuoteIcon,
  StrikeIcon,
  UnderlineIcon,
} from '@/public/icons';

const ArticleTitle = () => {
  return (
    <div>
      <Input type="text" placeholder="제목을 입력해주세요" className="input-header" />
      <IconContainer>
        <H1Icon />
        <H2Icon />
        <H3Icon />
        <BulletIcon />
        <OrderIcon />
        <GreyBar />
        <UnderlineIcon />
        <BoldIcon />
        <ItalicIcon />
        <StrikeIcon />
        <CodeIcon />
        <GreyBar />
        <QuoteIcon />
        <HorizonIcon />
        <ImageIcon />
        <LinkIcon />
        <CodeBlockIcon />
      </IconContainer>
    </div>
  );
};

export default ArticleTitle;

const GreyBar = styled.div`
  border-right: 0.1rem solid #d9d9d9;
  height: 1.8rem;
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

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 4.4rem 0 2rem 0;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_100};
  width: 72.2rem;
  height: 4.8rem;
`;
