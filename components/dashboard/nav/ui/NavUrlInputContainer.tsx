import React from 'react';
import { styled } from 'styled-components';

const NavUrlInputContainer = ({ children }: { children: React.ReactNode }) => {
  return <NavUrlInputUI>{children}</NavUrlInputUI>;
};

export default NavUrlInputContainer;

const NavUrlInputUI = styled.article`
  position: relative;
`;
