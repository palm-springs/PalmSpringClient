import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { UserProfileCheckIcon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const SubscriberNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <div onClick={() => router.push(`subscriber`)}>
      <SideBarContent currentPage={pageType === 'subscriber'}>
        <Image src={UserProfileCheckIcon} alt="구독자" />
        구독자
      </SideBarContent>
    </div>
  );
};

export default SubscriberNavBtn;
