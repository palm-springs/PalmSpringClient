'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

const Contour = ({ children }: { children: ReactNode }) => {
  return (
    <ContourContainer>
      <hr />
      {children}
      <hr />
    </ContourContainer>
  );
};

export default Contour;

const ContourContainer = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  display: flex;

  gap: 1.1rem;
  justify-content: space-between;

  margin: 2rem 0 2.4rem;

  & > hr {
    border: none;
    background: ${({ theme }) => theme.colors.grey_400};
    width: 100%;
    height: 1px;
  }
`;
