'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import PageBtn from '@/components/blog/PageBtn';

import SubscribeBtn from '../blog/SubscribeBtn';

interface navProps {
  navList: {
    name: string;
    navUrl: string;
    isPage: boolean;
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
            {eachPage.isPage === true ? (
              <Link href={`/blogNameHere/content/${eachPage.navUrl}`}>{eachPage.name}</Link>
            ) : (
              <Link href={`${eachPage.navUrl}`}>{eachPage.name}</Link>
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
  align-items: center;
  justify-content: space-between;
  width: 31.6rem;
`;
