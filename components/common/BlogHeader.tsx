'use client';

import React from 'react';
import styled from 'styled-components';

import { HeaderProps } from '@/types/blogHeader';

import BlogNav from './BlogNav';
import HeaderLogo from './HeaderLogo';

const BlogHeader = (props: HeaderProps) => {
  const { logo, blogName } = props;
  return (
    <BlogHeaderContainer>
      <HeaderLogo logo={logo} blogName={blogName} />
      <BlogNav />
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
