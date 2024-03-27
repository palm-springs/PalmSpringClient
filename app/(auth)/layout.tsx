'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

import { LogoSmallIcon } from '@/public/icons';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <LogoSmallIcon />
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
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grey_100};

  width: 100vw;
  height: 100vh;

  & > svg {
    position: absolute;
    top: 3.2rem;
    left: 5.6rem;
  }

  @media (max-height: 515px) {
    height: fit-content;
  }
`;
