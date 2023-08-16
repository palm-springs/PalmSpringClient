import React from 'react';

import { getBlogHeaderInfo } from '@/api/blog';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

const BlogHomeLayout = async ({ children, params }: { children: React.ReactElement; params: { team: string } }) => {
  const {
    data: { logo, blogName },
  } = await getBlogHeaderInfo(params.team);
  return (
    <>
      <BlogHeader logo={logo} blogName={blogName} />
      <main>{children}</main>
      <BlogFooter />
    </>
  );
};

export default BlogHomeLayout;
