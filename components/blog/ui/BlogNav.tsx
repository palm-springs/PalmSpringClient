'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import PageBtn from '@/components/blog/PageBtn';

import SubscribeBtn from '../SubscribeBtn';

interface navProps {
  navList: {
    name: string;
    navUrl: string;
  }[];
}

const BlogNav = (prop: navProps) => {
  const { navList } = prop;

  //유효성 검사
  // if (!navList) return <div>로더</div>;

  return (
    <BlogNavContainer>
      {navList &&
        navList.map((eachPage) => (
          <PageBtn key={eachPage.navUrl}>
            <Link href={`../content/${eachPage.navUrl}`}>{eachPage.name}</Link>
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
