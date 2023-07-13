'use client';

import React from 'react';
import styled from 'styled-components';

const Manager = () => {
  return <ManagerContainer>관리자</ManagerContainer>;
};

export default Manager;

const ManagerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.dark_green};
  border-radius: 2rem;

  padding: 0.4rem 0.8rem;

  width: 5.3rem;
  height: 2.5rem;

  color: ${({ theme }) => theme.colors.dark_green};
`;
