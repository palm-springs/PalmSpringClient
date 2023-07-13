// all 카테고리 페이지
'use client';

import React from 'react';

import ArticleContainer from '@/components/blog/UI/ArticleContainer';

function BlogMainPage({ children }: { children: React.ReactElement }) {
  return <ArticleContainer>{children}</ArticleContainer>;
}

export default BlogMainPage;
