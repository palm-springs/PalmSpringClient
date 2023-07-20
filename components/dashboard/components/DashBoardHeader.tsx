'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

import mapPageType2HeaderInfo from '@/constants/mapPageType2HeaderInfo';
import useGetLastPathName from '@/hooks/useGetLastPathName';
import { dashBoardPageType } from '@/types/dashboard';

import { dashBoardModalState } from '../state/modalState';

import DashBoardHeaderContainer from './ui/DashBoardHeaderContainer';
import HeaderContainer from './ui/HeaderContainer';

const DashBoardHeader = () => {
  const pathName = useGetLastPathName() as dashBoardPageType;

  const router = useRouter();

  const { team } = useParams();

  const { title, buttonInnerText, onButtonClickActionName } = mapPageType2HeaderInfo[pathName];

  const [, setModalStateValue] = useRecoilState<modalStateProps>(dashBoardModalState);

  return (
    <DashBoardHeaderContainer>
      <HeaderContainer
        title={title}
        buttonInnerText={buttonInnerText}
        onButtonClick={() => {
          if (pathName === 'blogconfignav' || pathName === 'blogdirectnav') return;
          if (pathName === 'upload' || pathName === 'tempsaved') {
            router.push(`/${team}/editor/article`);
            return;
          } else if (pathName === 'page') {
            router.push(`/${team}/editor/page`);
            return;
          }
          onButtonClickActionName && setModalStateValue(onButtonClickActionName);
        }}
      />
    </DashBoardHeaderContainer>
  );
};

export default DashBoardHeader;
