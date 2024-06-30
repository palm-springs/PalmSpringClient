/** @jsxImportSource @emotion/react */
'use client';

import { BiLinkAlt, BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';
import { css } from '@emotion/react';

import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';

import 'aos/dist/aos.css';

type TeamMember = {
  name: string;
  position: string;
  url: string[];
};
const ourBelovedTeammates: TeamMember[] = [
  {
    name: '김대덕',
    position: 'Team Leader',
    url: ['https://www.linkedin.com/in/daeduk-kim-712b88255/'],
  },
  {
    name: '양정윤',
    position: 'Product Manager',
    url: ['https://www.linkedin.com/in/jeong-yoon-yang-bbb490239/'],
  },
  {
    name: '김서현',
    position: 'FE Engineer',
    url: ['https://github.com/seobbang', 'https://www.linkedin.com/in/seohyun-kim-9784ab29a/'],
  },
  {
    name: '오형근',
    position: 'FE Engineer',
    url: ['https://github.com/Geun-Oh', 'https://www.linkedin.com/in/hyeonggeun-oh-760a5b240'],
  },
  {
    name: '장명지',
    position: 'FE Engineer',
    url: ['https://github.com/Dangpy', 'https://www.linkedin.com/in/myungji-jang-a84a752a8'],
  },
  {
    name: '이시연',
    position: 'FE Engineer',
    url: ['https://github.com/SynthiaLee', 'https://www.linkedin.com/in/synthia-lee-4b2969232/'],
  },
  {
    name: '장유진',
    position: 'BE Engineer',
    url: ['https://github.com/jinchiim', 'https://www.linkedin.com/in/eugene-jang-27b922291/'],
  },
  {
    name: '정동규',
    position: 'BE Engineer',
    url: ['https://github.com/yummygyudon', 'https://www.linkedin.com/in/%EB%8F%99%EA%B7%9C-%EC%A0%95-8a6b25226/'],
  },
  {
    name: '권윤',
    position: 'Product Designer',
    url: ['https://doongzi.kr/yoon'],
  },
  {
    name: '김성은',
    position: 'Product Designer',
    url: ['https://palms.blog'],
  },
  {
    name: '송승훈',
    position: 'Product Designer',
    url: [
      'https://big-camel-a35.notion.site/Leo-Song-2023-29feffece20f4d1592b6630070c4adee?pvs=4',
      'https://www.linkedin.com/in/seunghoon-leo-song-9130b9279/',
    ],
  },
];

const Team = () => {
  const main = css`
    background: #f2f4f6;
    padding: 160px 0 240px 0;
    text-align: center;
    font-family: 'Pretendard, sans-serif';
    font-weight: bold;
    @media (max-width: 800px) {
      padding: 160px 16px 120px 16px;
    }
  `;
  const title_container = css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    line-height: 160%;
    & > h1 {
      font-size: 40px;
    }
    & > div {
      margin-top: 12px;
      line-height: 160%;
      font-size: 16px;
      font-weight: lighter;
    }
  `;
  const profile_container = css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 32px;
    column-gap: 20px;
    margin: 68px auto 0 auto;
    width: 100%;
    max-width: 1100px;
    @media (max-width: 1340px) {
      grid-template-columns: 1fr 1fr 1fr;
      max-width: calc(260px * 3 + 20px * 2);
    }
    @media (max-width: 1060px) {
      grid-template-columns: 1fr 1fr;
      max-width: calc(260px * 2 + 20px * 1);
    }
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      row-gap: 24px;
      max-width: 100%;
    }
  `;
  const name_position_wrapper = css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 700;
    & > div:nth-of-type(2) {
      font-size: 16px;
      font-weight: normal;
    }
  `;
  const links_wrapper = css`
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 20px;
    color: #adb5bd;
    font-size: 20px;
    & > a {
      transition: 0.3s;
    }
    & > a.instagram:hover {
      color: #ff016e;
    }
    & > a.linkedin:hover {
      color: #0066c0;
    }
    & > a.github:hover {
      color: #000000;
    }
    & > a.link:hover {
      color: #0084f5;
    }
  `;
  const profile_wrapper = css`
    transition: all 0.2s linear;
    margin: 0 auto;
    border: 1px solid #eee;
    border-radius: 20px;
    box-shadow:
      0px 15px 20px 0px rgba(64, 71, 79, 0.08),
      0px 4px 8px 0px rgba(67, 78, 90, 0.04);
    background: #fff;
    padding: 16px 16px 30px 16px;
    width: 100%;
    max-width: 260px;
    &:hover {
      transform: scale(1.03);
      box-shadow:
        0px 10px 20px 0px rgba(64, 71, 79, 0.16),
        0px 2px 8px 0px rgba(67, 78, 90, 0.06);
    }
    /* & > div:nth-of-type(1) {
      position: relative;
      border-radius: 14px;
      background-repeat: no-repeat;
      background-size: cover;
      padding-bottom: 100%;
      width: 100%;
      height: 0;
    } */
    @media (max-width: 800px) {
      max-width: 100%;
    }
  `;

  return (
    <div style={{ width: '100%' }}>
      <Header />
      <main css={main}>
        <div css={title_container}>
          <h1>만드는 사람들</h1>
          <div>
            조직의 위대함은 개인 혼자서는 불가능한 일을 가능하게 만드는 것에 있습니다.
            <br />
            팜스프링에서 끊임없이 도전하며 불가능을 가능케하는 11명의 팀원들을 소개합니다.
          </div>
        </div>
        <div css={profile_container}>
          {ourBelovedTeammates.map((eachTeammateInfo, eachTeammateInfoIndex) => {
            return (
              <div css={profile_wrapper} key={eachTeammateInfoIndex}>
                <div css={name_position_wrapper}>
                  <div>{eachTeammateInfo.name}</div>
                  <div>{eachTeammateInfo.position}</div>
                </div>
                <div css={links_wrapper}>
                  {eachTeammateInfo.url.map((eachTeammateEachLink, eachTeammateEachLinkIndex) => {
                    const host =
                      (eachTeammateEachLink.indexOf('https://instagram.com') !== -1 && 'instagram') ||
                      (eachTeammateEachLink.indexOf('https://github.com') !== -1 && 'github') ||
                      (eachTeammateEachLink.indexOf('https://www.linkedin.com') !== -1 && 'linkedin') ||
                      'link';
                    return (
                      <a
                        key={eachTeammateEachLinkIndex}
                        className={host}
                        href={eachTeammateEachLink}
                        target="_blank"
                        rel="noopener noreferrer">
                        {host === 'instagram' && <BiLogoInstagram />}
                        {host === 'github' && <BiLogoGithub />}
                        {host === 'linkedin' && <BiLogoLinkedin />}
                        {host === 'link' && <BiLinkAlt />}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
