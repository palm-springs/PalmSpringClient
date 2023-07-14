'use client';

import React from 'react';
import styled from 'styled-components';

const Pending = () => {
  return <PendingContainer>수락대기중</PendingContainer>;
};

export default Pending;

const PendingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 2rem;

  padding: 0.4rem 1.2rem;

  width: 8.5rem;
  height: 2.5rem;

  color: ${({ theme }) => theme.colors.grey_700};
`;
