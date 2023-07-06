// 대문이미지 + 카테고리 바
'use client';

import React from 'react';
import styled from 'styled-components';

import BlogHeader from '@/components/blog/BlogComponents/BlogHeader';

const BlogHomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>
        <BlogHeader></BlogHeader>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default BlogHomeLayout;
