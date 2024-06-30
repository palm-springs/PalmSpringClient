/** @jsxImportSource @emotion/react */
'use client';

import { useEffect } from 'react';
import { css } from '@emotion/react';
import { easeIn, easeInOut, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import useCheckMobile from '@/hooks/useCheckMobile';
import { PalmsBlogLogoVectorIcon } from '@/public/icons';

const main = css`
  overflow-x: hidden;
  text-align: center;
  color: #343a40;
  text-wrap: balance;
`;
const header = css`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 999;
  border-bottom: 1px solid #e9ecef;
  background: #fff;
  width: 100%;
  height: 60px;
`;
const inside_header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  width: 100%;
  max-width: calc(1080px + 1.5rem + 1.5rem);
`;
const logo = css`
  width: 120px;
  height: auto;
  margin-top: 4px;
`;
const menu_container = css`
  display: flex;
  gap: 16px;
  @media (max-width: 576px) {
    display: none;
  }
`;
const menu_button = (color) => {
  return css`
    position: relative;
    border: none;
    border-radius: 8px;
    background: ${color ? '#000' : '#FFF'};
    cursor: pointer;
    padding: 8px 16px;
    color: ${color ? '#FFF' : '#000'};
    font-size: 16px;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      transform: scale(0.97);
      transition: 0.15s;
      opacity: 0;
      border-radius: inherit;
      background-color: #2c333a;
      width: 100%;
      height: 100%;
      content: '';
      pointer-events: none;
    }
    &:nth-of-type(1):hover {
      &::before {
        transform: none;
        opacity: 0.1;
      }
    }
    &:nth-of-type(1):active {
      &::before {
        transform: none;
        opacity: 0.16;
      }
    }
  `;
};
const entrance_container = css`
  display: flex;
  gap: 4rem;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  // margin-top: 8rem;
  padding-top: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
  &::after {
    height: 100%;
    width: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(
      240.42% 109.49% at 38% 32.75%,
      #fff 0%,
      rgba(238, 249, 242, 0.7) 42.76%,
      rgba(174, 199, 247, 0.13) 74.88%,
      rgba(186, 152, 202, 0.5) 97.5%
    );
    z-index: 1;
    mix-blend-mode: multiply;
  }
`;
const entrance_image = css`
  transform-origin: right center;
  z-index: 1;
  width: 100%;
  max-width: 500px;
  @media (max-width: 768px) {
    margin-top: -100px;
    max-width: 400px;
    margin-left: 40px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 40%;
      background: linear-gradient(180deg, white -8.37%, rgba(255, 255, 255, 0) 100%);
      z-index: 1;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60%;
      background: linear-gradient(10deg, white -8.37%, rgba(255, 255, 255, 0) 100%);
      z-index: 1;
    }
  }
`;
const entrance_title_container = css`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
    // padding-bottom: 2rem;
  }
`;
const entrance_title_title = css`
  line-height: 140%;
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.3rem;
  row-gap: 0;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
const entrance_title_desc = css`
  margin-top: 16px;
  color: #868e96;
  font-size: 1.25rem;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const main_cta = css`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  border: none;
  border-radius: 999px;
  background: #000;
  cursor: pointer;
  padding: 10px 12px 10px 20px;
  color: #fff;
  font-size: 18px;
`;
const feature_container = css`
  // margin-top: 12rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:nth-of-type(odd) {
    background: #f8f9fa;
  }
  padding: 0 3rem;
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
  @media (max-width: 576px) {
    padding: 4rem 1.5rem 3rem;
    align-items: flex-start;
  }
`;
const feature_title = css`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  line-height: 130%;
  font-size: 2.5rem;
  font-weight: 600;
  @media (max-width: 768px) {
    // flex-direction: column;
    flex-wrap: wrap;
    gap: 0.6rem;
    row-gap: 0rem;
    font-size: 2.2rem;
  }
  @media (max-width: 576px) {
    font-size: 1.8rem;
    gap: 0.3rem;
    row-gap: 0rem;
    justify-content: flex-start;
  }
`;
const feature_description = css`
  margin-top: 1rem;
  margin-right: 0.8rem;
  margin-left: 0.8rem;
  line-height: 150%;
  color: #868e96;
  font-size: 1.125rem;
  @media (max-width: 576px) {
    font-size: 1rem;
    margin: 0.5rem 0 0 0;
    text-align: left;
  }
`;
const feature_cta = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.8rem;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #1a9b6f;
  font-size: 1.125rem;
  font-weight: 500;
  @media (max-width: 576px) {
    margin-top: 0.5rem;
  }
`;
const feature_graphic_one_column_container = css`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  align-items: center;
  margin-top: 2.2rem;
  width: 100%;
  @media (max-width: 768px) {
    align-items: flex-start;
    margin-right: 0.8rem;
    margin-left: 0.8rem;
  }
  @media (max-width: 576px) {
    margin-right: 0;
    margin-left: 0;
`;

const feature_graphic_two_column_container = css`
  display: flex;
  flex-direction: row;
  gap: 2.25rem;
  align-items: center;
  margin-top: 2.2rem;
  max-width: 900px;

  @media (max-width: 768px) {
    max-width: 500px;
    align-items: flex-start;
    // margin-right: 0.8rem;
    // margin-left: 0.8rem;
    flex-direction: column;
  }
  @media (max-width: 576px) {
    gap: 1.5rem;
    margin-top: 1.8rem;
  }
`;
const feature_graphic_seo = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background: radial-gradient(59% 70% at 50% 84%, rgba(66, 119, 181, 0.2) 0%, rgba(66, 77, 181, 0) 100%), #2b2b3b;
  width: 100%;
  max-width: 900px;
  height: 300px;
  & > div {
    display: flex;
    gap: 3rem;
    align-items: flex-start;
    justify-content: center;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      align-items: center;
      color: #fff;
      @media (max-width: 768px) {
        gap: 1rem;
      }
    }
    & > div > div:nth-of-type(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 6px solid #00d059;
      border-radius: 999px;
      background: #143327;
      width: 100px;
      height: 100px;
      & > div {
        color: #00d059;
        font-family: 'Fira Code', monospace;
        font-size: 2rem;
        font-weight: 500;
        @media (max-width: 768px) {
          font-size: 1.2rem;
        }
      }
      @media (max-width: 768px) {
        border-width: 4px;
        width: 60px;
        height: 60px;
      }
    }
    & > div > div:nth-of-type(2) {
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
    @media (max-width: 768px) {
      gap: 1rem;
    }
  }
  @media (max-width: 768px) {
    height: 250px;
  }
`;
const feature_graphic_customize = css`
  border-radius: 1rem;
  background: #f4f5f8;
  width: 100%;
  max-width: 900px;
  min-height: 300px;
  overflow: hidden;
  position: relative;
  > img {
    padding-bottom: 1rem;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(180deg, rgba(244, 245, 248, 0) 0%, rgba(244, 245, 248, 1) 27%);
    z-index: 1;
    @media (max-width: 576px) {
      bottom: -40px;
      height: 50%;
    }
  }
`;

const feature_graphic_invitation = css`
  border-radius: 1rem;
  background: #f4f5f8;
  width: 100%;
  max-width: 900px;
  // min-height: 300px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 576px) {
    min-height: 200px;
    justify-content: flex-start;
  }
  > img {
    transform: scale(1.1);
    min-height: 200px;
    min-width: 700px;
    @media (max-width: 576px) {
      margin-left: -3rem;
      // transform: scale(1.3);
    }
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background: linear-gradient(180deg, rgba(244, 245, 248, 0) 0%, rgba(244, 245, 248, 1) 90%);
    z-index: 1;
  }
`;

const feature_graphic_design = css`
  border-radius: 1rem;
  background: #f4f5f8;
  width: 100%;
  max-width: 900px;
  // min-height: 300px;
  overflow: hidden;
  position: relative;
  > img {
    margin-bottom: -5px;
  }
`;
const feature_sub_container = css`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
`;
const feature_sub_wrapper = css`
  width: 100%;
  // max-width: 380px;
  position: absolute;
  padding: 1.2rem;
  bottom: 0;
  z-index: 1;
  @media (max-width: 768px) {
    max-width: unset;
  }
`;
// const feature_graphic_two_column_container = css`
//   display: flex;
//   gap: 1rem;
//   justify-content: center;
//   margin-top: 2.2rem;
//   & > div:nth-of-type(1) {
//     background-image: url('/images/design-branding.png');
//     background-repeat: no-repeat;
//     background-size: 600px;
//     @media (max-width: 768px) {
//       background-position: 0% 20%;
//       background-size: 450px;
//     }
//   }
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;
const feature_graphic_two_column_each = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 1rem;
  background: #f8f9fa;
  padding: 24px;
  width: 450px;
  height: 380px;
  @media (max-width: 768px) {
    margin-right: 0.8rem;
    margin-left: 0.8rem;
    width: unset;
  }
`;
const feature_sub_title = css`
  text-align: left;
  line-height: 140%;
  color: #343a40;
  font-size: 1.125rem;
  font-weight: 600;
`;
const feature_sub_desc = css`
  margin-top: 0.4rem;
  text-align: left;
  line-height: 140%;
  color: #868e96;
  font-size: 1rem;
`;
const text_gradient_green = css`
  background: linear-gradient(90deg, #38c771 -8.37%, #277663 205.4%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const text_gradient_blue = css`
  background: linear-gradient(90deg, #5f54d9 -8.37%, #131e43 205.4%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const text_blue = css`
  color: #2f4ca9;
`;
const text_green = css`
  color: #1a9b6f;
`;
const notice_title = css`
  font-size: 2rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
const gray_row_container = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  margin-top: 3rem;
  @media (max-width: 768px) {
    margin-right: 0.8rem;
    margin-left: 0.8rem;
  }
`;
const gray_row_each = css`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  border-radius: 1rem;
  background: #f8f9fa;
  padding: 1rem 1.5rem;
  width: 100%;
  max-width: 640px;
  text-align: left;
  line-height: 140%;
  font-size: 1.125rem;
  font-weight: 500;
  & > svg {
    flex-shrink: 0;
    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem 1.2rem;
    font-size: 1rem;
  }
`;
const notice_container = css`
  margin-top: 12rem;
`;
const contact_container = css`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 10rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-right: 0.8rem;
    margin-left: 0.8rem;
  }
`;
const contact_each = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e9ecef;
  border-radius: 1rem;
  box-shadow:
    0px 0px 1px 0px rgba(7, 7, 92, 0.06),
    0px 3.2px 16px 0px rgba(41, 91, 150, 0.05),
    0px 16px 22px 5px rgba(24, 170, 126, 0.04);
  padding: 1.2rem 1.5rem;
  width: 400px;
  max-width: 100%;
  height: 200px;
  text-align: left;
`;
const contact_each_title = css`
  line-height: 160%;
  color: #868e96;
  font-size: 1rem;
  font-weight: 500;
`;
const contact_each_desc = css`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;
const info_chip = css`
  border-radius: 99px;
  background: rgba(25, 219, 123, 0.1);
  padding: 7px 10px;
  color: #1a9b6f;
  font-size: 0.875rem;
`;
const overflow_x_container = css`
  margin-top: 3rem;
  width: 100%;
  overflow: auto;
  white-space: nowrap;
`;
const comparison_table = css`
  margin: 0 auto;
  box-shadow:
    0px 0px 1px 0px rgba(7, 7, 92, 0.06),
    0px 3.2px 16px 0px rgba(41, 91, 150, 0.05),
    0px 16px 22px 5px rgba(24, 170, 126, 0.04);
  table-layout: fixed;
  border-collapse: collapse;
  font-size: 1.125rem;
  font-weight: 500;
  & td {
    border: 1px solid #e9ecef;
    padding: 1rem;
  }
  & td:nth-of-type(1) {
    border-right: 2px solid #19db7b;
  }
  & td:nth-of-type(2) {
    border-right: 2px solid #19db7b;
    background: rgba(25, 219, 123, 0.05);
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    & > thead > tr > td {
      min-width: 120px !important;
    }
  }
`;

const footer = css`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  background: #f8f9fa;
  padding: 2.5rem 0 4rem 0;
  text-align: left;
  font-weight: 500;
  @media (max-width: 768px) {
    padding: 2.4rem 0 3rem 0;
  }
`;

const footer_inside = css`
  width: 100%;
  max-width: calc(1080px + 1.5rem + 1.5rem);
  padding: 0 1.5rem;
`;

const footer_inside_flex_container = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  & > div {
    width: 50%;
  }
  @media (max-width: 768px) {
    margin-top: 0.6rem;
    gap: 0.4rem;
    flex-direction: column-reverse;
    & > div {
      width: 100%;
    }
  }
`;

const seo_feature_sub_wrapper = css`
  width: 100%;
  max-width: 360px;
  min-width: 300px;
  @media (max-width: 768px) {
    max-width: unset;
  }
`;

const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
const GOOGLE_END_POINT = 'https://accounts.google.com/o/oauth2/v2/auth';

const LandingPage = ({ dashboardUrl }: { dashboardUrl: string }) => {
  const router = useRouter();

  const MOBILE = useCheckMobile();

  return (
    <main css={main}>
      <header css={header}>
        <div css={inside_header}>
          <div css={logo}>
            <PalmsBlogLogoVectorIcon />
          </div>
          <div css={menu_container}>
            {dashboardUrl ? (
              <Link href={dashboardUrl} css={menu_button(true)}>
                대시보드
              </Link>
            ) : (
              <>
                <Link href="/login" css={menu_button(false)}>
                  로그인
                </Link>
                <Link href="/sign-up" css={menu_button(true)}>
                  무료로 시작하기
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <div css={entrance_container}>
        <div css={entrance_image}>
          {MOBILE ? (
            <motion.img
              src="/images/entrance-image.png"
              alt="대문 이미지"
              initial={{ opacity: 0, transform: 'perspective(600px) rotateX(25deg) rotateZ(2deg) scale(1.3)' }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, transform: 'perspective(800px) rotateX(15deg) rotateZ(0deg) scale(1)' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{ width: '100%' }}
            />
          ) : (
            <motion.img
              src="/images/entrance-image.png"
              alt="대문 이미지"
              initial={{ opacity: 0, transform: 'perspective(500px) rotateY(30deg) scale(1.5)' }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, transform: 'perspective(1000px) rotateY(10deg) scale(1)' }}
              transition={{ duration: 1 }}
              style={{ width: '100%' }}
            />
          )}
        </div>
        <motion.div
          css={entrance_title_container}
          initial={{ opacity: 0, transform: 'y(100)' }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, transform: 'y(0)' }}
          transition={{ duration: 1, delay: 0.4 }}>
          <div css={entrance_title_title}>
            <span>오직 우리 팀만의 블로그. </span>
            <span>가장 쉽고 빠르게 만들기.</span>
          </div>
          <div css={entrance_title_desc}>최고의 팀 블로그 빌더로 지금 바로 만들어보세요.</div>
          <button css={main_cta}>
            <Link href="/sign-up">무료로 시작하기</Link>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 18.5L15 12.5L9 6.5"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>

      <motion.div
        css={feature_container}
        initial={{ opacity: 0, transform: 'translateY(100px)' }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration: 0.6 }}>
        <div css={feature_title}>
          <div>
            온전히 <span css={text_gradient_blue}>우리 것만</span> 보이는,
          </div>{' '}
          우리만의 블로그
        </div>
        <button
          css={feature_cta}
          onClick={() => {
            sessionStorage?.setItem('redirectUrl', '/create-blog');
            router.push('/login');
          }}>
          <div>블로그 개설하기</div>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 18.5L15 12.5L9 6.5"
              stroke="#1A9B6F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* <div css={feature_graphic_two_column_container}>
                  <div css={feature_graphic_two_column_each}>
                      <div css={feature_sub_title}>브랜딩 요소를 입혀 독립형 블로그로 꾸며보세요.</div>
                      <div css={feature_sub_desc}>헤더와 푸터, 오픈그래프 메타데이터까지 모두 자유롭게 설정할 수 있어요.</div>
                  </div>
                  <div css={feature_graphic_two_column_each}>
                      <div css={feature_sub_title}>블로그의 어디에서도 palms.blog의 로고는 찾아볼 수 없어요.</div>
                      <div css={feature_sub_desc}>우리 블로그는 오직 우리 브랜드에만 기여해야 하니까요.</div>
                  </div>
              </div> */}
        <div css={feature_graphic_two_column_container}>
          <div css={feature_graphic_customize}>
            <motion.img
              src="/images/customized-blog.gif"
              alt=""
              css={css`
                margin-top: -10px;
                width: 100%;
                @media (max-width: 768px) {
                  margin-top: -24px;
                }
              `}
              initial={{ opacity: 0, transform: 'translateY(80px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <div css={feature_sub_wrapper}>
              <div css={feature_sub_title}>브랜딩 요소를 입혀 독립형 블로그로 꾸며보세요.</div>
              <div css={feature_sub_desc}>헤더와 푸터, 오픈그래프 메타데이터까지 모두 자유롭게 설정할 수 있어요.</div>
            </div>
          </div>
          <div css={feature_graphic_customize}>
            <motion.img
              src="/images/no-palms.gif"
              alt=""
              css={css`
                margin-top: -10px;
                margin-bottom: 10px;
                width: 100%;
                @media (max-width: 768px) {
                  margin-top: -40px;
                  margin-bottom: 40px;
                }
              `}
              initial={{ opacity: 0, transform: 'translateY(80px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <div css={feature_sub_wrapper}>
              <div css={feature_sub_title}>블로그의 어디에서도 palms.blog의 로고는 찾아볼 수 없어요.</div>
              <div css={feature_sub_desc}>우리 블로그는 오직 우리 브랜드에만 기여해야 하니까요.</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        css={feature_container}
        initial={{ opacity: 0, transform: 'translateY(100px)' }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration: 0.6 }}>
        <div css={feature_title}>
          놀랍도록 완벽한 <span css={text_gradient_green}>검색엔진 최적화</span>
        </div>
        <a href="https://official.palms.blog/feature-seo" target="_blank" rel="noopener noreferrer">
          <button css={feature_cta}>
            <div>SEO 설명 문서 보기</div>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 18.5L15 12.5L9 6.5"
                stroke="#1A9B6F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </a>
        <div css={feature_graphic_one_column_container}>
          <div css={feature_graphic_seo}>
            <div>
              <motion.div
                initial={{ opacity: 0, transform: 'scale(1.05)' }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, transform: 'scale(1)' }}
                transition={{ duration: 0.7, delay: 0.5 }}>
                <div>
                  <div>100</div>
                </div>
                <div>Performance</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, transform: 'scale(1.05)' }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, transform: 'scale(1)' }}
                transition={{ duration: 0.7, delay: 0.6 }}>
                <div>
                  <div>100</div>
                </div>
                <div>Accessibility</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, transform: 'scale(1.05)' }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, transform: 'scale(1)' }}
                transition={{ duration: 0.7, delay: 0.7 }}>
                <div>
                  <div>100</div>
                </div>
                <div>
                  Best
                  <br />
                  Practices
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, transform: 'scale(1.05)' }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, transform: 'scale(1)' }}
                transition={{ duration: 0.7, delay: 0.8 }}>
                <div>
                  <div>100</div>
                </div>
                <div>SEO</div>
              </motion.div>
            </div>
          </div>
          <div css={feature_sub_container}>
            <div css={seo_feature_sub_wrapper}>
              <div css={feature_sub_title}>최고 수준의 SEO를 경험해보세요.</div>
              <div css={feature_sub_desc}>Technical SEO와 서버사이드 렌더링(SSR)이 모두 완벽하게 지원돼요.</div>
            </div>
            <div css={seo_feature_sub_wrapper}>
              <div css={feature_sub_title}>아무것도 설정할 필요가 없어요.</div>
              <div css={feature_sub_desc}>콘텐츠 작성에만 집중하실 수 있도록, 모든 세팅을 알아서 관리해드릴게요.</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        css={feature_container}
        initial={{ opacity: 0, transform: 'translateY(100px)' }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration: 0.6 }}>
        <div css={feature_title}>
          <span css={text_gradient_blue}>팀원들과 함께</span> 운영하는 블로그
        </div>
        <a href="https://official.palms.blog/feature-invitation" target="_blank" rel="noopener noreferrer">
          <button css={feature_cta}>
            <div>팀원 초대 기능 자세히 보기</div>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 18.5L15 12.5L9 6.5"
                stroke="#1A9B6F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </a>
        <div css={feature_graphic_one_column_container}>
          <div css={feature_graphic_invitation}>
            <motion.img
              src="/images/invite.gif"
              alt="초대 예시 이미지"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              css={css`
                margin-bottom: -3px;
                // box-shadow: 0 0 10px 0 rgba(64, 71, 79, 0.1);
                // width: 100%;
              `}
            />
          </div>
          <div css={feature_sub_container}>
            <div css={seo_feature_sub_wrapper}>
              <div css={feature_sub_title}>팀원을 초대해 함께 아티클을 업로드하고 블로그를 관리하세요.</div>
              <div css={feature_sub_desc}>팀원들을 인원 수 제한 없이 마음껏 초대할 수 있어요.</div>
            </div>
            <div css={seo_feature_sub_wrapper}>
              <div css={feature_sub_title}>구글 로그인으로도, 회사 이메일로도 간편하게 사용할 수 있어요.</div>
              <div css={feature_sub_desc}>어떤 이메일로든 3초만에 가입해보세요.</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        css={feature_container}
        initial={{ opacity: 0, transform: 'translateY(100px)' }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration: 0.6 }}>
        <div css={feature_title}>간결하고 아름다운 디자인</div>
        <div css={feature_description}>어떤 서비스에서도 경험할 수 없는 아름다운 디자인의 블로그를 만들어보세요.</div>
        <div css={feature_graphic_one_column_container}>
          <div
            css={[
              feature_graphic_design,
              css`
                // height: 400px;
                box-shadow: 0 0 16px 0 rgba(64, 71, 79, 0.1);
                @media (max-width: 576px) {
                  min-height: 200px;
                  justify-content: flex-start;
                  > img {
                    height: 201px;
                    width: 552px;
                    margin-left: 0rem;
                  }
                }
                margin-bottom: 1rem;
              `,
            ]}>
            <motion.img
              src="/images/design.gif"
              alt="아름다운 디자인 예시"
              css={css`
                box-shadow: 0 0 10px 0 rgba(64, 71, 79, 0.1);
                width: 100%;
              `}
              viewport={{ once: true }}
            />
          </div>
        </div>
        <a href="https://duckduck.palms.blog" target="_blank" rel="noopener noreferrer">
          <button css={feature_cta}>
            <div>블로그 구경하기</div>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 18.5L15 12.5L9 6.5"
                stroke="#1A9B6F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </a>
      </motion.div>

      <motion.div
        css={notice_container}
        initial={{ opacity: 0, transform: 'translateY(100px)' }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration: 0.6 }}>
        <div css={notice_title}>곧 더 많은 기능들이 추가돼요</div>
        <div css={gray_row_container}>
          <div css={gray_row_each}>
            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.9375 4.5625H4.0625C3.63152 4.5625 3.2182 4.7337 2.91345 5.03845C2.6087 5.3432 2.4375 5.75652 2.4375 6.1875V20.8125C2.4375 21.2435 2.6087 21.6568 2.91345 21.9615C3.2182 22.2663 3.63152 22.4375 4.0625 22.4375H21.9375C22.3685 22.4375 22.7818 22.2663 23.0865 21.9615C23.3913 21.6568 23.5625 21.2435 23.5625 20.8125V6.1875C23.5625 5.75652 23.3913 5.3432 23.0865 5.03845C22.7818 4.7337 22.3685 4.5625 21.9375 4.5625ZM6.90625 10.25C6.6652 10.25 6.42957 10.1785 6.22915 10.0446C6.02873 9.91069 5.87252 9.72034 5.78027 9.49765C5.68803 9.27495 5.66389 9.0299 5.71092 8.79348C5.75794 8.55707 5.87402 8.33991 6.04446 8.16946C6.21491 7.99902 6.43207 7.88294 6.66848 7.83592C6.9049 7.78889 7.14995 7.81303 7.37265 7.90527C7.59534 7.99752 7.78569 8.15373 7.9196 8.35415C8.05352 8.55457 8.125 8.7902 8.125 9.03125C8.125 9.35448 7.9966 9.66448 7.76804 9.89304C7.53948 10.1216 7.22948 10.25 6.90625 10.25ZM10.9688 10.25C10.7277 10.25 10.4921 10.1785 10.2916 10.0446C10.0912 9.91069 9.93502 9.72034 9.84277 9.49765C9.75053 9.27495 9.72639 9.0299 9.77342 8.79348C9.82044 8.55707 9.93652 8.33991 10.107 8.16946C10.2774 7.99902 10.4946 7.88294 10.731 7.83592C10.9674 7.78889 11.2124 7.81303 11.4351 7.90527C11.6578 7.99752 11.8482 8.15373 11.9821 8.35415C12.116 8.55457 12.1875 8.7902 12.1875 9.03125C12.1875 9.35448 12.0591 9.66448 11.8305 9.89304C11.602 10.1216 11.292 10.25 10.9688 10.25Z"
                fill="#868E96"
              />
            </svg>
            <div>
              <span css={text_green}>커스텀 도메인</span>을 연결하고 완전히 독립적인 블로그로 사용할 수 있어요.
            </div>
          </div>
          <div css={gray_row_each}>
            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.5008 5.00325C23.5008 5.00325 23.5008 5.0134 23.5008 5.01848L17.5899 24.5124C17.5004 24.829 17.3162 25.1107 17.0621 25.3196C16.8079 25.5286 16.4959 25.6548 16.168 25.6814C16.1213 25.6854 16.0745 25.6875 16.0278 25.6875C15.7205 25.6884 15.4193 25.6014 15.1598 25.4368C14.9003 25.2721 14.6933 25.0366 14.5633 24.7582L10.9365 17.1014C10.9007 17.0256 10.8892 16.9407 10.9035 16.8581C10.9179 16.7756 10.9574 16.6995 11.0167 16.6403L16.8322 10.8238C16.9781 10.6702 17.0583 10.4656 17.0556 10.2538C17.0529 10.0419 16.9675 9.83947 16.8177 9.68964C16.6679 9.53981 16.4654 9.45444 16.2536 9.45173C16.0417 9.44902 15.8371 9.52918 15.6835 9.67512L9.85892 15.4906C9.79972 15.5499 9.72363 15.5894 9.64109 15.6038C9.55854 15.6181 9.47357 15.6066 9.39782 15.5708L1.78064 11.9623C1.48148 11.8252 1.22972 11.6025 1.05724 11.3223C0.88476 11.042 0.799317 10.7169 0.811731 10.3881C0.828273 10.0501 0.950627 9.72591 1.16149 9.46128C1.37236 9.19665 1.66107 9.00499 1.98681 8.9134L21.4807 3.00246H21.4959C21.7735 2.92449 22.0668 2.92175 22.3458 2.99454C22.6247 3.06733 22.8793 3.21303 23.0834 3.41668C23.2874 3.62033 23.4336 3.87461 23.507 4.15342C23.5803 4.43223 23.5782 4.72553 23.5008 5.00325Z"
                fill="#868E96"
              />
            </svg>
            <div>
              구독자를 모으고 <span css={text_green}>뉴스레터</span>를 발송할 수 있어요.
            </div>
          </div>
        </div>
        <div
          css={css`
            margin-top: 4rem;
            color: #868e96;
            font-size: 1.125rem;
          `}>
          <div>더 필요한 기능이 있나요?</div>
          <button css={feature_cta}>
            <div>
              <a href="https://tally.so/r/w4rjGk" target="_blank" rel="noopener noreferrer">
                기능 제안하기
              </a>
            </div>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 18.5L15 12.5L9 6.5"
                stroke="#1A9B6F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </motion.div>

      <motion.div
        css={notice_container}
        initial={{ opacity: 0, transform: 'translateY(100px)' }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration: 0.6 }}>
        <div css={notice_title}>
          <span style={{ fontFamily: 'Outfit' }}>palms.blog</span>가 특별한 이유
        </div>
        <div css={overflow_x_container}>
          <table css={comparison_table}>
            <thead>
              <tr>
                <td style={{ minWidth: '360px' }}></td>
                <td
                  style={{
                    minWidth: '140px',
                    borderTop: '2px solid #19DB7B',
                    fontWeight: '700',
                    fontFamily: 'Outfit',
                  }}>
                  palms.blog
                </td>
                <td style={{ minWidth: '140px' }}>Wordpress</td>
                <td style={{ minWidth: '140px' }}>Ghost</td>
                <td style={{ minWidth: '140px' }}>Medium</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '0.4rem' }}>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.4425 6.06705L8.44254 16.067C8.38449 16.1252 8.31556 16.1713 8.23969 16.2027C8.16381 16.2342 8.08248 16.2504 8.00035 16.2504C7.91821 16.2504 7.83688 16.2342 7.76101 16.2027C7.68514 16.1713 7.61621 16.1252 7.55816 16.067L3.18316 11.692C3.06588 11.5748 3 11.4157 3 11.2499C3 11.084 3.06588 10.9249 3.18316 10.8077C3.30044 10.6904 3.4595 10.6245 3.62535 10.6245C3.7912 10.6245 3.95026 10.6904 4.06753 10.8077L8.00035 14.7413L17.5582 5.18267C17.6754 5.0654 17.8345 4.99951 18.0003 4.99951C18.1662 4.99951 18.3253 5.0654 18.4425 5.18267C18.5598 5.29995 18.6257 5.45901 18.6257 5.62486C18.6257 5.79071 18.5598 5.94977 18.4425 6.06705Z"
                        fill="#1A9B6F"
                      />
                    </svg>
                    <div>팀 블로그 운영에 적합한가요?</div>
                  </div>
                </td>
                <td>O</td>
                <td>X</td>
                <td>X</td>
                <td>O</td>
              </tr>
              <tr>
                <td>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '0.4rem' }}>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.4425 6.06705L8.44254 16.067C8.38449 16.1252 8.31556 16.1713 8.23969 16.2027C8.16381 16.2342 8.08248 16.2504 8.00035 16.2504C7.91821 16.2504 7.83688 16.2342 7.76101 16.2027C7.68514 16.1713 7.61621 16.1252 7.55816 16.067L3.18316 11.692C3.06588 11.5748 3 11.4157 3 11.2499C3 11.084 3.06588 10.9249 3.18316 10.8077C3.30044 10.6904 3.4595 10.6245 3.62535 10.6245C3.7912 10.6245 3.95026 10.6904 4.06753 10.8077L8.00035 14.7413L17.5582 5.18267C17.6754 5.0654 17.8345 4.99951 18.0003 4.99951C18.1662 4.99951 18.3253 5.0654 18.4425 5.18267C18.5598 5.29995 18.6257 5.45901 18.6257 5.62486C18.6257 5.79071 18.5598 5.94977 18.4425 6.06705Z"
                        fill="#1A9B6F"
                      />
                    </svg>
                    <div>SEO 최적화가 잘 되어있나요?</div>
                  </div>
                </td>
                <td>O</td>
                <td>X</td>
                <td>O</td>
                <td>X</td>
              </tr>
              <tr>
                <td>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '0.4rem' }}>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.4425 6.06705L8.44254 16.067C8.38449 16.1252 8.31556 16.1713 8.23969 16.2027C8.16381 16.2342 8.08248 16.2504 8.00035 16.2504C7.91821 16.2504 7.83688 16.2342 7.76101 16.2027C7.68514 16.1713 7.61621 16.1252 7.55816 16.067L3.18316 11.692C3.06588 11.5748 3 11.4157 3 11.2499C3 11.084 3.06588 10.9249 3.18316 10.8077C3.30044 10.6904 3.4595 10.6245 3.62535 10.6245C3.7912 10.6245 3.95026 10.6904 4.06753 10.8077L8.00035 14.7413L17.5582 5.18267C17.6754 5.0654 17.8345 4.99951 18.0003 4.99951C18.1662 4.99951 18.3253 5.0654 18.4425 5.18267C18.5598 5.29995 18.6257 5.45901 18.6257 5.62486C18.6257 5.79071 18.5598 5.94977 18.4425 6.06705Z"
                        fill="#1A9B6F"
                      />
                    </svg>
                    <div>독립적인 자체 블로그를 만들 수 있나요?</div>
                  </div>
                </td>
                <td>O</td>
                <td>X</td>
                <td>O</td>
                <td>X</td>
              </tr>
              <tr>
                <td>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '0.4rem' }}>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.4425 6.06705L8.44254 16.067C8.38449 16.1252 8.31556 16.1713 8.23969 16.2027C8.16381 16.2342 8.08248 16.2504 8.00035 16.2504C7.91821 16.2504 7.83688 16.2342 7.76101 16.2027C7.68514 16.1713 7.61621 16.1252 7.55816 16.067L3.18316 11.692C3.06588 11.5748 3 11.4157 3 11.2499C3 11.084 3.06588 10.9249 3.18316 10.8077C3.30044 10.6904 3.4595 10.6245 3.62535 10.6245C3.7912 10.6245 3.95026 10.6904 4.06753 10.8077L8.00035 14.7413L17.5582 5.18267C17.6754 5.0654 17.8345 4.99951 18.0003 4.99951C18.1662 4.99951 18.3253 5.0654 18.4425 5.18267C18.5598 5.29995 18.6257 5.45901 18.6257 5.62486C18.6257 5.79071 18.5598 5.94977 18.4425 6.06705Z"
                        fill="#1A9B6F"
                      />
                    </svg>
                    <div>블로그로 사용하기에 편리한가요?</div>
                  </div>
                </td>
                <td>O</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '0.4rem' }}>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.4425 6.06705L8.44254 16.067C8.38449 16.1252 8.31556 16.1713 8.23969 16.2027C8.16381 16.2342 8.08248 16.2504 8.00035 16.2504C7.91821 16.2504 7.83688 16.2342 7.76101 16.2027C7.68514 16.1713 7.61621 16.1252 7.55816 16.067L3.18316 11.692C3.06588 11.5748 3 11.4157 3 11.2499C3 11.084 3.06588 10.9249 3.18316 10.8077C3.30044 10.6904 3.4595 10.6245 3.62535 10.6245C3.7912 10.6245 3.95026 10.6904 4.06753 10.8077L8.00035 14.7413L17.5582 5.18267C17.6754 5.0654 17.8345 4.99951 18.0003 4.99951C18.1662 4.99951 18.3253 5.0654 18.4425 5.18267C18.5598 5.29995 18.6257 5.45901 18.6257 5.62486C18.6257 5.79071 18.5598 5.94977 18.4425 6.06705Z"
                        fill="#1A9B6F"
                      />
                    </svg>
                    <div>한글 작성 경험이 탁월한가요?</div>
                  </div>
                </td>
                <td>O</td>
                <td>X</td>
                <td>X</td>
                <td>X</td>
              </tr>
              <tr>
                <td>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '0.4rem' }}>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.4425 6.06705L8.44254 16.067C8.38449 16.1252 8.31556 16.1713 8.23969 16.2027C8.16381 16.2342 8.08248 16.2504 8.00035 16.2504C7.91821 16.2504 7.83688 16.2342 7.76101 16.2027C7.68514 16.1713 7.61621 16.1252 7.55816 16.067L3.18316 11.692C3.06588 11.5748 3 11.4157 3 11.2499C3 11.084 3.06588 10.9249 3.18316 10.8077C3.30044 10.6904 3.4595 10.6245 3.62535 10.6245C3.7912 10.6245 3.95026 10.6904 4.06753 10.8077L8.00035 14.7413L17.5582 5.18267C17.6754 5.0654 17.8345 4.99951 18.0003 4.99951C18.1662 4.99951 18.3253 5.0654 18.4425 5.18267C18.5598 5.29995 18.6257 5.45901 18.6257 5.62486C18.6257 5.79071 18.5598 5.94977 18.4425 6.06705Z"
                        fill="#1A9B6F"
                      />
                    </svg>
                    <div>브랜딩 요소 커스텀이 가능한가요?</div>
                  </div>
                </td>
                <td style={{ borderBottom: '2px solid #19DB7B' }}>O</td>
                <td>O</td>
                <td>O</td>
                <td>X</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* 적절한 질문이 없어 지금은 삭제 */}
      {/* <motion.div
        css={notice_container}
        initial={{ opacity: 0, transform: 'translateY(100px)' }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration: 0.6 }}>
        <div css={notice_title}>자주 묻는 질문</div>
        <div css={gray_row_container}>
          <div
            css={[
              gray_row_each,
              css`
                flex-direction: column;
                align-items: flex-start;
              `,
            ]}>
            <p
              css={css`
                display: flex;
                gap: 0.6rem;
              `}>
              <span css={text_blue}>Q.</span>
              <span>블로그의 운영 측면에서의 안정성은 보장되나요?</span>
            </p>
            <p
              css={css`
                display: flex;
                gap: 0.6rem;
              `}>
              <span css={text_green}>A.</span>
              <span style={{ fontWeight: '400' }}>
                palms.blog의 운영 안정성은 훌륭한 편에 속합니다. 만에 하나 서버 상의 문제가 발생한다고 하더라도 수 분
                내에 해결되고 있습니다.
                <br />
                또한 블로그 운영 중단 계획은 전혀 없으나, 불가피하게 운영을 중단하게 되는 경우 모든 유저분들께서 타
                빌더/플랫폼으로 쉽게 마이그레이션하실 수 있도록 백업 데이터를 제공해드릴 계획입니다.
              </span>
            </p>
          </div>
          <div
            css={[
              gray_row_each,
              css`
                flex-direction: column;
                align-items: flex-start;
              `,
            ]}>
            <p
              css={css`
                display: flex;
                gap: 0.6rem;
              `}>
              <span css={text_blue}>Q.</span>
              <span>palms.blog는 무료인가요?</span>
            </p>
            <p
              css={css`
                display: flex;
                gap: 0.6rem;
              `}>
              <span css={text_green}>A.</span>
              <span style={{ fontWeight: '400' }}>
                블로그 개설, 헤더/푸터 커스터마이징, 팀원 초대 등 현재 palms.blog에서 제공되는 모든 기능은 무료입니다.
                <br />
                추후 업데이트될 커스텀 도메인 연결 및 구독/뉴스레터 기능은 유료 요금제에서 사용하실 수 있습니다.
              </span>
            </p>
          </div>
        </div>
      </motion.div> */}

      <motion.div
        css={contact_container}
        initial={{ opacity: 0, transform: 'translateY(100px)' }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration: 0.6 }}>
        <div css={contact_each}>
          <div css={contact_each_title}>
            다른 블로그 서비스를 쓰고 계신가요?
            <br />
            <span style={{ color: '#343A40' }}>콘텐츠 마이그레이션</span>까지 책임져드릴게요.
          </div>
          <div css={contact_each_desc}>
            <div css={info_chip}>30분 이내 답변</div>
            <a href="https://tally.so/r/w8d14l" target="_blank" rel="noopener noreferrer">
              <button
                css={[
                  feature_cta,
                  css`
                    margin: 0.5rem 0 0 0.25rem;
                  `,
                ]}>
                <div>도입 문의하기</div>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 18.5L15 12.5L9 6.5"
                    stroke="#1A9B6F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div css={contact_each}>
          <div css={contact_each_title}>
            <span style={{ color: '#343A40' }}>피드백을 남겨주세요.</span>
            <br />
            여러분의 목소리가 매일 반영됩니다.
          </div>
          <div css={contact_each_desc}>
            <div css={info_chip}>24시간 이내 답변</div>
            <a href="https://tally.so/r/w4rjGk" target="_blank" rel="noopener noreferrer">
              <button
                css={[
                  feature_cta,
                  css`
                    margin: 0.5rem 0 0 0.25rem;
                  `,
                ]}>
                <div>기능 요청 / 피드백 보내기</div>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 18.5L15 12.5L9 6.5"
                    stroke="#1A9B6F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </motion.div>

      <div style={{ marginTop: '8rem' }}>
        <button css={main_cta}>
          <Link href="/sign-up">
            <span style={{ fontFamily: 'Outfit' }}>palms.blog</span> 무료로 시작하기
          </Link>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 18.5L15 12.5L9 6.5"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <footer css={footer}>
        <div css={footer_inside}>
          <span style={{ fontSize: '0.875rem' }}>Copyright ⓒ 서울연락단. All Rights Reserved</span>
          <div css={footer_inside_flex_container}>
            <div>
              <div
                style={{
                  color: '#8C8C8C',
                  fontSize: '0.8rem',
                  fontWeight: '400',
                  marginTop: '0.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}>
                <div>사업자등록번호 : 109-28-54938 | 대표자 : 김대덕</div>
                <div>호스팅서비스 : 아마존웹서비스(AWS)</div>
                <div>서울특별시 마포구 하중동 101, 102-1802</div>
              </div>
            </div>
            <div
              style={{
                color: '#8C8C8C',
                fontSize: '0.8rem',
                fontWeight: '400',
                marginTop: '0.8rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}>
              <div>
                <a href="https://tally.so/r/w4rjGk" target="_blank" rel="noopener noreferrer">
                  이용 문의
                </a>
              </div>
              <div>
                <a href="https://official.palms.blog" target="_blank" rel="noopener noreferrer">
                  공식 블로그
                </a>
              </div>
              <div>
                <a href="/team" target="_blank" rel="noopener noreferrer">
                  만드는 사람들
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
