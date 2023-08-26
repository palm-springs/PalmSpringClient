'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'next/navigation';

import MobileStickyBtn from '@/components/blog/MobileStickyBtn';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetBlogHeaderInfo } from '@/hooks/blogHome';

const ContentLayout = ({ children }: { children: React.ReactElement }) => {
  const { team } = useParams();
  const res = useGetBlogHeaderInfo(team);
  const MOBILE = useMediaQuery({
    query: '(min-width : 375px) and (max-width:768px)',
  });
  if (!res) return <LoadingLottie width={10} height={10} fit />;

  const {
    data: { logo, blogName, navList },
  } = res;

  return (
    <>
      <BlogHeader logo={logo} blogName={blogName} navList={navList} />
      <main>{children}</main>
      {MOBILE && <MobileStickyBtn />}

      <BlogFooter />
    </>
  );
};

export default ContentLayout;
