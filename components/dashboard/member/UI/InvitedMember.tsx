'use client';

import React from 'react';
import styled from 'styled-components';

const InvitedMember = () => {
  return <InvitedMemberContainer>초대전송됨</InvitedMemberContainer>;
};

export default InvitedMember;

const InvitedMemberContainer = styled.div`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  margin-right: 4.7rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 2rem;
  padding: 0.4rem 1.2rem;
  color: ${({ theme }) => theme.colors.grey_900};
`;
