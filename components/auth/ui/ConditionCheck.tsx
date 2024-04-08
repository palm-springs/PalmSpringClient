'use client';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { BlackCheckIcon, GreenCheckIcon } from '@/public/icons';

interface ConditionCheckProps {
  children: ReactNode;
  isSatisfied: boolean;
}

const ConditionCheck = (props: ConditionCheckProps) => {
  const { children, isSatisfied } = props;
  return (
    <ConditionCheckContainer $isSatisfied={isSatisfied}>
      {isSatisfied ? <GreenCheckIcon /> : <BlackCheckIcon />}
      <span>{children}</span>
    </ConditionCheckContainer>
  );
};

export default ConditionCheck;

const ConditionCheckContainer = styled.div<{ $isSatisfied: boolean }>`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  margin-bottom: 1rem;

  & > span {
    ${({ theme }) => theme.fonts.Body3_Regular};
    color: ${({ $isSatisfied, theme }) => ($isSatisfied ? theme.colors.dark_green : theme.colors.grey_1000)};
  }
`;
