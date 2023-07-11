'use client';
import styled from 'styled-components';

import { CloseIcon } from '@/public/icons';

interface EmailBoxProps {
  email: string;
  handleCloseClick: (email: string) => void;
}

const EmailBox = (props: EmailBoxProps) => {
  const { email, handleCloseClick } = props;

  return (
    <EmailBoxContainer>
      {email}
      <CloseButton type="button" onClick={() => handleCloseClick(email)}>
        <CloseIcon />
      </CloseButton>
    </EmailBoxContainer>
  );
};

export default EmailBox;

const EmailBoxContainer = styled.div`
  ${({ theme }) => theme.fonts.Body1_Regular};

  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_300};

  padding: 0 0.8rem 0 1.2rem;
  height: 3.6rem;

  color: ${({ theme }) => theme.colors.grey_900};
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;

  cursor: pointer;
  padding: 0;

  width: 2rem;

  svg {
    pointer-events: none;
  }
`;
