import React from 'react';

import { getBlogHeaderInfo } from '@/api/blogHome';
import NotFound from '@/app/not-found';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

const BlogHomeLayout = async ({ children, params }: { children: React.ReactElement; params: { team: string } }) => {
  const blogHeaderInfoRes = await getBlogHeaderInfo(params.team);

  if (!blogHeaderInfoRes) return <NotFound />;

  const {
    data: { logo, blogName, navList },
  } = blogHeaderInfoRes;

  return (
    <>
      <BlogHeader logo={logo} blogName={blogName} navList={navList} />
      <main>{children}</main>
      <BlogFooter />
    </>
  );
};

export default BlogHomeLayout;
