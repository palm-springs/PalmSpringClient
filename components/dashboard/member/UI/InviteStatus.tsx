'use client';

import React from 'react';
import styled from 'styled-components';

const InviteStatus = () => {
  return <InviteStatusContainer>초대 전송됨</InviteStatusContainer>;
};

export default InviteStatus;

const InviteStatusContainer = styled.div`
  ${({ theme }) => theme.fonts.Caption};
  border: 1px solid #eee;
  border-radius: 2.4rem;
  background-color: #fff;
  padding: 0.4rem 0.8rem;
  color: #40474f;
`;
