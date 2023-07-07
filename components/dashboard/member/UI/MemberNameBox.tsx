'use client';

import React from 'react';
import styled from 'styled-components';

import InviteStatus from './InviteStatus';
import MemberManager from './MemberManager';

const MemberNameBox = () => {
  return (
    <MemberNameBoxContainer>
      <MemberName>김대덕</MemberName>
      <MemberManager />
      <InviteStatus />
      {/* {manager ? <MemberManager /> : <InviteStatus/>} */}
    </MemberNameBoxContainer>
  );
};

export default MemberNameBox;

const MemberNameBoxContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const MemberName = styled.div`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};
`;
