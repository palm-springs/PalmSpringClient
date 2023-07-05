import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import { UserProfileCheckIcon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const SubscriberNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <button onClick={() => router.push(`subscriber`)}>
      <SideBarContent currentPage={pageType === 'subscriber'}>
        <UserProfileCheckIcon />
        구독자
      </SideBarContent>
    </button>
  );
};

export default SubscriberNavBtn;
