'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useResetRecoilState } from 'recoil';

import { accessTokenState } from '@/components/auth/states/atom';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetUserInfo } from '@/hooks/dashboard';
import userState from '@/recoil/atom/user';

import DashBoardFooterContainer from './ui/DashBoardFooterContainer';
import DashBoardProfileContainer from './ui/DashBoardProfileContainer';
import FooterPopOverMenuContainer from './ui/FooterPopOverMenuContainer';
import DashBoardNavBtn from './DashBoardNavBtn';

const DashBoardFooter = () => {
  const [isPopOverMenuOpen, setIsPopOverMenuOpen] = useState<boolean>(false);
  const resetAccessToken = useResetRecoilState(accessTokenState);
  const resetUserState = useResetRecoilState(userState);
  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

  const router = useRouter();

  const res = useGetUserInfo();

  if (!res) return <LoadingLottie height={4} width={4} fit={false} />;

  const handleLogOut = () => {
    resetAccessToken();
    resetUserState();
    sessionStorage?.removeItem('userToken');
    router.push('/auth');
  };

  return (
    <DashBoardFooterContainer>
      {res?.data ? (
        <>
          <DashBoardProfileContainer
            setIsPopOverMenuOpen={setIsPopOverMenuOpen}
            profileImgUrl={res.data.thumbnail}
            userName={res.data.name}
            email={res.data.email}
          />
          <DashBoardNavBtn />
          {isPopOverMenuOpen && <FooterPopOverMenuContainer innerText="로그아웃" handleOnClick={handleLogOut} />}
        </>
      ) : (
        <LoadingLottie height={4} width={4} fit={false} />
      )}
    </DashBoardFooterContainer>
  );
};

export default DashBoardFooter;
