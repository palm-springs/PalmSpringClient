import React from 'react';

import { getBlogHeaderInfo } from '@/api/blogHome';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

const AuthorPageLayout = async ({ children, params }: { children: React.ReactElement; params: { team: string } }) => {
  const res = await getBlogHeaderInfo(params.team);

  if (!res) return null;

  const {
    data: { logo, blogName, navList },
  } = res;

  return (
    <>
      <BlogHeader logo={logo} blogName={blogName} navList={navList} />
      <main>{children}</main>
      <BlogFooter />
    </>
  );
};

export default AuthorPageLayout;
