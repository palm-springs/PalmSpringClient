import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { UserProfile03Icon } from '@/public/icons';

import SideBarContent from '../../ui/SideBarContent';

const MemberNavBtn = () => {
  const { pageType } = useParams();

  const router = useRouter();

  return (
    <button onClick={() => router.push(`member`)}>
      <SideBarContent currentPage={pageType === 'member'}>
        <UserProfile03Icon />
        팀원
      </SideBarContent>
    </button>
  );
};

export default MemberNavBtn;
