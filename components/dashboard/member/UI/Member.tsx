'use client';

import React from 'react';
import styled from 'styled-components';

import MeatballIcon from './MeatballIcon';
import MemberAbout from './MemberAbout';

const Member = () => {
  return (
    <MemberContainer>
      <MemberAbout name={'한유준'} status={'manager'} position={'TL'} email={'jung012@naver.com'} />
      <MeatballIcon />
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
  width: 115.3rem;
  height: 5.6rem;
`;
