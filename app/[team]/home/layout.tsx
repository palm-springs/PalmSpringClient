import React from 'react';

import { getBlogHeaderInfo } from '@/api/blogHome';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

const BlogHomeLayout = async ({ children, params }: { children: React.ReactElement; params: { team: string } }) => {
  const {
    data: { logo, blogName, navList },
  } = await getBlogHeaderInfo(params.team);
  return (
    <>
      <BlogHeader logo={logo} blogName={blogName} navList={navList} />
      <main>{children}</main>
      <BlogFooter />
    </>
  );
};
///////d
export default BlogHomeLayout;
