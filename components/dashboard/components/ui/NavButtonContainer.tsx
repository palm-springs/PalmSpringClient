import React from 'react';
import { styled } from 'styled-components';

interface NavButtonContainerProps {
  children: React.ReactNode;
  onNavButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const NavButtonContainer = (props: NavButtonContainerProps) => {
  const { children, onNavButtonClick, disabled } = props;

  return (
    <NavButtonUI type="button" onClick={onNavButtonClick} disabled={disabled}>
      {children}
    </NavButtonUI>
  );
};

export default NavButtonContainer;

const NavButtonUI = styled.button`
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_900};
`;
