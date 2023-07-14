import React from 'react';
import { styled } from 'styled-components';

interface ModalInputTextProps {
  text: string;
}

const ModalInputText = (props: ModalInputTextProps) => {
  const { text } = props;

  return <ModalInputTextUI>{text}</ModalInputTextUI>;
};

export default ModalInputText;

const ModalInputTextUI = styled.span`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};
`;
