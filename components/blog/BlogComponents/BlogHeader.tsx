'use client';

import React from 'react';
import styled from 'styled-components';

import { SymbolIcon } from '@/public/icons';

const BlogHeader = () => {
  return (
    <BlogHeaderContainer>
      <SymbolIcon />
      <BlogNav>
        <PageBtn>채용</PageBtn>
        <PageBtn>인스타그램</PageBtn>
        <SubscribeBtn>팀 소식 받아보기</SubscribeBtn>
      </BlogNav>
    </BlogHeaderContainer>
  );
};

export default BlogHeader;

const BlogHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 12rem;
`;

const BlogNav = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-evenly;
`;

const PageBtn = styled.label`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  display: flex;
  align-self: center;
  color: ${({ theme }) => theme.colors.grey_900};
`;

const SubscribeBtn = styled.button`
  display: flex;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.grey_800};
  padding: 0.625rem 1.25rem;
  height: 2.25rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
