'use client';

import React from 'react';
import styled from 'styled-components';

import BlogInfoDeleteButton from '@/components/dashboard/blogBasicInfo/BlogDeleteButton';
import BlogDescribeText from '@/components/dashboard/blogBasicInfo/BlogDescribeText';
import BlogLogoImage from '@/components/dashboard/blogBasicInfo/BlogLogoImage';
import BlogMainImage from '@/components/dashboard/blogBasicInfo/BlogMainImge';
import BlogName from '@/components/dashboard/blogBasicInfo/BlogName';
import BlogSaveButton from '@/components/dashboard/blogBasicInfo/BlogSaveButton';
import BlogUrl from '@/components/dashboard/blogBasicInfo/BlogUrl';
import Line from '@/components/dashboard/components/ui/Line';

const BlogBasicInfoPage = () => {
  return (
    <>
      <Line />
      <BlogBasicInfoContainer>
        <BlogUrl />
        <BlogName />
        <BlogLogoImage />
        <BlogMainImage />
        <BlogDescribeText />
        <BlogInfoDeleteButton />
        <BlogSaveButton />
      </BlogBasicInfoContainer>
    </>
  );
};

export default BlogBasicInfoPage;

const BlogBasicInfoContainer = styled.div`
  padding-left: 4rem;
  width: 100%;
`;
