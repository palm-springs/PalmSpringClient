'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useResetRecoilState } from 'recoil';

import { logout } from '@/api/auth';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { ACCESS_TOKEN_KEY } from '@/constants/Auth';
import { useGetUserInfo } from '@/hooks/dashboard';
import userState from '@/recoil/atom/user';

import DashBoardFooterContainer from './ui/DashBoardFooterContainer';
import DashBoardProfileContainer from './ui/DashBoardProfileContainer';
import FooterPopOverMenuContainer from './ui/FooterPopOverMenuContainer';
import DashBoardNavBtn from './DashBoardNavBtn';

const DashBoardFooter = () => {
  const [isPopOverMenuOpen, setIsPopOverMenuOpen] = useState<boolean>(false);

  const resetUserState = useResetRecoilState(userState);

  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;
  const router = useRouter();

  const res = useGetUserInfo();

  const handleLogOut = async () => {
    await logout();
    sessionStorage?.removeItem(ACCESS_TOKEN_KEY);
    resetUserState();
    router.push('/auth');
  };

  if (!res || !res?.data) {
    return (
      <DashBoardFooterContainer>
        <LoadingLottie height={4} width={4} fit={false} />
      </DashBoardFooterContainer>
    );
  }

  return (
    <DashBoardFooterContainer>
      <DashBoardProfileContainer
        setIsPopOverMenuOpen={setIsPopOverMenuOpen}
        profileImgUrl={res.data.thumbnail}
        userName={res.data.name}
        email={res.data.email}
      />
      <DashBoardNavBtn />
      {isPopOverMenuOpen && <FooterPopOverMenuContainer innerText="로그아웃" handleOnClick={handleLogOut} />}
    </DashBoardFooterContainer>
  );
};

export default DashBoardFooter;
