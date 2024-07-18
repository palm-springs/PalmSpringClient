/** @jsxImportSource @emotion/react */
'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Script from 'next/script';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';
import { CheckIcon, PalmsBlogLogoVectorIcon } from '@/public/icons';

import Chart from './components/Chart';
import ColorfulContentBlock from './components/ColorfulContentBlock';
import framerMotionProps from './props/framerMotionProps';

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
interface SeoExampleItem {
  url: string;
  title: string;
}
interface freePlanFeature {
  text: string;
  color: string;
}
interface teamPlanFeature {
  text: string;
  color: string;
  isSoon: boolean;
}
const freePlanFeatureList: Array<freePlanFeature> = [
  { text: '블로그 무제한 생성 및 가입', color: '#ccc' },
  { text: '30명까지 팀원 초대', color: '#ccc' },
  { text: '100% 커스텀 브랜딩', color: '#ccc' },
  { text: '최고 수준의 SEO', color: '#ccc' },
  { text: 'Sitemap 자동 생성', color: '#ccc' },
  { text: '아티클', color: '#ccc' },
  { text: '페이지 무제한 작성', color: '#ccc' },
  { text: '카테고리 무제한 생성', color: '#ccc' },
  { text: '전용 SSL 인증서', color: '#ccc' },
  { text: '빠른 속도의 DNS & SSL', color: '#ccc' },
];

const teamPlanFeatureList: Array<teamPlanFeature> = [
  { text: '커스텀 도메인 연결', color: '#ff743f', isSoon: false },
  { text: '팀원 무제한 초대', color: '#ff743f', isSoon: false },
  { text: '우선순위 서포트', color: '#ff743f', isSoon: false },
  { text: '검색 유입 키워드 통계', color: '#ff743f', isSoon: true },
  { text: '아티클 페이지 내 플로팅 TOC', color: '#ff743f', isSoon: true },
  { text: '아티클/페이지 내 CTA 생성', color: '#ff743f', isSoon: true },
  { text: '아티클 태그 기능', color: '#ff743f', isSoon: true },
  { text: '구독 및 아티클 발행 알림 메일 발송', color: '#ff743f', isSoon: true },
  { text: '블로그 내 검색 기능', color: '#ff743f', isSoon: true },
  { text: '커스텀 코드 인젝션', color: '#ff743f', isSoon: true },
  { text: '커스텀 Robots.txt', color: '#ff743f', isSoon: true },
  { text: '그 외 원하시는 모든 것!', color: '#ff743f', isSoon: true },
];

const seoTitleList: Array<string> = ['Performance', 'Accessibility', 'Best\nPractices', 'SEO'];
const seoExampleList: Array<SeoExampleItem> = [
  {
    title: 'storybook 개념',
    url: 'https://www.google.com/search?q=storybook+개념',
  },
  {
    title: 'S3 이미지 용량',
    url: 'https://www.google.com/search?q=S3+이미지+용량',
  },
  {
    title: 'SSR 반응형 깜빡임',
    url: 'https://www.google.com/search?q=ssr+반응형+깜빡임',
  },
  {
    title: 'next app router 동적 사이트맵',
    url: 'https://www.google.com/search?q=next+app+router+동적+사이트맵',
  },
];
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
    name: '이승건',
    position: '사업개발',
    email: 'sglee@ourcompany.com',
  },
  {
    color: '#A6ECB3',
    name: '김동신',
    position: 'DevOps',
    email: 'dosh@ourcompany.com',
  },
  {
    color: '#A6ECB3',
    name: '채소연',
    position: '서버개발',
    email: 'chasy@ourcompany.com',
  },
  {
    color: '#9AEEE5',
    name: '김대덕',
    position: 'Founder',
    email: 'kimdaeduk@palms.blog',
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
  const [inputs, setInputs] = useState({ title: '우리팀 팀블로그', desc: '우리팀의 문화와 가치를 기록합니다.' });

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.name);
    if (e.target.name === 'title') {
      setInputs({ ...inputs, title: e.target.value });
    }
    if (e.target.name === 'desc') {
      setInputs({ ...inputs, desc: e.target.value });
    }
  };

  const isMobile = useCheckMobile();
  const [scrollThresholds, setScrollThresholds] = useState([2300, 2550, 2800, 3050, 3300]);

  const handleScrollOrder = useCallback(() => {
    const scrollY = window.scrollY;
    const order = scrollThresholds.findIndex((threshold) => scrollY < threshold);
    setScrollOrder(order === -1 ? scrollThresholds.length - 1 : order);
  }, [scrollThresholds]);

  const handleIsScrollZero = useCallback(() => {
    setIsScrollZero(window.scrollY <= 80);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setScrollThresholds([1400, 1650, 1900, 2150, 2400]);
    } else {
      setScrollThresholds([2300, 2550, 2800, 3050, 3300]);
    }
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      handleScrollOrder();
      handleIsScrollZero();
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScrollOrder, handleIsScrollZero]);

  return (
    <Main>
      <Script
        onError={(e) => {
          console.error('CT Script failed to load...', e);
        }}
        dangerouslySetInnerHTML={{
          __html: `
          (function(){var w=window;
          if(w.ChannelIO){
          return w.console.error("ChannelIO script included twice.");}
          var ch=function(){ch.c(arguments);};
          ch.q=[];
          ch.c=function(args){
            ch.q.push(args);
          };w.ChannelIO=ch;
          function l(){
          if(w.ChannelIOInitialized){return;}
          w.ChannelIOInitialized=true;
          var s=document.createElement("script");
          s.type="text/javascript";
          s.async=true;
          s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";
          var x=document.getElementsByTagName("script")[0];
          if(x.parentNode){x.parentNode.insertBefore(s,x);}}
          if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);
          w.addEventListener("load",l);}})();
          ChannelIO('boot', {
            "pluginKey": "02758659-2aab-470a-9ac1-32a614687295"
          });`,
        }}
      />
      <HeaderContainer
        initial={{ opacity: 0, transform: 'translateY(-50px)' }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
        className={isScrollZero ? 'default' : 'blur'}>
        <HeaderWrapper className={isScrollZero ? 'default' : 'blur'}>
          <LogoWrapper>
            <PalmsBlogLogoVectorIcon />
          </LogoWrapper>
          <NavWrapper>
            <a href="#productDescription">제품설명</a>
            <a href="#productPrice">가격안내</a>
          </NavWrapper>
          {dashboardUrl ? (
            <LinksWrapper>
              <LinkButton href={dashboardUrl} highlight={1}>
                대시보드
              </LinkButton>
            </LinksWrapper>
          ) : (
            <LinksWrapper>
              <LinkButton href="/login" highlight={0}>
                로그인
              </LinkButton>
              <LinkButton href="/sign-up" highlight={1}>
                무료로 시작하기
              </LinkButton>
            </LinksWrapper>
          )}
        </HeaderWrapper>
      </HeaderContainer>
      <div style={{ height: '140px' }} />
      <ContentContainer>
        <FirstImpressionContainer>
          <Heading1
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            우리만의 팀블로그
            <br />
            3초만에 만들기.
          </Heading1>
          <FirstImpressionDescription
            initial={{ opacity: 0, transform: 'translateY(20px)' }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}>
            단언컨대, 가장 예쁘고 심플한 팀블로그 솔루션.
          </FirstImpressionDescription>
          {dashboardUrl ? (
            <FirstImpressionButton
              initial={{ opacity: 0, transform: 'translateY(20px)' }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              href={dashboardUrl}
              highlight={1}>
              대시보드
            </FirstImpressionButton>
          ) : (
            <FirstImpressionButton
              initial={{ opacity: 0, transform: 'translateY(20px)' }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              href="/sign-up"
              highlight={1}>
              무료로 시작하기
            </FirstImpressionButton>
          )}
          <FirstImpressionImage
            initial={{ opacity: 0, transform: 'translateY(20px)', visibility: 'hidden' }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, transform: 'translateY(0px)', visibility: 'visible' }}
            transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.75 }}
            className="preventDrag"
            src="./images/landing/first-impression-image.png"
            alt="팀 블로그 예시 이미지"
          />
        </FirstImpressionContainer>
        <ScrollImpressionContainer id="productDescription">
          <ScrollImpressionWrapper>
            <ScrollImpressionContent>
              <div style={scrollOrder == 0 ? { color: '#242428' } : {}}>파운더. 기획자. 개발자. 디자이너.</div>
              <div style={scrollOrder == 1 ? { color: '#242428' } : {}}>HR담당자. CS담당자. 재무담당자.</div>
              <div style={scrollOrder == 2 ? { color: '#242428' } : {}}>팀원들이 다같이 만들어나가는</div>
              <div style={scrollOrder == 3 ? { color: '#242428' } : {}}>조직의 문화, 지식의 축적.</div>
              <div style={scrollOrder == 4 ? { color: '#242428' } : {}}>그리고 제품 이야기.</div>
            </ScrollImpressionContent>
          </ScrollImpressionWrapper>
          <div style={{ height: '1180px' }} />
        </ScrollImpressionContainer>
        <ColorfulContentBlock
          backgroundcolor="#020151"
          chipBackgroundcolor="#2F2D81"
          chipColor="#fff"
          chipText="팀원 초대"
          titleColor="#fff"
          titleText={'팀원들과 함께 만드는\n우리만의 블로그'}
          descriptionColor="#fff"
          descriptionText="무료플랜에서도 30명의 팀원과 함께할 수 있어요."
          isComingsoon={false}>
          <InvitationContentContainer {...framerMotionProps}>
            <InvitationExample>
              <InvitationExampleGradient />
              <InvitationExampleHeader>
                <InvitationExampleTitle>Our Company 팀원 목록</InvitationExampleTitle>
                <InvitationExampleButton>초대하기</InvitationExampleButton>
              </InvitationExampleHeader>
              <InvitationExampleColumnContainer>
                {invitationItems.map((item, index) => (
                  <InvitationExampleColumnItem key={index} color={item.color}>
                    <div />
                    <InvitationExampleColumnItemInfoWrapper style={{ display: 'flex' }}>
                      <div>{item.name}</div>
                      <div>{item.position}</div>
                      <div>{item.email}</div>
                    </InvitationExampleColumnItemInfoWrapper>
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
          descriptionText="palms의 로고는 어디에도 보이지 않아요."
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
          chipText="OpenGraph"
          titleColor="#000"
          titleText={'OpenGraph 정보까지\n자유롭게 설정하세요'}
          descriptionColor="#000"
          descriptionText={'공유할 때 보이는 모습도 마음대로 설정할 수 있어요.'}
          isComingsoon={false}>
          <OpengraphContentContainer>
            <OpengraphSettingSuperContainer>
              <OpengraphSettingContainer>
                <div>
                  <div>OpenGraph 제목</div>
                  <OpengraphTextarea
                    rows={1}
                    name="title"
                    value={inputs.title}
                    onChange={(e) => onInputChangeHandler(e)}
                  />
                </div>
                <div>
                  <div>OpenGraph 설명</div>
                  <OpengraphTextarea
                    rows={3}
                    name="desc"
                    value={inputs.desc}
                    onChange={(e) => onInputChangeHandler(e)}
                  />
                </div>
              </OpengraphSettingContainer>
            </OpengraphSettingSuperContainer>
            <OpengraphPreviewContainer>
              <OpengraphKatalkMessage>https://ourteam.palms.blog</OpengraphKatalkMessage>
              <OpengraphKatalkPreview>
                <div />
                <div>
                  <div>{inputs.title}</div>
                  <div>{inputs.desc}</div>
                  <div>https://ourteam.palms.blog</div>
                </div>
              </OpengraphKatalkPreview>
            </OpengraphPreviewContainer>
          </OpengraphContentContainer>
        </ColorfulContentBlock>
        <ColorfulContentBlock
          backgroundcolor="#DCF3F9"
          chipBackgroundcolor="#7DDBF4"
          chipColor="#000"
          chipText="데이터 애널리틱스"
          titleColor="#000"
          titleText={'소중한 블로그 통계\n단 하루도 놓치지 않도록'}
          descriptionColor="#000"
          descriptionText="Google Analytics 기반의 정확한 통계를 제공해요."
          isComingsoon={false}>
          <AnalyticsContainer>
            <AnalyticsInfoContainer>
              <AnalyticsInfoItem>
                <AnalyticsInfoItemTitle>오늘 방문 수</AnalyticsInfoItemTitle>
                <AnalyticsInfoItemNumber>5,425</AnalyticsInfoItemNumber>
                <AnalyticsInfoItemStat>
                  전일 대비
                  <div className="plus">+9%</div>
                </AnalyticsInfoItemStat>
              </AnalyticsInfoItem>
              <AnalyticsInfoItem>
                <AnalyticsInfoItemTitle>7월 방문 수</AnalyticsInfoItemTitle>
                <AnalyticsInfoItemNumber>125,387</AnalyticsInfoItemNumber>
                <AnalyticsInfoItemStat>
                  전월 대비
                  <div className="plus">+12%</div>
                </AnalyticsInfoItemStat>
              </AnalyticsInfoItem>
              <AnalyticsInfoItem>
                <AnalyticsInfoItemTitle>누적 방문 수</AnalyticsInfoItemTitle>
                <AnalyticsInfoItemNumber>1,958,427</AnalyticsInfoItemNumber>
              </AnalyticsInfoItem>
            </AnalyticsInfoContainer>
            <AnalyticsChartContainer>
              <AnalyticsInfoItemTitle className="chart">7월 방문 수</AnalyticsInfoItemTitle>
              <AnalyticsInfoItemNumber className="chart">125,387</AnalyticsInfoItemNumber>
              <AnalyticsChartWrapper>{typeof window !== 'undefined' && <Chart />}</AnalyticsChartWrapper>
            </AnalyticsChartContainer>
          </AnalyticsContainer>
        </ColorfulContentBlock>
        <ColorfulContentBlock
          backgroundcolor="linear-gradient(143.78deg, rgb(7, 0, 21) 50%, rgb(26, 6, 69) 111.99%), linear-gradient(0deg, rgb(219, 236, 253), rgb(219, 236, 253))"
          chipBackgroundcolor="#fff"
          chipColor="#333"
          chipText="검색엔진최적화"
          titleColor="#fff"
          titleText={'만점짜리 SEO는 덤.'}
          descriptionColor="#fff"
          descriptionText={'채용, 고객, 투자 리드를 확보하기 위해서는\n고도화된 SEO가 필수입니다.'}
          isComingsoon={false}>
          <SeoContentContainer>
            <SeoScoreContainer>
              {seoTitleList.map((title, index) => {
                return (
                  <SeoScoreItem key={index}>
                    <SeoScoreImage
                      className="preventDrag"
                      src="/images/landing/lighthouse-score.png"
                      alt="라이트하우스 점수"
                    />
                    <SeoScoreDescription>{title}</SeoScoreDescription>
                  </SeoScoreItem>
                );
              })}
            </SeoScoreContainer>
            <SeoExampleImage src="/images/landing/seo-example-image.png" alt="SEO 검색결과 예시 이미지" />
            <SeoExampleImageDescription>[S3 이미지 용량] 키워드 구글 검색 결과 예시</SeoExampleImageDescription>
            <SeoExampleSuggestionContainer>
              <SeoExampleSuggestionTitle>다른 예시 키워드를 직접 검색해보세요.</SeoExampleSuggestionTitle>
              {seoExampleList.map((seoExampleElement, seoExampleIndex) => {
                return (
                  <SeoExampleSuggestionItem
                    key={seoExampleIndex}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={seoExampleElement.url}>
                    {seoExampleElement.title}
                  </SeoExampleSuggestionItem>
                );
              })}
            </SeoExampleSuggestionContainer>
          </SeoContentContainer>
        </ColorfulContentBlock>
        <ColorfulContentBlock
          backgroundcolor="#D7F0EE"
          chipBackgroundcolor="rgba(65,194,182)"
          chipColor="#000"
          chipText="구독 / 이메일 알림"
          titleColor="#000"
          titleText={'블로그 구독자들에게는\n새로운 소식을 직접 알려주세요'}
          descriptionColor="#000"
          descriptionText="아티클을 발행할 때마다 구독자들에게 이메일로 알려드려요."
          isComingsoon={true}></ColorfulContentBlock>
      </ContentContainer>
      <div id="productPrice" />
      <NormalTitleContainer {...framerMotionProps}>
        <h2>가격은 아래와 같아요</h2>
        <p>현재 베타버전 운영 기간으로, 무료 플랜만 제공되고 있어요.</p>
        <PricingContainer>
          <PricingItem>
            <PricingItemTitle>무료 플랜</PricingItemTitle>
            <PricingItemPrice>0원</PricingItemPrice>
            <PricingItemDesc>
              {freePlanFeatureList.map((freePlanFeatureEach, freePlanFeatureIndex) => {
                return (
                  <div key={freePlanFeatureIndex}>
                    <CheckIconLanding fillcolor={freePlanFeatureEach.color} />
                    {freePlanFeatureEach.text}
                  </div>
                );
              })}
            </PricingItemDesc>
          </PricingItem>
          <PricingItem>
            <PricingItemTitle>팀 플랜</PricingItemTitle>
            <PricingItemPrice>29,000원 / 월</PricingItemPrice>
            <PricingItemDesc>
              {teamPlanFeatureList.map((teamPlanFeatureEach, teamPlanFeatureIndex) => {
                if (!teamPlanFeatureEach.isSoon) {
                  return (
                    <div key={teamPlanFeatureIndex}>
                      <CheckIconLanding fillcolor={teamPlanFeatureEach.color} />
                      {teamPlanFeatureEach.text}
                    </div>
                  );
                } else {
                  return (
                    <div key={teamPlanFeatureIndex}>
                      <PricingSoonChip>soon</PricingSoonChip>
                      {teamPlanFeatureEach.text}
                    </div>
                  );
                }
              })}
            </PricingItemDesc>
          </PricingItem>
        </PricingContainer>
      </NormalTitleContainer>

      <NormalTitleContainer {...framerMotionProps}>
        <h2>도입이 고민되시나요?</h2>
        <p>고객님의 이야기를 저희에게 들려주세요!</p>
      </NormalTitleContainer>
      <Whattime
        className="whattime-inline-widget"
        data-url="https://whattime.co.kr/palms/30min"
        data-text-color="#000000"
        data-button-color="#000000"
        data-background-color="#ffffff"
      />
      <Link href="https://assets.whattime.co.kr/widget/widget.css" rel="stylesheet" />
      <script src="https://assets.whattime.co.kr/widget/widget.js" type="text/javascript" async></script>

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
                <a href="https://official.palms.blog" target="_blank" rel="noopener noreferrer">
                  공식 블로그
                </a>
              </div>
              <div>
                <a href="https://whattime.co.kr/palms/30min" target="_blank" rel="noopener noreferrer">
                  문의/상담 (되는 시간)
                </a>
              </div>
              <div>
                <a href="https://tally.so/r/w4rjGk" target="_blank" rel="noopener noreferrer">
                  문의/피드백 (tally)
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

const PricingContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  margin-top: 32px;
  padding: 0 20px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const PricingItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 24px;
  background: rgba(250, 250, 250);
  padding: 30px;
  width: 400px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const PricingItemTitle = styled.h3`
  font-size: 20px;
`;
const PricingItemPrice = styled.p`
  margin-top: 8px;
  font-size: 28px;
  font-weight: 800;
`;
const PricingItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  margin-top: 14px;
  & > div {
    display: flex;
    gap: 8px;
    align-items: center;
    text-align: left;
    font-size: 18px;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
`;
const CheckIconLanding = styled(CheckIcon)<{ fillcolor: string }>`
  & path {
    fill: ${(props) => props.fillcolor};
  }
`;
const PricingSoonChip = styled.span`
  border-radius: 100px;
  background: #ffe6d6;
  padding: 4px 6px;
  color: #ff743f;
  font-size: 12px;
  font-weight: 600;
`;
const NormalTitleContainer = styled(motion.div)`
  margin-top: 120px;
  & > h2 {
    line-height: 1.4;
    letter-spacing: -0.8px;
    font-size: 44px;
    font-weight: 600;
    @media (max-width: 767px) {
      letter-spacing: -0.6px;
      font-size: 36px;
    }
  }
  & > p {
    margin-top: 12px;
    line-height: 1.5;
    letter-spacing: -0.2px;
    font-size: 28px;
    @media (max-width: 767px) {
      letter-spacing: -0.1px;
      font-size: 18px;
    }
  }
`;
const Whattime = styled.div`
  margin-top: 32px;
  min-width: 320px;
  height: 690px;
`;
const flexDefaultSetting = `
    display: flex;
    align-items: center;
`;
const Main = styled.main`
  overflow-x: hidden;
  * {
    text-align: center;
    line-height: 140%;
    font-family: 'Pretendard' !important;
  }
  & .preventDrag {
    user-select: none;
  }
`;
const HeaderContainer = styled(motion.header)`
  ${flexDefaultSetting}
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  justify-content: center;
  transition:
    margin 0.35s ease-in-out,
    width 0.35s ease-in-out,
    top 0.35s ease-in-out,
    box-shadow 0.35s ease-in-out,
    border-radius 0.35s ease-in-out,
    background-color 0.35s ease-in-out;
  z-index: 100;
  margin: 0 auto;
  background: #fff;
  width: 100%;
  height: 68px;
  &.blur {
    top: 15px;
    border-radius: 24px;
    box-shadow: 0 0 4px 0 rgba(81, 99, 120, 0.2);
    background-color: rgba(255, 255, 255, 0.85);
    width: calc(100% - 20px * 2);
    backdrop-filter: saturate(180%) blur(20px);
  }
`;
const HeaderWrapper = styled.div`
  ${flexDefaultSetting}
  justify-content: space-between;
  transition: max-width 0.35s ease-in-out;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  max-width: 1280px;
  & > * {
    width: calc(100% * (1 / 3));
  }
  &.blur {
    max-width: 100%;
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
  @media (max-width: 767px) {
    display: none;
  }
`;
const LinksWrapper = styled.nav`
  ${flexDefaultSetting}
  gap: 8px;
  justify-content: flex-end;
  font-size: 14px;
  @media (max-width: 767px) {
    display: none;
  }
`;
const LinkButton = styled(Link)<{ highlight: number }>`
  ${flexDefaultSetting}
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.05);
  padding: 0 14px;
  height: 40px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 15px;
  font-weight: 600;
  ${(props) => props.highlight === 1 && 'background:#242428;color:#FFF;'};
`;
const ContentContainer = styled.article`
  ${flexDefaultSetting}
  flex-direction: column;
`;
const FirstImpressionContainer = styled.div`
  ${flexDefaultSetting}
  flex-direction: column;
`;
const Heading1 = styled(motion.h1)`
  text-align: center;
  letter-spacing: -1.8px;
  font-size: 64px;
  @media (max-width: 767px) {
    letter-spacing: -0.8px;
    font-size: 44px;
  }
`;
const FirstImpressionDescription = styled(motion.div)`
  margin-top: 32px;
  letter-spacing: -0.9px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 24px;
  font-weight: 600;
  @media (max-width: 767px) {
    margin-top: 24px;
    letter-spacing: -0.1px;
    font-size: 18px;
  }
`;
const FirstImpressionButton = styled(motion(LinkButton))`
  margin-top: 48px;
  border-radius: 18px;
  padding: 16px 24px;
  height: unset;
  line-height: 1.4;
  font-size: 24px;
  @media (max-width: 767px) {
    margin-top: 38px;
    padding: 14px 20px;
    font-size: 20px;
  }
`;
const FirstImpressionImage = styled(motion.img)`
  margin-top: 48px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
  width: 92%;
  max-width: 1080px;
`;
const ScrollImpressionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  margin-top: 200px;
  padding-bottom: 200px;
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
  letter-spacing: -0.8px;
  color: #dedede;
  font-size: 52px;
  font-weight: 800;
  @media (max-width: 767px) {
    letter-spacing: -0.5px;
    font-size: 24px;
  }
`;
const FooterContainer = styled.footer`
  ${flexDefaultSetting}
  justify-content: center;
  margin-top: 10rem;
  background: #000;
  padding: 60px 0 80px 0;
  text-align: left;
  color: #fff;
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
  max-width: 1100px;
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
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  font-weight: 400;
  & a {
    transition: opacity 0.15s ease-in-out;
    opacity: 0.6;
    color: #fff;
    &:hover {
      opacity: 1;
    }
  }
`;
const CustomizingImageContainer = styled.div`
  border-radius: 40px;
  background: #dacdff;
  padding: 60px 80px;
  overflow-x: hidden;
  @media (max-width: 767px) {
    padding: 32px 38px;
    width: 100%;
  }
`;
const CustomizingImage = styled.img`
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 800px;
  @media (max-width: 767px) {
    width: 600px;
  }
`;
const InvitationContentContainer = styled(motion.div)`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (max-width: 767px) {
    gap: 20px;
  }
`;
const InvitationExampleGradient = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 9;
  border-radius: 40px;
  background: linear-gradient(to bottom, rgba(20, 19, 101, 0), rgba(20, 19, 101, 1));
  width: 100%;
  height: 400px;
  @media (max-width: 767px) {
    height: 100px;
  }
`;
const InvitationExample = styled.div`
  position: relative;
  border-radius: 40px;
  background: #141365;
  padding: 30px 0 30px 0;
  width: 100%;
  max-width: 520px;
  height: 660px;
  overflow-y: hidden;
  @media (max-width: 767px) {
    max-width: unset;
    height: 480px;
  }
`;
const InvitationExampleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 40px;
`;

const InvitationExampleTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  @media (max-width: 767px) {
    font-size: 16px;
  }
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
  @media (max-width: 767px) {
    border-radius: 14px;
    padding: 12px 18px;
    font-size: 14px;
  }
`;
const InvitationExampleColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 16px;
  padding: 0 30px 0 40px;
  font-size: 18px;
`;
const InvitationExampleColumnItemInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  & > div:nth-of-type(1) {
    margin-right: 12px;
    width: 50px;
    font-weight: 600;
  }
  & > div:nth-of-type(2) {
    width: 76px;
  }
  & > div:nth-of-type(3) {
    opacity: 0.5;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    & > div {
      margin: 0;
      text-align: left;
    }
  }
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
  @media (max-width: 767px) {
    font-size: 14px;
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
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  & > div:nth-of-type(2) {
    margin-top: 12px;
    margin-left: 4px;
    letter-spacing: -0.2px;
    font-size: 14px;
  }
  & > div:nth-of-type(3) {
    margin-left: 4px;
    letter-spacing: -0.4px;
    font-size: 20px;
    font-weight: 500;
  }
  & > div:nth-of-type(4) {
    opacity: 0.5;
    margin-left: 4px;
    letter-spacing: -0.2px;
    font-size: 14px;
  }
`;
const SeoScoreContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  @media (max-width: 767px) {
    gap: 16px;
  }
`;
const SeoScoreItem = styled.div`
  ${flexDefaultSetting}
  flex-direction: column;
  gap: 14px;
`;
const SeoScoreImage = styled.img`
  width: 140px;
  @media (max-width: 767px) {
    width: 72px;
  }
`;
const SeoScoreDescription = styled.div`
  font-size: 18px;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`;
const SeoExampleImage = styled.img`
  margin-top: 80px;
  border-radius: 24px;
  width: 100%;
  max-width: 900px;
  @media (max-width: 767px) {
    width: 540px;
  }
`;
const SeoExampleImageDescription = styled.div`
  opacity: 0.5;
  margin-top: 32px;
  font-size: 16px;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
const SeoContentContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
const SeoExampleSuggestionContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 68px;
`;
const SeoExampleSuggestionTitle = styled.div`
  margin-bottom: 8px;
  font-size: 20px;
`;
const SeoExampleSuggestionItem = styled.a`
  transition: opacity 0.15s ease-in-out;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
const AnalyticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 900px;
  @media (max-width: 767px) {
    row-gap: 16px;
  }
`;
const AnalyticsInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  width: 100%;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    align-items: flex-start;
  }
`;
const AnalyticsInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.08);
  background: #fff;
  padding: 24px;
  width: 100%;
`;
const AnalyticsInfoItemTitle = styled.div`
  font-size: 16px;
  &.chart {
    padding: 0 24px;
  }
`;
const AnalyticsInfoItemNumber = styled.div`
  margin-top: 2px;
  font-size: 32px;
  font-weight: 600;
  &.chart {
    padding: 0 24px;
  }
`;
const AnalyticsInfoItemStat = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  color: #868e96;
  font-size: 13px;
  & > .plus {
    margin-left: 4px;
    color: #50b15b;
    font-size: 14px;
    font-weight: 800;
  }
  & > .minus {
    margin-left: 4px;
    color: #ea5959;
    font-size: 14px;
    font-weight: 800;
  }
`;
const AnalyticsChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.08);
  background: #fff;
  padding: 24px 0;
  width: 100%;
`;
const AnalyticsChartWrapper = styled.div`
  padding: 0 12px;
  width: 100%;
  height: 500px;
  @media (max-width: 767px) {
    height: 300px;
  }
`;
const OpengraphContentContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`;
const OpengraphSettingSuperContainer = styled.div`
  border-radius: 40px;
  background: #ff936a;
  padding: 40px 52px;
  overflow-x: hidden;
  @media (max-width: 767px) {
    padding: 40px;
  }
`;
const OpengraphSettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  border-radius: 16px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.08);
  background: #fff;
  padding: 40px;
  width: 360px;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
  }
  @media (max-width: 767px) {
    width: 600px;
  }
`;
const OpengraphTextarea = styled.textarea`
  transition-duration: 150ms;
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.3, 0, 0, 1);
  outline: none;
  border: none;
  border-radius: 8px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset;
  padding: 8px 12px;
  width: 100%;
  resize: none;
  text-align: left;
  font-size: 16px;
  &:focus-within {
    box-shadow:
      inset 0 0 0 1px rgba(255, 147, 106),
      0 0 0 3px rgba(255, 147, 106, 0.4) !important;
  }
`;
const OpengraphPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  border-radius: 40px;
  background: #333;
  padding: 40px 52px;
  @media (max-width: 767px) {
    padding: 38px;
  }
`;
const OpengraphKatalkMessage = styled.div`
  border-radius: 8px;
  background: #ffe403;
  padding: 8px 12px;
  text-decoration: underline;
  color: #2d88de;
`;
const OpengraphKatalkPreview = styled.div`
  border-radius: 8px;
  background: #fff;
  width: 300px;
  & > div:nth-of-type(1) {
    border-radius: 8px 8px 0 0;
    background: linear-gradient(to right, #a59afb, #635bde);
    width: 100%;
    max-width: 300px;
    height: 140px;
    @media (max-width: 767px) {
      max-width: unset;
    }
  }
  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 12px 16px 12px;
    & > div:nth-of-type(1) {
      text-align: left;
      font-weight: 500;
    }
    & > div:nth-of-type(2) {
      opacity: 0.5;
      margin-top: 2px;
      text-align: left;
      font-size: 12px;
    }
    & > div:nth-of-type(3) {
      opacity: 0.4;
      margin-top: 4px;
      text-align: left;
      font-size: 12px;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
