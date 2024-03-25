import React from 'react';
import { styled } from 'styled-components';

interface DescriptionProps {
  description: string;
}

const Description = (props: DescriptionProps) => {
  const { description } = props;

  return <DescriptionUI>{description}</DescriptionUI>;
};

export default Description;

const DescriptionUI = styled.span`
  ${({ theme }) => theme.fonts.Body3_Regular};
  max-width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.grey_700};
`;
