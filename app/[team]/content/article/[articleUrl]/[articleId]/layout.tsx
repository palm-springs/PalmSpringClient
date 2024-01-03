'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import MobileStickyBtn from '@/components/blog/MobileStickyBtn';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetBlogHeaderInfo } from '@/hooks/blogHome';
import useCheckMobile from '@/hooks/useCheckMobile';

const ContentLayout = ({ children }: { children: React.ReactElement }) => {
  const { team } = useParams();
  const res = useGetBlogHeaderInfo(team);

  const MOBILE = useCheckMobile();

  if (!res) return <LoadingLottie width={10} height={10} fit />;

  const {
    data: { logo, blogName, navList },
  } = res;

  return (
    <>
      <BlogHeader logo={logo} blogName={blogName} navList={navList} />
      <Main>{children}</Main>
      {MOBILE && <MobileStickyBtn />}
      <BlogFooter />
    </>
  );
};

export default ContentLayout;

const Main = styled.main`
  overflow-x: hidden;
`;
