/** @jsxImportSource @emotion/react */
'use client';

import { BiEnvelope, BiGlobe, BiLogoApple, BiLogoInstagram, BiLogoPlayStore } from 'react-icons/bi';
import { css } from '@emotion/react';
import Link from 'next/link';

const footer = css`
  margin-top: 200px;
  border-top: 1px solid #e9ecef;
  padding: 72px 0;
  text-align: center;
  color: #868e96;
  font-size: 14px;
  @media (max-width: 768px) {
    margin-top: 120px;
  }
`;
const contact_container = css`
  display: flex;
  gap: 24px;
  justify-content: center;
  font-size: 20px;
  & > a {
    transition: 0.3s ease-in-out;
    &:hover {
      color: #f8f9fa;
    }
  }
`;

const Footer = () => {
  return (
    <footer css={footer}>
      <div css={contact_container}>
        <Link href="/">
          <BiGlobe />
        </Link>
        <Link href="/">
          <BiEnvelope />
        </Link>
        <Link href="/">
          <BiLogoInstagram />
        </Link>
        <Link href="/">
          <BiLogoApple />
        </Link>
        <Link href="/">
          <BiLogoPlayStore />
        </Link>
      </div>
      <div style={{ marginTop: '24px' }}>Palmspring © 2023</div>
      <div style={{ marginTop: '24px' }}>
        Built with{' '}
        <a
          href="http://palmblog.site"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline' }}>
          Palmspring
        </a>
      </div>
    </footer>
  );
};

export default Footer;
