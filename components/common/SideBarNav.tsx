'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import { useGetNavList } from '@/hooks/dashboard';

import LoadingLottie from './ui/LoadingLottie';

const SideBarNav = () => {
  const { team } = useParams();

  const res = useGetNavList(team);

  if (!res) return <LoadingLottie width={10} height={10} fit />;

  const { data: navList } = res;
  return (
    <BlogNavContainer>
      {navList &&
        navList.map(({ navUrl, name, isPage, id }) => (
          <NavBtn key={navUrl} type="button">
            {isPage === true ? (
              <Link href={`/${team}/content/page/${navUrl}/${id}`}>{name}</Link>
            ) : (
              <Link href={`https://${navUrl}`}>{name}</Link>
            )}
          </NavBtn>
        ))}
    </BlogNavContainer>
  );
};

export default SideBarNav;

const BlogNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 26.6rem;

  @media screen and (max-width: 768px) {
    position: absolute;

    right: 4rem;
    width: 31.6rem;
  }
`;

const NavBtn = styled.button`
  ${({ theme }) => theme.mobileFonts.Markdown_H3};
  padding: 1.2rem 2.4rem;
  width: 100%;
  height: 6rem;
`;
