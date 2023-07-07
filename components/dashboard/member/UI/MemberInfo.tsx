'use client';

import React from 'react';
import styled from 'styled-components';

import MemberDetail from './MemberDetail';
import MemberNameBox from './MemberNameBox';

const MemberInfo = () => {
  return (
    <MemberInfoContainer>
      <MemberNameBox />
      <MemberDetail />
    </MemberInfoContainer>
  );
};

export default MemberInfo;

const MemberInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: flex-start;
`;
