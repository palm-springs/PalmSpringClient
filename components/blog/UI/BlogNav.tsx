'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import PageBtn from '@/components/blog/PageBtn';

import SubscribeBtn from '../SubscribeBtn';

// interface BlogNav {
//   pageList: string[];
// }

const BlogNav = () => {
  return (
    <BlogNavContainer>
      <PageBtn>
        <Link href={''}>채용</Link>
      </PageBtn>
      <PageBtn>
        <Link href={''}>인스타그램</Link>
      </PageBtn>
      <SubscribeBtn />
    </BlogNavContainer>
  );
};

export default BlogNav;

const BlogNavContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;
