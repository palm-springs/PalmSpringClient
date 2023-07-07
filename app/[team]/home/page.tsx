// all 카테고리 페이지
'use client';

import React from 'react';

import ArticleContainer from '@/components/blog/UI/ArticleContainer';

function BlogMainPage({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ArticleContainer>{children}</ArticleContainer>
    </div>
  );
}

export default BlogMainPage;
