import { ReactNode } from 'react';
import styled from 'styled-components';

const LoadingContainer = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default LoadingContainer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  & > div {
    margin-bottom: 10rem;
  }
`;
