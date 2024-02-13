import React from 'react';

import { getBlogHeaderInfo } from '@/api/blogHome';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

const ContentLayout = async ({ children, params }: { children: React.ReactElement; params: { team: string } }) => {
  const blogHeaderRes = await getBlogHeaderInfo(params.team);

  if (!blogHeaderRes) return null;

  const {
    data: { logo, blogName, navList },
  } = blogHeaderRes;

  return (
    <>
      <BlogHeader logo={logo} blogName={blogName} navList={navList} />
      <main style={{ overflowX: 'hidden' }}>{children}</main>
      <BlogFooter />
    </>
  );
};

export default ContentLayout;
