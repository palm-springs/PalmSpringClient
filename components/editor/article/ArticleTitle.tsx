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
} from '@/public/icons';

const ArticleTitle = () => {
  return (
    <div>
      <Input type="text" placeholder="제목을 입력해주세요" className="input-header" />
      <div></div>
    </div>
  );
};

export default ArticleTitle;

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
  /* 포커스시 감출것인가 물어보기 */
  &:focus::placeholder {
    color: transparent;
  }
`;
