/** @jsxImportSource @emotion/react */
'use client';

import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
// import AOS from 'aos';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { TEST_REDIRECT_URI } from '@/constants/Auth';

import 'aos/dist/aos.css';

const header = (position: number) => {
  return css`
    box-sizing: border-box;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    ${position > 520 &&
    'position: fixed;border-bottom: 1px solid #EEE;background: rgba(255,255,255,0.75);backdrop-filter: blur(18px);'}
    z-index: 10;
    width: 100%;
  `;
};
const header_inside = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  max-width: 1200px;
  height: 60px;
  @media (max-width: 575px) {
    padding: 0 8px 0 20px;
  }
`;
const logo = css`
  display: flex;
  align-items: center;
  color: #f8f9fa;
  font-size: 20px;
  & > img {
    height: 24px;
  }
`;
const header_button = css`
  transition: 0.2s;
  border-radius: 12px;
  background: #343a40;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background: #19db7b;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
// 브랜치테스트용
// const redirectUri = TEST_REDIRECT_URI;

const Header = () => {
  const pathname = usePathname();
  const [position, setPosition] = useState(0);
  const [screenX, setScreenX] = useState<number>(0);

  const GOOGLE_END_POINT = 'https://accounts.google.com/o/oauth2/v2/auth';

  useEffect(() => {
    setScreenX(document.body.scrollWidth);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', () => setScreenX(document.body.scrollWidth));
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', () => setScreenX(document.body.scrollWidth));
    };
  }, []);

  function onScroll() {
    setPosition(window.scrollY);
  }

  return (
    <header
      css={header(position)}
      data-aos={pathname !== '/team' && 'fade'}
      data-aos-duration="800"
      data-aos-delay="200"
      data-aos-once="true">
      <div css={header_inside}>
        <Link href="/">
          <div css={logo}>
            <img src="/images/palmspring_new_logo.png" alt="palmtree" />
          </div>
        </Link>
        <div
          css={css`
            display: flex;
            gap: 12px;
            align-items: center;
            @media (max-width: 1200px) {
              display: flex;
            }
          `}>
          {screenX >= 768 && (
            <Link
              href={`${GOOGLE_END_POINT}?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=code&scope=email profile`}
              css={[
                header_button,
                css`
                  background: transparent;
                  color: #343a40;
                  font-size: 16px;
                  &:hover {
                    background: rgba(0, 0, 0, 0.05);
                    color: #19db7b;
                  }
                  @media (max-width: 1200px) {
                    display: block;
                  }
                `,
              ]}>
              로그인
            </Link>
          )}
          <Link
            href="/team"
            css={[
              header_button,
              css`
                background: transparent;
                color: #343a40;
                font-size: 16px;
                &:hover {
                  background: rgba(0, 0, 0, 0.05);
                  color: #19db7b;
                }
                @media (max-width: 1200px) {
                  display: block;
                }
              `,
            ]}>
            팜스프링팀
          </Link>
          <a href="https://walla.my/palmspring_mind" target="_blank" rel="noopener noreferrer">
            <button css={header_button}>온보딩 예약하기</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
