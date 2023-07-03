'use client';

// import { ReactComponent as SymbolIcon } from '@/public/icons/symbol.svg';
import styled from 'styled-components';
import SymbolIcon from '@/public/icons/symbol.svg';
import ArrowDownIcon from '@/public/icons/arrow_down.svg';
import SettingIcon from '@/public/icons/settings.svg';

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledDashBoardWrapper>
      <StyledDashBoardNav>
        <SymbolIcon style={{ alignSelf: 'flex-start', margin: '2rem 0 0.25rem 1rem' }} />
        <StyledSideBarTitle>
          팜스프링 팀블로그
          <ArrowDownIcon />
        </StyledSideBarTitle>
        <StyledSideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          업로드된 글
        </StyledSideBarContent>
        <StyledSideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          임시저장된 글
        </StyledSideBarContent>
        <Line />
        <StyledSideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          페이지
        </StyledSideBarContent>
        <StyledSideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          카테고리
        </StyledSideBarContent>
        <StyledSideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          네비게이션
        </StyledSideBarContent>
        <Line />
        <StyledSideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          팀원
        </StyledSideBarContent>
        <StyledSideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          구독자
        </StyledSideBarContent>
        <Line />
        <StyledSideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          블로그 바로 가기
        </StyledSideBarContent>
        <StyledBlogConfigBtn>
          <SettingIcon />
          블로그 설정
        </StyledBlogConfigBtn>
        <StyledSideBarContent>
          <ArrowDownIcon style={{ transform: 'scale(0.8)' }} />
          유저 기본 정보
        </StyledSideBarContent>
      </StyledDashBoardNav>
      {children}
    </StyledDashBoardWrapper>
  );
};

export default DashBoardLayout;

const StyledDashBoardWrapper = styled.section`
  display: flex;
`;

const StyledDashBoardNav = styled.nav`
  width: 286px;
  height: 100vh;
  margin: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: ${({ theme }) => theme.colors.grey_100};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSideBarTitle = styled.div`
  ${({ theme }) => theme.fonts.Body1_Semibold};
  display: flex;
  width: 100%;
  padding: 0.75rem 1rem;
  justify-content: space-between;
  align-items: center;
`;

const StyledSideBarContent = styled.div`
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
  background: ${({ theme }) => theme.colors.grey_300};
  width: 100%;
  height: 1px;
  margin-bottom: 0.5rem;
`;

const StyledBlogConfigBtn = styled.article`
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
