'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import PageBtn from '@/components/blog/PageBtn';

import SubscribeBtn from '../blog/SubscribeBtn';

interface navProps {
  navList: {
    id: number;
    name: string;
    navUrl: string;
    isPage: boolean;
  }[];
}

const BlogNav = (prop: navProps) => {
  const { navList } = prop;
  const { team } = useParams();

  return (
    <BlogNavContainer>
      <div></div>
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
