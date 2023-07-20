'use client';
import React from 'react';
import styled from 'styled-components';

import BLOG_BASIC_INFO_DATA from '@/constants/blogBasicInfoData';

const BlogUrl = () => {
  return (
    <BlogUrlContainer>
      <BlogUrlTitle>블로그 주소</BlogUrlTitle>
      <BlogUrlText>{BLOG_BASIC_INFO_DATA.myBlog.blogUrl}</BlogUrlText>
    </BlogUrlContainer>
  );
};

export default BlogUrl;

const BlogUrlContainer = styled.div`
  display: flex;
`;

const BlogUrlTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogUrlText = styled.p`
  margin-left: 9.3rem;
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;
