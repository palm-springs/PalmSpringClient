/** @jsxImportSource @emotion/react */
'use client';
import { useEffect } from 'react';
import { css } from '@emotion/react';
import AOS from 'aos';

import client from '@/api';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import { DOMAIN_NAME } from '@/constants/palmspringInfo';

import 'aos/dist/aos.css';

const gradient_background = css`
  position: absolute;
  top: 0;
  z-index: -10;
  background-image: url('/images/home_bg_gradient.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 734px;
  @media (max-width: 575px) {
    display: none;
  }
`;
const main = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 160px 0 280px 0;
  padding: 0 16px;
  text-align: center;
  @media (max-width: 575px) {
    margin-top: 140px;
  }
`;
const title = css`
  margin: 20px 0 0 0;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  line-height: 1.3;
  word-break: keep-all;
  font-size: 80px;
  font-weight: 700;
  @media (max-width: 575px) {
    font-size: 40px;
  }
`;
const subtitle = css`
  color: #adb5bd;
  font-size: 32px;
  font-weight: 500;
  @media (max-width: 575px) {
    font-size: 20px;
  }
`;
const main_button = css`
  transition: 0.2s;
  margin-top: 48px;
  border-radius: 20px;
  background: #343a40;
  padding: 20px 30px;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  &:hover {
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.16));
    background: #19db7b;
  }
  @media (max-width: 575px) {
    padding: 18px 26px;
    font-size: 20px;
  }
`;
const example_image = css`
  margin-top: 80px;
  width: 1002px;
  @media (max-width: 575px) {
    margin-top: 40px;
    width: 100%;
  }
`;
const feature_image_container = css`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  align-items: center;
  transition: all 0.2s linear;
  cursor: default;
  &:hover {
    transform: scale(1.08);
  }
  & > div:nth-of-type(2) {
    text-align: left;
  }
  @media (max-width: 575px) {
    flex-direction: column-reverse;
    gap: 10px;
    & > div:nth-of-type(2) {
      text-align: center !important;
    }
  }
`;
const feature_title = css`
  width: 500px;
  line-height: 140%;
  font-size: 36px;
  font-weight: 700;
  @media (max-width: 575px) {
    width: 100%;
    font-size: 26px;
  }
`;
const link_container = css`
  & > h1 {
    margin: 60px 0 0 0;
    font-size: 52px;
    font-weight: bold;
  }
  @media (max-width: 575px) {
    & > h1 {
      margin: 40px auto 0 auto;
      width: 100%;
      font-size: 36px;
    }
  }
`;
const link_wrapper = css`
  display: flex;
  gap: 20px;
  justify-content: center;
  & > a {
    transition: all 0.1s linear;
    opacity: 0.5;
    font-size: 24px;
    &:hover {
      opacity: 1;
    }
    & > img {
      border-radius: 24px;
      box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);
      width: 100px;
    }
  }
  @media (max-width: 575px) {
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    & > a {
      font-size: 18px;
      & > img {
        border-radius: 20px;
        box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);
        width: 76px;
      }
    }
  }
`;
const feature_image = css`
  border-radius: 24px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 480px;
  height: 320px;
  @media (max-width: 575px) {
    position: relative;
    margin: 0 auto;
    padding-bottom: 62%;
    width: 100%;
    height: 62%;
  }
`;
const why_they_use_container = css`
  display: flex;
  gap: 32px;
  justify-content: center;
  margin-top: 80px;
  & > div {
    border-radius: 24px;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);
    padding: 76px 0;
    width: 400px;
    text-align: center;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    & > div {
      margin: 0 auto;
      padding: 52px 0;
      width: 100%;
    }
  }
`;

const go_blog_button = css`
  display: flex;
  position: fixed;
  bottom: 75px;
  left: 50%;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, 0);
  z-index: 999;
  border-radius: 26px;

  background: radial-gradient(95.78% 95.78% at 50% 50%, rgba(18, 35, 54, 0.8) 0%, rgba(26, 49, 75, 0.67) 100%);
  width: 223px;
  height: 52px;

  color: white;
  font-family: Pretendard;

  font-size: 18px;
  font-size: 1.8rem;
  font-weight: 600;
  font-style: normal;
`;

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
    });
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <div css={gradient_background} />
      <Header />
      <main css={main}>
        <h3 data-aos="fade-up" data-aos-duration="800" css={subtitle}>
          성장하는 조직을 위한 팀 블로그 빌더
        </h3>
        <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" css={title}>
          우리 팀 이야기를
          <br />
          세상에 전하는 방법
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="1200"
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}>
          <img src="/images/landing-main-image.png" alt="example landing main" css={example_image} />
          <a href="https://walla.my/palmspring_mind" target="_blank" rel="noopener noreferrer">
            <button css={main_button}>온보딩 예약하기</button>
          </a>
        </div>
        <div
          css={css`
            margin-top: 220px;
          `}>
          <div css={link_container} data-aos="fade-up">
            <div css={link_wrapper}>
              <a href="https://naver.worksmobile.com/blog/" target="_blank" rel="noopener noreferrer">
                <img src="/images/startups/naver.png" alt="naver" />
              </a>
              <a href="https://blog.kakaopay.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/startups/kakao.png" alt="kakao" />
              </a>
              <a href="https://engineering.linecorp.com/ko/blog" target="_blank" rel="noopener noreferrer">
                <img src="/images/startups/line.png" alt="line" />
              </a>
              <a href="https://about.daangn.com/blog/" target="_blank" rel="noopener noreferrer">
                <img src="/images/startups/dang.png" alt="dang" />
              </a>
              <a href="https://story.baemin.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/startups/baemin.png" alt="baemin" />
              </a>
              <a href="https://toss.tech/" target="_blank" rel="noopener noreferrer">
                <img src="/images/startups/toss.png" alt="toss" />
              </a>
              <a href="https://sendbird.com/ko/blog" target="_blank" rel="noopener noreferrer">
                <img src="/images/startups/sendbird.png" alt="sendbird" />
              </a>
            </div>
            <h1>요즘 잘 나가는 팀들이 팀 블로그를 쓰는 이유</h1>
          </div>
          <div css={why_they_use_container} data-aos="fade-up">
            <div
              css={css`
                transition: all 0.1s linear;
                background: #fff;
                cursor: default;
                &:hover {
                  transform: scale(1.05);
                  & > div:nth-of-type(2) {
                    color: #19db7b;
                  }
                  & > div:nth-of-type(3) {
                    color: #000;
                  }
                }
              `}>
              <div
                css={css`
                  color: #868e96;
                  font-size: 44px;
                  font-weight: 700;
                `}>
                방문자 수
              </div>
              <div
                css={css`
                  transition: all 0.1s linear;
                  margin-top: 16px;
                  font-size: 92px;
                  font-weight: 700;
                `}>
                +55%
              </div>
              <div
                css={css`
                  transition: all 0.1s linear;
                  margin-top: 24px;
                  line-height: 160%;
                  color: #adb5bd;
                `}>
                블로그를 운영하는 기업은 그렇지 않은 기업 대비
                <br />
                웹사이트 방문자가 55% 더 많습니다.
              </div>
            </div>
            <div
              css={css`
                transition: all 0.1s linear;
                background: #fff;
                cursor: default;
                &:hover {
                  transform: scale(1.05);
                  & > div:nth-of-type(2) {
                    color: #19db7b;
                  }
                  & > div:nth-of-type(3) {
                    color: #000;
                  }
                }
              `}>
              <div
                css={css`
                  color: #868e96;
                  font-size: 44px;
                  font-weight: 700;
                `}>
                트래픽 확산
              </div>
              <div
                css={css`
                  transition: all 0.1s linear;
                  margin-top: 16px;
                  font-size: 92px;
                  font-weight: 700;
                `}>
                +97%
              </div>
              <div
                css={css`
                  transition: all 0.1s linear;
                  margin-top: 24px;
                  line-height: 160%;
                  color: #adb5bd;
                `}>
                블로그를 운영하는 기업은 그렇지 않은 기업 대비
                <br />
                97% 더 많은 인바운드 링크를 획득합니다.
              </div>
            </div>
            <div
              css={css`
                transition: all 0.1s linear;
                background: #fff;
                cursor: default;
                &:hover {
                  transform: scale(1.05);
                  & > div:nth-of-type(2) {
                    color: #19db7b;
                  }
                  & > div:nth-of-type(3) {
                    color: #000;
                  }
                }
              `}>
              <div
                css={css`
                  color: #868e96;
                  font-size: 44px;
                  font-weight: 700;
                `}>
                고객 유치
              </div>
              <div
                css={css`
                  transition: all 0.1s linear;
                  margin-top: 16px;
                  font-size: 92px;
                  font-weight: 700;
                `}>
                +67%
              </div>
              <div
                css={css`
                  transition: all 0.1s linear;
                  margin-top: 24px;
                  line-height: 160%;
                  color: #adb5bd;
                `}>
                블로그를 운영하는 기업은 그렇지 않은 기업 대비
                <br />
                67% 더 많은 잠재 고객(리드)을 유치합니다.
              </div>
            </div>
          </div>
        </div>
        <div
          css={[
            css`
              margin-top: 220px;
              @media (max-width: 575px) {
                margin-top: 180px;
              }
            `,
            feature_image_container,
          ]}
          data-aos="fade-up">
          <div
            css={[
              css`
                background-image: url('/images/blog-graphic.png');
              `,
              feature_image,
            ]}></div>
          <div>
            <div css={feature_title}>군더더기 없이 심플한 블로그에 팀원들과 함께 기록을 남겨보세요.</div>
            <div
              css={css`
                margin-top: 20px;
                font-size: 24px;
              `}></div>
          </div>
        </div>
        <div
          css={[
            feature_image_container,
            css`
              flex-direction: row-reverse;
              margin-top: 140px;
            `,
          ]}
          data-aos="fade-up">
          <div
            css={[
              css`
                background-image: url('/images/editor-graphic.png');
              `,
              feature_image,
            ]}></div>
          <div
            css={css`
              text-align: right;
              @media (max-width: 575px) {
                margin: 0 auto;
                width: 94%;
                text-align: center;
              }
            `}>
            <div
              css={[
                css`
                  width: 480px;
                `,
                feature_title,
              ]}>
              노션처럼 쉽고 강력한 에디터로 검색 엔진 최적화까지 누려보세요.
            </div>
            <div
              css={css`
                margin-top: 20px;
                font-size: 24px;
              `}></div>
          </div>
        </div>
        <div
          css={[
            css`
              margin-top: 140px;
            `,
            feature_image_container,
          ]}
          data-aos="fade-up">
          <div
            css={[
              css`
                background-image: url('/images/custom-domain-graphic.png');
              `,
              feature_image,
            ]}></div>
          <div>
            <div
              css={[
                css`
                  width: 520px;
                  @media (max-width: 575px) {
                    font-size: 26px;
                  }
                `,
                feature_title,
              ]}>
              우리 팀만의 커스텀 도메인을 통해 독립적인 블로그로 꾸며보세요.
            </div>
            {/* <div css={css`margin-top:20px;font-size:24px;`}></div> */}
          </div>
        </div>
        <div
          css={[
            feature_image_container,
            css`
              flex-direction: row-reverse;
              margin-top: 140px;
            `,
          ]}
          data-aos="fade-up">
          <div
            css={[
              css`
                background-image: url('/images/news-letter-graphic.png');
              `,
              feature_image,
            ]}></div>
          <div>
            <div
              css={[
                css`
                  width: 520px;
                  @media (max-width: 575px) {
                    font-size: 26px;
                  }
                `,
                feature_title,
              ]}>
              자체 뉴스레터 관리 기능을 통해 가장 최신의 소식을 전해보세요.
            </div>
            {/* <div css={css`margin-top:20px;font-size:24px;`}></div> */}
          </div>
        </div>
        <div
          css={css`
            margin-top: 280px;
            @media (max-width: 575px) {
              margin-top: 180px;
            }
          `}
          data-aos="fade-up">
          <h1
            css={[
              title,
              css`
                font-size: 64px;
              `,
            ]}>
            이제, 우리 팀 이야기를 세상에 전하세요.
          </h1>
          <a href="https://walla.my/palmspring_mind" target="_blank" rel="noopener noreferrer">
            <button css={main_button}>온보딩 예약하기</button>
          </a>
        </div>
      </main>
      <Footer />
      <a href={`https://${DOMAIN_NAME}/official/home`}>
        <button css={go_blog_button}>팜스프링 블로그 보러가기</button>
      </a>
    </div>
  );
};

export default Home;
