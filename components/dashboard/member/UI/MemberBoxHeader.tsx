'use client';

import React from 'react';
import styled from 'styled-components';

import AddMemberBtn from '../AddMemberBtn';

const MemberBoxHeader = () => {
  return (
    <MemberBoxHeaderContainer>
      팀원
      <AddMemberBtn />
    </MemberBoxHeaderContainer>
  );
};

export default MemberBoxHeader;

const MemberBoxHeaderContainer = styled.div`
  ${({ theme }) => theme.fonts.Heading1};
  display: flex;
  justify-content: space-around;
  margin: 3.75rem 0 2rem 0;
  color: ${({ theme }) => theme.colors.grey_900};
`;
