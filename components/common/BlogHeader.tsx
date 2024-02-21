'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';
import { HamburgerIcon } from '@/public/icons';
import { HeaderProps } from '@/types/blogHeader';

import BlogNav from './BlogNav';
import HeaderLogo from './HeaderLogo';
import SideBar from './SideBar';

const BlogHeader = (props: HeaderProps) => {
  const { logo, blogName, navList } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MOBILE = useCheckMobile();

  const sidebarToggle = () => setIsMenuOpen(!isMenuOpen);

  if (MOBILE)
    return (
      <BlogHeaderContainer className="mobile">
        <HeaderLogo logo={logo} blogName={blogName} />
        <BlurBackground className={isMenuOpen ? 'blur' : ''} onClick={sidebarToggle} />
        <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navList={navList} />
        <MenuIcon type="button" onClick={sidebarToggle} />
      </BlogHeaderContainer>
    );
  else
    return (
      <BlogHeaderContainer>
        <HeaderLogo logo={logo} blogName={blogName} />
        <BlogNav blogName={blogName} navList={navList} />
      </BlogHeaderContainer>
    );
};

export default BlogHeader;

const BlurBackground = styled.div`
  &.blur {
    position: fixed;
    top: 0;
    right: 0;
    transition: 0.1ms ease-in-out;
    opacity: 1;
    z-index: 2;
    background-color: rgba(64, 71, 79, 0.5);
    width: 100vw;
    height: 100vh;
  }
`;

const BlogHeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(18px);
  z-index: 10;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_300};
  background-color: rgba(255, 255, 255, 0.75);
  padding: 1.2rem max(calc((100vw - 100rem) / 2), 2.4rem);
  width: 100vw;
  min-width: 72rem;
  height: 6rem;

  &.mobile {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-backdrop-filter: blur(18px);
    justify-content: space-between;
    padding: 1.2rem 1.6rem 1.2rem 2.4rem;
    min-width: 0;
  }
`;

const MenuIcon = styled(HamburgerIcon)`
  border: none;
  width: 4rem;
  height: 4rem;
`;
