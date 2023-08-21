'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const FooterContact = () => {
  return (
    <FooterContactContainer>
      <FooterTitle>Contact</FooterTitle>
      <FooterLinkContainer>
        <Link href="">Email</Link>
        <Link href="https://www.instagram.com/palmspring_official/">Instagram</Link>
      </FooterLinkContainer>
    </FooterContactContainer>
  );
};

export default FooterContact;

const FooterContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTitle = styled.div`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const FooterLinkContainer = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;
