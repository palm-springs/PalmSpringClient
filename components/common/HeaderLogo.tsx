'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
interface LogoProp {
  logo: string | null;
  blogName: string;
}

const HeaderLogo = (prop: LogoProp) => {
  const { logo, blogName } = prop;
  const { team } = useParams();

  return (
    <Link href={`/${team}/home`}>
      {logo ? (
        <>
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
