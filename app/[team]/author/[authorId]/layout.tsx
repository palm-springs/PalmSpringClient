'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import { getBlogHeaderInfo } from '@/api/blogHome';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

const AuthorPageLayout = async ({ children }: { children: React.ReactElement }) => {
  const { team } = useParams();
  const {
    data: { logo, blogName },
  } = await getBlogHeaderInfo(team);
  return (
    <>
      <BlogHeader logo={logo} blogName={blogName} />
      <main>{children}</main>
      <BlogFooter />
    </>
  );
};

export default AuthorPageLayout;
