/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';

const footer = css`
  background: #f2f4f6;
  padding: 20px 0 90px 0;
  width: 100%;
  text-align: center;
  color: #868b94;
  font-size: 14px;
  & > a {
    display: inline-block;
    margin-top: 14px;
  }
  @media (max-width: 575px) {
    padding: 60px 0;
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <footer css={footer}>
      Made by us with ☕️ and 💕
      <br />
      <br />
      <span
        css={css`
          font-weight: 600;
        `}>
        Copyright ⓒ 서울연락단. All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
