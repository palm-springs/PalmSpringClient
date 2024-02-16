'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import PageBtn from '@/components/blog/PageBtn';
import { NavListOnly } from '@/types/blogHeader';

import SubscribeBtn from '../blog/SubscribeBtn';

interface BlogNavProps extends NavListOnly {
  blogName: string;
}

const BlogNav = (props: BlogNavProps) => {
  const { navList, blogName } = props;
  const { team } = useParams();

  return (
    <BlogNavContainer>
      {navList &&
        navList.map(({ navUrl, name, isPage, id }) => (
          <PageBtn key={navUrl}>
            <Link href={isPage ? `/content/page/${navUrl}/${id}` : `${navUrl}`} target={isPage ? '_self' : '_blank'}>
              {name}
            </Link>
          </PageBtn>
        ))}
      <SubscribeBtn blogName={blogName} team={team} />
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
