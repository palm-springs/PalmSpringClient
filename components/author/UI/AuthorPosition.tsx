'use client';

import React from 'react';
import styled from 'styled-components';

const AuthorPosition = () => {
  return <AuthorPositionContainer>Product Designer</AuthorPositionContainer>;
};

export default AuthorPosition;

const AuthorPositionContainer = styled.div`
  ${({ theme }) => theme.fonts.Heading3_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};
`;
