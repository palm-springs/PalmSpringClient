/** @jsxImportSource @emotion/react */
'use client';

import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const header = (position: number) => {
  return css`
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;
    z-index: 10;
    background: transparent;
    width: 100%;
    height: 60px;
    ${position > 50 && 'background:rgba(255,255,255,0.75);backdrop-filter:blur(18px);'}
  `;
};
const inside_header = (position: number) => {
  return css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
    max-width: 1056px;
    color: #fff;
    @media (max-width: 768px) {
      padding: 0 20px;
    }
    ${position > 50 && 'color:var(--gray100);'}
  `;
};
const inside_header_left = (position: number) => {
  return css`
    display: flex;
    align-items: center;
    font-weight: 700;
    & > a > img {
      height: 24px;
      ${position > 50 && 'filter:invert(100%);'}
    }
    @media (max-width: 768px) {
      & > a > img {
        ${position > 50 && 'filter:invert(100%);'}
      }
    }
  `;
};
const inside_header_right = css`
  display: flex;
  gap: 16px;
  align-items: center;
  & > button {
    transition: 0.3s ease-in-out;
    color: inherit;
    &:hover {
      opacity: 0.8;
    }
  }
  & > button:last-of-type {
    color: #fff !important;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Header({ theme }: { theme: any }) {
  const [position, setPosition] = useState(theme == 'light' ? 101 : 0);

  useEffect(() => {
    if (theme == 'light') return;
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  function onScroll() {
    setPosition(window.scrollY);
  }

  return (
    <>
      <header css={header(position)}>
        <div css={inside_header(position)}>
          <div css={inside_header_left(position)}>
            <Link href="/">
              <Image src="/images/palmspring-text-logo-white.png" alt="palmspring logo" />
            </Link>
          </div>
          <div css={inside_header_right}>
            <button>팜스프링 팀 소개</button>
            <button
              css={css`
                background: var(--gray100) !important;
                padding: 8px 20px;
              `}>
              팀 블로그 만들기
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
