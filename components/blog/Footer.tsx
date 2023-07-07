'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <Link href="">Email</Link>
      <Link href="">Instagram</Link>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey_200};
  padding-top: 6rem;
  height: 30rem;
`;
