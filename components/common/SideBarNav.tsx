'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import { useGetBlogHeaderInfo } from '@/hooks/blogHome';

import LoadingLottie from './ui/LoadingLottie';

const SideBarNav = () => {
  const { team } = useParams();

  const res = useGetBlogHeaderInfo(team);

  if (!res) return <LoadingLottie width={10} height={10} fit />;

  const {
    data: { navList },
  } = res;

  return (
    <BlogNavContainer>
      {navList &&
        navList.map(({ navUrl, name, isPage, id }) => (
          <NavBtn key={navUrl} type="button">
            <NavLink href={isPage ? `/content/page/${navUrl}/${id}` : `${navUrl}`}>{name}</NavLink>
          </NavBtn>
        ))}
    </BlogNavContainer>
  );
};

export default SideBarNav;

const NavLink = styled(Link)`
  ${({ theme }) => theme.mobileFonts.Markdown_H3};
  color: ${({ theme }) => theme.colors.grey_900};
`;

const BlogNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 26.6rem;
`;

const NavBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  padding: 1.2rem 2.4rem;
  width: 100%;
  height: 6rem;
`;
