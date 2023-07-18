'use client';

import React from 'react';

import { getBlogHeaderInfo } from '@/api/blog';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

const AuthorPageLayout = async ({ children }: { children: React.ReactNode }) => {
  const {
    data: { logo, blogName, navList },
  } = await getBlogHeaderInfo('Palms');
  return (
    <>
      <BlogHeader logo={logo} blogName={blogName} navList={navList} />
      <main>{children}</main>
      <BlogFooter />
    </>
  );
};

export default AuthorPageLayout;
