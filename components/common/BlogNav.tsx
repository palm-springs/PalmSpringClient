'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import PageBtn from '@/components/blog/PageBtn';
import { useGetNavList } from '@/hooks/dashboard';

import SubscribeBtn from '../blog/SubscribeBtn';

import LoadingLottie from './ui/LoadingLottie';

const BlogNav = () => {
  const { team } = useParams();

  const res = useGetNavList(team);

  if (!res) return <LoadingLottie width={10} height={10} fit />;

  const { data: navList } = res;

  return (
    <BlogNavContainer>
      {/* <div></div> */}
      {/* 위의 div 왜 넣어둔거지,,, */}
      {navList &&
        navList.map(({ navUrl, name, isPage, id }) => (
          <PageBtn key={navUrl}>
            {isPage === true ? (
              <Link href={`/${team}/content/page/${navUrl}/${id}`}>{name}</Link>
            ) : (
              <Link href={`${navUrl}`}>{name}</Link>
            )}
          </PageBtn>
        ))}
      <SubscribeBtn />
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

  @media screen and (max-width: 768px) {
    position: absolute;

    right: 4rem;
    width: 31.6rem;
  }
`;
