'use client';

import React from 'react';
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
      <BlogDirectNavButton
        target="_blank"
        href={`https://${team}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}`}
        disabled={innerText === '구독자' || !team}>
        <SideBarContent currentPage={pageType === currentPageType} disabled={innerText === '구독자' || !team}>
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
      disabled={innerText === '구독자' || !team}>
      <SideBarContent currentPage={pageType === currentPageType} disabled={innerText === '구독자' || !team}>
        {icon}
        {innerText}
      </SideBarContent>
    </NavButtonContainer>
  );
};

export default NavButton;
