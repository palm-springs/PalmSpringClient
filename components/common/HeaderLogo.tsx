'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { SymbolIcon } from '@/public/icons';
interface LogoProp {
  logo: string | null;
  blogName: string;
}

const HeaderLogo = (prop: LogoProp) => {
  const { logo, blogName } = prop;
  return (
    <Link href={'/synthiablog/home'}>
      {logo ? (
        <>
          {/* <SymbolIcon /> */}
          {/* {실제 아이콘 src가 오면 밑의 코드로 대체예정입니다} */}
          <img src={logo} alt="team logo icon" height={24} />
        </>
      ) : (
        <BlogName>{blogName}</BlogName>
      )}
    </Link>
  );
};

export default HeaderLogo;

const BlogName = styled.div`
  ${({ theme }) => theme.fonts.Body1_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};
`;
