'use client';

import React from 'react';

import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetBlogHeaderInfo } from '@/hooks/blogHome';

const ContentLayout = ({ children }: { children: React.ReactElement }) => {
  const res = useGetBlogHeaderInfo();

  if (!res) return <LoadingLottie width={10} height={10} fit />;

  const {
    data: { logo, blogName },
  } = res;

  return (
    <>
      <BlogHeader logo={logo} blogName={blogName} />
      <main>{children}</main>
      <BlogFooter />
    </>
  );
};

export default ContentLayout;
