'use client';

import React from 'react';
import styled from 'styled-components';

import FooterContact from './UI/FooterContact';

const BlogFooter = () => {
  return (
    <FooterContainer>
      <FooterContact />
      <FooterName>Palmspring © 2023</FooterName>
    </FooterContainer>
  );
};

export default BlogFooter;

const FooterContainer = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey_200};
  padding-top: 6rem;
  height: 30rem;
`;

const FooterName = styled.div`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  color: ${({ theme }) => theme.colors.grey_700};
`;
