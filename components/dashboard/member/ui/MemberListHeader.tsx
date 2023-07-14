'use client';

import React from 'react';
import styled from 'styled-components';

const MemberListHeader = () => {
  return (
    <MemberListHeaderContainer>
      <Name>이름</Name>
      <Position>직책</Position>
      <Email>이메일</Email>
    </MemberListHeaderContainer>
  );
};

export default MemberListHeader;

const MemberListHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_400};

  width: 100%;
  height: 4rem;
`;
const Name = styled.div`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  width: 21rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;
const Position = styled.div`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  width: 10.4rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;
const Email = styled.div`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  color: ${({ theme }) => theme.colors.grey_700};
`;
