'use client';

import React from 'react';
import styled from 'styled-components';

import FooterContact from './ui/FooterContact';

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
  gap: 3.6rem;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.grey_200};
  padding-top: 7.2rem;
  padding-bottom: 7.2rem;
  min-width: 105.6rem;
`;

const FooterName = styled.div`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  color: ${({ theme }) => theme.colors.grey_700};
`;
