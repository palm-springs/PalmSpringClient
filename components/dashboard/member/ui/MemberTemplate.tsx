'use client';

import React from 'react';
import styled from 'styled-components';

import MemberList from './MemberList';
import MemberListHeader from './MemberListHeader';

const MemberTemplate = () => {
  return (
    <MemberTemplateContainer>
      <MemberListHeader />
      <MemberList />
    </MemberTemplateContainer>
  );
};

export default MemberTemplate;

const MemberTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;

  margin-top: 1.2rem;
  margin-left: 4rem;

  width: 109rem;
`;
