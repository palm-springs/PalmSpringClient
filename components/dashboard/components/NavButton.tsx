'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import useGetLastPathName from '@/hooks/useGetLastPathName';
import { dashBoardPageType } from '@/types/dashboard';

import mapPageType2Component from '../../../constants/mapPageType2Component';

import BlogDirectNavButton from './ui/BlogDirectNavButton';
import NavButtonContainer from './ui/NavButtonContainer';
import SideBarContent from './ui/SideBarContent';

interface NavButtonProps {
  currentPageType: dashBoardPageType;
}

const NavButton = (props: NavButtonProps) => {
  const { currentPageType } = props;

  const router = useRouter();

  const pageType = useGetLastPathName();

  const { team } = useParams();

  const { innerText, icon } = mapPageType2Component[currentPageType];

  if (currentPageType === 'blogdirectnav') {
    return (
      <BlogDirectNavButton target="_blank" href={`https://${team}.palms.blog/home`}>
        <SideBarContent currentPage={pageType === currentPageType}>
          {icon}
          {innerText}
        </SideBarContent>
      </BlogDirectNavButton>
    );
  }

  return (
    <NavButtonContainer
      onNavButtonClick={() => {
        router.push(currentPageType);
      }}
      disabled={pageType === 'dashboard' || innerText === '구독자'}>
      <SideBarContent currentPage={pageType === currentPageType}>
        {icon}
        {innerText}
      </SideBarContent>
    </NavButtonContainer>
  );
};

export default NavButton;
