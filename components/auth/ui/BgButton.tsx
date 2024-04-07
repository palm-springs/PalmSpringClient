'use client';
import { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

interface BgButtonProps {
  children: ReactNode;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
const BgButton = (props: BgButtonProps) => {
  const { children, disabled, onClick } = props;
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

export default BgButton;

const Button = styled.button`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  display: flex;
  align-items: center;
  justify-content: center;

  transition: ease-in-out 0.3s;
  margin-top: 1.4rem;

  border: 1px solid ${({ theme }) => theme.colors.grey_900};

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.grey_900};

  cursor: pointer;

  width: 100%;
  height: 5.6rem;
  color: ${({ theme }) => theme.colors.grey_0};

  &:disabled {
    border: 1px solid ${({ theme }) => theme.colors.grey_400};
    background-color: ${({ theme }) => theme.colors.grey_700};
    cursor: default;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.grey_950};
  }
`;
