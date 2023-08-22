'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import PageBtn from '@/components/blog/PageBtn';
import { useGetBlogHeaderInfo } from '@/hooks/blogHome';

import SubscribeBtn from '../blog/SubscribeBtn';

import LoadingLottie from './ui/LoadingLottie';

const BlogNav = () => {
  const { team } = useParams();

  const res = useGetBlogHeaderInfo(team);

  if (!res) return <LoadingLottie width={10} height={10} fit />;

  const { data: data } = res;

  return (
    <BlogNavContainer>
      {data.navList &&
        data.navList.map(({ navUrl, name, isPage, id }) => (
          <PageBtn key={navUrl}>
            {isPage === true ? (
              <Link href={`/${team}/content/page/${navUrl}/${id}`}>{name}</Link>
            ) : (
              <Link href={`https://${navUrl}`}>{name}</Link>
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
