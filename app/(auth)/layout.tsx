'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

import { PalmsBlogLogoVectorIcon } from '@/public/icons';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <PalmsBlogLogoVectorIcon />

      {children}
    </Container>
  );
};

export default layout;
const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey_100};

  width: 100vw;
  height: 100vh;

  overflow-x: hidden;

  & > svg {
    position: absolute;
    top: 3.2rem;
    left: 5.6rem;
    width: 120px;
  }

  @media (max-height: 515px) {
    height: fit-content;
  }
`;
