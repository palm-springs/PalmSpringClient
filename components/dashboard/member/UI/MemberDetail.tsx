'use client';

import React from 'react';
import styled from 'styled-components';

const MemberDetail = () => {
  return <MemberDetailContainer>문화 카테고리에 대한 한줄 소개... 우리 문화를 소개합니다...</MemberDetailContainer>;
};

export default MemberDetail;

const MemberDetailContainer = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_700};
`;
