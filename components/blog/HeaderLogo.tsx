'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
// import { SymbolIcon } from '@/public/icons';
interface LogoProp {
  logo?: string;
  blogName: string;
}

const HeaderLogo = (prop: LogoProp) => {
  const { logo, blogName } = prop;
  return (
    <Link href={'./home'}>
      {logo ? <img src={logo} alt="team logo icon" height={24} /> : <BlogName>{blogName}</BlogName>}
    </Link>
  );
};

{
  /* <SymbolIcon />; */
}

export default HeaderLogo;

const BlogName = styled.div`
  ${({ theme }) => theme.fonts.Body1_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};
`;
