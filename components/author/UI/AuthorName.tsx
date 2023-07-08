'use client';

import React from 'react';
import styled from 'styled-components';

const AuthorName = () => {
  return <AuthorNameContainer>김성은</AuthorNameContainer>;
};

export default AuthorName;

const AuthorNameContainer = styled.div`
  ${({ theme }) => theme.fonts.Heading1};
  margin-top: 2.4rem;
  color: ${({ theme }) => theme.colors.grey_900};
`;
