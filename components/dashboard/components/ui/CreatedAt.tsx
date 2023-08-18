import React from 'react';
import { styled } from 'styled-components';

interface CreatedAtProps {
  createdAt: string;
}

const CreatedAt = (props: CreatedAtProps) => {
  const { createdAt } = props;

  return <CreatedAtUI>{createdAt.length > 10 ? createdAt.slice(0, 10) : createdAt}</CreatedAtUI>;
};

export default CreatedAt;

const CreatedAtUI = styled.span`
  ${({ theme }) => theme.fonts.Body3_Regular};
  width: 13rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_900};
`;
