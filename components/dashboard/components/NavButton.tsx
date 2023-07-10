'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import useGetLastPathName from '@/hooks/useGetLastPathName';
import { dashBoardPageType } from '@/types/dashboard';

import mapPageType2Component from '../../../constants/mapPageType2Component';

import NavButtonContainer from './ui/NavButtonContainer';
import SideBarContent from './ui/SideBarContent';

interface navButtomProps {
  currentPageType: dashBoardPageType;
}

const NavButton = (props: navButtomProps) => {
  const { currentPageType } = props;

  const router = useRouter();

  const pageType = useGetLastPathName();

  const { team } = useParams();

  const { innerText, icon } = mapPageType2Component[currentPageType];

  return (
    <NavButtonContainer
      onNavButtonClick={() => {
        if (currentPageType === 'blogdirectnav') {
          router.push(`/${team}/home`);
        } else {
          router.push(currentPageType);
        }
      }}>
      <SideBarContent currentPage={pageType === currentPageType}>
        {icon}
        {innerText}
      </SideBarContent>
    </NavButtonContainer>
  );
};

export default NavButton;
