'use client';

import React from 'react';
import styled from 'styled-components';

import BLOG_BASIC_INFO_DATA from '@/constants/blogBasicInfoData';

const BlogName = () => {
  return (
    <BlogNameContainer>
      <BlogNameTitle>블로그 이름</BlogNameTitle>
      <BlogNameText>{BLOG_BASIC_INFO_DATA.myBlog.blogName}</BlogNameText>
    </BlogNameContainer>
  );
};

export default BlogName;

const BlogNameContainer = styled.div`
  margin-top: 3.2rem;
`;

const BlogNameTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin: 4rem 0 0.8rem 0;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogNameText = styled.p`
  ${({ theme }) => theme.fonts.Body2_Regular};
  gap: 1rem;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 50rem;
  height: 4.6rem;
  color: ${({ theme }) => theme.colors.grey_950};
`;
