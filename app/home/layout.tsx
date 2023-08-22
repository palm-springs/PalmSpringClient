import React from 'react';

import { getBlogHeaderInfo } from '@/api/blogHome';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

const BlogHomeLayout = async ({ children }: { children: React.ReactElement }) => {
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

export default BlogHomeLayout;
