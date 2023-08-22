'use client';

import React from 'react';

import { getBlogHeaderInfo } from '@/api/blogHome';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

const AuthorPageLayout = async ({ children }: { children: React.ReactElement }) => {
  const {
    data: { logo, blogName },
  } = await getBlogHeaderInfo();
  return (
    <>
      <BlogHeader logo={logo} blogName={blogName} />
      <main>{children}</main>
      <BlogFooter />
    </>
  );
};

export default AuthorPageLayout;
