// 헤더 + 대문이미지 + 카테고리 바
'use client';

import React from 'react';

import BlogImg from '@/components/blog/BlogImg';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';
import { BlogImgProps } from '@/types/blogImg';

const BlogHomeLayout = ({ children }: { children: React.ReactElement }) => {
  const BLOG_INFO_EXAMPLE: BlogImgProps = {
    blogImgUrl: 'fsf',
    blogInfo: '우리 팀 이야기를 세상에 전달하는 방법 gkdjnkfjnk',
  };
  return (
    <>
      <BlogHeader />
      {BLOG_INFO_EXAMPLE.blogImgUrl && (
        <BlogImg blogImgUrl={BLOG_INFO_EXAMPLE.blogImgUrl} blogInfo={BLOG_INFO_EXAMPLE.blogInfo} />
      )}
      <main>{children}</main>
      <BlogFooter />
    </>
  );
};

export default BlogHomeLayout;
