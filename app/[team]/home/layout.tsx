'use client';

import React from 'react';

import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

const BlogHomeLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <BlogHeader />
      <main>{children}</main>
      <BlogFooter />
    </>
  );
};

export default BlogHomeLayout;
