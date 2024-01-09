import React from 'react';
import { styled } from 'styled-components';

interface EmailProps {
  email: string;
}

const Email = (props: EmailProps) => {
  const { email } = props;

  return <EmailUI>{email}</EmailUI>;
};

export default Email;

const EmailUI = styled.span`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  max-width: 28rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_900};
`;
