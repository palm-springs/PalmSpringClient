'use client';

import React from 'react';
import styled from 'styled-components';

const MemberManager = () => {
  return <MemberManagerContainer>관리자</MemberManagerContainer>;
};

export default MemberManager;

const MemberManagerContainer = styled.div`
  ${({ theme }) => theme.fonts.Caption};
  border: none;
  border-radius: 2.4rem;
  background-color: ${({ theme }) => theme.colors.grey_300};
  padding: 0.4rem 0.8rem;
`;
