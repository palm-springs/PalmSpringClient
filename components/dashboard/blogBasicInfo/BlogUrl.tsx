'use client';
import React from 'react';
import styled from 'styled-components';

import BLOG_BASIC_INFO_DATA from '@/constants/blogBasicInfoData';

const BlogUrl = () => {
  return (
    <>
      <BlogUrlTitle>블로그 주소</BlogUrlTitle>
      <BlogUrlText>{BLOG_BASIC_INFO_DATA.myBlog.blogUrl}</BlogUrlText>
    </>
  );
};

export default BlogUrl;

const BlogUrlTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin: 4rem 0 0.8rem;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogUrlText = styled.p`
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;
