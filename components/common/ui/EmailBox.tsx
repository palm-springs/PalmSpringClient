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
      <span>{email}</span>
      <CloseButton type="button" onClick={() => handleCloseClick(email)}>
        <CloseIcon />
      </CloseButton>
    </EmailBoxContainer>
  );
};

export default EmailBox;

const EmailBoxContainer = styled.div`
  display: flex;

  ${({ theme }) => theme.fonts.Body1_Regular};

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_300};

  padding-left: 1rem;

  max-width: 100%;

  word-break: break-all;

  color: ${({ theme }) => theme.colors.grey_900};
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 0.4rem;
  margin-right: 0.5rem;

  border: none;
  background: none;

  cursor: pointer;
  padding: 0;

  width: 2rem;
  height: 2rem;

  svg {
    pointer-events: none;
  }
`;
