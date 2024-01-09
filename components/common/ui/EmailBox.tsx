'use client';
import styled from 'styled-components';

import { CloseIcon } from '@/public/icons';
import { emailData } from '@/types/member';

interface EmailBoxProps {
  emailData: emailData;
  idx: number;
  handleCloseClick: (targetIdx: number) => void;
}

const EmailBox = (props: EmailBoxProps) => {
  const {
    emailData: { emailValue, verification },
    idx,
    handleCloseClick,
  } = props;

  return (
    <EmailBoxContainer verification={verification}>
      <div>{emailValue}</div>
      <CloseButton type="button" onClick={() => handleCloseClick(idx)}>
        <CloseIcon />
      </CloseButton>
    </EmailBoxContainer>
  );
};

export default EmailBox;

const EmailBoxContainer = styled.div<{ verification: boolean }>`
  display: flex;
  position: relative;
  align-items: center;

  border-radius: 0.8rem;
  background-color: ${({ theme, verification }) => (verification ? theme.colors.grey_300 : theme.colors.red_alpha_20)};

  padding: 0.7rem 2.9rem 0.7rem 1rem;

  max-width: 100%;
  height: 100%;

  word-break: break-all;

  color: ${({ theme }) => theme.colors.grey_900};

  & > div {
    ${({ theme }) => theme.fonts.Body3_Regular};
  }
`;

const CloseButton = styled.button`
  display: flex;
  position: absolute;

  top: 0.4rem;
  right: 0.5rem;
  align-items: center;
  justify-content: center;
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
