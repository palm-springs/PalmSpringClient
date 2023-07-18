import React from 'react';

import { getBlogHeaderInfo } from '@/api/blog';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

const BlogHomeLayout = async ({ children }: { children: React.ReactElement }) => {
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

export default BlogHomeLayout;
