'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import PageBtn from '@/components/blog/PageBtn';
import { useGetBlogHeaderInfo } from '@/hooks/blogHome';

import SubscribeBtn from '../blog/SubscribeBtn';

import LoadingLottie from './ui/LoadingLottie';

const BlogNav = () => {
  const { team } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
            <Link href={isPage ? `/${team}/content/page/${navUrl}/${id}` : `${navUrl}`}>{name}</Link>
          </PageBtn>
        ))}
      <SubscribeBtn modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} team={team} />
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
