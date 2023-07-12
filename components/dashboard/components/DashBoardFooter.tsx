'use client';

import React, { useState } from 'react';

import DashBoardFooterContainer from './ui/DashBoardFooterContainer';
import DashBoardProfileContainer from './ui/DashBoardProfileContainer';
import FooterPopOverMenuContainer from './ui/FooterPopOverMenuContainer';
import DashBoardNavBtn from './DashBoardNavBtn';

const DashBoardFooter = () => {
  const [isPopOverMenuOpen, setIsPopOverMenuOpen] = useState<boolean>(false);

  return (
    <DashBoardFooterContainer>
      <DashBoardProfileContainer
        setIsPopOverMenuOpen={setIsPopOverMenuOpen}
        userName="정동규"
        email="kandy1002@naver.com"
      />
      <DashBoardNavBtn />
      {isPopOverMenuOpen && <FooterPopOverMenuContainer innerText="팜스프링 로그아웃" />}
    </DashBoardFooterContainer>
  );
};

export default DashBoardFooter;
