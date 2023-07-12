import React from 'react';
import { styled } from 'styled-components';

const IndexBarContainer = ({ children }: { children: React.ReactNode }) => {
  return <IndexBarUI>{children}</IndexBarUI>;
};

export default IndexBarContainer;

const IndexBarUI = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_400};
  width: 100%;
  height: 4rem;
`;
