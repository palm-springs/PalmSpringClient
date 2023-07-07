'use client';

import React from 'react';
import styled from 'styled-components';

import { CharmMenuMeatballIcon } from '@/public/icons';

import MemberAbout from './MemberAbout';

const Member = () => {
  return (
    <MemberContainer>
      <MemberAbout />
      <CharmMenuMeatballIcon />
    </MemberContainer>
  );
};

export default Member;

const MemberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid ${({ theme }) => theme.colors.grey_300} 1px;
  padding: 1.6rem 0 1.6rem;
  height: 8.4rem;
`;
