//대시보드 팀원 페이지
'use client';

import React from 'react';
import styled from 'styled-components';

import Member from '@/components/dashboard/member/UI/Member';
import MemberBoxHeader from '@/components/dashboard/member/UI/MemberBoxHeader';
import MemberList from '@/components/dashboard/member/UI/MemberList';

// export const runtime = 'edge';

function MemberPage() {
  return (
    <MemberPageContainer>
      <MemberBoxHeader />
      <MemberList>
        <Member />
        <Member />
        <Member />
        <Member />
      </MemberList>
    </MemberPageContainer>
  );
}

export default MemberPage;

const MemberPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
