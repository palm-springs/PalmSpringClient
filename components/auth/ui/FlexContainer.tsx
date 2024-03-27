'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

const FlexContainer = ({ children, width }: { children: ReactNode; width: number }) => {
  return <Container $width={width}>{children}</Container>;
};

export default FlexContainer;

const Container = styled.div<{ $width: number }>`
  display: flex;
  flex-direction: column;

  margin: 10rem 0;

  width: ${({ $width }) => `${$width}rem`};
`;
