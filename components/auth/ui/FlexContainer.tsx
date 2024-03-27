'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

interface FlexContainerProps {
  children: ReactNode;
}

const FlexContainer = (props: FlexContainerProps) => {
  const { children } = props;
  return <Container $pageType={'pageType'}>{children}</Container>;
};

export default FlexContainer;

const Container = styled.div<{ $pageType: string }>`
  display: flex;
  flex-direction: column;

  margin: auto 0;
  /* margin-top: 10rem; */

  width: 34.8rem;
`;
