'use client';
import React from 'react';
import styled from 'styled-components';

import BLOG_BASIC_INFO_DATA from '@/constants/blogBasicInfoData';

const BlogUrl = () => {
  return (
    <>
      <BlogInfoTitle>블로그 설정</BlogInfoTitle>
      <>
        <BlogUrlTitle>블로그 주소</BlogUrlTitle>
        <BlogUrlText>{BLOG_BASIC_INFO_DATA.myBlog.blogUrl}</BlogUrlText>
      </>
    </>
  );
};

export default BlogUrl;

const BlogInfoTitle = styled.p`
  ${({ theme }) => theme.fonts.Heading1};
  margin-top: 6rem;
  color: ${({ theme }) => theme.colors.grey_900};
`;

const BlogUrlTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin: 4rem 0 0.8rem 0;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const BlogUrlText = styled.p`
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;
