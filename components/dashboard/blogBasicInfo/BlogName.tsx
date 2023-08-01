'use client';

import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import BLOG_BASIC_INFO_DATA from '@/constants/blogBasicInfoData';

interface BlogNameProps {
  blogName: string;
  setBlogName: (v: string) => void;
}

const BlogName = (props: BlogNameProps) => {
  const { blogName, setBlogName } = props;
  return (
    <BlogNameContainer>
      <BlogNameTitle>블로그 이름</BlogNameTitle>
      <BlogNameText value={blogName} onChange={(e) => setBlogName(e.target.value)} />
    </BlogNameContainer>
  );
};

export default BlogName;

const BlogNameContainer = styled.div`
  display: flex;
  margin-top: 3.2rem;
`;

const BlogNameTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogNameText = styled.input`
  ${({ theme }) => theme.fonts.Body2_Regular};
  gap: 1rem;
  margin-left: 9.3rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 64.5rem;
  height: 4.6rem;
  color: ${({ theme }) => theme.colors.grey_950};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;
