'use client';

import React from 'react';
import styled from 'styled-components';

import BlogDescribeText from '@/components/dashboard/blogBasicInfo/BlogDescribeText';
import BlogLogoImage from '@/components/dashboard/blogBasicInfo/BlogLogoImage';
import BlogMainImage from '@/components/dashboard/blogBasicInfo/BlogMainImge';
import BlogName from '@/components/dashboard/blogBasicInfo/BlogName';
import BlogUrl from '@/components/dashboard/blogBasicInfo/BlogUrl';

const BlogBasicInfoPage = () => {
  return (
    <BlogBasicInfoContainer>
      <BlogUrl />
      <BlogName />
      <BlogLogoImage />
      <BlogMainImage />
      <BlogDescribeText />
    </BlogBasicInfoContainer>
  );
};

export default BlogBasicInfoPage;

const BlogBasicInfoContainer = styled.div`
  margin-left: 28.6rem;
`;
