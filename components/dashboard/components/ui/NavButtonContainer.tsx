import React from 'react';
import { styled } from 'styled-components';

interface NavButtonContainerProps {
  children: React.ReactNode;
  onNavButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

const NavButtonContainer = (props: NavButtonContainerProps) => {
  const { children, onNavButtonClick } = props;

  return (
    <NavButtonUI type="button" onClick={onNavButtonClick}>
      {children}
    </NavButtonUI>
  );
};

export default NavButtonContainer;

const NavButtonUI = styled.button`
  margin-bottom: 0.8rem;
`;
