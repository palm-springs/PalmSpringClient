'use client';

import React from 'react';
import styled from 'styled-components';

import MemberInfo from './MemberInfo';
import MemberProfile from './MemberProfile';

const MemberAbout = () => {
  return (
    <MemberAboutContainer>
      <MemberProfile />
      <MemberInfo />
    </MemberAboutContainer>
  );
};

export default MemberAbout;

const MemberAboutContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;
