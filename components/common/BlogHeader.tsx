'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import { HamburgerIcon } from '@/public/icons';
import { HeaderProps } from '@/types/blogHeader';

import BlogNav from './BlogNav';
import HeaderLogo from './HeaderLogo';

const BlogHeader = (props: HeaderProps) => {
  const { logo, blogName } = props;

  const MOBILE = useMediaQuery({
    query: '(min-width : 375px) and (max-width:768px)',
  });

  if (MOBILE)
    return (
      <BlogHeaderContainer className="mobile">
        <HeaderLogo logo={logo} blogName={blogName} />
        {/* <BlogNav /> */}
        <MenuIcon type="button" />
      </BlogHeaderContainer>
    );
  else
    return (
      <BlogHeaderContainer>
        <HeaderLogo logo={logo} blogName={blogName} />
        <BlogNav />
      </BlogHeaderContainer>
    );
};

export default BlogHeader;

const BlogHeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-around;
  backdrop-filter: blur(18px);
  z-index: 10;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_300};
  background-color: rgba(255, 255, 255, 0.75);

  padding: 1.2rem 0;
  width: 100vw;
  height: 6rem;

  &.mobile {
    justify-content: space-between;
    padding: 1.2rem 1.6rem 1.2rem 2.4rem;
  }
`;

const MenuIcon = styled(HamburgerIcon)`
  border: none;

  width: 4rem;
  height: 4rem;
`;
