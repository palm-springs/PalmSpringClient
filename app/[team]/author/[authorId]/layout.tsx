'use client';

import React from 'react';

import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

const AuthorPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BlogHeader />
      <main>{children}</main>
      <BlogFooter />
    </>
  );
};

export default AuthorPageLayout;
