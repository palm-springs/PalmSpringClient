'use client';

import React from 'react';

import { getBlogHeaderInfo } from '@/api/blog';
import AuthRequired from '@/components/auth/AuthRequired';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

const ContentLayout = async ({ children, params }: { children: React.ReactElement; params: { team: string } }) => {
  const {
    data: { logo, blogName, navList },
  } = await getBlogHeaderInfo(params.team);
  return (
    <AuthRequired>
      <BlogHeader logo={logo} blogName={blogName} navList={navList} />
      <main>{children}</main>
      <BlogFooter />
    </AuthRequired>
  );
};

export default ContentLayout;
