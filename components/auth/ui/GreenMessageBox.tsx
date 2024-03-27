'use client';
import { ReactNode } from 'react';
import styled from 'styled-components';

const GreenMessageBox = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

export default GreenMessageBox;

const Box = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  margin-top: 1.4rem;

  border: 1px solid #a7edc9;
  border-radius: 1.6rem;
  background-color: #e1f6ea;

  padding: 2rem 0 2rem 2rem;

  line-height: 120%;
  color: ${({ theme }) => theme.colors.dark_green};
`;
