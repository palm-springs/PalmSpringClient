'use client';

import React from 'react';
import { useParams } from 'next/navigation';

// import { getBlogHeaderInfo } from '@/api/blog';
import AuthRequired from '@/components/auth/AuthRequired';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetBlogHeaderInfo } from '@/hooks/blog';

const ContentLayout = ({ children }: { children: React.ReactElement }) => {
  const { team } = useParams();
  const res = useGetBlogHeaderInfo(team);

  if (!res) return <LoadingLottie width={10} height={10} fit />;

  const {
    data: { logo, blogName, navList },
  } = res;

  return (
    <AuthRequired>
      <BlogHeader logo={logo} blogName={blogName} navList={navList} />
      <main>{children}</main>
      <BlogFooter />
    </AuthRequired>
  );
};

export default ContentLayout;
