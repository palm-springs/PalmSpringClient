import React from 'react';
import { styled } from 'styled-components';

interface CreatedAtProps {
  createdAt: string;
  isContentBar?: boolean;
}

const CreatedAt = (props: CreatedAtProps) => {
  const { createdAt, isContentBar } = props;

  return (
    <CreatedAtUI $isContentBar={isContentBar ?? false}>
      {createdAt.length > 10 ? createdAt.slice(0, 10) : createdAt}
    </CreatedAtUI>
  );
};

export default CreatedAt;

const CreatedAtUI = styled.span<{ $isContentBar: boolean }>`
  ${({ theme }) => theme.fonts.Body3_Regular};
  width: ${({ $isContentBar }) => ($isContentBar ? '13rem' : '7.2rem')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_900};
`;
