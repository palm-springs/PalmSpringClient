import React from 'react';
import { styled } from 'styled-components';

interface PositionProps {
  position: string;
}

const Position = (props: PositionProps) => {
  const { position } = props;

  return <PositionUI>{position}</PositionUI>;
};

export default Position;

const PositionUI = styled.span`
  ${({ theme }) => theme.fonts.Body3_Regular};
  margin-right: 2rem;
  width: 12.4rem;
  height: 1.7rem;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_700};
`;
