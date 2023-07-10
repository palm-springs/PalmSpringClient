'use client';

import React from 'react';
import styled from 'styled-components';

import BlogUrl from '@/components/dashboard/blogBasicInfo/BlogUrl';

const BlogBasicInfoPage = () => {
  return (
    <BlogBasicInfoContainer>
      <BlogUrl />
    </BlogBasicInfoContainer>
  );
};

export default BlogBasicInfoPage;

const BlogBasicInfoContainer = styled.div`
  margin-left: 28.6rem;
`;
