// 헤더 + 대문이미지 + 카테고리 바
'use client';

import React from 'react';

import BlogImg from '@/components/blog/BlogImg';
import Footer from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

const BlogHomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BlogHeader />
      <BlogImg />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BlogHomeLayout;
