'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetUserInfo } from '@/hooks/dashboard';

import DashBoardFooterContainer from './ui/DashBoardFooterContainer';
import DashBoardProfileContainer from './ui/DashBoardProfileContainer';
import FooterPopOverMenuContainer from './ui/FooterPopOverMenuContainer';
import DashBoardNavBtn from './DashBoardNavBtn';

const DashBoardFooter = () => {
  const [isPopOverMenuOpen, setIsPopOverMenuOpen] = useState<boolean>(false);

  const { team } = useParams();

  const res = useGetUserInfo(team);

  return (
    <DashBoardFooterContainer>
      {res ? (
        <>
          <DashBoardProfileContainer
            setIsPopOverMenuOpen={setIsPopOverMenuOpen}
            profileImgUrl={res.data.thumbnail}
            userName={res.data.name}
            email={res.data.email}
          />
          <DashBoardNavBtn />
          {isPopOverMenuOpen && <FooterPopOverMenuContainer innerText="팜스프링 로그아웃" />}
        </>
      ) : (
        <LoadingLottie height={4} width={4} fit={false} />
      )}
    </DashBoardFooterContainer>
  );
};

export default DashBoardFooter;
