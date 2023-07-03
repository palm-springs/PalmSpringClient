'use client';

import ArrowDownIcon from '@/public/icons/arrow_down.svg';
import SettingIcon from '@/public/icons/settings.svg';

import styled from 'styled-components';
import SymbolIcon from '@/public/icons/symbol.svg';

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashBoardWrapper>
      <DashBoardNav>
        <SymbolIcon style={{ alignSelf: 'flex-start', margin: '2rem 0 0.25rem 1rem' }} />
        <SideBarTitle>
          팜스프링 팀블로그
          <ArrowDownIcon />
        </SideBarTitle>
        <SideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          업로드된 글
        </SideBarContent>
        <SideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          임시저장된 글
        </SideBarContent>
        <Line />
        <SideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          페이지
        </SideBarContent>
        <SideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          카테고리
        </SideBarContent>
        <SideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          네비게이션
        </SideBarContent>
        <Line />
        <SideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          팀원
        </SideBarContent>
        <SideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          구독자
        </SideBarContent>
        <Line />
        <SideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          블로그 바로 가기
        </SideBarContent>
        <BlogConfigBtn>
          <SettingIcon />
          블로그 설정
        </BlogConfigBtn>
        <SideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          유저 기본 정보
        </SideBarContent>
        <DashBoardNavBtn>새 글 작성하기</DashBoardNavBtn>
      </DashBoardNav>
      {children}
    </DashBoardWrapper>
  );
};

export default DashBoardLayout;

const DashBoardWrapper = styled.section`
  display: flex;
`;

const DashBoardNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.grey_100};
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  width: 286px;
  height: 100vh;
`;

const SideBarTitle = styled.div`
  ${({ theme }) => theme.fonts.Body1_Semibold};
  align-items: center;
  display: flex;
  width: 100%;
  padding: 0.75rem 1rem;
  justify-content: space-between;
`;

const SideBarContent = styled.div`
  ${({ theme }) => theme.fonts.Body3};
  display: flex;
  width: 100%;
  height: 2.5rem;
  padding: 0rem 1rem;

  margin-bottom: 0.5rem;

  align-items: center;
  gap: 0.5rem;
`;

const Line = styled.div`
  margin-bottom: 0.5rem;
  background: ${({ theme }) => theme.colors.grey_300};
  width: 100%;
  height: 1px;
`;

const BlogConfigBtn = styled.article`
  ${({ theme }) => theme.fonts.Body3};
  display: flex;
  width: 16.875rem;
  height: 2.5rem;
  padding: 0rem 1rem;

  align-items: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.colors.grey_300};
`;

const DashBoardNavBtn = styled.button`
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_0};
  border: none;
  width: 15.875rem;
  height: 2.25rem;
  flex-shrink: 0;
  position: absolute;
  bottom: 1.5rem;
  border-radius: 1.125rem;
  background: ${({ theme }) => theme.colors.green};
`;
