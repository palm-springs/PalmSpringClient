'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import PageBtn from '@/components/blog/PageBtn';

import SubscribeBtn from '../SubscribeBtn';

const BlogNav = () => {
  const PAGE_LIST: string[] = ['채용', '인스타그램'];

  return (
    <BlogNavContainer>
      {PAGE_LIST.map((eachPage) => (
        <PageBtn key={eachPage}>
          <Link href={''}>{eachPage}</Link>
        </PageBtn>
      ))}
      <SubscribeBtn />
    </BlogNavContainer>
  );
};

export default BlogNav;

const BlogNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 31.6rem;
`;
