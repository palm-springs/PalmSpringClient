'use client';

import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Title = ({ children }: { children: ReactNode }) => {
  return <H1>{children}</H1>;
};

export default Title;

const H1 = styled.h1`
  ${({ theme }) => theme.fonts.Heading1};

  margin-bottom: 4rem;
`;
