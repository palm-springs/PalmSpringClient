'use client';

import React from 'react';
import styled from 'styled-components';

import HeaderLogo from '../HeaderLogo';

import BlogNav from './BlogNav';

const BlogHeader = () => {
  return (
    <BlogHeaderContainer>
      <HeaderLogo />
      <BlogNav />
    </BlogHeaderContainer>
  );
};

export default BlogHeader;

const BlogHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 19.2rem;
`;
