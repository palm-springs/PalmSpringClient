'use client';

import React from 'react';

import DashBoardFooterContainer from './ui/DashBoardFooterContainer';
import DashBoardProfileContainer from './ui/DashBoardProfileContainer';
import FooterPopOverMenuContainer from './ui/FooterPopOverMenuContainer';
import DashBoardNavBtn from './DashBoardNavBtn';

const DashBoardFooter = () => {
  return (
    <DashBoardFooterContainer>
      <DashBoardProfileContainer userName="정동규" email="kandy1002@naver.com" />
      <DashBoardNavBtn />
      <FooterPopOverMenuContainer innerText="팜스프링 로그아웃" />
    </DashBoardFooterContainer>
  );
};

export default DashBoardFooter;
