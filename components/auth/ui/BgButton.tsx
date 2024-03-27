'use client';
import { ReactNode } from 'react';
import styled from 'styled-components';

const BgButton = ({ children }: { children: ReactNode }) => {
  return <Button>{children}</Button>;
};

export default BgButton;

const Button = styled.button`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.4rem;

  border-radius: 1.6rem;

  background-color: ${({ theme }) => theme.colors.grey_900};

  cursor: pointer;

  width: 100%;
  height: 5.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
