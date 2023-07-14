'use client';

import React from 'react';
import styled from 'styled-components';

import MemberListHeader from './MemberListHeader';

const MemberBox = () => {
  return (
    <MemberBoxContainer>
      <MemberListHeader />
    </MemberBoxContainer>
  );
};

export default MemberBox;

const MemberBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
`;
