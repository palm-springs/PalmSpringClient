/** @jsxImportSource @emotion/react */
'use client';

import { useEffect, useState } from 'react';
import { easeIn, easeInOut, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';
import { PalmsBlogLogoVectorIcon } from '@/public/icons';

import ColorfulContentBlock from './components/ColorfulContentBlock';

const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
const GOOGLE_END_POINT = 'https://accounts.google.com/o/oauth2/v2/auth';

interface InvitationItem {
  color: string;
  name: string;
  position: string;
  email: string;
}
interface ArticleItem {
  color: string;
  meta: string;
  title: string;
  description: string;
}
const invitationItems: Array<InvitationItem> = [
  {
    color: '#A6ECB3',
    name: '김대현',
    position: '대표/PO',
    email: 'dankim@ourcompany.com',
  },
  {
    color: '#9AEEE5',
    name: '서현진',
    position: '세일즈',
    email: 'seohj01@ourcompany.com',
  },
  {
    color: '#E2E1FF',
    name: '박정현',
    position: '디자인',
    email: 'jhpark@ourcompany.com',
  },
  {
    color: '#A6ECB3',
    name: '이승준',
    position: 'FE개발',
    email: 'sjlee@ourcompany.com',
  },
  {
    color: '#9AEEE5',
    name: '류현진',
    position: '서버개발',
    email: 'ry99@ourcompany.com',
  },
  {
    color: '#E2E1FF',
    name: '류현진',
    position: '서버개발',
    email: 'ry99@ourcompany.com',
  },
  {
    color: '#A6ECB3',
    name: '류현진',
    position: '서버개발',
    email: 'ry99@ourcompany.com',
  },
];
const articleItems: Array<ArticleItem> = [
  {
    color: '#A6ECB3',
    meta: '팀 문화  |  김대현  |  2024. 7. 9',
    title: '우리 팀의 문화, 근거 기반 소통',
    description: '근거만 있다면 누구나 뭐든지 말할 수 있는 문화',
  },
  {
    color: '#9AEEE5',
    meta: '팀 문화  |  서현진  |  2024. 7. 9',
    title: '우리 팀의 문화, 근거 기반 소통',
    description: '근거만 있다면 누구나 뭐든지 말할 수 있는 문화',
  },
];

const LandingPage = ({ dashboardUrl }: { dashboardUrl: string }) => {
  const [scrollOrder, setScrollOrder] = useState(0);
  const [isScrollZero, setIsScrollZero] = useState(true);
  const router = useRouter();

  const isMobile = useCheckMobile();

  const scrollThresholds = [2200, 2300, 2400, 2500, 2600];

  const handleScrollOrder = () => {
    const scrollY = window.scrollY;
    const order = scrollThresholds.findIndex((threshold) => scrollY < threshold);
    setScrollOrder(order === -1 ? scrollThresholds.length - 1 : order);
  };

  const handleIsScrollZero = () => {
    setIsScrollZero(window.scrollY <= 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      handleScrollOrder();
      handleIsScrollZero();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Main>
      <HeaderContainer className={isScrollZero ? 'default' : 'blur'}>
        <HeaderWrapper>
          <LogoWrapper>
            <PalmsBlogLogoVectorIcon />
          </LogoWrapper>
          <NavWrapper>
            <div>제품설명</div>
            <div>가격안내</div>
          </NavWrapper>
          <LinksWrapper>
            <LinkButton highlight={false}>로그인</LinkButton>
            <LinkButton highlight={true}>무료로 시작하기</LinkButton>
          </LinksWrapper>
        </HeaderWrapper>
      </HeaderContainer>
      <ContentContainer>
        <FirstImpressionContainer>
          <Heading1>
            우리만의 팀블로그
            <br />
            3초만에 만들기.
          </Heading1>
          <FirstImpressionDescription>단언컨대, 가장 예쁘고 심플한 팀블로그 솔루션.</FirstImpressionDescription>
          <FirstImpressionButton highlight={true}>무료로 시작하기</FirstImpressionButton>
          <FirstImpressionImage
            className="preventDrag"
            src="./images/landing/first-impression-image.png"
            alt="팀 블로그 예시 이미지"
          />
        </FirstImpressionContainer>
        <ScrollImpressionContainer>
          <ScrollImpressionWrapper>
            <ScrollImpressionContent>
              <div style={scrollOrder == 0 ? { color: '#000' } : {}}>파운더. 기획자. 개발자. 디자이너.</div>
              <div style={scrollOrder == 1 ? { color: '#000' } : {}}>HR담당자. CS담당자. 재무담당자.</div>
              <div style={scrollOrder == 2 ? { color: '#000' } : {}}>팀원들이 다같이 만들어나가는</div>
              <div style={scrollOrder == 3 ? { color: '#000' } : {}}>조직의 문화, 지식의 축적.</div>
              <div style={scrollOrder == 4 ? { color: '#000' } : {}}>그리고 제품 이야기.</div>
            </ScrollImpressionContent>
          </ScrollImpressionWrapper>
          <div style={{ height: '480px' }} />
        </ScrollImpressionContainer>
        <ColorfulContentBlock
          backgroundcolor="#020151"
          chipBackgroundcolor="#2F2D81"
          chipColor="#fff"
          chipText="팀원 초대"
          titleColor="#fff"
          titleText={'팀원들과 함께 만드는\n우리만의 블로그.'}
          descriptionColor="#fff"
          descriptionText="무료플랜에서도 30명의 팀원과 함께할 수 있어요."
          isComingsoon={false}>
          <InvitationContentContainer>
            <InvitationExample>
              <InvitationExampleHeader>
                <InvitationExampleTitle>Our Company 팀원 목록</InvitationExampleTitle>
                <InvitationExampleButton>팀원 초대하기</InvitationExampleButton>
              </InvitationExampleHeader>
              <InvitationExampleColumnContainer>
                {invitationItems.map((item, index) => (
                  <InvitationExampleColumnItem key={index} color={item.color}>
                    <div />
                    <div>{item.name}</div>
                    <div>{item.position}</div>
                    <div>{item.email}</div>
                  </InvitationExampleColumnItem>
                ))}
              </InvitationExampleColumnContainer>
            </InvitationExample>
            <ArticleExampleSuperContainer>
              {articleItems.map((item, index) => (
                <ArticleExampleContainer key={index} color={item.color}>
                  <div />
                  <div>{item.meta}</div>
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                </ArticleExampleContainer>
              ))}
            </ArticleExampleSuperContainer>
          </InvitationContentContainer>
        </ColorfulContentBlock>
        <ColorfulContentBlock
          backgroundcolor="#F4EEFD"
          chipBackgroundcolor="#AD90FF"
          chipColor="#fff"
          chipText="커스터마이징"
          titleColor="#000"
          titleText={'Header, Footer, Navigation 모두\n온전히 우리 팀의 정보만 담아보세요'}
          descriptionColor="#000"
          descriptionText="우리 팀 블로그는 오직 우리 팀에만 기여해야 하니까요."
          isComingsoon={false}>
          <CustomizingImageContainer>
            <CustomizingImage
              className="preventDrag"
              src="/images/landing/customization-image.png"
              alt="커스터마이징 예시"
            />
          </CustomizingImageContainer>
        </ColorfulContentBlock>
        <ColorfulContentBlock
          backgroundcolor="#FFE6D6"
          chipBackgroundcolor="#FF936A"
          chipColor="#fff"
          chipText="오픈그래프"
          titleColor="#000"
          titleText={'오픈그래프 정보까지\n자유롭게 설정하세요'}
          descriptionColor="#000"
          descriptionText="어쩌구 저쩌구 어쩌구 저쩌구"
          isComingsoon={false}>
          Children here...
        </ColorfulContentBlock>
        <ColorfulContentBlock
          backgroundcolor="#DCF3F9"
          chipBackgroundcolor="#7DDBF4"
          chipColor="#000"
          chipText="GA 기반 데이터 애널리틱스"
          titleColor="#000"
          titleText={'소중한 블로그 통계\n단 하루도 놓치지 않도록'}
          descriptionColor="#000"
          descriptionText="어쩌구 저쩌구 어쩌구 저쩌구"
          isComingsoon={false}>
          Children here...
        </ColorfulContentBlock>
        <ColorfulContentBlock
          backgroundcolor="#000"
          chipBackgroundcolor="#fff"
          chipColor="#333"
          chipText="검색엔진최적화"
          titleColor="#fff"
          titleText={'만점짜리 SEO*는 덤.'}
          descriptionColor="#fff"
          descriptionText={'채용, 고객, 투자 리드를 확보하기 위해서는\n고도화된 SEO가 필수입니다.'}
          isComingsoon={false}>
          <SeoScoreContainer>
            <SeoScoreItem>
              <SeoScoreImage
                className="preventDrag"
                src="/images/landing/lighthouse-score.png"
                alt="라이트하우스 점수"
              />
              <SeoScoreDescription>Performance</SeoScoreDescription>
            </SeoScoreItem>
            <SeoScoreItem>
              <SeoScoreImage
                className="preventDrag"
                src="/images/landing/lighthouse-score.png"
                alt="라이트하우스 점수"
              />
              <SeoScoreDescription>Accessibility</SeoScoreDescription>
            </SeoScoreItem>
            <SeoScoreItem>
              <SeoScoreImage
                className="preventDrag"
                src="/images/landing/lighthouse-score.png"
                alt="라이트하우스 점수"
              />
              <SeoScoreDescription>
                Best
                <br />
                Practices
              </SeoScoreDescription>
            </SeoScoreItem>
            <SeoScoreItem>
              <SeoScoreImage
                className="preventDrag"
                src="/images/landing/lighthouse-score.png"
                alt="라이트하우스 점수"
              />
              <SeoScoreDescription>SEO</SeoScoreDescription>
            </SeoScoreItem>
          </SeoScoreContainer>
        </ColorfulContentBlock>
        <ColorfulContentBlock
          backgroundcolor="#D7F0EE"
          chipBackgroundcolor="rgba(65,194,182)"
          chipColor="#000"
          chipText="구독 / 이메일 알림"
          titleColor="#000"
          titleText={'우리 팀의 팬들에게는\n새로운 아티클이 올라갈 때 알려주세요'}
          descriptionColor="#000"
          descriptionText="어쩌구 저쩌구 어쩌구 저쩌구"
          isComingsoon={true}></ColorfulContentBlock>
      </ContentContainer>
      <FooterContainer>
        <FooterWrapper>
          <div style={{ fontSize: '0.875rem' }}>Copyright ⓒ 서울연락단. All Rights Reserved</div>
          <FooterFlexContainer>
            <FooterFlexWrapper>
              <div>사업자등록번호 : 109-28-54938 | 대표자 : 김대덕</div>
              <div>오피스 : 서울특별시 강남구 역삼로 172, 5층 (MARU360)</div>
              <div>사업자등록소재지 : 서울특별시 마포구 하중동 101, 102-1802</div>
            </FooterFlexWrapper>
            <FooterFlexWrapper>
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
            </FooterFlexWrapper>
          </FooterFlexContainer>
        </FooterWrapper>
      </FooterContainer>
    </Main>
  );
};

export default LandingPage;

const flexDefaultSetting = `
    display: flex;
    align-items: center;
`;
const Main = styled.main`
  * {
    text-align: center;
    line-height: 140%;
    font-family: 'Pretendard' !important;
  }
  & .preventDrag {
    user-select: none;
  }
`;
const HeaderContainer = styled.header`
  ${flexDefaultSetting}
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  justify-content: center;
  transition:
    box-shadow 0.35s ease-in,
    background-color 0.15s ease-in;
  z-index: 100;
  background: #fff;
  width: 100%;
  height: 68px;
  &.blur {
    box-shadow: 0 1px 1px 0 rgba(81, 99, 120, 0.2);
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: saturate(180%) blur(20px);
  }
`;
const HeaderWrapper = styled.div`
  ${flexDefaultSetting}
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  max-width: 1280px;
  & > * {
    width: calc(100% * (1 / 3));
  }
`;
const LogoWrapper = styled.div`
  ${flexDefaultSetting}
  justify-content: flex-start;
  & > * {
    width: 120px;
  }
`;
const NavWrapper = styled.nav`
  ${flexDefaultSetting}
  gap: 38px;
  justify-content: center;
  font-size: 15px;
`;
const LinksWrapper = styled.nav`
  ${flexDefaultSetting}
  gap: 8px;
  justify-content: flex-end;
  font-size: 14px;
`;
const LinkButton = styled.button<{ highlight: boolean }>`
  border: none;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  padding: 0 14px;
  height: 40px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 15px;
  font-weight: 600;
  ${(props) => props.highlight && 'background:#242428;color:#FFF;'};
`;
const ContentContainer = styled.article`
  ${flexDefaultSetting}
  flex-direction: column;
  margin-top: 140px;
`;
const FirstImpressionContainer = styled.div`
  ${flexDefaultSetting}
  flex-direction: column;
`;
const Heading1 = styled.h1`
  text-align: center;
  font-size: 64px;
`;
const FirstImpressionDescription = styled.div`
  margin-top: 32px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 24px;
  font-weight: 600;
`;
const FirstImpressionButton = styled(LinkButton)`
  margin-top: 48px;
  border-radius: 18px;
  padding: 16px 24px;
  height: unset;
  font-size: 24px;
`;
const FirstImpressionImage = styled.img`
  margin-top: 48px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
  width: 940px;
`;
const ScrollImpressionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  padding: 200px 0;
`;
const ScrollImpressionWrapper = styled.div`
  display: contents;
`;
const ScrollImpressionContent = styled.div`
  ${flexDefaultSetting}
  position:sticky;
  top: 230px;
  flex-direction: column;
  margin-top: 200px;
  color: #dedede;
  font-size: 48px;
  font-weight: 800;
`;
const FooterContainer = styled.footer`
  ${flexDefaultSetting}
  justify-content: center;
  margin-top: 10rem;
  background: #f8f9fa;
  padding: 60px 0 80px 0;
  text-align: left;
  font-weight: 500;
  @media (max-width: 768px) {
    padding: 2.4rem 0 3rem 0;
  }
`;
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  width: 100%;
  max-width: 1280px;
`;
const FooterFlexContainer = styled.div`
  ${flexDefaultSetting}
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  & > div {
    width: 50%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 0.4rem;
    margin-top: 0.6rem;
    & > div {
      width: 100%;
    }
  }
`;
const FooterFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  margin-top: 0.8rem;
  color: #8c8c8c;
  font-size: 0.8rem;
  font-weight: 400;
`;
const CustomizingImageContainer = styled.div`
  border-radius: 40px;
  background: #dacdff;
  padding: 60px 80px;
`;
const CustomizingImage = styled.img`
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 800px;
`;
const InvitationContentContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const InvitationExample = styled.div`
  border-radius: 40px;
  background: #141365;
  padding: 30px 30px 30px 40px;
  width: 520px;
`;
const InvitationExampleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InvitationExampleTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
const InvitationExampleButton = styled.button`
  transition: 0.15s ease-in-out;
  border: none;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  padding: 14px 24px;
  color: inherit;
  font-size: 20px;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
const InvitationExampleColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 16px;
  font-size: 18px;
`;
const InvitationExampleColumnItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  & > div {
    text-align: left;
  }
  & > div:nth-of-type(1) {
    margin-right: 14px;
    border-radius: 24px;
    background: ${(props) => props.color && props.color};
    width: 56px;
    height: 56px;
  }
  & > div:nth-of-type(2) {
    margin-right: 12px;
    width: 50px;
    font-weight: 600;
  }
  & > div:nth-of-type(3) {
    width: 76px;
  }
  & > div:nth-of-type(4) {
    opacity: 0.5;
  }
`;
const ArticleExampleSuperContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  background: rgba(0, 0, 0, 0.2);
  padding: 10px 10px 20px 10px;
`;
const ArticleExampleContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  padding: 10px;
  & > div:nth-of-type(1) {
    border-radius: 32px;
    background: ${(props) => props.color && props.color};
    width: 300px;
    height: 200px;
  }
  & > div:nth-of-type(2) {
    margin-top: 12px;
    margin-left: 4px;
    font-size: 12px;
  }
  & > div:nth-of-type(3) {
    margin-left: 4px;
    font-size: 20px;
    font-weight: 500;
  }
  & > div:nth-of-type(4) {
    opacity: 0.5;
    margin-left: 4px;
    font-size: 14px;
  }
`;
const SeoScoreContainer = styled.div`
  display: flex;
  gap: 32px;
`;
const SeoScoreItem = styled.div`
  ${flexDefaultSetting}
  flex-direction: column;
  gap: 14px;
`;
const SeoScoreImage = styled.img`
  width: 140px;
`;
const SeoScoreDescription = styled.div`
  font-size: 18px;
`;
