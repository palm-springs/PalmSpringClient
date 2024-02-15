'use client';

import React from 'react';
import styled from 'styled-components';

import { MobileCloseIcon } from '@/public/icons';
import { NavListOnly } from '@/types/blogHeader';

import SideBarNav from './SideBarNav';

interface sidebarProps extends NavListOnly {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = (props: sidebarProps) => {
  const { isMenuOpen, setIsMenuOpen, navList } = props;

  const sidebarToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <SideBarWrapper className={isMenuOpen ? 'open' : 'closed'}>
      <SideBarHeader>
        <MobileCloseIcon onClick={sidebarToggle} />
      </SideBarHeader>
      <SideBarNav navList={navList} />
      {/* 밑의 footer는 구독자 기능 생성 후 다시 넣어줄 예정 */}
      {/* <SideBarFooter>
        <SubscribeBtn>팀 소식 받아보기</SubscribeBtn>
      </SideBarFooter> */}
    </SideBarWrapper>
  );
};

export default SideBar;

// const SubscribeBtn = styled.button`
//   ${({ theme }) => theme.mobileFonts.Button};
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   border: none;
//   border-radius: 0.8rem;
//   background-color: ${({ theme }) => theme.colors.grey_900};

//   padding: 1rem 2rem;
//   width: 21.8rem;
//   height: 4.2rem;
//   color: ${({ theme }) => theme.colors.grey_0};
// `;

// const SideBarFooter = styled.div`
//   position: absolute;
//   bottom: 0;

//   padding: 2rem 2.4rem;
//   width: 100%;
//   height: 8.2rem;
// `;

const SideBarWrapper = styled.div`
  position: fixed;
  top: 0;
  transition: 0.3s ease-in-out;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.grey_0};
  width: 26.6rem;
  height: 100vh;

  &.closed {
    right: -26.6rem;
  }

  &.open {
    right: 0;
    transition: 0.3s ease-in-out;
  }
`;
const SideBarHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.2rem 1.6rem 1.2rem 2.4rem;
  width: 100%;
`;
