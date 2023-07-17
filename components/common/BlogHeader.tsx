'use client';

import React from 'react';
import styled from 'styled-components';

import { BLOG_HEADER_EXAMPLE } from '@/constants/blogHeader';

import BlogNav from './BlogNav';
import HeaderLogo from './HeaderLogo';

const BlogHeader = () => {
  return (
    <BlogHeaderContainer>
      <HeaderLogo logo={BLOG_HEADER_EXAMPLE.logo} blogName={BLOG_HEADER_EXAMPLE.blogName} />
      <BlogNav navList={BLOG_HEADER_EXAMPLE.navList} />
    </BlogHeaderContainer>
  );
};

export default BlogHeader;

const BlogHeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;

  backdrop-filter: blur(18px);
  z-index: 10;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_300};
  background-color: rgba(255, 255, 255, 0.75);

  padding: 1.2rem 19.2rem;
  width: 100%;
  height: 6rem;
`;
