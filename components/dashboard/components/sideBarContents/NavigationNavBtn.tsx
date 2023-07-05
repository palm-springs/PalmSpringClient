import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { Menu01Icon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const NavigationNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <div onClick={() => router.push(`nav`)}>
      <SideBarContent currentPage={pageType === 'nav'}>
        <Image src={Menu01Icon} alt="네비게이션" />
        네비게이션
      </SideBarContent>
    </div>
  );
};

export default NavigationNavBtn;
