'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

interface FlexContainerProps {
  children: ReactNode;
  margin: string;
}

const FlexContainer = (props: FlexContainerProps) => {
  const { children, margin } = props;
  return <Container $margin={margin}>{children}</Container>;
};

export default FlexContainer;

const Container = styled.div<{ $margin: string }>`
  display: flex;
  flex-direction: column;

  margin: ${({ $margin }) => `${$margin}`};

  width: 34.8rem;
`;
