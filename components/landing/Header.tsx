/** @jsxImportSource @emotion/react */
'use client';

import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
// import AOS from 'aos';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { PalmsBlogLogoVectorIcon } from '@/public/icons';

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
    padding: 0 20px;
  }
`;
const logo = css`
  display: flex;
  align-items: center;
  width: 120px;
  height: auto;
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
    background: #0c9b72;
  }
  @media (max-width: 575px) {
    display: none;
  }
`;

const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
const GOOGLE_END_POINT = 'https://accounts.google.com/o/oauth2/v2/auth';
// 브랜치테스트용
// const redirectUri = TEST_REDIRECT_URI;

const Header = ({ dashboardUrl }: { dashboardUrl?: string }) => {
  const pathname = usePathname();
  const [position, setPosition] = useState(0);
  const [screenX, setScreenX] = useState<number>(0);

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
        <div
          css={css`
            display: flex;
            align-items: center;
          `}>
          <Link href="/">
            <div css={logo}>
              <PalmsBlogLogoVectorIcon />
            </div>
          </Link>
          <a
            href="https://official.palms.blog"
            target="_blank"
            rel="noreferrer noopener"
            css={[
              header_button,
              css`
                margin-left: 20px;
                background: transparent;
                padding: 10px 14px;
                color: #8898a7;
                font-size: 16px;
                font-weight: 500;
                &:hover {
                  background: transparent;
                  color: #343a40;
                }
              `,
            ]}>
            공식 블로그
          </a>
          <a
            href="https://tally.so/r/w4rjGk"
            target="_blank"
            rel="noreferrer noopener"
            css={[
              header_button,
              css`
                margin-left: 12px;
                background: transparent;
                padding: 10px 14px;
                color: #8898a7;
                font-size: 16px;
                font-weight: 500;
                &:hover {
                  background: transparent;
                  color: #343a40;
                }
              `,
            ]}>
            이용 문의
          </a>
        </div>
        {/* <div
          css={css`
            display: flex;
            gap: 12px;
            align-items: center;
          `}>
          {dashboardUrl ? (
            <Link
              href={dashboardUrl}
              css={[
                header_button,
                css`
                  @media (min-width: 575px) {
                    display: flex;
                  }
                `,
              ]}>
              대시보드
            </Link>
          ) : (
            <Link href={`/login`}>
              <button
                css={[
                  header_button,
                  css`
                    @media (min-width: 575px) {
                      display: flex;
                    }
                  `,
                ]}>
                로그인
              </button>
            </Link>
          )}
        </div> */}
      </div>
    </header>
  );
};

export default Header;
