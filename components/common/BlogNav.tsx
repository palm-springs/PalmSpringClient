'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import PageBtn from '@/components/blog/PageBtn';
import { useGetBlogHeaderInfo } from '@/hooks/blogHome';

// import SubscribeBtn from '../blog/SubscribeBtn';
import LoadingLottie from './ui/LoadingLottie';

const BlogNav = () => {
  const { team } = useParams();

  const res = useGetBlogHeaderInfo(team);

  if (!res) return <LoadingLottie width={10} height={10} fit />;

  const {
    data: { navList },
  } = res;

  return (
    <BlogNavContainer>
      {navList &&
        navList.map(({ navUrl, name, isPage, id }) => (
          <PageBtn key={navUrl}>
            <Link href={isPage ? `/content/page/${navUrl}/${id}` : `${navUrl}`}>{name}</Link>
          </PageBtn>
        ))}
      {/* 밑의 버튼은 구독자 기능 생성 후 다시 넣어줄 예정 */}
      {/* <SubscribeBtn /> */}
    </BlogNavContainer>
  );
};

export default BlogNav;

const BlogNavContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: space-between;

  width: auto;
`;
