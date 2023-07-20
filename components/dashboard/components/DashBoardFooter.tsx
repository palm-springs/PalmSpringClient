'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';

import { useGetUserInfo } from '@/hooks/dashboard';
import { DuckDuckImg } from '@/public/images';

import DashBoardFooterContainer from './ui/DashBoardFooterContainer';
import DashBoardProfileContainer from './ui/DashBoardProfileContainer';
import FooterPopOverMenuContainer from './ui/FooterPopOverMenuContainer';
import DashBoardNavBtn from './DashBoardNavBtn';

const DashBoardFooter = () => {
  const [isPopOverMenuOpen, setIsPopOverMenuOpen] = useState<boolean>(false);

  const { team } = useParams();

  const res = useGetUserInfo(team);

  if (!res) return <div>로더</div>;

  return (
    <DashBoardFooterContainer>
      <DashBoardProfileContainer
        setIsPopOverMenuOpen={setIsPopOverMenuOpen}
        profileImgUrl={res.data.thumbnail}
        userName={res.data.name}
        email={res.data.email}
      />
      <DashBoardNavBtn />
      {isPopOverMenuOpen && <FooterPopOverMenuContainer innerText="팜스프링 로그아웃" />}
    </DashBoardFooterContainer>
  );
};

export default DashBoardFooter;
