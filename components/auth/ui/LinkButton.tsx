'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const LinkButton = ({ children, href }: { children: ReactNode; href: string }) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};

export default LinkButton;

const StyledLink = styled(Link)`
  ${({ theme }) => theme.fonts.Body3_Regular};
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 3.6rem;

  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;
