import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import { dashBoardPageType } from '@/types/dashboard';

import mapPageType2Component from '../../../constants/mapPageType2Component';

import SideBarContent from './ui/SideBarContent';

interface navButtomProps {
  currentPageType: dashBoardPageType;
}

const NavButton = (props: navButtomProps) => {
  const { currentPageType } = props;

  const { pageType } = useParams();

  const router = useRouter();

  const { innerText, icon } = mapPageType2Component[currentPageType];

  return (
    <button onClick={() => router.push(currentPageType)}>
      <SideBarContent currentPage={pageType === currentPageType}>
        {icon}
        {innerText}
      </SideBarContent>
    </button>
  );
};

export default NavButton;
