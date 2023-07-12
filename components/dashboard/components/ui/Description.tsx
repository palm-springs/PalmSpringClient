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
  width: 30vw;
  max-width: 48.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;
