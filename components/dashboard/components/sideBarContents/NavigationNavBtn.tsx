import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import { Menu01Icon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const NavigationNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <button onClick={() => router.push(`nav`)}>
      <SideBarContent currentPage={pageType === 'nav'}>
        <Menu01Icon />
        네비게이션
      </SideBarContent>
    </button>
  );
};

export default NavigationNavBtn;
